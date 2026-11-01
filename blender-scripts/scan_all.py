import bpy, sys, traceback
import mathutils
files = sys.argv[sys.argv.index('--')+1:]
out = open('/tmp/scan.txt','w')
for f in files:
    try:
        bpy.ops.wm.read_factory_settings(use_empty=True)
        bpy.ops.import_scene.gltf(filepath=f)
        meshes = [o for o in bpy.data.objects if o.type=='MESH']
        arms = len(bpy.data.armatures)
        totv = sum(len(m.data.vertices) for m in meshes)
        totf = sum(len(m.data.polygons) for m in meshes)
        if meshes:
            mins=[1e9]*3; maxs=[-1e9]*3
            for o in meshes:
                for c in o.bound_box:
                    v=o.matrix_world @ mathutils.Vector(c)
                    for i in range(3):
                        mins[i]=min(mins[i],v[i]); maxs[i]=max(maxs[i],v[i])
            dim=[maxs[i]-mins[i] for i in range(3)]
            out.write(f"{f.split('/')[-1]:20s} meshes={len(meshes):2d} arms={arms} verts={totv:7d} faces={totf:7d} dim=({dim[0]:.3f},{dim[1]:.3f},{dim[2]:.3f})\n")
        else:
            out.write(f"{f.split('/')[-1]:20s} NO MESHES arms={arms}\n")
        out.flush()
    except Exception as e:
        out.write(f"{f.split('/')[-1]:20s} ERROR {e}\n")
        out.flush()
print("SCAN DONE", len(files))
