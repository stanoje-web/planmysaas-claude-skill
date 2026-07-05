# Stage 1.3 — Jobs to be done

Generate `./planmysaas-blueprint/01-03-jobs-to-be-done.md`. Read `01-01-problem-validation.md` and `01-02-customer-personas.md` first — jobs must be grounded in those personas, not invented fresh.

## Output structure

```markdown
# Jobs to be done — <Project name>

## Core jobs, per persona

For each persona from `01-02-customer-personas.md`:

**<Persona name>**
- **Functional job:** When [situation], I want to [motivation], so I can [expected outcome].
- **Emotional job:** When [situation], I want to [motivation], so I can [expected outcome].
- **Social job:** When [situation], I want to [motivation], so I can [expected outcome].

[repeat per persona]

## Opportunity scoring

Using the Ulwick outcome-driven-innovation formula: **Opportunity Score = Importance + max(Importance − Satisfaction, 0)**, where Importance and Satisfaction are each scored 1-10 by how much the job matters and how well current solutions already satisfy it. A job that's important but poorly satisfied today scores highest — that's the underserved gap worth building for.

| Job statement | Importance (1-10) | Satisfaction (1-10) | Opportunity Score | Why |
|---|---|---|---|---|
| ... | ... | ... | ... | one-phrase justification |

(5-8 rows, sorted by Opportunity Score descending.)

## Underserved jobs

The top 3 highest-opportunity jobs from the table above. For each:
- **Job:** restate it
- **Who feels it:** which persona(s) this job belongs to
- **Product implication:** the specific feature, positioning angle, or onboarding flow this justifies
- **Why competitors miss it:** one sentence on why current solutions leave this underserved
```

## Quality rules

- Every functional/emotional/social job must use the exact "When ... I want to ... so I can ..." phrasing — no paraphrasing into generic feature wishlists.
- Jobs must trace to a specific persona's frustrations or goals in `01-02-customer-personas.md`, not be generic industry jobs invented from scratch.
- Importance and Satisfaction scores each need a one-phrase justification in the "Why" column — bare numbers with no reasoning are rejected.
- Opportunity Score must be computed with the stated formula, not eyeballed — the arithmetic in each row should visibly match Importance + max(Importance − Satisfaction, 0).
- The table must include jobs across multiple personas, not just the primary persona — secondary personas should surface at least one job each if their pains are distinct.
- The 3 underserved jobs must each yield a concrete, buildable product implication — not "improve the experience" or other vague filler.
- Don't let every job land near the top of the ranking — a real spread of scores is expected; if everything scores 8+, the scoring wasn't done honestly.

## Tone

Structured and analytical, but grounded in the personas' real language — read like a product strategy note, not an academic framework explainer.
