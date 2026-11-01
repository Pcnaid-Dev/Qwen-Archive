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
print("model | level: widthX(w) widthY(d) area")
for f in files:
    V=load(f); name=f.split('/')[-1]
    print(f"=== {name} ===")
    for label,zf in [("shoulder",0.78),("bust",0.68),("underbust",0.62),("waist",0.52),("hip",0.40),("thigh",0.26),("knee",0.15)]:
        z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
        if band.sum()<10: print(f"  {label}: (empty)"); continue
        wx=(V[band,0].max()-V[band,0].min())*100
        wy=(V[band,1].max()-V[band,1].min())*100
        # ellipse approx circumference from area
        import math
        area=band.sum()/len(V)  # fraction
        # approximate cross-section area via pixel count of band in xy
        print(f"  {label}: X(w)={wx:.0f}cm  Y(d)={wy:.0f}cm")
