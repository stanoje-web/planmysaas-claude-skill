export default function EmptyChart({ label }: { label: string }) {
  return (
    <div className="h-full min-h-[180px] flex items-center justify-center text-sm text-slate-600 text-center px-4">
      No data yet for {label} — run the metrics extraction step to populate this chart.
    </div>
  );
}
