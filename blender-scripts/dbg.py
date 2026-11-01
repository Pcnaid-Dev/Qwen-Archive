import bpy, sys, mathutils
import numpy as np
f=sys.argv[sys.argv.index('--')+1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=f)
meshes=[o for o in bpy.data.objects if o.type=='MESH']
vs=[]
for o in meshes:
    for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
V=np.array(vs)
print("raw dims (m):", [V[:,i].max()-V[:,i].min() for i in range(3)])
print("raw extent x:",V[:,0].min(),V[:,0].max())
print("n verts",len(V))
