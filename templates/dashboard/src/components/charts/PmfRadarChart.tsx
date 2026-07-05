import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { PmfScore } from "../../types";
import { chartColors, tooltipStyle } from "../../lib/chartTheme";
import EmptyChart from "../EmptyChart";

export default function PmfRadarChart({ pmf }: { pmf: PmfScore | null }) {
  if (!pmf || pmf.breakdown.length === 0) return <EmptyChart label="PMF Score" />;

  const data = pmf.breakdown.map((d) => ({ dimension: d.dimension, score: d.score }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={data} outerRadius="75%">
        <PolarGrid stroke={chartColors.grid} />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: chartColors.axis, fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: chartColors.axis, fontSize: 10 }} />
        <Radar
          name="Score"
          dataKey="score"
          stroke={chartColors.brand}
          fill={chartColors.brand}
          fillOpacity={0.35}
        />
        <Tooltip {...tooltipStyle} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
