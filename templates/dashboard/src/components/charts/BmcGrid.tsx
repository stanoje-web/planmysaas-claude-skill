import type { BusinessModelCanvasBlock } from "../../types";
import EmptyChart from "../EmptyChart";

export default function BmcGrid({ blocks }: { blocks: BusinessModelCanvasBlock[] }) {
  if (!blocks || blocks.length === 0) return <EmptyChart label="Business Model Canvas" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {blocks.map((b, i) => (
        <div key={i} className="rounded-lg border border-border p-3 bg-surface2/40">
          <div className="text-xs font-semibold uppercase tracking-wide text-brand mb-2">{b.block}</div>
          <ul className="space-y-1">
            {b.items.map((item, j) => (
              <li key={j} className="text-sm text-slate-300 leading-snug">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
