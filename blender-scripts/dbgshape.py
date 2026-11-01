import bpy, mathutils
import numpy as np
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath="models/poly 128.glb")
body=[o for o in bpy.data.objects if o.type=='MESH'][0]
print("nverts", len(body.data.vertices))
v0=body.data.vertices[0]
print("co type", type(v0.co), "co[:]", v0.co[:])
mw=body.matrix_world
r = mw @ v0.co
print("mw@co type", type(r), r[:])
arr=np.array([mw @ v.co[:] for v in body.data.vertices])
print("arr shape", arr.shape, "ndim", arr.ndim)
