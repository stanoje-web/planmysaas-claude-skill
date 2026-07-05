import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import type { BuildPhaseItem } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

export default function PhaseTimelineChart({ data }: { data: BuildPhaseItem[] }) {
  if (!data || data.length === 0) return <EmptyChart label="Release Plan" />;

  return (
    <ResponsiveContainer width="100%" height={Math.max(200, data.length * 40)}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 24 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} horizontal={false} />
        <XAxis
          type="number"
          tick={{ fill: chartColors.axis, fontSize: 11 }}
          label={{ value: "Weeks", position: "insideBottom", offset: -5, fill: chartColors.axis, fontSize: 11 }}
        />
        <YAxis type="category" dataKey="phase" width={100} tick={{ fill: "#cbd5e1", fontSize: 11 }} />
        <Tooltip {...tooltipStyle} formatter={(v: number) => `${v} weeks`} />
        <Bar dataKey="weeks" radius={[0, 6, 6, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={chartColors.palette[i % chartColors.palette.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
