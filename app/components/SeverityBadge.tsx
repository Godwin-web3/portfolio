import type { Severity } from "@/app/lib/findings";

const styles: Record<Severity, string> = {
  Critical: "bg-red-500/10 text-red-700 ring-red-500/30",
  High: "bg-orange-500/10 text-orange-700 ring-orange-500/30",
  Medium: "bg-yellow-500/15 text-yellow-800 ring-yellow-600/30",
  Low: "bg-blue-500/10 text-blue-700 ring-blue-500/30",
  Informational: "bg-neutral-500/10 text-neutral-700 ring-neutral-500/30",
};

export default function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}
