import bpy, sys, math, mathutils
import numpy as np
HEIGHT=1.524
files=[a for a in sys.argv[sys.argv.index('--')+1:] if a]
def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.object.light_add(type='AREA', location=(0.5,-0.5,1))
    bpy.context.object.data.energy=30; bpy.context.object.rotation_euler=(math.radians(30),0,0)
    bpy.context.scene.render.resolution_x=512
    bpy.context.scene.render.resolution_y=680
    bpy.context.scene.render.image_settings.file_format='PNG'
    bpy.context.scene.render.film_transparent=False
for f in files:
    setup()
    try: bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e: print(f,"ERR",e); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes: continue
    vs=[]
    for o in meshes:
        for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
    V=np.array(vs); center=V.mean(axis=0)
    longest=max((V[:,i].max()-V[:,i].min()) for i in range(3))
    scale=HEIGHT/longest
    for o in meshes:
        o.scale=(scale,)*3
    # center at origin
    for o in meshes: o.location=o.location-mathutils.Vector(tuple(scale*center))
    name=f.split('/')[-1].replace('.glb','').replace(' ','_')
    # front view (camera at -Y looking +Y)
    bpy.ops.object.camera_add(location=center*scale+(0,-1.6,0))
    cam=bpy.context.object; cam.rotation_euler=(math.radians(90),0,0)
    bpy.context.scene.camera=cam
    bpy.context.scene.render.filepath=f'/tmp/F_{name}.png'
    bpy.ops.render.render(write_still=True)
    # side view (camera at +X)
    bpy.context.scene.camera.location=mathutils.Vector(tuple(scale*center))+mathutils.Vector((1.6,0,0))
    cam.rotation_euler=(math.radians(90),0,math.radians(90))
    bpy.context.scene.render.filepath=f'/tmp/S_{name}.png'
    bpy.ops.render.render(write_still=True)
    print(name,"done")
