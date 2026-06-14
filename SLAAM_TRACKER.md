# SLAAM × NextEdge — Partnership & Build Tracker

**Status:** Active brainstorm → first deliverables
**Owner:** Macey
**Started:** 2026-06-14
**Engagement level:** Light-touch. Easy wins for the coach, real upside for NextEdge. Not building a full custom system.

---

## Who / Why
- **SLAAM** — strong local AAU program. High-caliber players + committed D2/D3 talent. Distinct team colors / brand identity.
- A SLAAM coach reached out wanting help integrating AI into his program.
- **His actual ask (his words):** already using AI for "a little design," not for planning. Wants to (1) **automate / improve practice planning**, and (2) **build shareable tools for new coaches to normalize coaching across the program.**
- **The real prize for him:** normalize coaching — get new coaches doing it "the SLAAM way."

## Why this matters for NextEdge (keep every deliverable two-sided)
- **Distribution:** every branded doc says SLAAM *and* "Powered by NextEdge" — seen by every coach in the program, weekly.
- **Data / IP:** their drills, terminology, and set plays = structured basketball IP. Exactly the fuel the future "brain" needs, and direct input to the text→diagram Playbook tool.
- **Case study:** "SLAAM runs on NextEdge" → local credibility + referral engine for the next AAU program.
- **Upgrade path:** start them on planning/playbook (free/cheap), natural upsell to film / Video AI tier later.
- **First design partner:** validates the "NextEdge as program operating system" motion.

---

## Two tracks

### Track A — Printable templates (easy wins, ship first)
Branded, fill-in-and-print `.docx`. No login, no build. Usable next practice.
- [x] **The SLAAM Standard** (1-pager) — `slaam_kit/SLAAM_Standard.docx` ✅ built, branded (pink/lime), validated
- [x] **Practice Plan template** — `slaam_kit/SLAAM_Practice_Plan.docx` ✅ built, fillable/printable, validated
- [ ] **Drill Library** — shared drill bank (name, purpose, setup, coaching points, time) ← this is what actually normalizes coaching
- [ ] **AI plan-generator prompt** — copy-paste prompt: coach types "U14, 90 min, transition D focus" → filled plan in SLAAM format
- _Note: generator at `slaam_kit/build.js`. No LibreOffice locally → can't render image previews; docs validate clean._

### Track B — Interactive Practice Planner (prototype)
- [x] **v1 standalone HTML** — `slaam_kit/practice_planner.html` ✅ single self-contained file, offline, SLAAM-branded
  - Layout dropdowns (90-min Skills / Game-Prep / Defense&Compete / Youth / Blank) that prefill blocks
  - Editable time-blocks w/ live total vs target duration; add/remove/reorder
  - Drill Library (10 seeded SLAAM drills) — drag onto a block or "add as block"; search
  - "Add a drill you drew up" → custom drill w/ optional image (stands in for the diagram-link)
  - Save to "My Plans" (localStorage = the folder) · Export/Import JSON · Print/PDF (print CSS hides UI)
  - Data model = Drill / Plan / Folder → maps directly to Playbook port
- Plan: get coach feedback on v1/v2 before investing in real Playbook storage/backend. Macey est. ~1 week / 4-5 sessions to polish.

### Track B — SLAAM gets their own Playbook login (product)
- Give the **whole program one shared login** (NOT building multi-coach tiers yet — explicitly deferred).
- We already have the **Playbook (text→diagram) built** — minimal new work to stand SLAAM up on it.
- **New piece needed:** a **Practice Plan tab** inside the Playbook product.
  - Already on the NextEdge roadmap, just never top priority.
  - Believed to be a relatively quick build — "we have all the tools, just need to create the template" (noting: nothing is ever actually quick).
- **SLAAM Play Book** — render their actual sets in the diagram tool. Showcases the product AND captures their play data.

---

## Decisions made
- Light-touch engagement, not a full custom system. (2026-06-14)
- Deferring practice **scheduling/logistics** — lower leverage, messier. Lead with practice **planning**. (2026-06-14)
- One shared program login; **no multi-coach tiers** for now. (2026-06-14)
- Deliverables must be SLAAM-branded AND benefit NextEdge (co-brand + data). (2026-06-14)

## SLAAM identity (from slaambasketball.com, 2026-06-14)
- **Program:** SLAAM Basketball — **girls'** AAU, **Pittsburgh PA ("the 412")**. Travels PA/NY/WV/OH/MD/NJ.
- **Scale:** 23 teams, 4th grade → 17U. Tiers incl. Power 24, Select 40, E-40, Middle School + Youth.
- **Taglines:** "Built Different. Play Different." · "Loud. Fearless. Unbreakable." · "Girls Hoop Different" · "412 Pittsburgh Built."
- **Six non-negotiables:** Real Coaching · A Path Forward · Eyes On Her · A Sisterhood · Accountability · A Hometown Identity.
- **Philosophy:** "Real coaching. Real exposure." Position-less players, no lazy drills, no weekend zones, "We don't hide players. We develop them." Year-round.
- **Twitter:** @SLAAMBASKETBALL

