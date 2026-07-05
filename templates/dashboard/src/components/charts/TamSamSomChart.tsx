import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import type { TamSamSom } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

function formatMoney(value: number, currency: string) {
  if (value >= 1_000_000_000) return `${currency} ${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${currency} ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${currency} ${(value / 1_000).toFixed(0)}K`;
  return `${currency} ${value}`;
}

export default function TamSamSomChart({ data }: { data: TamSamSom | null }) {
  if (!data) return <EmptyChart label="TAM / SAM / SOM" />;

  const rows = [
    { name: "TAM", value: data.tam },
    { name: "SAM", value: data.sam },
    { name: "SOM", value: data.som },
  ];
  const colors = [chartColors.palette[1], chartColors.palette[2], chartColors.brand];

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={rows} layout="vertical" margin={{ left: 8, right: 24 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: chartColors.axis, fontSize: 11 }}
            tickFormatter={(v) => formatMoney(v, data.currency)}
          />
          <YAxis type="category" dataKey="name" width={50} tick={{ fill: "#cbd5e1", fontSize: 12 }} />
          <Tooltip {...tooltipStyle} formatter={(v: number) => formatMoney(v, data.currency)} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]}>
            {rows.map((_, i) => (
              <Cell key={i} fill={colors[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-slate-500 text-right -mt-2">
        Confidence: <span className="text-slate-300">{data.confidence}</span>
      </div>
    </div>
  );
}
