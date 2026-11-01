import bpy, sys, mathutils
import numpy as np
HEIGHT=1.524
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
def sec(V,zf):
    z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
    if band.sum()<10: return None
    return (V[band,0].max()-V[band,0].min())*100, (V[band,1].max()-V[band,1].min())*100
# poly 128 = standing, arms near sides -> clean trunk (depth is arm-free)
V=load("models/poly 128.glb")
print("poly 128 STANDING (trunk) — full width x / depth y (cm)")
for label,zf in [("head",0.97),("neck",0.88),("shoulder",0.80),("bust",0.68),("waist",0.52),("hip",0.40)]:
    r=sec(V,zf)
    print(f"  {label:10s}: width={r[0]:.0f}  depth={r[1]:.0f}")
# legs from poly 52 (standing legs together)
V=load("models/poly 52.glb")
print("poly 52 — legs (depth = thigh/calf thickness, width = both legs or one)")
for label,zf in [("hip",0.40),("thigh",0.28),("midthigh",0.22),("knee",0.15),("calf",0.09),("ankle",0.03)]:
    r=sec(V,zf)
    print(f"  {label:10s}: width={r[0]:.0f}  depth={r[1]:.0f}")
# arm from poly 128: arm length = from shoulder (z .80) to hand tip
# hand is the max extent at low z on the side
V=load("models/poly 128.glb")
shz=HEIGHT*0.80
# find lowest point that's far to the side (the hand)
side=np.where((np.abs(V[:,0])>0.30)&(V[:,2]<shz+0.05)&(V[:,2]>0.1))[0]
if len(side): print(f"  arm/hand reaches z={V[side,2].min()*100:.0f}cm -> arm length ~ {(shz-V[side,2].min())*100:.0f}cm")
