import bpy, sys, mathutils
import numpy as np
HEIGHT=1.524
files=[a for a in sys.argv[sys.argv.index('--')+1:] if a]
def load(f):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=f)
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    vs=[]
    for o in meshes:
        for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
    V=np.array(vs)
    ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
    axis=int(np.argmax(ext))
    if axis==0: R=np.array([[0,0,-1],[0,1,0],[1,0,0]])
    elif axis==1: R=np.array([[1,0,0],[0,0,1],[0,-1,0]])
    else: R=np.eye(3)
    Vr=V@R.T
    scale=HEIGHT/(Vr[:,2].max()-Vr[:,2].min())
    Vr=Vr*scale; Vr[:,2]-=Vr[:,2].min()
    return Vr
levels=[("crown",0.99),("neck",0.88),("shoulder",0.80),("bust",0.68),("underbust",0.62),("waist",0.52),("hip",0.40),("upper_thigh",0.28),("mid_thigh",0.20),("knee",0.14),("calf",0.08),("ankle",0.03)]
import collections
acc=collections.defaultdict(lambda:[0.0,0.0,0])
for f in files:
    V=load(f)
    for label,zf in levels:
        z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
        if band.sum()<10: continue
        wx=(V[band,0].max()-V[band,0].min())*100
        wy=(V[band,1].max()-V[band,1].min())*100
        acc[label][0]+=max(wx,wy); acc[label][1]+=min(wx,wy); acc[label][2]+=1
print("level: avg WIDTH (side-to-side) / avg DEPTH (front-to-back)")
for label,_ in levels:
    if acc[label][2]:
        print(f"  {label:12s}: width={acc[label][0]/acc[label][2]:.0f}cm  depth={acc[label][1]/acc[label][2]:.0f}cm  (n={acc[label][2]})")
    else:
        print(f"  {label:12s}: -")
