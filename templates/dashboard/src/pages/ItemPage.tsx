import { Link, Navigate, useParams } from "react-router-dom";
import { items, phaseById } from "../config/blueprintSchema";
import { getItemContent } from "../lib/loadBlueprint";
import { metrics } from "../lib/loadBlueprint";
import MarkdownView from "../components/MarkdownView";
import PmfRadarChart from "../components/charts/PmfRadarChart";
import CompetitorBarChart from "../components/charts/CompetitorBarChart";
import RiskMatrixChart from "../components/charts/RiskMatrixChart";
import TamSamSomChart from "../components/charts/TamSamSomChart";
import UnitEconomicsChart from "../components/charts/UnitEconomicsChart";
import SwotQuadrant from "../components/charts/SwotQuadrant";
import PortersForcesChart from "../components/charts/PortersForcesChart";
import BmcGrid from "../components/charts/BmcGrid";
import FeaturePriorityPie from "../components/charts/FeaturePriorityPie";
import PhaseTimelineChart from "../components/charts/PhaseTimelineChart";

function ItemChart({ itemId }: { itemId: string }) {
  switch (itemId) {
    case "02-01":
      return <TamSamSomChart data={metrics.tamSamSom} />;
    case "03-01":
      return <CompetitorBarChart competitors={metrics.competitors} />;
    case "04-02":
      return <UnitEconomicsChart data={metrics.unitEconomics} />;
    case "05-05":
      return <SwotQuadrant swot={metrics.swot} />;
    case "05-06":
      return <PortersForcesChart data={metrics.portersFiveForces} />;
    case "05-07":
      return <BmcGrid blocks={metrics.businessModelCanvas} />;
    case "05-08":
      return <RiskMatrixChart risks={metrics.riskRegister} />;
    case "05-10":
      return <PmfRadarChart pmf={metrics.pmfScore} />;
    case "07":
      return <FeaturePriorityPie data={metrics.featurePriority} />;
    case "09":
      return <PhaseTimelineChart data={metrics.buildPhases} />;
    default:
      return null;
  }
}

export default function ItemPage() {
  const { itemId } = useParams<{ itemId: string }>();
  const item = items.find((i) => i.id === itemId);
  if (!item) return <Navigate to="/" replace />;

  const phase = phaseById(item.phaseId);
  const content = getItemContent(item.file);
  const chart = <ItemChart itemId={item.id} />;

  return (
    <div>
      <Link to={phase ? `/phase/${phase.id}` : "/"} className="text-xs text-slate-500 hover:text-slate-300">
        ← {phase?.label ?? "Overview"}
      </Link>
      <h1 className="text-xl font-bold text-white mt-2 mb-6">{item.title}</h1>

      {chart && (
        <div className="card p-4 mb-6">
          <div className="text-sm font-medium text-slate-300 mb-2">Chart</div>
          {chart}
        </div>
      )}

      <div className="card p-6">
        {content ? (
          <MarkdownView content={content} />
        ) : (
          <div className="text-sm text-slate-500">
            <p className="mb-2">This artifact hasn't been generated yet.</p>
            <p>
              Run <code className="text-brand">/planmysaas</code> again, or generate stage{" "}
              <code className="text-brand">{item.file}</code> to fill this in.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
