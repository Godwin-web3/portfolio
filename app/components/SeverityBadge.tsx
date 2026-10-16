import type { Severity } from "@/app/lib/findings";

const styles: Record<Severity, string> = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-blue-100 text-blue-700",
  Informational: "bg-neutral-100 text-neutral-700",
};

export default function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${styles[severity]}`}>
      {severity}
    </span>
  );
}
