import type { Swot } from "../../types";
import EmptyChart from "../EmptyChart";

const quadrants: { key: keyof Swot; label: string; color: string }[] = [
  { key: "strengths", label: "Strengths", color: "#4ade80" },
  { key: "weaknesses", label: "Weaknesses", color: "#e5484d" },
  { key: "opportunities", label: "Opportunities", color: "#38bdf8" },
  { key: "threats", label: "Threats", color: "#f5a524" },
];

export default function SwotQuadrant({ swot }: { swot: Swot | null }) {
  if (!swot) return <EmptyChart label="SWOT" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {quadrants.map((q) => (
        <div key={q.key} className="rounded-lg border border-border p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: q.color }} />
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{q.label}</span>
          </div>
          <ul className="space-y-1">
            {(swot[q.key] ?? []).map((item, i) => (
              <li key={i} className="text-sm text-slate-300 leading-snug">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
