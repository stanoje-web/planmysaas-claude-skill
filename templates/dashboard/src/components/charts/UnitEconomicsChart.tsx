import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import type { UnitEconomics } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

export default function UnitEconomicsChart({ data }: { data: UnitEconomics | null }) {
  if (!data) return <EmptyChart label="Unit Economics" />;

  const rows = [
    { name: "CAC", value: data.cac },
    { name: "LTV", value: data.ltv },
    { name: "ARPU", value: data.arpu },
  ];
  const ratio = data.cac > 0 ? (data.ltv / data.cac).toFixed(1) : "—";

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={rows} margin={{ left: 0, right: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
          <YAxis tick={{ fill: chartColors.axis, fontSize: 11 }} tickFormatter={(v) => `${data.currency} ${v}`} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => `${data.currency} ${v}`} />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {rows.map((_, i) => (
              <Cell key={i} fill={[chartColors.brand, "#38bdf8", "#a78bfa"][i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-3 gap-2 text-center mt-2">
        <div>
          <div className="text-xs text-slate-500">LTV:CAC</div>
          <div className="text-sm font-semibold text-slate-200">{ratio}:1</div>
        </div>
        <div>
          <div className="text-xs text-slate-500">Gross margin</div>
          <div className="text-sm font-semibold text-slate-200">{data.grossMarginPct}%</div>
        </div>
        <div>
          <div className="text-xs text-slate-500">Payback</div>
          <div className="text-sm font-semibold text-slate-200">{data.paybackMonths} mo</div>
        </div>
      </div>
    </div>
  );
}
