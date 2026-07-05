import { Link, useParams, Navigate } from "react-router-dom";
import { itemsForPhase, phaseById } from "../config/blueprintSchema";
import { phaseCompletion } from "../lib/progress";
import { metrics } from "../lib/loadBlueprint";
import ItemCard from "../components/ItemCard";
import TamSamSomChart from "../components/charts/TamSamSomChart";
import CompetitorBarChart from "../components/charts/CompetitorBarChart";
import UnitEconomicsChart from "../components/charts/UnitEconomicsChart";
import SwotQuadrant from "../components/charts/SwotQuadrant";
import PortersForcesChart from "../components/charts/PortersForcesChart";
import RiskMatrixChart from "../components/charts/RiskMatrixChart";
import PmfRadarChart from "../components/charts/PmfRadarChart";
import BmcGrid from "../components/charts/BmcGrid";
import FeaturePriorityPie from "../components/charts/FeaturePriorityPie";
import PhaseTimelineChart from "../components/charts/PhaseTimelineChart";

function PhaseCharts({ phaseId }: { phaseId: string }) {
  switch (phaseId) {
    case "phase-2":
      return (
        <div className="card p-4 mb-6">
          <div className="text-sm font-medium text-slate-300 mb-2">TAM / SAM / SOM</div>
          <TamSamSomChart data={metrics.tamSamSom} />
        </div>
      );
    case "phase-3":
      return (
        <div className="card p-4 mb-6">
          <div className="text-sm font-medium text-slate-300 mb-2">Opportunity score by competitor</div>
          <CompetitorBarChart competitors={metrics.competitors} />
        </div>
      );
    case "phase-4":
      return (
        <div className="card p-4 mb-6">
          <div className="text-sm font-medium text-slate-300 mb-2">Unit economics</div>
          <UnitEconomicsChart data={metrics.unitEconomics} />
        </div>
      );
    case "phase-5":
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="card p-4">
            <div className="text-sm font-medium text-slate-300 mb-2">SWOT</div>
            <SwotQuadrant swot={metrics.swot} />
          </div>
          <div className="card p-4">
            <div className="text-sm font-medium text-slate-300 mb-2">Porter's Five Forces</div>
            <PortersForcesChart data={metrics.portersFiveForces} />
          </div>
          <div className="card p-4">
            <div className="text-sm font-medium text-slate-300 mb-2">Risk register</div>
            <RiskMatrixChart risks={metrics.riskRegister} />
          </div>
          <div className="card p-4">
            <div className="text-sm font-medium text-slate-300 mb-2">PMF breakdown</div>
            <PmfRadarChart pmf={metrics.pmfScore} />
          </div>
          <div className="card p-4 lg:col-span-2">
            <div className="text-sm font-medium text-slate-300 mb-2">Business Model Canvas</div>
            <BmcGrid blocks={metrics.businessModelCanvas} />
          </div>
        </div>
      );
    case "phase-6":
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="card p-4">
            <div className="text-sm font-medium text-slate-300 mb-2">Feature priority mix</div>
            <FeaturePriorityPie data={metrics.featurePriority} />
          </div>
          <div className="card p-4">
            <div className="text-sm font-medium text-slate-300 mb-2">Release timeline</div>
            <PhaseTimelineChart data={metrics.buildPhases} />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function PhasePage() {
  const { phaseId } = useParams<{ phaseId: string }>();
  const phase = phaseId ? phaseById(phaseId) : undefined;
  if (!phase) return <Navigate to="/" replace />;

  const items = itemsForPhase(phase.id);
  const c = phaseCompletion(phase.id);

  return (
    <div>
      <Link to="/" className="text-xs text-slate-500 hover:text-slate-300">
        ← Overview
      </Link>
      <div className="flex items-center gap-2 mt-2 mb-6">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: phase.color }} />
        <h1 className="text-xl font-bold text-white">{phase.label}</h1>
        <span className="badge bg-surface2 text-slate-400 ml-1">
          {c.done}/{c.total}
        </span>
      </div>

      <PhaseCharts phaseId={phase.id} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
