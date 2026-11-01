import bpy, sys, math, mathutils
import numpy as np
HEIGHT=1.524
files=[a for a in sys.argv[sys.argv.index('--')+1:] if a]
for f in files:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc=bpy.context.scene
    sc.render.resolution_x=600; sc.render.resolution_y=800
    sc.render.image_settings.file_format='PNG'
    sc.render.film_transparent=True
    try: bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e: print(f,"ERR",e); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes: print(f,"NOMESH"); continue
    verts=[]
    for o in meshes:
        for v in o.data.vertices: verts.append(o.matrix_world@mathutils.Vector(v.co))
    V=np.array(verts); center=V.mean(axis=0)
    longest=max((V[:,i].max()-V[:,i].min()) for i in range(3))
    scale=HEIGHT/longest
    for o in meshes:
        o.scale=(scale,)*3
        o.location=-center*scale
    name=f.split('/')[-1].replace('.glb','').replace(' ','_')
    views=[(0,'front'),(math.pi/2,'left'),(0,'back'),(math.radians(-20),'threeq')]
    for i,(rz,tag) in enumerate(views):
        bpy.ops.object.camera_add(location=(0,0,0), rotation=(math.radians(90),0,rz))
        cam=bpy.data.objects['Camera']; bpy.context.scene.camera=cam
        cam.location=cam.matrix_world @ mathutils.Vector((0,0,-2.6))
        bpy.context.scene.render.filepath=f'/tmp/m_{name}_{tag}.png'
        bpy.ops.render.render(write_still=True)
    print(f,"rendered")
