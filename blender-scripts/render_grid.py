import bpy, sys, math, mathutils
import numpy as np

HEIGHT = 1.524
files = [a for a in sys.argv[sys.argv.index("--") + 1 :] if a]


def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ("CAMERA", "LIGHT"):
            bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.object.light_add(type="AREA", location=(0.5, -0.5, 1))
    bpy.context.object.data.energy = 30
    bpy.context.object.rotation_euler = (math.radians(30), 0, 0)
    sc = bpy.context.scene
    sc.render.resolution_x = 256
    sc.render.resolution_y = 340
    sc.render.image_settings.file_format = "PNG"
    sc.render.film_transparent = False


for idx, f in enumerate(files):
    setup()
    try:
        bpy.ops.import_scene.gltf(filepath=f)
    except Exception as e:
        print(idx, "ERR", e)
        continue
    meshes = [o for o in bpy.data.objects if o.type == "MESH"]
    if not meshes:
        continue
    vs = []
    for o in meshes:
        for v in o.data.vertices:
            vs.append(o.matrix_world @ mathutils.Vector(v.co))
    V = np.array(vs)
    center = V.mean(axis=0)
    # PCA
    # longest of the three world axes becomes vertical (Z)
    ext = [V[:, i].max() - V[:, i].min() for i in range(3)]
    axis = int(np.argmax(ext))
    # rotation that maps world axis -> Z
    if axis == 0:
        Rm = mathutils.Matrix.Rotation(math.radians(90), 3, "Y")
    elif axis == 1:
        Rm = mathutils.Matrix.Rotation(math.radians(-90), 3, "X")
    else:
        Rm = mathutils.Matrix.Identity(4)
    scale = HEIGHT / ext[axis]
    c = mathutils.Vector(tuple(center)) * scale
    for o in meshes:
        o.scale = (scale,) * 3
        o.rotation_euler = Rm.to_euler()
        o.location = -(Rm @ c)  # bring scaled+rotated center to the origin
    name = f.split("/")[-1].replace(".glb", "").replace(" ", "_")
    bpy.ops.object.camera_add(location=(0, -1.6, 0))
    cam = bpy.context.object
    cam.rotation_euler = (math.radians(90), 0, 0)
    bpy.context.scene.camera = cam
    bpy.context.scene.render.filepath = f"/tmp/G_{name}.png"
    bpy.ops.render.render(write_still=True)
print("GRID DONE", len(files))
