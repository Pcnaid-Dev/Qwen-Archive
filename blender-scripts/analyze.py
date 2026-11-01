import bpy, sys
import numpy as np
import mathutils
files = [a for a in sys.argv[sys.argv.index('--')+1:] if a]
HEIGHT = 1.524  # meters (5 ft 0 in)
out = open('/tmp/analyze.txt','w')
for f in files:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    try:
        bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e:
        out.write(f"{f.split('/')[-1]:18s} IMPORT_ERR {str(e)[:30]}\n"); out.flush(); continue
    meshes=[o for o in bpy.data.objects if o.type=='MESH']
    if not meshes:
        out.write(f"{f.split('/')[-1]:18s} NO_MESH\n"); out.flush(); continue
    # all vertices in world space
    verts=[]
    for o in meshes:
        mw=o.matrix_world
        vs=[mw @ mathutils.Vector(v.co) for v in o.data.vertices]
        verts.extend(vs)
    V=np.array(verts)
    center=V.mean(axis=0)
    C=V-center
    # PCA for principal axes
    cov=np.cov(C.T)
    evals,evecs=np.linalg.eigh(cov)
    # sort descending
    order=np.argsort(evals)[::-1]
    evecs=evecs[:,order]; evals=evals[order]
    # extent along each principal axis
    ext=np.array([np.max(C @ evecs[:,i]) - np.min(C @ evecs[:,i]) for i in range(3)])
    longest=ext.max()
    # scale so longest = HEIGHT
    scale = HEIGHT/longest if longest>0 else 1
    # detect boundary (open) edges: count vertices with non-manifold / boundary
    # use bmesh
    import bmesh
    bm=bmesh.new(); bm.from_mesh(meshes[0].data)
    boundary=sum(1 for e in bm.edges if e.is_boundary)
    nonman=sum(1 for e in bm.edges if not e.is_manifold and not e.is_boundary)
    bm.free()
    nverts=len(V)
    # aspect: ratio of middle to longest, smallest to longest
    srt=sorted(ext)[::-1]  # l>=m>=s
    out.write(f"{f.split('/')[-1]:18s} scale={scale:.3f} dims_norm=({srt[0]*scale:.3f},{srt[1]*scale:.3f},{srt[2]*scale:.3f}) m/s={srt[1]/srt[0]:.2f} s/s={srt[2]/srt[0]:.2f} verts={nverts} boundary_edges={boundary} nonmanifold={nonman} nmeshes={len(meshes)}\n")
    out.flush()
print("ANALYZE DONE")
