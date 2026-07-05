import { phases } from "../config/blueprintSchema";
import { overallCompletion } from "../lib/progress";
import { metrics } from "../lib/loadBlueprint";
import PhaseGroup from "../components/PhaseGroup";
import StatCard from "../components/StatCard";
import PmfRadarChart from "../components/charts/PmfRadarChart";
import CompetitorBarChart from "../components/charts/CompetitorBarChart";
import RiskMatrixChart from "../components/charts/RiskMatrixChart";

export default function Overview() {
  const overall = overallCompletion();
  const pct = overall.total ? Math.round((overall.done / overall.total) * 100) : 0;

  return (
    <div>
      <header className="mb-8">
        <div className="text-xs font-medium text-brand mb-2 uppercase tracking-wider">
          Blueprint Dashboard
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          {metrics.project.name || "Your SaaS"}
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          {metrics.project.oneLiner || "Generate your blueprint with /planmysaas to populate this dashboard."}
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard label="Overall progress" value={`${pct}%`} sublabel={`${overall.done}/${overall.total} artifacts`} accent="#ff7a1a" />
        <StatCard
          label="PMF score"
          value={metrics.pmfScore ? `${metrics.pmfScore.overall}/100` : "—"}
          sublabel={metrics.pmfScore?.label}
        />
        <StatCard
          label="SOM (year 1)"
          value={
            metrics.tamSamSom
              ? `${metrics.tamSamSom.currency} ${(metrics.tamSamSom.som / 1_000_000).toFixed(1)}M`
              : "—"
          }
          sublabel={metrics.tamSamSom ? `confidence: ${metrics.tamSamSom.confidence}` : undefined}
        />
        <StatCard
          label="LTV : CAC"
          value={
            metrics.unitEconomics && metrics.unitEconomics.cac > 0
              ? `${(metrics.unitEconomics.ltv / metrics.unitEconomics.cac).toFixed(1)}:1`
              : "—"
          }
          sublabel={metrics.unitEconomics ? `payback ${metrics.unitEconomics.paybackMonths}mo` : undefined}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
        <div className="card p-4">
          <div className="text-sm font-medium text-slate-300 mb-2">PMF breakdown</div>
          <PmfRadarChart pmf={metrics.pmfScore} />
        </div>
        <div className="card p-4">
          <div className="text-sm font-medium text-slate-300 mb-2">Competitive landscape</div>
          <CompetitorBarChart competitors={metrics.competitors} />
        </div>
        <div className="card p-4">
          <div className="text-sm font-medium text-slate-300 mb-2">Risk register</div>
          <RiskMatrixChart risks={metrics.riskRegister} />
        </div>
      </div>

      {phases.map((phase) => (
        <PhaseGroup key={phase.id} phase={phase} />
      ))}
    </div>
  );
}
