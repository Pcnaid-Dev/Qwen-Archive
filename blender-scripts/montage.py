import bpy, sys, math, mathutils
import numpy as np
HEIGHT=1.524
# complete-body candidates: tall scans
cands=['poly 132','poly 150','poly 151','poly 134','poly 148','poly 5','poly 52','poly 158','poly 131','poly 128','poly 81','poly 95']
def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.object.light_add(type='AREA', location=(0.5,-0.5,1.0))
    bpy.context.object.data.energy=40; bpy.context.object.rotation_euler=(math.radians(30),0,0)
    sc=bpy.context.scene
    sc.render.resolution_x=200; sc.render.resolution_y=300
    sc.render.image_settings.file_format='PNG'; sc.render.film_transparent=False
    sc.render.filepath=''
for name in cands:
    setup()
    bpy.ops.import_scene.gltf(filepath=f'models/{name}.glb')
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
    bpy.context.scene.render.filepath=f'/tmp/M_{name.replace(" ","_")}.png'
    bpy.ops.render.render(write_still=True)
    print(name,"rendered")
print("DONE")
