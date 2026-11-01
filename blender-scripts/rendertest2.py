import bpy, math, mathutils
import numpy as np
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath="models/poly 131.glb")
meshes=[o for o in bpy.data.objects if o.type=='MESH']
vs=[]
for o in meshes:
    for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
V=np.array(vs)
center=V.mean(axis=0)
# light
bpy.ops.object.light_add(type='SUN', location=center+(1,1,2))
bpy.data.objects['Light'].rotation_euler=(math.radians(45),0,0)
# camera looking at center from front (-Y)
bpy.ops.object.camera_add(location=center+(0,-1.5,0.3), rotation=(math.radians(90),0,math.radians(180)))
cam=bpy.data.objects['Camera']; bpy.context.scene.camera=cam
sc=bpy.context.scene
sc.render.resolution_x=512; sc.render.resolution_y=512
sc.render.image_settings.file_format='PNG'
sc.render.film_transparent=False
sc.render.filepath='/tmp/test2.png'
bpy.ops.render.render(write_still=True)
print("done")
