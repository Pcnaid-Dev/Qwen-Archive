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
def w(V,zf):
    z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
    if band.sum()<5: return 0.0,0.0
    return V[band,0].max()-V[band,0].min(), V[band,1].max()-V[band,1].min()
for f in files:
    V=load(f)
    print(f"{f.split('/')[-1]}:", end=" ")
    for label,zf in [("crown",0.99),("neck",0.86),("shoulder",0.78),("bust",0.68),("underbust",0.62),("waist",0.52),("hip",0.40),("thigh",0.26),("knee",0.15),("calf",0.09),("ankle",0.03)]:
        wx,wy=w(V,zf)
        print(f"{label}={max(wx,wy)*100:.0f}cm ",end="")
    print()
