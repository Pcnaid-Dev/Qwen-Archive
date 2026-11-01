import bpy, sys, math, mathutils
import numpy as np
HEIGHT=1.524
files=[a for a in sys.argv[sys.argv.index('--')+1:] if a]
def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.object.light_add(type='AREA', location=(0.5,-0.5,1.0))
    bpy.context.object.data.energy=40; bpy.context.object.rotation_euler=(math.radians(30),0,0)
    sc=bpy.context.scene
    sc.render.resolution_x=220; sc.render.resolution_y=320
    sc.render.image_settings.file_format='PNG'; sc.render.film_transparent=False
for f in files:
    setup()
    bpy.ops.import_scene.gltf(filepath=f)
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    vs=[]
    for o in meshes:
        for v in o.data.vertices: vs.append(o.matrix_world@mathutils.Vector(v.co))
    V=np.array(vs)
    ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
    axis=int(np.argmax(ext))
    if axis==0: Rm=mathutils.Matrix.Rotation(math.radians(90),3,'Y')
    elif axis==1: Rm=mathutils.Matrix.Rotation(math.radians(-90),3,'X')
    else: Rm=mathutils.Matrix.Identity(4)
    scale=HEIGHT/ext[axis]
    c=mathutils.Vector(V.mean(axis=0))*scale
    for o in meshes:
        o.scale=(scale,)*3; o.rotation_euler=Rm.to_euler(); o.location=-(Rm@c)
    bpy.ops.object.camera_add(location=(0,-1.5,0))
    bpy.context.object.rotation_euler=(math.radians(90),0,0)
    bpy.context.scene.camera=bpy.context.object
    name=f.split('/')[-1].replace('.glb','').replace(' ','_')
    bpy.context.scene.render.filepath=f'/tmp/HR_{name}.png'
    bpy.ops.render.render(write_still=True)
print("DONE")
