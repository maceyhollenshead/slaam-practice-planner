# SLAAM Practice Planner — Powered by NextEdge

Interactive, branded practice-planning tool for SLAAM Basketball (Pittsburgh, PA).
Built as the v1 prototype for the NextEdge Playbook **Practice Plan** feature.

## 🏀 Live tool
Once GitHub Pages is on, the planner is live at:
**https://maceyhollenshead.github.io/slaam-practice-planner/**

Open it on a laptop, tablet, or phone. Build a plan, then **Print → Save as PDF** (works on iPhone/Android).

## What's here
| File | What it is |
|------|------------|
| `index.html` / `practice_planner.html` | The interactive planner (single self-contained file, works offline) |
| `SLAAM_Standard.docx` | The "SLAAM Standard" coaching-identity 1-pager (printable) |
| `SLAAM_Practice_Plan.docx` | Printable fill-in practice plan template |
| `build.js` | Generator script for the two .docx files (`node build.js`) |
| `SLAAM_TRACKER.md` | Running tracker of the SLAAM × NextEdge project (ideas, decisions, roadmap) |

## Planner features (v1.1)
- SLAAM-branded (lime + pink), girls-program voice
- Practice **Details** + "SLAAM Focus" chips
- **Segments** (time blocks) with live total vs. target duration
- **⋯ panel** per segment: notes (teams/extra items), drop a PDF/image, or a blank **draw box** to sketch plays by hand
- **Drill Library** — drag a drill onto a segment; add your own drills (with diagram images)
- **One "SLAAM Default" template** + **Save as template** to build your own presets
- Save plans, Export/Import JSON, Print/PDF
- Storage is per-device (localStorage) — the shared-bank version is the future Playbook backend (Supabase)

## Editing on your phone
Open this repo in the GitHub mobile app or github.com, edit `index.html`, commit — GitHub Pages redeploys automatically in ~1 min.

---
*SLAAM Basketball · @SLAAMBASKETBALL — Powered by NextEdge*
