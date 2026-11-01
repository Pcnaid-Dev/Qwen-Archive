import bpy, math
bpy.ops.wm.read_factory_settings(use_empty=True)
for o in list(bpy.data.objects):
    if o.type in ("CAMERA","LIGHT"): bpy.data.objects.remove(o,do_unlink=True)
bpy.ops.import_scene.fbx(filepath="/home/daytona/work/3d/Girl_Rigged.fbx")
bpy.ops.object.light_add(type="SUN",location=(1,1,3)); bpy.context.object.data.energy=4
bpy.ops.object.light_add(type="SUN",location=(-1,-1,2)); bpy.context.object.data.energy=2
bpy.ops.mesh.primitive_plane_add(size=40, location=(0,0,0))
g=bpy.context.object; m=bpy.data.materials.new("ground"); m.diffuse_color=(0.82,0.82,0.85,1); g.data.materials.append(m)
sc=bpy.context.scene
sc.render.resolution_x=720; sc.render.resolution_y=1080
w=bpy.data.worlds.new("w"); w.color=(0.85,0.87,0.9); sc.world=w
sc.render.image_settings.file_format="PNG"
bpy.ops.object.empty_add(type="PLAIN_AXES", location=(0,0,0.78))
pivot=bpy.context.object
bpy.ops.object.camera_add(location=(0,-2.7,0.73))
cam=bpy.context.object; cam.data.lens=50
cons=cam.constraints.new("TRACK_TO"); cons.target=pivot
cons.track_axis="TRACK_NEGATIVE_Z"; cons.up_axis="UP_Y"
sc.camera=cam
sc.render.filepath="/home/daytona/work/3d/camera_pov.png"
bpy.ops.render.render(write_still=True)
print("POVDONE")
