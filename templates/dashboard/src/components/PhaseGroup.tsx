import { Link } from "react-router-dom";
import type { Phase } from "../config/blueprintSchema";
import { itemsForPhase } from "../config/blueprintSchema";
import { phaseCompletion } from "../lib/progress";
import ItemCard from "./ItemCard";

export default function PhaseGroup({ phase }: { phase: Phase }) {
  const items = itemsForPhase(phase.id);
  const c = phaseCompletion(phase.id);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <Link to={`/phase/${phase.id}`} className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: phase.color }} />
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
            {phase.label}
          </h2>
        </Link>
        <span className="badge bg-surface2 text-slate-400">
          {c.done}/{c.total}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
