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
| `drills.html` | The SLAAM Drill Library — shared, searchable, printable drill bank (30 drills, purpose + setup + coaching points) |
| `SLAAM_Standard.docx` | The "SLAAM Standard" coaching-identity 1-pager (printable) |
| `SLAAM_Practice_Plan.docx` | Printable fill-in practice plan template |
| `build.js` | Generator script for the two .docx files (`node build.js`) |
| `SLAAM_TRACKER.md` | Running tracker of the SLAAM × NextEdge project (ideas, decisions, roadmap) |

## Planner features (v1.3)
- **Phone-friendly:** on iPhone/Android the segment table reshapes into tap-friendly cards, inputs don't trigger zoom, buttons are finger-sized, and drills add with a tap (drag still works on a laptop)
- SLAAM-branded (lime + pink), girls-program voice
- Practice **Details** + "SLAAM Focus" chips
- **Start time → live clock:** set when practice starts and each segment shows the **wall-clock time** it begins (e.g. 2:00p, 2:08p…). Change any segment's minutes and the whole schedule re-times — glance at your watch to see if you're on pace. Shows projected end time too.
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
