import bpy, math
import numpy as np
def load(n):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o,do_unlink=True)
    f=f"models/poly {n}.glb" if n else "models/poly.glb"
    bpy.ops.import_scene.gltf(filepath=f)
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    vs=np.array([o.matrix_world@v.co for o in meshes for v in o.data.vertices])
    return vs
def profile(n, standing):
    vs=load(n)
    V=vs-vs.mean(axis=0)
    ext=V.max(axis=0)-V.min(axis=0)
    axis=int(np.argmax(ext))
    L=ext[axis]
    V=V/L*1.524  # normalize long axis to 1.524 m
    perps=[i for i in range(3) if i!=axis]
    p1,p2=perps
    Vh=V[:,axis]-V[:,axis].min()
    fr=[0.05,0.15,0.30,0.45,0.55,0.65,0.75,0.85,0.95]
    out=[]
    for f_ in fr:
        h=f_*1.524
        m=(Vh>=h-0.015)&(Vh<=h+0.015)
        if m.sum()<5: out.append(None); continue
        w=float(V[m,p1].max()-V[m,p1].min())
        d=float(V[m,p2].max()-V[m,p2].min())
        out.append((round(w,3),round(d,3)))
    return out
def show(n,label,standing=True):
    pr=profile(n,standing)
    s=" ".join(f"{p[0]}x{p[1]}" if p else " -  " for p in pr)
    print(f"{label} poly{n:3d}: {s}")
print("height frac: 0.05 0.15 0.30 0.45 0.55 0.65 0.75 0.85 0.95")
print("format: width x depth (m), normalized to 1.524 tall")
print()
print("== STANDING (body upright) ==")
for n in [100,44,53,54,56,98,95,96,97]:
    show(n,"stand")
print()
print("== LYING (body on its side/back, long axis = body length) ==")
for n in [124,152,164,168,172,182,193,195,197,202,203,205]:
    show(n,"lie")
print()
print("== KNEELING/SEATED (torso upright, legs folded) ==")
for n in [128,158,214,218,192,131,136,137]:
    show(n,"knee")
print("DONE")
