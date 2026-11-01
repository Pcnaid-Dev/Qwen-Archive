import bpy, math, mathutils
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.fbx(filepath="/home/daytona/work/3d/Girl_Rigged.fbx")
# find the mesh
mesh=[o for o in bpy.data.objects if o.type=='MESH'][0]
vs=[mesh.matrix_world @ v.co for v in mesh.data.vertices]
import numpy as np
V=np.array(vs)
print("MODEL bounds: min",V.min(0).round(2),"max",V.max(0).round(2))
print("height:",round(V[:,2].max()-V[:,2].min(),3),"width:",round(V[:,0].max()-V[:,0].min(),3),"depth:",round(V[:,1].max()-V[:,1].min(),3))
# 3 views
bpy.ops.object.light_add(type='SUN',location=(1,1,3)); bpy.context.object.data.energy=5
bpy.ops.object.light_add(type='SUN',location=(-1,-1,2)); bpy.context.object.data.energy=2
sc=bpy.context.scene
sc.render.resolution_x=300; sc.render.resolution_y=420
sc.render.image_settings.file_format='PNG'
for name,loc,rot in [("front",(0,-2.0,0.75),(math.radians(90),0,0)),
                     ("side",(2.0,0,0.75),(math.radians(90),0,math.radians(90))),
                     ("back",(0,2.0,0.75),(math.radians(90),0,math.radians(180)))]:
    if 'Cam' in [o.name for o in bpy.data.objects]:
        bpy.data.objects.remove(bpy.data.objects['Cam'],do_unlink=True)
    bpy.ops.object.camera_add(location=loc,rotation=rot)
    bpy.data.objects['Camera'].name='Cam'
    sc.camera=bpy.data.objects['Cam']
    sc.render.filepath=f"/tmp/verify_{name}.png"
    bpy.ops.render.render(write_still=True)
print("done")
