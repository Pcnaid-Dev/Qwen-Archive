import bpy, sys, math, mathutils
import numpy as np
HEIGHT=1.524
# candidates that look like tall standing figures in the grid
cands=[4,5,9,14,46,50,52,53,56,57,100,150,214,215,216,217,219,220,221]
def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ('CAMERA','LIGHT'): bpy.data.objects.remove(o,do_unlink=True)
    bpy.ops.object.light_add(type='SUN',location=(1,1,3)); bpy.context.object.data.energy=5
    bpy.ops.object.light_add(type='SUN',location=(-1,-1,2)); bpy.context.object.data.energy=2
    sc=bpy.context.scene
    sc.render.resolution_x=260; sc.render.resolution_y=380
    sc.render.image_settings.file_format='PNG'
    sc.render.film_transparent=False
    sc.render.film_transparent=True
for n in cands:
    setup()
    f=f"models/poly {n}.glb" if n!=0 else "models/poly.glb"
    try: bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e: print(n,"ERR",e); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes: continue
    vs=[o.matrix_world@v.co for o in meshes for v in o.data.vertices]
    V=np.array(vs)
    ext=[V[:,i].max()-V[:,i].min() for i in range(3)]
    # WITHOUT forcing orientation: report raw aspect + which axis is longest
    longest=max(ext); axis=int(np.argmax(ext))
    aspect=longest/min(ext)
    # verts count for detail
    nv=sum(len(o.data.vertices) for o in meshes)
    print(f"poly{n:3d}: verts={nv:6d} raw_ext=({ext[0]:.2f},{ext[1]:.2f},{ext[2]:.2f}) longest_axis={axis} aspect={aspect:.2f}")
    # render front (looking along -Y) and side (looking along -X), NO reorientation
    for tag,cloc,rot in [("f",(0,-1.6,0.75),(math.radians(90),0,0)),("s",(1.6,0,0.75),(math.radians(90),0,math.radians(90)))]:
        if 'Cam' in [o.name for o in bpy.data.objects]: bpy.data.objects.remove(bpy.data.objects['Cam'],do_unlink=True)
        bpy.ops.object.camera_add(location=cloc,rotation=rot); bpy.data.objects['Camera'].name='Cam'
        bpy.context.scene.camera=bpy.data.objects['Cam']
        bpy.context.scene.render.filepath=f"/tmp/P_{n}_{tag}.png"
        bpy.ops.render.render(write_still=True)
print("DONE")
