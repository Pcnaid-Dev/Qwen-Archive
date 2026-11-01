import bpy, sys, math, mathutils
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
    return np.array(vs)
out=open('/tmp/xc.txt','w')
for f in files:
    V=load(f)
    ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
    axis=int(np.argmax(ext))
    if axis==0: R=np.array([[0,0,-1],[0,1,0],[1,0,0]])
    elif axis==1: R=np.array([[1,0,0],[0,0,1],[0,-1,0]])
    else: R=np.eye(3)
    Vr=V@R.T
    scale=HEIGHT/(Vr[:,2].max()-Vr[:,2].min())
    Vr=Vr*scale; Vr[:,2]-=Vr[:,2].min()
    def section(frac):
        z=frac*HEIGHT
        band=np.abs(Vr[:,2]-z)<0.03
        if band.sum()<10: return 0,0
        return (Vr[band,0].max()-Vr[band,0].min()),(Vr[band,1].max()-Vr[band,1].min())
    head=section(0.96); neck=section(0.85); shoulder=section(0.72)
    chest=section(0.60); underbust=section(0.53); waist=section(0.46)
    hip=section(0.33); thigh=section(0.24); knee=section(0.14); ankle=section(0.04); foot=section(0.01)
    n=f.split('/')[-1]
    out.write(f"{n:15s} head={head[0]:.2f}/{head[1]:.2f} neck={neck[0]:.2f}/{neck[1]:.2f} shoulder={shoulder[0]:.2f}/{shoulder[1]:.2f} chest={chest[0]:.2f}/{chest[1]:.2f} waist={waist[0]:.2f}/{waist[1]:.2f} hip={hip[0]:.2f}/{hip[1]:.2f} thigh={thigh[0]:.2f}/{thigh[1]:.2f} knee={knee[0]:.2f}/{knee[1]:.2f} ankle={ankle[0]:.2f}/{ankle[1]:.2f}\n")
    out.flush()
print("DONE")
