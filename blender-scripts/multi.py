import bpy, sys
import mathutils
files = sys.argv[sys.argv.index('--')+1:]
for f in files:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    try:
        bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e:
        print(f"{f}: IMPORT ERROR {e}"); continue
    meshes = [o for o in bpy.data.objects if o.type=='MESH']
    arms = len(bpy.data.armatures)
    totv = sum(len(m.data.vertices) for m in meshes)
    totf = sum(len(m.data.polygons) for m in meshes)
    # combined bbox
    if meshes:
        mins=[1e9]*3; maxs=[-1e9]*3
        for o in meshes:
            for c in o.bound_box:
                v=o.matrix_world @ mathutils.Vector(c)
                for i in range(3):
                    mins[i]=min(mins[i],v[i]); maxs[i]=max(maxs[i],v[i])
        dim=[maxs[i]-mins[i] for i in range(3)]
        print(f"{f.split('/')[-1]:20s} meshes={len(meshes):2d} arms={arms} verts={totv:7d} faces={totf:7d} dim=({dim[0]:.3f},{dim[1]:.3f},{dim[2]:.3f}) min=({mins[0]:.2f},{mins[1]:.2f},{mins[2]:.2f}) max=({maxs[0]:.2f},{maxs[1]:.2f},{maxs[2]:.2f})")
    else:
        print(f"{f.split('/')[-1]:20s} NO MESHES, arms={arms}")
