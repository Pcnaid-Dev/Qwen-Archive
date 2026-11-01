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
    V=np.array(vs)
    return V
out=open('/tmp/measure.txt','w')
for f in files:
    V=load(f)
    # align longest axis to Z
    ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
    axis=int(np.argmax(ext))
    # rotate so that axis -> Z
    if axis==0:
        R=np.array([[0,0,-1],[0,1,0],[1,0,0]])
    elif axis==1:
        R=np.array([[1,0,0],[0,0,1],[0,-1,0]])
    else:
        R=np.eye(3)
    Vr=V@R.T
    H=Vr[:,2].max()-Vr[:,2].min()
    scale=HEIGHT/H
    Vr=Vr*scale
    Vr[:,2]-=Vr[:,2].min()  # feet at z=0, top at z=HEIGHT
    zmin,zmax=Vr[:,2].min(),Vr[:,2].max()
    def width_at(zf):
        z=zmin+zf*(zmax-zmin)
        band=np.abs(Vr[:,2]-z)<0.02
        if band.sum()<10: return 0,0
        x=Vr[band,0]; y=Vr[band,1]
        return (x.max()-x.min()),(y.max()-y.min())
    head_w,_=width_at(0.97); shoulder_x,shoulder_y=width_at(0.78)
    chest_x,chest_y=width_at(0.62); waist_x,waist_y=width_at(0.48)
    hip_x,hip_y=width_at(0.34); knee_x,knee_y=width_at(0.22)
    calf_x,calf_y=width_at(0.10); foot_x,foot_y=width_at(0.02)
    name=f.split('/')[-1]
    out.write(f"{name:16s} H={zmax:.3f}\n")
    out.write(f"   head={head_w:.3f} shoulder(x,y)=({shoulder_x:.3f},{shoulder_y:.3f}) chest=({chest_x:.3f},{chest_y:.3f})\n")
    out.write(f"   waist=({waist_x:.3f},{waist_y:.3f}) hip=({hip_x:.3f},{hip_y:.3f}) knee=({knee_x:.3f},{knee_y:.3f})\n")
    out.write(f"   calf=({calf_x:.3f},{calf_y:.3f}) foot=({foot_x:.3f},{foot_y:.3f})\n")
    out.flush()
print("MEASURE DONE")
