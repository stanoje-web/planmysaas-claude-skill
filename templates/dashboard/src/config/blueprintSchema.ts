// Static blueprint structure — identical for every generated project.
// Per-project content lives in the .md files (../*.md) and src/data/metrics.json.

export interface Phase {
  id: string;
  label: string;
  kind: "research" | "build";
  color: string;
}

export interface BlueprintItem {
  id: string;
  file: string;
  title: string;
  phaseId: string;
}

export const phases: Phase[] = [
  { id: "phase-1", label: "Problem & Customer", kind: "research", color: "#ff7a1a" },
  { id: "phase-2", label: "Market", kind: "research", color: "#f5a524" },
  { id: "phase-3", label: "Competition", kind: "research", color: "#e5484d" },
  { id: "phase-4", label: "Economics", kind: "research", color: "#2dd4bf" },
  { id: "phase-5", label: "Risk, Legal & Synthesis", kind: "research", color: "#a78bfa" },
  { id: "phase-6", label: "Build Blueprint", kind: "build", color: "#38bdf8" },
];

export const items: BlueprintItem[] = [
  // Phase 1 — Problem & Customer
  { id: "01-01", file: "01-01-problem-validation.md", title: "Problem Validation", phaseId: "phase-1" },
  { id: "01-02", file: "01-02-customer-personas.md", title: "Customer Personas", phaseId: "phase-1" },
  { id: "01-03", file: "01-03-jobs-to-be-done.md", title: "Jobs To Be Done", phaseId: "phase-1" },
  { id: "01-04", file: "01-04-founder-market-fit.md", title: "Founder-Market Fit", phaseId: "phase-1" },
  { id: "01-05", file: "01-05-customer-interview-plan.md", title: "Customer Interview Plan", phaseId: "phase-1" },

  // Phase 2 — Market
  { id: "02-01", file: "02-01-tam-sam-som.md", title: "TAM / SAM / SOM", phaseId: "phase-2" },
  { id: "02-02", file: "02-02-why-now.md", title: "Why Now", phaseId: "phase-2" },
  { id: "02-03", file: "02-03-demand-signals.md", title: "Demand Signals", phaseId: "phase-2" },
  { id: "02-04", file: "02-04-analogies-post-mortems.md", title: "Analogies & Post-mortems", phaseId: "phase-2" },

  // Phase 3 — Competition
  { id: "03-01", file: "03-01-competitive-landscape.md", title: "Competitive Landscape", phaseId: "phase-3" },
  { id: "03-02", file: "03-02-switching-costs.md", title: "Switching Costs", phaseId: "phase-3" },
  { id: "03-03", file: "03-03-brand-naming.md", title: "Brand & Naming", phaseId: "phase-3" },

  // Phase 4 — Economics
  { id: "04-01", file: "04-01-willingness-to-pay.md", title: "Willingness to Pay", phaseId: "phase-4" },
  { id: "04-02", file: "04-02-unit-economics.md", title: "Unit Economics", phaseId: "phase-4" },
  { id: "04-03", file: "04-03-distribution-channels.md", title: "Distribution Channels", phaseId: "phase-4" },
  { id: "04-04", file: "04-04-content-seo-landscape.md", title: "Content & SEO Landscape", phaseId: "phase-4" },

  // Phase 5 — Risk, Legal & Synthesis
  { id: "05-01", file: "05-01-legal-regulatory.md", title: "Legal & Regulatory", phaseId: "phase-5" },
  { id: "05-02", file: "05-02-founder-side-legal.md", title: "Founder-Side Legal", phaseId: "phase-5" },
  { id: "05-03", file: "05-03-tech-stack-lock-in.md", title: "Tech-Stack Lock-in", phaseId: "phase-5" },
  { id: "05-04", file: "05-04-talent-hiring.md", title: "Talent & Hiring", phaseId: "phase-5" },
  { id: "05-05", file: "05-05-swot.md", title: "SWOT", phaseId: "phase-5" },
  { id: "05-06", file: "05-06-porters-five-forces.md", title: "Porter's Five Forces", phaseId: "phase-5" },
  { id: "05-07", file: "05-07-business-model-canvas.md", title: "Business Model Canvas", phaseId: "phase-5" },
  { id: "05-08", file: "05-08-risk-register.md", title: "Risk Register", phaseId: "phase-5" },
  { id: "05-09", file: "05-09-validation-experiments.md", title: "Validation Experiments", phaseId: "phase-5" },
  { id: "05-10", file: "05-10-pmf-score.md", title: "PMF Score", phaseId: "phase-5" },
  { id: "05-11", file: "05-11-the-roast.md", title: "The Roast", phaseId: "phase-5" },
  { id: "05-12", file: "05-12-executive-summary.md", title: "Executive Summary", phaseId: "phase-5" },
  { id: "05-13", file: "05-13-research-synthesis.md", title: "Research Synthesis", phaseId: "phase-5" },

  // Phase 6 — Build Blueprint (architecture through build playbook)
  { id: "06", file: "06-architecture.md", title: "System Architecture", phaseId: "phase-6" },
  { id: "07", file: "07-features.md", title: "Feature Specs", phaseId: "phase-6" },
  { id: "08", file: "08-frontend.md", title: "Frontend Blueprint", phaseId: "phase-6" },
  { id: "09", file: "09-release-plan.md", title: "Release Plan", phaseId: "phase-6" },
  { id: "10", file: "10-build-playbook.md", title: "Build Playbook", phaseId: "phase-6" },
];

export function itemsForPhase(phaseId: string): BlueprintItem[] {
  return items.filter((i) => i.phaseId === phaseId);
}

export function phaseById(phaseId: string): Phase | undefined {
  return phases.find((p) => p.id === phaseId);
}

export function itemByFile(file: string): BlueprintItem | undefined {
  return items.find((i) => i.file === file);
}