## Open questions / need from SLAAM
- [x] **Colors** — **lime green + bright pink** (from their Twitter). Using pink `#FF2D8E` (primary) + lime `#C6FF1A` (secondary), black on white for print.
- [ ] **Logo** file (square SLAAM mark) to drop into doc headers
- [ ] Their **set plays** (for the Play Book in the diagram tool)
- [ ] Scope the **Practice Plan tab** build in the Playbook (basketball-playbook repo)

## Next steps
1. Gather SLAAM branding inputs (colors/logo/region/identity).
2. Build Track A: **SLAAM Standard + Practice Plan template** as branded `.docx`.
3. Scope the Practice Plan tab (Track B) — what's the minimal template to ship in the Playbook.
4. Stand SLAAM up on a shared Playbook login.

## Practice Plan builder — data model (2026-06-14)
Practice plan = same shape as a play (saved object in a folder). Reuses Playbook architecture.
```
Drill  = { name, category, minutes, coachingPoints, diagram }   // a diagram + metadata
Plan   = { team, date, theme, blocks: [ {label, minutes, drillRef?, notes} ] }
Folder = [ Plan, ... ]   // same folder system as plays
```
- Dropdowns = pick a **layout/template** that pre-fills blocks (e.g. "90-min skills day", "game-prep day").
- Drag a drill from the **Drill Library** into a block. Drill = a diagram drawn in the existing tool + metadata. ← NextEdge differentiator (links drawn drill → plan).
- **Build order decision:** standalone interactive **HTML prototype FIRST** (usable now + becomes the clickable spec) → then port the winning layout into the real **Practice Plan tab** in basketball-playbook (shared login, real diagram engine, server storage).
- Adjustments still pending on the two `.docx` deliverables before/while prototyping.

## Vision expansion — multi-tenant planner (2026-06-14)
Practice planner is really a **multi-tenant product**, two personas, one engine:
- **Self-serve** (AAU coach): link → layout → plan → print. localStorage OK.
- **White-glove** (D1 DOBO): their templates, their drill bank, scoped to their teams, their branding. Saves DOBO hours scripting practice. Sellable; forces the real backend.

**Tenancy model (design around this):**
```
Organization (client)  — branding, custom templates, master drill bank, tier(self|white-glove)
  └─ Team              — plan folder (this team's practice plans)
  └─ Coach (user)      — role(admin/head/assistant), team assignments
```
- Access: login → resolve org → load org branding+templates+drillBank → show assigned teams → team's plan folder. Admin/DOBO sees all teams; assistant sees hers.
- **Custom templates per client** = templates carry orgId; NextEdge authors them at onboarding for white-glove clients (= the paid service). AAU self-builds.
- **Requires the deferred backend** (auth + DB, multi-tenant). Good news: basketball-playbook is already a live SaaS → likely already has login + DB + diagram engine → planner becomes a *module*, not from scratch. **First repo check: does Playbook have org/team/multi-user concepts today, or single-user?**

**Sequencing decision (lead-eng rec):**
1. Lock the data model now (cheap, unblocks both personas).
2. Keep v1 HTML as the clickable spec — only change to answer model questions; don't polish content/cosmetics yet.
3. Build backend when triggered: D1 lead goes real, OR AAU coach validates concept. Same multi-tenant work either way.
- **Open input needed:** how real/near is the D1 opportunity? (drives whether we validate-cheap first or scope the backend now)

## Idea log (append-only)
- 2026-06-14 — Coach request: add a **practice start time** + a per-segment **clock column** so segment times roll up from the start (e.g. starts 2:00 → next block 2:08…) and the coach can check their watch against the plan to stay on pace. Shipped in planner v1.2 (also shows projected end time).
- 2026-06-14 — Coach idea: make practice plans interactive ("HTML file") inside NextEdge — like plays, stored in folders, dropdown layouts, drag-in drills they draw up. = the Practice Plan tab. Decided to prototype as standalone HTML first, then port into Playbook.
- 2026-06-14 — Framework: 3 layers of help — coach productivity (now) → player/team development (film) → the "brain" (vision). Started at Layer 1.
- 2026-06-14 — Practice plan + drill bank are the *same artifact* as "normalize coaching" — a shared format/standard.
- 2026-06-14 — Templates (print) AND product (Playbook login) are parallel, not either/or. Print = instant win; Playbook = stickier + data.
- 2026-06-14 — Practice Plan tab in Playbook: roadmap item, possible quick win since the tooling exists.
