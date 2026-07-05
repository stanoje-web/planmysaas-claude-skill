import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { FeaturePriorityCount } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

const priorityColor: Record<string, string> = {
  P0: "#e5484d",
  P1: "#f5a524",
  P2: "#38bdf8",
  P3: "#6b6b76",
};

export default function FeaturePriorityPie({ data }: { data: FeaturePriorityCount[] }) {
  if (!data || data.length === 0) return <EmptyChart label="Feature Specs" />;

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="priority"
          innerRadius={45}
          outerRadius={80}
          paddingAngle={2}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={priorityColor[entry.priority] ?? chartColors.brand} />
          ))}
        </Pie>
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
