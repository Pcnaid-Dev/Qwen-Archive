import bpy, sys, os
import numpy as np
f = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=f)
print("=== MESHES ===")
for o in bpy.data.objects:
    if o.type == 'MESH':
        me = o.data
        bb = [o.matrix_world @ __import__('mathutils').Vector(c) for c in o.bound_box]
        xs=[v.x for v in bb]; ys=[v.y for v in bb]; zs=[v.z for v in bb]
        print(f"{o.name:30s} verts={len(me.vertices):7d} faces={len(me.polygons):7d} "
              f"bbox=({min(xs):.3f},{min(ys):.3f},{min(zs):.3f})-({max(xs):.3f},{max(ys):.3f},{max(zs):.3f}) "
              f"dim=({max(xs)-min(xs):.3f},{max(ys)-min(ys):.3f},{max(zs)-min(zs):.3f})")
print("=== ARMS/BONES ===", len(bpy.data.armatures))
print("=== MATERIALS ===", [m.name for m in bpy.data.materials])
