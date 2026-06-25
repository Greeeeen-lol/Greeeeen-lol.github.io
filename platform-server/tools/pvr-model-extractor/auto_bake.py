import bpy

# Set the name of your Mii body armature
target_name = "Armature"  # Change this if your Mii armature is named differently

target = bpy.data.objects.get(target_name)

if not target:
    # Fallback: try to find any armature that is NOT the walk dummy
    armatures = [obj for obj in bpy.data.objects if obj.type == 'ARMATURE' and obj.name != "Mii_Skin_Dummy"]
    if armatures:
        target = armatures[0]
        print(f"Automatically selected Mii body armature: '{target.name}'")

if not target:
    print("Error: Mii body armature not found in the scene!")
else:
    # Switch to Object Mode to clean up selection
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
        
    bpy.ops.object.select_all(action='DESELECT')
    target.select_set(True)
    bpy.context.view_layer.objects.active = target
    
    # Switch to Pose Mode
    bpy.ops.object.mode_set(mode='POSE')
    
    # Select all pose bones in the armature
    for bone in target.pose.bones:
        bone.bone.select = True
        
    print(f"Baking animation for '{target.name}' (Frames 1-12)...")
    
    # Execute the bake action programmatically with constraints clearing
    bpy.ops.nla.bake(
        frame_start=1,
        frame_end=12,
        step=1,
        only_selected=True,
        visual_keying=True,
        clear_constraints=True,
        bake_types={'POSE'}
    )
    
    # Return to Object Mode
    bpy.ops.object.mode_set(mode='OBJECT')
    
    print("Bake complete! All constraints have been cleared and baked into keyframes.")
    print("You can now safely delete the walk animation armature object.")
