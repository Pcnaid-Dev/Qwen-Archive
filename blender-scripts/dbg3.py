import bpy, sys, mathutils
import numpy as np
f=sys.argv[sys.argv.index('--')+1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=f)
meshes=[o for o in bpy.data.objects if o.type=='MESH']
vs=[]
for o in meshes:
    for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
V=np.array(vs)
ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
axis=int(np.argmax(ext))
print("raw ext",ext,"axis",axis)
R=np.eye(3)
if axis==0: R=np.array([[0,0,-1],[0,1,0],[1,0,0]])
elif axis==1: R=np.array([[1,0,0],[0,0,1],[0,-1,0]])
Vr=V@R.T
scale=1.524/(Vr[:,2].max()-Vr[:,2].min())
Vr=Vr*scale; Vr[:,2]-=Vr[:,2].min()
print("after scale z range",Vr[:,2].min(),Vr[:,2].max(),"x range",Vr[:,0].min(),Vr[:,0].max())
for zf in [0.52,0.40,0.26]:
    z=1.524*zf
    band=np.abs(Vr[:,2]-z)<0.02
    print(f"z={z:.2f} band_verts={band.sum()} width_x={Vr[band,0].max()-Vr[band,0].min() if band.sum() else 0:.3f} width_y={Vr[band,1].max()-Vr[band,1].min() if band.sum() else 0:.3f}")
