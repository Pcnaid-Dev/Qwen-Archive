import bpy, math, mathutils
import numpy as np
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath="models/poly 131.glb")
meshes=[o for o in bpy.data.objects if o.type=='MESH']
print("meshes", len(meshes))
# get bounds
vs=[]
for o in meshes:
    for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
V=np.array(vs)
print("bounds min",V.min(axis=0),"max",V.max(axis=0),"center",V.mean(axis=0))
# add a light
bpy.ops.object.light_add(type='SUN', location=(5,5,5))
bpy.context.scene.render.resolution_x=512; bpy.context.scene.render.resolution_y=512
bpy.context.scene.render.image_settings.file_format='PNG'
bpy.context.scene.render.film_transparent=False
bpy.ops.object.camera_add(location=(0,0,-3), rotation=(math.radians(90),0,0))
bpy.context.scene.camera=bpy.data.objects['Camera']
bpy.context.scene.render.filepath='/tmp/test_render.png'
bpy.ops.render.render(write_still=True)
print("rendered")
