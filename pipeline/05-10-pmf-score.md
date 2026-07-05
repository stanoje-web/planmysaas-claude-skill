# Stage 5.10 — PMF score

Generate `./planmysaas-blueprint/05-10-pmf-score.md`. Read `05-05-swot.md`, `05-06-porters-five-forces.md`, `04-01-willingness-to-pay.md`, and `02-03-demand-signals.md` first — every dimension score below must trace to a specific finding in one of these.

This is tracked as its own standalone artifact so it can be revisited on its own as new evidence comes in — the score is a living number, not a one-time verdict.

## Output structure

```markdown
# PMF score — <Project name>

> An honest number, not an encouraging one. Founders act on this — it has to be true.

## Overall score · /100
Single number + a one-line label (e.g. "58 — Real problem, thin differentiation"). 2-3 sentences of reasoning immediately below, citing the strongest and weakest contributing dimensions.

## Score interpretation guide
Brief reference so the number means something concrete: below 40 = fundamental rethink needed before building anything; 40-55 = real signal exists but at least one core assumption is unvalidated; 56-70 = promising, worth building toward with the risks in `05-08-risk-register.md` actively managed; above 70 = strong signal across most dimensions, reserved for cases with genuine first-hand validation, not projection.

## Score breakdown (6 dimensions)

Each scored 0-100 with a 1-2 sentence reasoning grounded in a specific finding from the read files:

1. **Problem Clarity** — how sharply defined and evidenced the problem is (draw on demand signals). A score above 80 requires first-hand evidence, not inference.
2. **Solution Fit** — how directly the product resolves the problem for the primary persona, and whether the fit is narrow-and-sharp or broad-and-shallow.
3. **Market Size** — grounded in whatever market-size signal is available (directional if no hard TAM data exists — say so explicitly rather than implying precision that doesn't exist).
4. **Willingness to Pay** — grounded directly in `04-01-willingness-to-pay.md`'s price-sensitivity findings, including whether those findings were survey-based or purely hypothesis-based.
5. **Competitive Advantage** — grounded in the SWOT and Porter's Five Forces findings, weighing both the strength of the moat and the intensity of rivalry.
6. **Execution Readiness** — grounded in founder-market-fit signal available from earlier research, including any hiring gaps flagged elsewhere in Phase 5.

## How the overall score is weighted
1-2 sentences: state plainly whether the overall score is a simple average of the six dimensions or a weighted one (and if weighted, which dimensions carry more weight and why — e.g. Willingness to Pay and Problem Clarity should usually weigh more than Execution Readiness at this pre-build stage).

## How to re-score this later
1 sentence: which dimension should be re-scored first once new evidence comes in (typically Willingness to Pay or Market Size, since those are most often built on directional hypotheses rather than hard data).

## Verdict
1 paragraph: what this score means in practice — is this a "build now" signal, a "validate one more thing first" signal, or a "the core assumption needs to change" signal. Name the single most important thing that would move the score up 10+ points, and roughly how (which validation experiment or evidence would do it).

## Score sensitivity
1-2 sentences: name the one input that, if it turned out wrong, would move the overall score the most (e.g. "if the willingness-to-pay hypothesis in `04-01-willingness-to-pay.md` fails validation, this score drops by roughly 15 points" — illustrative, replace with the real reasoning for this project).
```

## Quality rules

- The score must be honest. If the underlying signal is weak or unvalidated, score 40-55 and say exactly why — do not round up to sound encouraging. Founders need the truth, not reassurance.
- Every dimension score needs a reasoning sentence citing a specific fact from a read file — a bare number is rejected.
- Do not let all six dimensions cluster near the same score out of habit — real ideas have uneven profiles (e.g. strong problem clarity, weak competitive advantage). Reflect that unevenness.
- If `04-01-willingness-to-pay.md` explicitly flagged its numbers as unvalidated hypotheses, the Willingness to Pay dimension score must reflect that uncertainty, not treat the hypothesis as confirmed fact.
- The weighting explanation must be consistent with the overall score shown — if dimensions are weighted, the overall number must actually reflect that weighting, not just be an unweighted average presented as if it were.

## Tone

Senior advisor delivering a scorecard, not a cheerleader. Confident, specific, willing to say a number is mediocre when it is.
