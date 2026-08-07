import type { Severity } from "@/app/lib/findings";

const barColors: Record<Severity, string> = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Medium: "bg-yellow-500",
  Low: "bg-blue-500",
  Informational: "bg-neutral-300",
};

export default function SeverityBreakdown({
  data,
}: {
  data: { severity: Severity; count: number }[];
}) {
  const max = Math.max(...data.map((d) => d.count));

  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.severity} className="flex items-center gap-3">
          <span className="w-28 shrink-0 text-xs font-medium text-neutral-400">{d.severity}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
            <div
              className={`h-full rounded-full ${barColors[d.severity]}`}
              style={{ width: `${(d.count / max) * 100}%` }}
            />
          </div>
          <span className="w-6 shrink-0 text-right text-xs text-neutral-500">{d.count}</span>
        </div>
      ))}
    </div>
  );
}
