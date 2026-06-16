# SLAAM × NextEdge — Partnership & Build Tracker

**Status:** v1 deliverables shipped & **live** → coach is testing; Playbook-tab scope now **grounded** in the basketball-playbook code; next = onboarding kit + build
**Owner:** Macey
**Started:** 2026-06-14 · **Last updated:** 2026-06-16
**Engagement level:** Light-touch. Easy wins for the coach, real upside for NextEdge. Not building a full custom system.

**Live (GitHub Pages, auto-deploys from `main`):**
- Practice Planner — https://maceyhollenshead.github.io/slaam-practice-planner/
- Drill Library — https://maceyhollenshead.github.io/slaam-practice-planner/drills.html

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
- [x] **The SLAAM Standard** (1-pager) — `SLAAM_Standard.docx` ✅ built, branded (pink/lime), validated
- [x] **Practice Plan template** — `SLAAM_Practice_Plan.docx` ✅ built, fillable/printable, validated
- [x] **Drill Library** — `drills.html` ✅ shared, searchable, printable SLAAM drill bank (30 drills: purpose, setup, coaching points, time, age level), branded + linked from the planner; same drills seeded into the planner's in-tool library. ← this is what actually normalizes coaching. Next: swap in the coach's real drills.
- [ ] **AI plan-generator prompt** — copy-paste prompt: coach types "U14, 90 min, transition D focus" → filled plan in SLAAM format
- _Note: generator at `build.js` (`node build.js` regenerates both .docx). No LibreOffice locally → can't render image previews; docs validate clean._

### Track B — Interactive Practice Planner (prototype) — v1.3, LIVE
- [x] **Standalone HTML, deployed** — `index.html` (+ identical `practice_planner.html`) ✅ single self-contained file, offline, SLAAM-branded, live on GitHub Pages
  - Template picker ("SLAAM Default" + "Save as template" to build presets) that prefills segments
  - Editable time-segments w/ live total vs target duration; add/remove/reorder
  - **Start time + clock column (v1.2):** set when practice starts → each segment shows its wall-clock start, re-times on any change, shows projected end (coach checks watch vs plan)
  - **Mobile/iPhone friendly (v1.3):** table reshapes into tap cards, 16px inputs (no zoom), finger-sized buttons, tap-to-add drills (drag still works on laptop)
  - Drill Library (**30** seeded SLAAM drills) — drag onto a segment or tap "+ add as segment"; search · links to the full `drills.html`
  - "Add a drill you drew up" → custom drill w/ optional image (stands in for the diagram-link)
  - Save to "My Plans" (localStorage = the folder, **per-device**) · Export/Import JSON · Print/PDF (print CSS hides UI)
  - Data model = Drill / Plan / Folder → maps directly to Playbook port
- Plan: get coach feedback on the live link before investing in real Playbook storage/backend. Macey est. ~1 week / 4-5 sessions to polish.

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
- **Playbook port direction (2026-06-15):** add the **Practice Planner as a new tab inside basketball-playbook** on a **single shared SLAAM login** (~~Playbook is single-user today~~ — *corrected 2026-06-16: it already has team-level multi-user; see "Grounded Playbook scope" below*). Do NOT build real multi-user/roles until usage justifies it. Design the schema **forward-compatible** (stub `orgId`/`teamId` on Plan/Drill now) so multi-tenant is a later wrapper, not a rewrite. Accepted trade-offs of shared login: no per-coach attribution, everyone can edit/delete everything, one shared password.
- ~~**Next investigative step:** read `basketball-playbook`...~~ **Done 2026-06-16** → see "Grounded Playbook scope (2026-06-16)" below. The single-shared-login direction holds; only the "single-user today" premise was off (team/role tables already exist).

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
- [ ] Their **real drills** (to replace the 30 placeholder drills in the library = makes it truly "the SLAAM way" + captures IP)
- [ ] Which **scheduling** pain he means (gym slots vs coach availability vs parent comms) — drives whether/what we build there
- [x] Scope the **Practice Plan tab** in the Playbook — *direction decided (2026-06-15); **grounded scope delivered 2026-06-16** from a `basketball-playbook` session (see "Grounded Playbook scope" below)*

## Next steps
**Done:** branding gathered · SLAAM Standard + Practice Plan `.docx` · interactive planner (v1.3, start-time/clock + mobile) · Drill Library (30 drills) · deployed live on GitHub Pages.
1. **Coach tests the live link** — gather feedback on the planner + drill library.
2. **Collect his real inputs** — his drills (→ replace placeholders), logo, set plays; clarify the scheduling pain.
3. **Build the onboarding kit** ("The SLAAM Way") — non-negotiables card + terminology glossary + "how to run a SLAAM practice" 1-pager (bundles with Standard + plan + drills).
4. **AI plan-generator** — Tier 1 copy-paste prompt (quick win for his "no AI for planning" gap).
5. **Scope the Practice Plan tab** in a session scoped to `basketball-playbook` (use the kickoff prompt below) → grounded phase plan → stand SLAAM up on a shared login.

