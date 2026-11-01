import bpy, math, mathutils
import numpy as np
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath="models/poly 131.glb")
meshes=[o for o in bpy.data.objects if o.type=='MESH']
vs=[]
for o in meshes:
    for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
V=np.array(vs); center=V.mean(axis=0)
# remove default camera and light, add our own
for o in list(bpy.data.objects):
    if o.type in ('CAMERA','LIGHT'): o.data.users and bpy.data.objects.remove(o, do_unlink=True)
# area light above-front
bpy.ops.object.light_add(type='AREA', location=center+(0.5,-0.5,1))
bpy.context.object.name='Area'
bpy.context.object.data.energy=20
bpy.context.object.rotation_euler=(math.radians(30),0,0)
# camera from front
bpy.ops.object.camera_add(location=center+(0,-1.2,0.2))
cam=bpy.context.object; cam.name='Cam'
# point it at center via track-to
con=cam.constraints.new('TRACK_TO'); con.target=None
cam.rotation_euler=(math.radians(90),0,0)  # look down -Y
bpy.context.scene.camera=cam
sc=bpy.context.scene
sc.render.resolution_x=512; sc.render.resolution_y=512
sc.render.image_settings.file_format='PNG'; sc.render.film_transparent=False
sc.render.filepath='/tmp/test3.png'
bpy.ops.render.render(write_still=True)
print("done")
