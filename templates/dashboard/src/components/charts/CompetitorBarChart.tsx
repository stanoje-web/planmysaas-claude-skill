import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import type { Competitor } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

const typeColor: Record<Competitor["type"], string> = {
  Direct: "#e5484d",
  Adjacent: "#f5a524",
  Substitute: "#38bdf8",
  "Manual alternative": "#6b6b76",
};

export default function CompetitorBarChart({ competitors }: { competitors: Competitor[] }) {
  if (!competitors || competitors.length === 0) return <EmptyChart label="Competitive Landscape" />;

  const data = [...competitors].sort((a, b) => b.opportunityScore - a.opportunityScore);

  return (
    <ResponsiveContainer width="100%" height={Math.max(220, data.length * 34)}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} horizontal={false} />
        <XAxis type="number" domain={[0, 10]} tick={{ fill: chartColors.axis, fontSize: 11 }} />
        <YAxis
          type="category"
          dataKey="name"
          width={110}
          tick={{ fill: "#cbd5e1", fontSize: 11 }}
        />
        <Tooltip {...tooltipStyle} />
        <Bar dataKey="opportunityScore" name="Opportunity score" radius={[0, 4, 4, 0]}>
          {data.map((entry, i) => (
            <Cell key={i} fill={typeColor[entry.type] ?? chartColors.brand} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
