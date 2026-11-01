import bpy, math, mathutils
import numpy as np


def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for o in list(bpy.data.objects):
        if o.type in ("CAMERA", "LIGHT"):
            bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.object.light_add(type="SUN", location=(1, 1, 3))
    bpy.context.object.data.energy = 5
    bpy.ops.object.light_add(type="SUN", location=(-1, -1, 2))
    bpy.context.object.data.energy = 2
    bpy.context.scene.render.resolution_x = 420
    bpy.context.scene.render.resolution_y = 420
    bpy.context.scene.render.image_settings.file_format = "PNG"
    bpy.context.scene.render.film_transparent = True


# high-detail lying-down (for back/torso/waist/hip cross-sections)
lie = [124, 152, 164, 168, 172, 182, 193, 195, 197, 202, 203, 205]
# kneeling / seated (verify waist + hips)
knee = [128, 158, 214, 218, 192, 131]


def render(n, f, views):
    setup()
    try:
        bpy.ops.import_scene.gltf(filepath=f"models/{f}")
    except Exception as e:
        print(n, "ERR", e)
        return
    meshes = [o for o in bpy.data.objects if o.type == "MESH"]
    vs = [o.matrix_world @ v.co for o in meshes for v in o.data.vertices]
    V = np.array(vs)
    c = V.mean(axis=0)
    V = V - c
    ext = [V[:, i].max() - V[:, i].min() for i in range(3)]
    axis = int(np.argmax(ext))
    longest = ext[axis]
    dist = longest * 1.15
    neg_c = mathutils.Vector((-float(c[0]), -float(c[1]), -float(c[2])))
    for o in meshes:
        o.location += neg_c
    perps = [i for i in range(3) if i != axis]
    p1, p2 = perps
    views_def = [
        ("top", {axis: 1.0, float(p1): 0.0, float(p2): 0.0}, dist),
        (
            "side",
            {float(p1): 1.0, float(axis): 0.0, float(p2): 0.0},
            ext[p1] * 0.6 + ext[p2] * 0.6 + 0.2,
        ),
    ]
    for tag, dirv, dd in views_def:
        if tag not in views:
            continue
        d = mathutils.Vector(dirv)
        cam_loc = d * dd
        rot = (d.to_track_quat("Z", "Y")).to_euler()
        if "Cam" in [o.name for o in bpy.data.objects]:
            bpy.data.objects.remove(bpy.data.objects["Cam"], do_unlink=True)
        bpy.ops.object.camera_add(location=cam_loc, rotation=rot)
        bpy.data.objects["Camera"].name = "Cam"
        bpy.context.scene.camera = bpy.data.objects["Cam"]
        bpy.context.scene.render.filepath = f"/tmp/L_{n}_{tag}.png"
        bpy.ops.render.render(write_still=True)


for n in lie:
    f = f"poly {n}.glb"
    render(n, f, ["top", "side"])
for n in knee:
    f = f"poly {n}.glb"
    render(n, f, ["top", "side"])
print("DONE")
