# Stage 11 — Review dashboard (React + Vite)

This is the final stage. It does **not** generate a markdown file — it scaffolds a working local website so the founder can browse the entire blueprint visually, with charts, instead of reading 34 markdown files one by one.

Run this only after every stage in phases 1–5 and stages 06–10 have been generated (or the user has explicitly said to stop early — see "Partial blueprints" below).

## What to do, in order

1. **Copy the template.** Copy the skill's `templates/dashboard/` folder into `./planmysaas-blueprint/dashboard/` in the user's project. Copy every file (`package.json`, `vite.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.js`, `index.html`, `.gitignore`, and everything under `src/`). Do not modify any `.tsx`/`.ts`/`.css` file — the template is already built and tested. The only file you edit is `src/data/metrics.json`.

2. **Fill `dashboard/src/data/metrics.json`.** Read `templates/dashboard/src/data/metrics.schema.md` for the exact shape (also copied to `dashboard/src/data/metrics.schema.md` for reference — you can delete that copy after, it's documentation, not app code). Read through every generated blueprint markdown file and extract:
   - Project name + one-liner → from `01-01-problem-validation.md`
   - PMF score + 6-dimension breakdown → from `05-10-pmf-score.md`
   - TAM/SAM/SOM (use the midpoint of each range, raw numbers, no symbols) → from `02-01-tam-sam-som.md`
   - Competitors + opportunity scores → from `03-01-competitive-landscape.md`
   - SWOT (short phrases) → from `05-05-swot.md`
   - Porter's Five Forces (all 5) → from `05-06-porters-five-forces.md`
   - Risk register rows → from `05-08-risk-register.md`
   - Unit economics (CAC/LTV/ARPU/margin/payback) → from `04-02-unit-economics.md`
   - Feature priority counts (count P0/P1/P2/P3 in the feature index table) → from `07-features.md`
   - Pricing tiers → from `04-01-willingness-to-pay.md`
   - Build phase durations in weeks → from `09-release-plan.md`
   - Business Model Canvas (all 9 blocks) → from `05-07-business-model-canvas.md`

   Write valid JSON (no comments, no trailing commas). If a source stage doesn't exist yet, leave that field `null`/`[]` — never invent numbers.

3. **Never touch the 34 blueprint markdown files from this step.** The dashboard reads them directly at build time (via `import.meta.glob`) — you do not copy or duplicate their content anywhere.

4. **Install dependencies.** Run in `./planmysaas-blueprint/dashboard/`:
   ```
   npm install
   ```

5. **Verify it builds.** Run:
   ```
   npm run build
   ```
   If it fails, the template itself has a bug — do not attempt to hand-patch component files; report the exact error to the user instead of improvising new React code.

6. **Tell the user how to view it** (see final message format below). Do not run `npm run dev` yourself and leave a long-lived process — just confirm the build succeeded and hand off the command.

## Partial blueprints

If the user stopped before all 34 files were generated, still run this stage. The dashboard shows ungenerated items with a "hasn't been generated yet" state and an empty-state message on any chart lacking data — it's designed to work at any completion percentage. Fill `metrics.json` with whatever real data exists; leave the rest empty.

## Final message for this stage

```
✓ Dashboard scaffolded at ./planmysaas-blueprint/dashboard/

  cd planmysaas-blueprint/dashboard
  npm run dev

Opens a local dashboard with all 34 artifacts, phase progress, and charts
(PMF radar, competitor scores, TAM/SAM/SOM, risk matrix, unit economics,
SWOT, Porter's Five Forces, Business Model Canvas, feature mix, release timeline).
```

## Quality rules

- `metrics.json` must stay valid JSON — validate mentally before writing (matching brackets, no trailing commas, numbers unquoted).
- Every number must trace back to something actually written in a blueprint stage. If you can't find a number, omit it — don't estimate on the dashboard's behalf; that's the blueprint stages' job, not this one's.
- Don't add new npm dependencies to `package.json` and don't edit any React component — if a chart looks wrong, the fix belongs in the template (report it), not a runtime patch.

## Tone

Terse and mechanical — this stage is data extraction and a build check, not creative writing.
