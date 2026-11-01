import bpy, math
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.fbx(filepath="/home/daytona/work/3d/Girl_Rigged.fbx")
for o in list(bpy.data.objects):
    if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.object.light_add(type='AREA', location=(0.6,-0.6,1.2))
bpy.context.object.data.energy=40; bpy.context.object.rotation_euler=(math.radians(40),0,0)
body=[o for o in bpy.data.objects if o.type=='MESH'][0]
mat=bpy.data.materials.new("Skin"); mat.use_nodes=True
mat.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value=(0.85,0.62,0.5,1)
body.data.materials.append(mat)
bpy.context.scene.render.resolution_x=500; bpy.context.scene.render.resolution_y=720
bpy.context.scene.render.image_settings.file_format='PNG'
bpy.ops.object.camera_add(location=(0,-2.2,0.7))
bpy.context.object.rotation_euler=(math.radians(88),0,0)
bpy.context.scene.camera=bpy.context.object
bpy.context.scene.render.filepath="/tmp/model_preview.png"
bpy.ops.render.render(write_still=True)
print("preview rendered")
