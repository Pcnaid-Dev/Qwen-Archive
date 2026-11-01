import bpy, mathutils
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
def ell(a,b):
    a,b=abs(a),abs(b)
    if a==0 or b==0: return 0
    h=((a-b)**2)/((a+b)**2)
    return np.pi*(a+b)*(1+3*h/(10+np.sqrt(4-3*h)))
def sec(V,zf):
    z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
    if band.sum()<10: return 0,0
    return (V[band,0].max()-V[band,0].min())*100,(V[band,1].max()-V[band,1].min())*100
V=load("models/poly 52.glb")  # clean standing side view -> reliable thickness
print("poly52 final (width = side-side, depth = front-back):")
res={}
for label,zf in [("head",0.97),("neck",0.88),("shoulder",0.80),("bust",0.68),("underbust",0.62),("waist",0.52),("hip",0.40),("thigh",0.30),("midthigh",0.24),("knee",0.16),("calf",0.10),("ankle",0.03)]:
    x,y=sec(V,zf)
    w=max(x,y); d=min(x,y)
    res[label]=(w,d)
    print(f"  {label:10s} width={w:.0f}cm depth={d:.0f}cm circ={ell(w,d):.0f}cm")
# arm length from poly 128 (arms down-ish)
V2=load("models/poly 128.glb")
sh=HEIGHT*0.80
side=np.where((np.abs(V2[:,0])>0.28)&(V2[:,2]<sh+0.02)&(V2[:,2]>0.05))[0]
hand_z=V2[side,2].min() if len(side) else 0.30
print(f"arm length (shoulder->hand) = {(sh-hand_z)*100:.0f}cm")
# inseam: hip(0.40) to ankle(0.03)
print(f"inseam ~ {(HEIGHT*(0.40-0.03)):.0f}cm")
