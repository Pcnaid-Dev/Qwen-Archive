import bpy, sys, math, mathutils
files = sys.argv[sys.argv.index('--')+1:]
bpy.context.scene.render.resolution_x = 512
bpy.context.scene.render.resolution_y = 512
bpy.context.scene.render.image_settings.file_format='PNG'
bpy.context.scene.render.film_transparent=True
for f in files:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    try:
        bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e:
        print(f, "ERR", e); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes: 
        print(f,"NO MESH"); continue
    # combined center + scale to 1 unit tall
    mins=[1e9]*3; maxs=[-1e9]*3
    for o in meshes:
        for c in o.bound_box:
            v=o.matrix_world @ mathutils.Vector(c)
            for i in range(3): mins[i]=min(mins[i],v[i]); maxs[i]=max(maxs[i],v[i])
    center=mathutils.Vector([(mins[i]+maxs[i])/2 for i in range(3)])
    # scale so the longest dim = 1
    longest=max(maxs[i]-mins[i] for i in range(3))
    scale=1.0/longest
    # parent all to an empty, scale, recenter
    bpy.context.scene.collection.objects.link(bpy.data.objects.new("root",None))
    for o in meshes:
        o.parent=bpy.context.scene.objects["root"]
    bpy.context.scene.objects["root"].scale=(scale,)*3
    bpy.context.scene.objects["root"].location=(-center.x*scale,-center.y*scale,-center.z*scale)
    # camera at front
    bpy.ops.object.camera_add(location=(0,0,2.0), rotation=(math.radians(90),0,0))
    cam=bpy.data.objects["Camera"]
    bpy.context.scene.camera=cam
    name=f.split('/')[-1].replace('.glb','').replace(' ','_')
    bpy.context.scene.render.filepath=f"/tmp/render_{name}.png"
    bpy.ops.render.render(write_still=True)
    print(f,"rendered")
