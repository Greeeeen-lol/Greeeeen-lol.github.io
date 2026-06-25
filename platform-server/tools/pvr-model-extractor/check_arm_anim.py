from PowerVR.PVRPODLoader import PVRPODLoader

pod = PVRPODLoader.open("animWalkClone.Anim.pod")
scene = pod.scene

node = scene.nodes[8] # Arm_1_R
print(f"Node {node.name} matrices count: {len(node.animation.matrices) // 16 if node.animation.matrices is not None else 0}")
if node.animation.matrices is not None:
    for f in [0, 5, 10, 15, 20, 25, 30]:
        mat = node.animation.matrices[f*16 : (f+1)*16]
        # print translation and first column elements
        print(f"Frame {f}: translation=[{mat[12]:.4f}, {mat[13]:.4f}, {mat[14]:.4f}] rotation_diag=[{mat[0]:.4f}, {mat[5]:.4f}, {mat[10]:.4f}]")
