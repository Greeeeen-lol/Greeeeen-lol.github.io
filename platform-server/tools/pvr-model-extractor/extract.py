from PowerVR.PVRPODLoader import PVRPODLoader
from GLB.GLBExporter import GLBExporter
import struct
import json
import math
import numpy as np
from sys import argv
from os import path
import subprocess as sp

PVR_TEX_TOOL_PATH = "./PVRTexToolCLI"

def decompose_matrix(m):
  # m is 16 floats (column-major)
  tx, ty, tz = m[12], m[13], m[14]
  
  c0 = [m[0], m[1], m[2]]
  c1 = [m[4], m[5], m[6]]
  c2 = [m[8], m[9], m[10]]
  
  sx = math.sqrt(c0[0]**2 + c0[1]**2 + c0[2]**2)
  sy = math.sqrt(c1[0]**2 + c1[1]**2 + c1[2]**2)
  sz = math.sqrt(c2[0]**2 + c2[1]**2 + c2[2]**2)
  
  if sx > 0:
    c0 = [x / sx for x in c0]
  if sy > 0:
    c1 = [x / sy for x in c1]
  if sz > 0:
    c2 = [x / sz for x in c2]
    
  tr = c0[0] + c1[1] + c2[2]
  if tr > 0:
    s = math.sqrt(tr + 1.0) * 2.0
    qw = 0.25 * s
    qx = (c1[2] - c2[1]) / s
    qy = (c2[0] - c0[2]) / s
    qz = (c0[1] - c1[0]) / s
  elif (c0[0] > c1[1]) and (c0[0] > c2[2]):
    s = math.sqrt(1.0 + c0[0] - c1[1] - c2[2]) * 2.0
    qw = (c1[2] - c2[1]) / s
    qx = 0.25 * s
    qy = (c1[0] + c0[1]) / s
    qz = (c2[0] + c0[2]) / s
  elif c1[1] > c2[2]:
    s = math.sqrt(1.0 + c1[1] - c0[0] - c2[2]) * 2.0
    qw = (c2[0] - c0[2]) / s
    qx = (c1[0] + c0[1]) / s
    qy = 0.25 * s
    qz = (c2[1] + c1[2]) / s
  else:
    s = math.sqrt(1.0 + c2[2] - c0[0] - c1[1]) * 2.0
    qw = (c0[1] - c1[0]) / s
    qx = (c2[0] + c0[2]) / s
    qy = (c2[1] + c1[2]) / s
    qz = 0.25 * s
    
  return [tx, ty, tz], [qx, qy, qz, qw], [sx, sy, sz]

