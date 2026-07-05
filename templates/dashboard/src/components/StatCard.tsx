interface Props {
  label: string;
  value: string;
  sublabel?: string;
  accent?: string;
}

export default function StatCard({ label, value, sublabel, accent }: Props) {
  return (
    <div className="card p-4">
      <div className="text-xs text-slate-400 mb-1">{label}</div>
      <div className="text-2xl font-semibold" style={{ color: accent ?? "white" }}>
        {value}
      </div>
      {sublabel && <div className="text-xs text-slate-500 mt-1">{sublabel}</div>}
    </div>
  );
}
