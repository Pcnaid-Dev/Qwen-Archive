import bpy, sys, math, mathutils
import numpy as np
HEIGHT=1.524
files=[a for a in sys.argv[sys.argv.index('--')+1:] if a]
def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o,do_unlink=True)
    bpy.ops.object.light_add(type='SUN',location=(1,1,3)); bpy.context.object.data.energy=5
    bpy.ops.object.light_add(type='SUN',location=(-1,-1,2)); bpy.context.object.data.energy=2
    sc=bpy.context.scene
    sc.render.resolution_x=240; sc.render.resolution_y=340
    sc.render.image_settings.file_format='PNG'
for f in files:
    setup()
    try: bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e: print(f,"ERR",e); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes: print(f,"NOMESH"); continue
    vs=[o.matrix_world@v.co for o in meshes for v in o.data.vertices]
    V=np.array(vs); center=V.mean(0)
    ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
    scale=HEIGHT/max(ext)
    # align longest axis to Z, keep the rest
    import numpy as _n; axis=int(_n.array(ext).argmax())
    if axis==0: Rm=mathutils.Matrix.Rotation(math.radians(90),3,'Y')
    elif axis==1: Rm=mathutils.Matrix.Rotation(math.radians(-90),3,'X')
    else: Rm=mathutils.Matrix.Identity(4)
    for o in meshes:
        o.scale=(scale,)*3; o.rotation_euler=Rm.to_euler(); o.location=-(Rm@(mathutils.Vector(center)*scale))
    # recompute bounds for naming
    vs2=[o.matrix_world@v.co for o in meshes for v in o.data.vertices]; V2=np.array(vs2)
    w=d=round((V2[:,0].max()-V2[:,0].min())*100), 
    name=f.split('/')[-1].replace('.glb','').replace(' ','_')
    for tag,loc,rot in [("f",(0,-1.6,0.75),(math.radians(90),0,0)),
                        ("s",(1.6,0,0.75),(math.radians(90),0,math.radians(90))),
                        ("b",(0,1.6,0.75),(math.radians(90),0,math.radians(180)))]:
        if 'Cam' in [o.name for o in bpy.data.objects]: bpy.data.objects.remove(bpy.data.objects['Cam'],do_unlink=True)
        bpy.ops.object.camera_add(location=loc,rotation=rot); bpy.data.objects['Camera'].name='Cam'
        bpy.context.scene.camera=bpy.data.objects['Cam']
        bpy.context.scene.render.filepath=f"/tmp/A_{name}_{tag}.png"
        bpy.ops.render.render(write_still=True)
    print(f,"w={w[0] if w else 0}")
print("ALL DONE")
