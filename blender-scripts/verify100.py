import bpy, math
import numpy as np
bpy.ops.wm.read_factory_settings(use_empty=True)
for o in list(bpy.data.objects):
    if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o,do_unlink=True)
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
body.scale=(scale,)*3
body.location.z-=zmin*scale
bpy.ops.object.transform_apply(scale=True,location=True)
vs=np.array([v.co for v in body.data.vertices])
V=vs-vs.mean(axis=0)
ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
print(f"FINAL: W={ext[0]:.3f} D={ext[1]:.3f} H={ext[2]:.3f}  aspect={ext[2]/min(ext[:2]):.2f}")
# cross-sections at key heights (width x depth)
Vh=vs[:,2]-vs[:,2].min()
fr=[(0.23,"ankle"),(0.50,"thigh"),(0.61,"hip"),(0.79,"waist"),(1.03,"chest"),(1.20,"shoulder"),(1.40,"head")]
for h,name in fr:
    m=(Vh>=h-0.02)&(Vh<=h+0.02)
    if m.sum()<5: print(f"{name} ({h:.2f}): n/a"); continue
    w=float(vs[m,0].max()-vs[m,0].min())
    d=float(vs[m,1].max()-vs[m,1].min())
    print(f"{name} ({h:.2f}): W={w:.3f} D={d:.3f}  (verts={m.sum()})")
