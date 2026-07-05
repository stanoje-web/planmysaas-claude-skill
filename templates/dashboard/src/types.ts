export interface PmfBreakdownItem {
  dimension: string;
  score: number;
  reasoning?: string;
}

export interface PmfScore {
  overall: number;
  label: string;
  breakdown: PmfBreakdownItem[];
}

export interface TamSamSom {
  tam: number;
  sam: number;
  som: number;
  currency: string;
  confidence: "low" | "medium" | "high";
}

export interface Competitor {
  name: string;
  type: "Direct" | "Adjacent" | "Substitute" | "Manual alternative";
  opportunityScore: number;
}

export interface Swot {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface PorterForce {
  force: string;
  score: number;
  label: "Low" | "Medium" | "High";
}

export interface RiskItem {
  risk: string;
  category: string;
  likelihood: number;
  impact: number;
}

export interface UnitEconomics {
  cac: number;
  ltv: number;
  arpu: number;
  grossMarginPct: number;
  paybackMonths: number;
  currency: string;
}

export interface FeaturePriorityCount {
  priority: "P0" | "P1" | "P2" | "P3";
  count: number;
}

export interface WillingnessToPayTier {
  tier: string;
  price: number;
  currency: string;
}

export interface BuildPhaseItem {
  phase: string;
  weeks: number;
}

export interface BusinessModelCanvasBlock {
  block: string;
  items: string[];
}

export interface BlueprintMetrics {
  project: {
    name: string;
    oneLiner: string;
    generatedAt: string;
  };
  pmfScore: PmfScore | null;
  tamSamSom: TamSamSom | null;
  competitors: Competitor[];
  swot: Swot | null;
  portersFiveForces: PorterForce[];
  riskRegister: RiskItem[];
  unitEconomics: UnitEconomics | null;
  featurePriority: FeaturePriorityCount[];
  willingnessToPay: WillingnessToPayTier[];
  buildPhases: BuildPhaseItem[];
  businessModelCanvas: BusinessModelCanvasBlock[];
}
