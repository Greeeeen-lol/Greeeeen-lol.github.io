import bpy

# Get selected objects
selected = bpy.context.selected_objects
active = bpy.context.active_object

# We expect exactly two armatures to be selected
armatures = [obj for obj in selected if obj.type == 'ARMATURE']

if len(armatures) < 2:
    print("Error: Please select both armatures in the 3D viewport (hold Shift to select both)!")
else:
    # Active object (the one you selected last) is the Target (Mii body)
    target = active if (active and active.type == 'ARMATURE') else armatures[0]
    source = armatures[0] if target == armatures[1] else armatures[1]
    
    print(f"Source Armature (Walk Anim): {source.name}")
    print(f"Target Armature (Mii Body): {target.name}")
    
    # Switch to target armature and go to Pose Mode
    bpy.context.view_layer.objects.active = target
    bpy.ops.object.mode_set(mode='POSE')
    
    # Remove any existing constraints on the target bones
    for bone in target.pose.bones:
        for c in list(bone.constraints):
            bone.constraints.remove(c)
            
    # Add Copy Transforms constraints in World Space
    count = 0
    for bone in target.pose.bones:
        if bone.name in source.pose.bones:
            c = bone.constraints.new('COPY_TRANSFORMS')
            c.target = source
            c.subtarget = bone.name
            c.target_space = 'WORLD'
            c.owner_space = 'WORLD'
            count += 1
            
    print(f"Added Copy Transforms constraints to {count} bones!")
    print("Now play the animation in Blender to verify it looks correct.")
    print("To bake this into a permanent action on your Mii body:")
    print("1. Go to Pose -> Animation -> Bake Action...")
    print("2. Set Start Frame to 1, End Frame to 31.")
    print("3. Check 'Visual Keying', 'Clear Constraints', and set Bake Data to 'Pose'.")
    print("4. Click OK.")
