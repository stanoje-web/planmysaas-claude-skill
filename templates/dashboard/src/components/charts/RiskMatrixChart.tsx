import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  Cell,
} from "recharts";
import type { RiskItem } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

const categoryColor: Record<string, string> = {
  Execution: "#38bdf8",
  Market: "#f5a524",
  Tech: "#a78bfa",
  Financial: "#2dd4bf",
  Regulatory: "#e5484d",
  Legal: "#e5484d",
  Talent: "#4ade80",
};

export default function RiskMatrixChart({ risks }: { risks: RiskItem[] }) {
  if (!risks || risks.length === 0) return <EmptyChart label="Risk Register" />;

  const data = risks.map((r) => ({ ...r, score: r.likelihood * r.impact }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke={chartColors.grid} />
        <XAxis
          type="number"
          dataKey="likelihood"
          name="Likelihood"
          domain={[0, 10]}
          tick={{ fill: chartColors.axis, fontSize: 11 }}
          label={{ value: "Likelihood", position: "insideBottom", offset: -5, fill: chartColors.axis, fontSize: 11 }}
        />
        <YAxis
          type="number"
          dataKey="impact"
          name="Impact"
          domain={[0, 10]}
          tick={{ fill: chartColors.axis, fontSize: 11 }}
          label={{ value: "Impact", angle: -90, position: "insideLeft", fill: chartColors.axis, fontSize: 11 }}
        />
        <ZAxis dataKey="score" range={[80, 400]} />
        <Tooltip
          {...tooltipStyle}
          formatter={(_value, _name, props: any) => [props.payload.risk, props.payload.category]}
        />
        <Scatter data={data}>
          {data.map((entry, i) => (
            <Cell key={i} fill={categoryColor[entry.category] ?? chartColors.brand} fillOpacity={0.75} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}
