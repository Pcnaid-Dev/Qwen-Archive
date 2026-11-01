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
def circ(V,zf):
    z=HEIGHT*zf; band=np.abs(V[:,2]-z)<0.02
    if band.sum()<10: return 0,0,0
    a=(V[band,0].max()-V[band,0].min())/2
    b=(V[band,1].max()-V[band,1].min())/2
    # Ramanujan ellipse circumference
    h=((a-b)**2)/((a+b)**2)
    C=np.pi*(a+b)*(1+3*h/(10+np.sqrt(4-3*h)))
    return C*100, a*100, b*100
# poly 128 = clean trunk (arms at side)
V=load("models/poly 128.glb")
print("=== poly 128 (clean trunk) — circumferences (cm) [width, depth] ===")
for label,zf in [("head",0.97),("neck",0.88),("shoulder",0.80),("bust",0.68),("underbust",0.62),("waist",0.52),("hip",0.40)]:
    c,a,b=circ(V,zf)
    print(f"  {label:10s}: circ={c:.0f}cm  (w={a:.0f} d={b:.0f})")
# legs: poly 52 has legs together (standing, from montage)
V52=load("models/poly 52.glb")
print("=== poly 52 (legs) ===")
for label,zf in [("hip",0.40),("thigh",0.30),("mid_thigh",0.24),("knee",0.16),("calf",0.10),("ankle",0.03)]:
    c,a,b=circ(V52,zf)
    print(f"  {label:10s}: circ={c:.0f}cm  (w={a:.0f} d={b:.0f})")
# arm: from poly 128, the arm sticks out to the side. Measure arm width (perpendicular to torso) at mid-arm
V128=load("models/poly 128.glb")
# shoulder joint to hand: find the max x extent at arm height vs torso
print("=== poly 128 arm (torso vs full width at arm height) ===")
for label,zf in [("upper_arm",0.72),("forearm",0.60),("wrist",0.54)]:
    c,a,b=circ(V128,zf)
    print(f"  {label:10s}: full_width={a:.0f}cm")
