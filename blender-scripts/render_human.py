import bpy, math
bpy.ops.wm.read_factory_settings(use_empty=True)
for o in list(bpy.data.objects):
    if o.type in ("CAMERA","LIGHT"): bpy.data.objects.remove(o,do_unlink=True)
bpy.ops.import_scene.fbx(filepath="/home/daytona/work/3d/Girl_Rigged.fbx")
bpy.ops.object.light_add(type="SUN",location=(1,1,3)); bpy.context.object.data.energy=4
bpy.ops.object.light_add(type="SUN",location=(-1,-1,2)); bpy.context.object.data.energy=2
sc=bpy.context.scene
sc.render.resolution_x=300; sc.render.resolution_y=460
sc.render.image_settings.file_format="PNG"
sc.render.film_transparent=False
w=bpy.data.worlds.new("w"); w.color=(0.85,0.87,0.9); sc.world=w
views=[("front",(0,-2.6,0.75),(math.radians(90),0,0)),
       ("side",(2.6,0,0.75),(math.radians(90),0,math.radians(90))),
       ("back",(0,2.6,0.75),(math.radians(90),0,math.radians(180)))]
for tag,loc,rot in views:
    if 'Cam' in [o.name for o in bpy.data.objects]: bpy.data.objects.remove(bpy.data.objects['Cam'],do_unlink=True)
    bpy.ops.object.camera_add(location=loc,rotation=rot); bpy.data.objects['Camera'].name='Cam'
    sc.camera=bpy.data.objects['Cam']
    sc.render.filepath=f"/tmp/HUMAN_{tag}.png"
    bpy.ops.render.render(write_still=True)
print("HUMANDONE")
