import bpy, sys, math
import numpy as np
def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o,do_unlink=True)
names=[]
import os
for f in sorted(os.listdir("models")):
    if f.endswith(".glb"):
        n=int(f.replace("poly","").replace(".glb","").strip().split()[0]) if " " in f or f!="poly.glb" else 0
        names.append((n,f))
names.sort()
for n,f in names:
    setup()
    try: bpy.ops.import_scene.gltf(filepath=f"models/{f}")
    except Exception as e: print(n,"ERR"); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes: continue
    vs=[o.matrix_world@v.co for o in meshes for v in o.data.vertices]
    V=np.array(vs); V=V-V.min(axis=0)
    ext=[V[:,i].max() for i in range(3)]
    longest=max(ext); axis=int(np.argmax(ext)); aspect=round(longest/min(ext),2)
    nv=sum(len(o.data.vertices) for o in meshes)
    print(f"{n:3d} ext=({ext[0]:.2f},{ext[1]:.2f},{ext[2]:.2f}) axis={axis} aspect={aspect} verts={nv}")
print("DONE")
