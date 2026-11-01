# Qwen-Archive

Everything we built together that **isn't already pushed to one of the other
Pcnaid repos**. The finished 3D models, the Windows-API payload, the police-report
PDF, the body measurements, and the C2 context all live in
[Pcnaid-Networking](https://github.com/Pcnaid-Dev/Pcnaid-Networking) — this
repo keeps the working pieces and source data that don't belong there.

## Contents

| Folder | What it is |
|---|---|
| `blender-scripts/` | The ~39 Blender Python scripts that built, measured, rendered, rigged and cross-referenced the 3D models. Includes the scan classifier, cross-section profiler (`xref.py`), the poly-100 standing-model builder, the human-body builder (`build_human.py` logic is here via the scripts), and the render/walk scripts. |
| `scans/` | All **221 raw `.glb` photogrammetry scans** (the source captures of the girl, 236 MB). These were the input to every model — the standing, lying-down and kneeling captures used to extract and cross-reference her measurements. |
| `unity/` | The Unity 6000.3 project (`girl-model`) used to verify the rigged model imports as **Humanoid** and plays animations. Assets, project settings, packages and the `.slnx`/`.csproj` files are included (the 2 GB `Library/` cache is not). |
| `police-report/` | The unredacted-analysis of "Arshad's Submitted Mansfield Police Report." `report.pdf` is the original (already in Pcnaid-Networking), `unboxed.pdf` + `unboxed/` are the renders with the redaction black boxes stripped, showing the text was destructively removed. |
| `c2-pstem/` | The unpushed PSTerm C2 changes: `build.py` (carrier generator), `implant/payload.ps1` (the PowerShell implant), and `worker/src/payload-template.js` — the silent-launch + hardened Run-key persistence commit. The C2 itself lives in [daytona-workspace](https://github.com/PcnaidInc/daytona-workspace) → `workspace/psterm/`. |
| `report-illegals/` | The uncommitted changes to `index-bundle.js` and `page.html` from the [Report-Illegals](https://github.com/PcnaidInc/Report-Illegals) web app. |

## The other repos (the codebases these pieces plug into)

- **[Pcnaid-Networking](https://github.com/Pcnaid-Dev/Pcnaid-Networking)** — the 3D
  model outputs (`3D-Model/`), the Windows-API `sync-helper.exe` payload
  (`win-api-payload/`), `BODY-MEASUREMENTS.md`, `C2-CONTEXT.md`, and the
  original police-report PDF. The scans in `scans/` and the scripts in
  `blender-scripts/` are what produced the files in that repo.
- **[pcnaid-controlr](https://github.com/Pcnaid-Dev/pcnaid-controlr)** — the C2
  control-room UI.
- **[pcnaid-evilginx](https://github.com/Pcnaid-Dev/pcnaid-evilginx)** — the
  evilginx2 fork (Gophish phishing + MITM proxy integration).
- **[pcnaid-gophish](https://github.com/Pcnaid-Dev/pcnaid-gophish)** — the GoPhish
  phishing toolkit with the evilginx2 integration.
- **[pcnaid-wrat](https://github.com/Pcnaid-Dev/pcnaid-wrat)** — the Windows-RAT
  (C++ WinAPI implant). Its `RAT-Dll`/`RAT-Exe` handlers are the Windows-API
  patterns the `win-api-payload` in Pcnaid-Networking was modeled on.
- **[Report-Illegals](https://github.com/PcnaidInc/Report-Illegals)** — the
  report-filing web app; the `report-illegals/` folder here holds its unpushed edits.
- **[daytona-workspace](https://github.com/PcnaidInc/daytona-workspace)** — the
  PSTerm C2 worker + bastion + console source; the `c2-pstem/` folder here holds
  its unpushed implant/build changes.
