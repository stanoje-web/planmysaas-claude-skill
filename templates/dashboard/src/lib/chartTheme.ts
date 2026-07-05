export const chartColors = {
  brand: "#ff7a1a",
  grid: "#2a2a33",
  axis: "#6b6b76",
  tooltipBg: "#1f1f27",
  tooltipBorder: "#2a2a33",
  palette: ["#ff7a1a", "#38bdf8", "#a78bfa", "#2dd4bf", "#f5a524", "#e5484d", "#4ade80", "#f472b6"],
};

export const tooltipStyle = {
  contentStyle: {
    backgroundColor: chartColors.tooltipBg,
    border: `1px solid ${chartColors.tooltipBorder}`,
    borderRadius: 8,
    fontSize: 12,
    color: "#e2e8f0",
  },
  labelStyle: { color: "#94a3b8" },
  itemStyle: { color: "#e2e8f0" },
};
