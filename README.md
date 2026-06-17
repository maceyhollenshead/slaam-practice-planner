# SLAAM Practice Planner — Powered by NextEdge

Interactive, branded practice-planning tool for SLAAM Basketball (Pittsburgh, PA).
Built as the v1 prototype for the NextEdge Playbook **Practice Plan** feature.

## 🏀 Live tool
It's live (auto-deploys from `main` via GitHub Pages):
- **Practice Planner →** https://maceyhollenshead.github.io/slaam-practice-planner/
- **Drill Library →** https://maceyhollenshead.github.io/slaam-practice-planner/drills.html

Open it on a laptop, tablet, or phone. Build a plan, then **Print → Save as PDF** (works on iPhone/Android).

## What's here
| File | What it is |
|------|------------|
| `index.html` / `practice_planner.html` | The interactive planner (single self-contained file, works offline) |
| `drills.html` | The SLAAM Drill Library — shared, searchable, printable drill bank (30 drills, purpose + setup + coaching points) |
| `SLAAM_Standard.docx` | The "SLAAM Standard" coaching-identity 1-pager (printable) |
| `SLAAM_Practice_Plan.docx` | Printable fill-in practice plan template |
| `build.js` | Generator for the two .docx files — run `npm install` once, then `npm run build:docs` (writes both .docx to the repo root) |
| `SLAAM_TRACKER.md` | Running tracker of the SLAAM × NextEdge project (ideas, decisions, roadmap) |

## Planner features (v1.3)
- **Phone-friendly:** on iPhone/Android the segment table reshapes into tap-friendly cards, inputs don't trigger zoom, buttons are finger-sized, and drills add with a tap (drag still works on a laptop)
- SLAAM-branded (lime + pink), girls-program voice
- Practice **Details** + "SLAAM Focus" chips
- **Start time → live clock:** set when practice starts and each segment shows the **wall-clock time** it begins (e.g. 2:00p, 2:08p…). Change any segment's minutes and the whole schedule re-times — glance at your watch to see if you're on pace. Shows projected end time too.
- **Segments** (time blocks) with live total vs. target duration
- **⋯ panel** per segment: notes (teams/extra items), drop a PDF/image, or a blank **draw box** to sketch plays by hand
- **Drill Library** — 30 seeded SLAAM drills; drag/tap a drill onto a segment, add your own (with diagram images), or open the full shared **[Drill Library](drills.html)** (searchable, printable, with purpose + setup + coaching points)
- **One "SLAAM Default" template** + **Save as template** to build your own presets
- Save plans, Export/Import JSON, Print/PDF
- Storage is per-device (localStorage) — the shared-bank version is the future Playbook backend (Supabase)

## Editing on your phone
Open this repo in the GitHub mobile app or github.com, edit `index.html`, commit — GitHub Pages redeploys automatically in ~1 min.

## Where this is headed (NextEdge integration)
This standalone tool is the **AAU reference pack** for the unified NextEdge Playbook. The plan: one shared
engine + a **NextEdge Standard** base + **persona packs** (College / High School / AAU / Trainer). SLAAM
becomes the **AAU pack and first AAU tenant**; **GW women's basketball** is the **College pack**. The
Practice Planner ports into the Playbook as a logged-in module (Plays + Practice Plans + Video, one login),
with SLAAM branding and the SLAAM drill bank seeding the AAU pack. See `SLAAM_TRACKER.md` →
"NextEdge integration", and the master plan in the `basketball-playbook` repo at
`docs/practice-plans/HANDOFF.md`.

---
*SLAAM Basketball · @SLAAMBASKETBALL — Powered by NextEdge*