class POD2GLB:

  def __init__(self):
    self.glb = None
    self.pod = None
    self.scene = None
    self.fix_uvs = True

  @classmethod
  def open(cls, inpath):
    converter = cls()
    converter.load(inpath)
    return converter

  def load(self, inpath):
    # create a glb exporter
    self.glb = GLBExporter()
    # create a pvr pod parser
    self.pod = PVRPODLoader.open(inpath)
    self.scene = self.pod.scene
    self.convert_meshes()
    self.convert_nodes()
    self.convert_textures()
    self.convert_materials()
    self.convert_animations()
    self.create_dummy_skinned_mesh()

  def save(self, path):
    self.glb.save(path)

  def convert_textures(self):  
    for (textureIndex, texture) in enumerate(self.scene.textures):
      self.glb.addImage({
        "uri": texture.getPath(dir="", ext=".png")
      })
      self.glb.addSampler({
        "magFilter": 9729,
        "minFilter": 9987,
        "wrapS": 10497,
        "wrapT": 10497
      })
      self.glb.addTexture({
        "name": texture.name,
        "sampler": textureIndex,
        "source": textureIndex
      })
      sp.call([
        PVR_TEXT_TOOL_PATH,
        "-f", "r8g8b8a8",
        "-i", texture.getPath(dir="", ext=".pvr"),
        "-d", texture.getPath(dir="", ext=".png")
      ])
  
  def convert_materials(self):
    for (materialIndex, material) in enumerate(self.scene.materials):
      if material.diffuseTextureIndex > -1:
        pbr = {
          "baseColorTexture": {
            "index": material.diffuseTextureIndex,
            "texCoord": 1
          },
          "roughnessFactor": 1 - material.shininess,
        }
      else: 
        pbr = {
          "baseColorFactor": material.diffuse.tolist() + [1],
          "roughnessFactor": 1 - material.shininess,
        }
      self.glb.addMaterial({
        "name": material.name,
        "pbrMetallicRoughness": pbr
      })

  def convert_animations(self):
    if self.scene.numFrames <= 1:
      return

    # 1. Create the time keyframes accessor
    fps = self.scene.fps if self.scene.fps > 0 else 30.0
    times = [float(f) / fps for f in range(self.scene.numFrames)]
    time_bytes = struct.pack(f"<{len(times)}f", *times)
    timeAccessorIndex = self.glb.addAccessor({
      "bufferView": self.glb.addBufferView({
        "buffer": 0,
        "byteOffset": self.glb.addData(time_bytes),
        "byteLength": len(time_bytes),
      }),
      "byteOffset": 0,
      "componentType": 5126, # FLOAT
      "count": self.scene.numFrames,
      "type": "SCALAR",
      "min": [min(times)],
      "max": [max(times)]
    })

    channels = []
    samplers = []

    # 2. Loop through all nodes and extract animation keyframes
    for (nodeIndex, node) in enumerate(self.scene.nodes):
      anim = node.animation
      
      # Check if node has matrix animation
      if anim.matrices is not None and len(anim.matrices) >= 16 * self.scene.numFrames:
        translations = []
        rotations = []
        scales = []
        for f in range(self.scene.numFrames):
          m = anim.matrices[f*16 : (f+1)*16]
          t, r, s = decompose_matrix(m)
          translations.extend(t)
          rotations.extend(r)
          scales.extend(s)
          
        # Write translation track
        t_bytes = struct.pack(f"<{len(translations)}f", *translations)
        tAccessorIndex = self.glb.addAccessor({
          "bufferView": self.glb.addBufferView({
            "buffer": 0,
            "byteOffset": self.glb.addData(t_bytes),
            "byteLength": len(t_bytes),
          }),
          "byteOffset": 0,
          "componentType": 5126, # FLOAT
          "count": self.scene.numFrames,
          "type": "VEC3"
        })
        
        # Write rotation track
        r_bytes = struct.pack(f"<{len(rotations)}f", *rotations)
        rAccessorIndex = self.glb.addAccessor({
          "bufferView": self.glb.addBufferView({
            "buffer": 0,
            "byteOffset": self.glb.addData(r_bytes),
            "byteLength": len(r_bytes),
          }),
          "byteOffset": 0,
          "componentType": 5126, # FLOAT
          "count": self.scene.numFrames,
          "type": "VEC4"
        })
        
        # Write scale track
        s_bytes = struct.pack(f"<{len(scales)}f", *scales)
        sAccessorIndex = self.glb.addAccessor({
          "bufferView": self.glb.addBufferView({
            "buffer": 0,
            "byteOffset": self.glb.addData(s_bytes),
            "byteLength": len(s_bytes),
          }),
          "byteOffset": 0,
          "componentType": 5126, # FLOAT
          "count": self.scene.numFrames,
          "type": "VEC3"
        })
        
        # Add to samplers & channels
        t_sampler_idx = len(samplers)
        samplers.append({
          "input": timeAccessorIndex,
          "interpolation": "LINEAR",
          "output": tAccessorIndex
        })
        channels.append({
          "sampler": t_sampler_idx,
          "target": {
            "node": nodeIndex,
            "path": "translation"
          }
        })
        
        r_sampler_idx = len(samplers)
        samplers.append({
          "input": timeAccessorIndex,
          "interpolation": "LINEAR",
          "output": rAccessorIndex
        })
        channels.append({
          "sampler": r_sampler_idx,
          "target": {
            "node": nodeIndex,
            "path": "rotation"
          }
        })
        
        s_sampler_idx = len(samplers)
        samplers.append({
          "input": timeAccessorIndex,
          "interpolation": "LINEAR",
          "output": sAccessorIndex
        })
        channels.append({
          "sampler": s_sampler_idx,
          "target": {
            "node": nodeIndex,
            "path": "scale"
          }
        })
        
      elif anim.positions is not None and len(anim.positions) >= 3 * self.scene.numFrames:
        t_bytes = struct.pack(f"<{len(anim.positions)}f", *anim.positions)
        tAccessorIndex = self.glb.addAccessor({
          "bufferView": self.glb.addBufferView({
            "buffer": 0,
            "byteOffset": self.glb.addData(t_bytes),
            "byteLength": len(t_bytes),
          }),
          "byteOffset": 0,
          "componentType": 5126, # FLOAT
          "count": self.scene.numFrames,
          "type": "VEC3"
        })
        t_sampler_idx = len(samplers)
        samplers.append({
          "input": timeAccessorIndex,
          "interpolation": "LINEAR",
          "output": tAccessorIndex
        })
        channels.append({
          "sampler": t_sampler_idx,
          "target": {
            "node": nodeIndex,
            "path": "translation"
          }
        })
        
        if anim.rotations is not None and len(anim.rotations) >= 4 * self.scene.numFrames:
          r_bytes = struct.pack(f"<{len(anim.rotations)}f", *anim.rotations)
          rAccessorIndex = self.glb.addAccessor({
            "bufferView": self.glb.addBufferView({
              "buffer": 0,
              "byteOffset": self.glb.addData(r_bytes),
              "byteLength": len(r_bytes),
            }),
            "byteOffset": 0,
            "componentType": 5126, # FLOAT
            "count": self.scene.numFrames,
            "type": "VEC4"
          })
          r_sampler_idx = len(samplers)
          samplers.append({
            "input": timeAccessorIndex,
            "interpolation": "LINEAR",
            "output": rAccessorIndex
          })
          channels.append({
            "sampler": r_sampler_idx,
            "target": {
              "node": nodeIndex,
              "path": "rotation"
            }
          })
          
        if anim.scales is not None and len(anim.scales) >= 3 * self.scene.numFrames:
          s_bytes = struct.pack(f"<{len(anim.scales)}f", *anim.scales)
          sAccessorIndex = self.glb.addAccessor({
            "bufferView": self.glb.addBufferView({
              "buffer": 0,
              "byteOffset": self.glb.addData(s_bytes),
              "byteLength": len(s_bytes),
            }),
            "byteOffset": 0,
            "componentType": 5126, # FLOAT
            "count": self.scene.numFrames,
            "type": "VEC3"
          })
          s_sampler_idx = len(samplers)
          samplers.append({
            "input": timeAccessorIndex,
            "interpolation": "LINEAR",
            "output": sAccessorIndex
          })
          channels.append({
            "sampler": s_sampler_idx,
            "target": {
              "node": nodeIndex,
              "path": "scale"
            }
          })

    if channels:
      self.glb.addAnimation({
        "name": "Walk",
        "channels": channels,
        "samplers": samplers
      })

  def create_dummy_skinned_mesh(self):
    # 1. 3 vertices at (0,0,0)
    v_data = struct.pack("<9f", 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
    posAccessor = self.glb.addAccessor({
      "bufferView": self.glb.addBufferView({
        "buffer": 0,
        "byteOffset": self.glb.addData(v_data),
        "byteLength": len(v_data),
      }),
      "byteOffset": 0,
      "componentType": 5126, # FLOAT
      "count": 3,
      "type": "VEC3"
    })
    
    # 2. Indices [0, 1, 2]
    i_data = struct.pack("<3H", 0, 1, 2)
    indicesAccessor = self.glb.addAccessor({
      "bufferView": self.glb.addBufferView({
        "buffer": 0,
        "byteOffset": self.glb.addData(i_data),
        "byteLength": len(i_data),
        "target": 34963
      }),
      "byteOffset": 0,
      "componentType": 5123, # UNSIGNED_SHORT
      "count": 3,
      "type": "SCALAR"
    })
    
    # 3. JOINTS_0 vertex attribute (all joint 0, which corresponds to the first joint index in the skin's joints array)
    j_data = struct.pack("<12B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    jointsAccessor = self.glb.addAccessor({
      "bufferView": self.glb.addBufferView({
        "buffer": 0,
        "byteOffset": self.glb.addData(j_data),
        "byteLength": len(j_data),
      }),
      "byteOffset": 0,
      "componentType": 5121, # UNSIGNED_BYTE
      "count": 3,
      "type": "VEC4"
    })
    
    # 4. WEIGHTS_0 vertex attribute (all 1.0 for joint 0)
    w_data = struct.pack("<12f", 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0)
    weightsAccessor = self.glb.addAccessor({
      "bufferView": self.glb.addBufferView({
        "buffer": 0,
        "byteOffset": self.glb.addData(w_data),
        "byteLength": len(w_data),
      }),
      "byteOffset": 0,
      "componentType": 5126, # FLOAT
      "count": 3,
      "type": "VEC4"
    })
    
    # Add mesh
    meshIndex = len(self.glb.meshes)
    self.glb.addMesh({
      "name": "DummyMesh",
      "primitives": [{
        "attributes": {
          "POSITION": posAccessor,
          "JOINTS_0": jointsAccessor,
          "WEIGHTS_0": weightsAccessor
        },
        "indices": indicesAccessor,
        "mode": 4
      }]
    })
    
    # 5. Define the skin. Joints are all node indices from 1 to len(self.glb.nodes)-1.
    joints = list(range(1, len(self.glb.nodes)))
    skinIndex = len(self.glb.skins)
    self.glb.addSkin({
      "joints": joints
    })
    
    # 6. Add a dummy skinned node in the scene to reference this skin and mesh.
    dummyNodeIndex = len(self.glb.nodes)
    self.glb.addNode({
      "name": "Mii_Skin_Dummy",
      "mesh": meshIndex,
      "skin": skinIndex
    })
    self.glb.addRootNodeIndex(dummyNodeIndex)

  def convert_nodes(self):
    for (nodeIndex, node) in enumerate(self.scene.nodes):
      # Default TRS
      translation = [0.0, 0.0, 0.0]
      rotation = [0.0, 0.0, 0.0, 1.0]
      scale = [1.0, 1.0, 1.0]

      if node.animation.positions is not None and len(node.animation.positions) >= 3:
        translation = node.animation.positions[0:3].tolist()
      if node.animation.rotations is not None and len(node.animation.rotations) >= 4:
        rotation = node.animation.rotations[0:4].tolist()
      if node.animation.scales is not None and len(node.animation.scales) >= 3:
        scale = node.animation.scales[0:3].tolist()
      
      # If matrix is present, decompose frame 0
      if node.animation.matrices is not None and len(node.animation.matrices) >= 16:
        m = node.animation.matrices[0:16]
        translation, rotation, scale = decompose_matrix(m)

      nodeEntry = {
        "name": node.name,
        "children": [i for (i, node) in enumerate(self.scene.nodes) if node.parentIndex == nodeIndex],
        "translation": translation,
        "rotation": rotation,
        "scale": scale,
      }
      # if the node has a mesh index
      if node.index != -1: 
        meshIndex = node.index
        nodeEntry["mesh"] = meshIndex
        if node.materialIndex != -1:
          self.glb.meshes[meshIndex]["primitives"][0]["material"] = node.materialIndex

      # if the node index is -1 it is a root node
      if node.parentIndex == -1:
        self.glb.addRootNodeIndex(nodeIndex)
      
      self.glb.addNode(nodeEntry)
  
  def convert_meshes(self):
    for (meshIndex, mesh) in enumerate(self.scene.meshes):
      attributes = {}
      numFaces = mesh.primitiveData["numFaces"]
      numVertices = mesh.primitiveData["numVertices"]

      # face index buffer view
      indices = mesh.faces["data"]
      indicesAccessorIndex = self.glb.addAccessor({
        "bufferView": self.glb.addBufferView({
          "buffer": 0,
          "byteOffset": self.glb.addData(indices.tobytes()),
          "byteLength": len(indices) * indices.itemsize,
          "target": 34963
        }),
        "byteOffset": 0,
        # https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessor-element-size
        "componentType": 5123,
        "count": numFaces * 3,
        "type": "SCALAR"
      })

      # vertex buffer view
      vertexElements = mesh.vertexElements

      # PVR texture coordinates are inverted compared to 
      if "TEXCOORD_0" in vertexElements:
        element = vertexElements["TEXCOORD_0"]
        # covnert data to a bytearray so it can be manipulated
        data = bytearray(mesh.vertexElementData[0])
        stride = element["stride"]
        offset = element["offset"]
        # loop through and fix all texture coords
        while offset < len(data):
          x, y = struct.unpack_from('<ff', data, offset)
          y = (1 - y) - 1
          struct.pack_into('<ff', data, offset, x, y)
          offset += stride
        mesh.vertexElementData[0] = bytes(data)

      vertexBufferView = self.glb.addBufferView({
        "buffer": 0,
        "byteOffset": self.glb.addData(mesh.vertexElementData[0]),
        "byteStride": vertexElements["POSITION"]["stride"],
        "byteLength": len(mesh.vertexElementData[0]),
      })

      for name in vertexElements:
        element = vertexElements[name]
        componentType = 5126
        type = "VEC3"
        
        if name == "TEXCOORD_0":
          type = "VEC2"
        
        elif name == "COLOR_0": # not implemented
          continue

        accessorIndex = self.glb.addAccessor({
          "bufferView": vertexBufferView,
          "byteOffset": element["offset"],
          # https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessor-element-size
          "componentType": componentType,
          "count": numVertices,
          "type": type
        })
        attributes[name] = accessorIndex

      # POD meshes only have one primitive?
      # https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#primitive
      self.glb.addMesh({
        "primitives": [{
          "attributes": attributes,
          "indices": indicesAccessorIndex,
          "mode": 4,
        }],
      })

converter = POD2GLB.open(argv[1])
converter.save(argv[2])