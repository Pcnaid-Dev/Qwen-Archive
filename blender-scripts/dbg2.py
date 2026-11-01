import bpy, sys, mathutils
import numpy as np
f=sys.argv[sys.argv.index('--')+1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=f)
for o in bpy.data.objects:
    print(o.name, o.type, "verts", len(o.data.vertices) if o.type=='MESH' else '-')
