import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import type { PorterForce } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

const labelColor: Record<PorterForce["label"], string> = {
  Low: "#4ade80",
  Medium: "#f5a524",
  High: "#e5484d",
};

export default function PortersForcesChart({ data }: { data: PorterForce[] }) {
  if (!data || data.length === 0) return <EmptyChart label="Porter's Five Forces" />;

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} horizontal={false} />
        <XAxis type="number" domain={[0, 10]} tick={{ fill: chartColors.axis, fontSize: 11 }} />
        <YAxis type="category" dataKey="force" width={140} tick={{ fill: "#cbd5e1", fontSize: 11 }} />
        <Tooltip {...tooltipStyle} />
        <Bar dataKey="score" radius={[0, 4, 4, 0]}>
          {data.map((entry, i) => (
            <Cell key={i} fill={labelColor[entry.label] ?? chartColors.brand} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