## Next-session kickoff prompt (Playbook-tab scoping)
Paste into a new session scoped to `basketball-playbook` **and** `slaam-practice-planner`:
> We're extending the NextEdge Playbook (basketball-playbook) to add a Practice Planner. Context, decisions, and the data model are in `slaam-practice-planner/SLAAM_TRACKER.md` — read that first (esp. the 2026-06-15 "Playbook port direction"). Then investigate the basketball-playbook codebase and tell me, grounded in the actual code: the stack/framework and whether it uses Supabase (auth + Postgres); what auth exists today (single-user? how do logins work?); the data model (how plays, folders, diagrams are stored — tables/migrations/types); whether any org/team/multi-user concepts exist; and how the diagram editor works at a high level. Then give me a grounded, phase-by-phase scope to add a Practice Planner **tab** on a **single shared login**, reusing existing auth/DB/diagram engine, with a forward-compatible schema (stub orgId/teamId), using the HTML prototype (index.html, drills.html) as the clickable spec. Don't write code yet — investigation + scope first.

## Grounded Playbook scope (2026-06-16, from a basketball-playbook session)
Read the real `basketball-playbook` code (migrations, FastAPI routes/models, React auth + diagram editor, the two prototype HTML files). Findings vs. our 2026-06-15 assumptions:

**Stack (confirmed):** React+TS+Vite on Vercel · FastAPI on Railway · **Supabase = both Postgres AND auth** · Stripe ($5/mo, gates a read-only mode) · Modal/YOLO for the video path (irrelevant to the planner).

**Auth (correction):** login is Supabase email/password; JWT sent as Bearer on every API call; backend verifies via `supabase.auth.get_user`. It is **NOT single-user** — there's already a `team_role` enum (`admin/coach/assistant/player`) with RBAC (players can't edit; only coaches/admins delete). The **single shared login still works with zero auth changes**: provision one Supabase user → one team (role `admin`); the Playbook page auto-selects `teams[0]`. ⚠️ That shared account must be subscription-`active` or the diagram editor is read-only.

**Data model (confirmed + refined):** `teams` → `team_members(role)` → `folders(team_id)` → `plays(team_id, created_by, diagram_data JSONB, folder_id, tags, is_public, public_slug)`. RLS on every table **and** in-code membership checks (backend uses the service-role key, which bypasses RLS — so new tables need both). A **play = a row whose `diagram_data` JSONB is the whole diagram** (`{frames, currentFrameIndex, courtType}`).

**Org/team reality (the key correction):** team-level multi-user **already exists**; **org-level does NOT** (no `organizations` table, no per-org branding/templates/drill-bank). So `teamId` is **real and enforced today — it does NOT need stubbing**; only **`orgId` is the genuinely missing forward-compat stub**. Our 2026-06-14 data-model block (below) over-stubs `teamId`; treat it as a real FK, not a placeholder.

