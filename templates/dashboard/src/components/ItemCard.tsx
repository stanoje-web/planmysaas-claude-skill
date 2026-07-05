import { Link } from "react-router-dom";
import type { BlueprintItem } from "../config/blueprintSchema";
import { isItemDone } from "../lib/loadBlueprint";

export default function ItemCard({ item }: { item: BlueprintItem }) {
  const done = isItemDone(item.file);

  return (
    <Link
      to={`/item/${item.id}`}
      className="card flex items-center justify-between gap-3 px-4 py-3 hover:border-brand/60 transition-colors group"
    >
      <span className="flex items-center gap-3 min-w-0">
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${
            done ? "bg-emerald-500/15 text-emerald-400" : "bg-surface2 text-slate-500"
          }`}
        >
          {done ? "✓" : "○"}
        </span>
        <span className="text-sm font-medium text-slate-200 truncate">{item.title}</span>
      </span>
      <span className="text-slate-600 group-hover:text-brand shrink-0">→</span>
    </Link>
  );
}
