# Stage 1.4 — Founder-market fit

Generate `./planmysaas-blueprint/01-04-founder-market-fit.md`. Read `01-01-problem-validation.md` first to anchor the assessment to this specific problem and market — not founder fit in the abstract.

This stage assesses the FOUNDER's fit to the market, not the product's fit to the customer. The AI does not know the founder's real background — it builds the scoring framework and explicitly asks the founder to fill in honest self-scores rather than inventing any.

## Output structure

```markdown
# Founder-market fit — <Project name>

## Scoring framework

For each dimension: what "strong" looks like for THIS specific idea, what "weak" looks like, and a self-assessment the founder must complete honestly.

### 1. Domain expertise
What strong looks like here: <specific to this problem/market, e.g. "has worked inside this industry, understands its jargon and workflows">.
What weak looks like here: <e.g. "learned about this problem secondhand, no operating experience in the space">.
**Founder should score honestly here (1-10):** ___ — reasoning: ___

### 2. Network / distribution access
What strong looks like here: <e.g. "already has an audience or relationships with the exact buyer persona">.
What weak looks like here: <e.g. "would be cold-starting distribution from zero">.
**Founder should score honestly here (1-10):** ___ — reasoning: ___

### 3. Personal pain
What strong looks like here: <did the founder live this exact problem themselves, recently and repeatedly>.
What weak looks like here: <founder is solving a problem they observed in others, not lived>.
**Founder should score honestly here (1-10):** ___ — reasoning: ___

### 4. Unfair advantages
What strong looks like here: <credentials, existing audience, proprietary data or access unique to this founder>.
What weak looks like here: <no differentiated access — anyone could start this the same way>.
**Founder should score honestly here (1-10):** ___ — reasoning: ___

### 5. Time / conviction commitment
What strong looks like here: <full-time or near-full-time, funded runway, clear multi-year commitment>.
What weak looks like here: <side-project hours, no runway, easily distracted by other priorities>.
**Founder should score honestly here (1-10):** ___ — reasoning: ___

## Founder-Market Fit verdict

**Fit level:** Strong / Moderate / Weak _(founder fills in once scores above are honest — do not pre-select this)_
Reasoning template: state which dimensions carried the score and which dragged it down.

## Gaps to close

3-4 concrete ways to close the weakest dimensions — pick from: recruiting an advisor, co-founder search targeting the missing skill, a customer-immersion plan (e.g. "spend 2 weeks doing the job manually for 5 customers"), credibility-building content (writing/shipping in public to build the missing audience). Tie each suggestion to the specific dimension it closes.
```

## Quality rules

- Never fabricate a founder's background, credentials, or network — this file is a framework and a set of blank prompts, not a filled-in profile.
- Every "strong/weak" description must be specific to this idea's market, not generic startup advice ("strong = passionate about the space" is rejected).
- Self-assessment fields must literally instruct the founder to score honestly, not contain an AI-invented number.
- The Fit level in the verdict must not be pre-selected by the AI — leave it for the founder to conclude once they've scored themselves, though you may note which outcome the framework points toward if scores are left blank.
- Gaps to close must each map to a specific weak dimension, not be generic startup-advice filler.

## Tone

Direct and framework-driven. Write like a coach handing over a diagnostic tool, not like someone assessing a person they've never met.