**Diagram editor (reusable as-is):** `DiagramEditor` is a self-contained forwardRef component — props `initialData: PlayDiagramData`, `onSave(data, name)`, `onBack`, handle exposes `hasUnsavedChanges`/`save()`. Multi-frame animation + jsPDF export built in. It knows nothing about "plays" — it just edits a diagram blob. **A drill = same artifact as a play (diagram + metadata)** → reuse this component verbatim. A **Plan is NOT a diagram** (it's a list of segments that *reference* drills) → it needs its own table/JSONB.

**Phase-by-phase scope (single shared login, reuse auth/DB/editor, stub `orgId`):**
0. **Lock decisions:** confirm shared-login provisioning + `active` sub; pick drill storage (rec: new `drills` table mirroring `plays`, vs. reuse `plays` with a discriminator); freeze Plan/Segment + Drill JSON from the prototype; stub nullable `org_id` on new tables (`team_id` already real).
1. **Provision SLAAM** (little/no code): one user + team + admin membership; verify they can already use Playbook + editor.
2. **Migrations `005`:** `drills`, `practice_plans` (segments JSONB, each seg optional `drill_id`), `practice_templates`; RLS mirroring `plays`; seed the 30 SLAAM drills + "SLAAM Default" template.
3. **Backend:** `drills` / `practice_plans` / `practice_templates` Pydantic models + CRUD routes (copy `plays.py`/`folders.py` membership pattern); register in `api/__init__.py`; add client fns to `services/api.ts`.
4. **Frontend tab:** one `navItems` entry in `Layout.tsx` + nested `/dashboard/practice` route in `App.tsx`; port `index.html` (details, focus chips, **segments table w/ rolling clock column**, total-vs-target pill, templates, drill-library panel); plans list reuses the folder sidebar; Supabase persistence + print/PDF CSS.
5. **Differentiator:** drill ⇄ diagram — "draw a drill" opens `DiagramEditor`; segments link to a drill's diagram.
6. **Branding/forward-compat:** SLAAM theme as *per-team* now (the seam where per-*org* branding lands later); leave `org_id` nullable; document the `organizations` migration path.

**Process note:** `frontend/CLAUDE.md` mandates plan-first + **never push `main`** (Vercel/Railway auto-deploy from it); work on `dev`. The reusable engine + auth/DB mean the planner is a **module, not a rebuild** — new work ≈ 3 tables + 3 CRUD routes + porting the prototype UI.

## Practice Plan builder — data model (2026-06-14)
Practice plan = same shape as a play (saved object in a folder). Reuses Playbook architecture.
```
Drill  = { orgId, name, category, minutes, purpose, setup, coachingPoints, ageLevel, diagram }  // a diagram + metadata
Plan   = { orgId, teamId, team, date, theme, startTime, blocks: [ {label, minutes, drillRef?, notes} ] }
Folder = [ Plan, ... ]   // same folder system as plays
```
- **Forward-compatible note (2026-06-15):** include `orgId`/`teamId` from day one even on the single shared login (one org today). Multi-tenant then becomes filtering by org/team, not a schema rewrite. `startTime` already shipped in the HTML prototype (clock column).
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

## Coach reply + build backlog (2026-06-14)
Coach's words after seeing v1: *"I'm using AI a little for design, not at all for planning. Would love to find a way to automate scheduling for practices or improve practice planning. Building any tools to share with new coaches would be a huge win for me too as we're trying to normalize some coaching across the program!"*
- Confirms the two pillars (planning + normalize-coaching) and explicitly names **scheduling** (previously deferred) and **AI-for-planning gap** ("not at all for planning").
- **Build backlog (priority order):**
  1. **Drill Library / "SLAAM Playbook of drills"** — shared drill bank in SLAAM voice; the core normalize-coaching asset + IP capture. (low effort)
  2. **"The SLAAM Way" coach onboarding kit** — bundle the Standard + plan template + drill library + a non-negotiables card + terminology glossary + "how to run a SLAAM practice" 1-pager. The shareable kit for new coaches. (content work, fast)
  3. **AI plan-generator** — directly fills his "not using AI for planning" gap. Tier 1: copy-paste prompt now; Tier 2: "Generate with AI" button in the planner. (low → medium)
  4. **Scheduling (scope first)** — he asked for it but it's messy and means different things (gym slots vs coach availability vs parent comms). Light version: recurring practice-calendar generator + printable month / .ics export. Heavy version (availability/gym optimization): defer. NEED: clarify his actual scheduling pain.
  5. **AI-for-design (adjacent, low priority)** — branded social/game-day graphic templates; he values design but it's off NextEdge's core.

## Idea log (append-only)
- 2026-06-14 — Coach reply confirms planning + normalize-coaching as top wants, adds scheduling + flags he does NO AI planning yet. Logged as build backlog above. Deployed v1.3 to GitHub Pages (live link) for him to test.
- 2026-06-14 — Coach request: add a **practice start time** + a per-segment **clock column** so segment times roll up from the start (e.g. starts 2:00 → next block 2:08…) and the coach can check their watch against the plan to stay on pace. Shipped in planner v1.2 (also shows projected end time).
- 2026-06-14 — Coach idea: make practice plans interactive ("HTML file") inside NextEdge — like plays, stored in folders, dropdown layouts, drag-in drills they draw up. = the Practice Plan tab. Decided to prototype as standalone HTML first, then port into Playbook.
- 2026-06-14 — Framework: 3 layers of help — coach productivity (now) → player/team development (film) → the "brain" (vision). Started at Layer 1.
- 2026-06-14 — Practice plan + drill bank are the *same artifact* as "normalize coaching" — a shared format/standard.
- 2026-06-14 — Templates (print) AND product (Playbook login) are parallel, not either/or. Print = instant win; Playbook = stickier + data.
- 2026-06-14 — Practice Plan tab in Playbook: roadmap item, possible quick win since the tooling exists.
- 2026-06-16 — Scoped the Playbook tab against the real `basketball-playbook` code (see "Grounded Playbook scope"). Confirms it's Supabase auth+Postgres with a reusable `DiagramEditor` → planner is a module, not a rebuild. **Correction to the 2026-06-15 premise:** Playbook is NOT single-user — `teams`/`team_members`/role enum already exist, so `teamId` is a real enforced FK (only `orgId` needs stubbing). Single-shared-login direction still holds (provision one user+team). Caveat: the shared account must hold an active subscription or the editor goes read-only.
