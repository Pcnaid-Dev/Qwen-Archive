import bpy, math, mathutils
import numpy as np
bpy.ops.wm.read_factory_settings(use_empty=True)
for o in list(bpy.data.objects):
    if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o,do_unlink=True)
bpy.ops.object.light_add(type='SUN',location=(1,1,3)); bpy.context.object.data.energy=5
bpy.ops.object.light_add(type='SUN',location=(-1,-1,2)); bpy.context.object.data.energy=2
sc=bpy.context.scene
sc.render.resolution_x=300; sc.render.resolution_y=460
sc.render.image_settings.file_format='PNG'
sc.render.film_transparent=True
bpy.ops.import_scene.gltf(filepath="models/poly 100.glb")
meshes=[o for o in bpy.data.objects if o.type=='MESH']
bpy.ops.object.select_all(action="DESELECT")
for o in meshes: o.select_set(True)
bpy.context.view_layer.objects.active=meshes[0]
bpy.ops.object.join()
body=bpy.context.active_object
vs=np.array([body.matrix_world@v.co for v in body.data.vertices])
zmin,zmax=vs[:,2].min(),vs[:,2].max()
scale=1.524/(zmax-zmin)
body.scale=(scale,)*3; body.location.z-=zmin*scale
bpy.ops.object.transform_apply(scale=True,location=True)
vs=np.array([v.co for v in body.data.vertices])
cx=(vs[:,0].max()+vs[:,0].min())/2; cy=(vs[:,1].max()+vs[:,1].min())/2
body.location.x-=cx; body.location.y-=cy
bpy.ops.object.transform_apply(location=True)
views=[("front",(0,-1.9,0.76),(math.radians(90),0,0)),
       ("side",(1.9,0,0.76),(math.radians(90),0,math.radians(90))),
       ("back",(0,1.9,0.76),(math.radians(90),0,math.radians(180)))]
for tag,loc,rot in views:
    if 'Cam' in [o.name for o in bpy.data.objects]: bpy.data.objects.remove(bpy.data.objects['Cam'],do_unlink=True)
    bpy.ops.object.camera_add(location=loc,rotation=rot); bpy.data.objects['Camera'].name='Cam'
    sc.camera=bpy.data.objects['Cam']
    sc.render.filepath=f"/tmp/F100_{tag}.png"
    bpy.ops.render.render(write_still=True)
print("DONE")
