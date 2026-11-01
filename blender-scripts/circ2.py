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
def ell(a,b):
    a,b=abs(a),abs(b)
    if a==0 or b==0: return 0
    h=((a-b)**2)/((a+b)**2)
    return np.pi*(a+b)*(1+3*h/(10+np.sqrt(4-3*h)))
def sec(V,zf):
    z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
    if band.sum()<10: return 0,0
    return (V[band,0].max()-V[band,0].min())*100,(V[band,1].max()-V[band,1].min())*100
for fname,tag in [("models/poly 52.glb","poly52 arms-down"),("models/poly 148.glb","poly148 arms-down"),("models/poly 214.glb","poly214 arms-down")]:
    V=load(fname)
    print(f"=== {tag} (depth = min dim = front-back, reliable) ===")
    for label,zf in [("head",0.97),("neck",0.88),("shoulder",0.80),("bust",0.68),("underbust",0.62),("waist",0.52),("hip",0.40)]:
        x,y=sec(V,zf)
        depth=min(x,y); width=max(x,y)
        print(f"  {label:10s} depth(front-back)={depth:.0f}cm  width={width:.0f}cm  circ~{ell(depth,depth*1.4):.0f}cm")
    # legs
    for label,zf in [("thigh",0.28),("mid",0.22),("knee",0.15),("calf",0.09),("ankle",0.03)]:
        x,y=sec(V,zf)
        print(f"  {label:10s} depth={min(x,y):.0f}cm width={max(x,y):.0f}cm circ~{ell(min(x,y),max(x,y)*0.85):.0f}cm")
