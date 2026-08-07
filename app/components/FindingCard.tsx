import Link from "next/link";
import type { Finding } from "@/app/lib/findings";
import SeverityBadge from "./SeverityBadge";

export default function FindingCard({
  finding,
  hideProtocol = false,
}: {
  finding: Finding;
  /** Omit the protocol name from the eyebrow line - use when the card already
   *  sits under a protocol-level heading (e.g. the grouped findings page). */
  hideProtocol?: boolean;
}) {
  return (
    <Link
      href={`/findings/${finding.slug}`}
      className="group block h-full flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-mono uppercase tracking-wide text-neutral-500">
            {hideProtocol ? finding.chain : `${finding.protocol} · ${finding.chain}`}
          </p>
          <h3 className="mt-1 text-base font-medium text-white group-hover:text-emerald-400 transition">
            {finding.title}
          </h3>
        </div>
        <SeverityBadge severity={finding.severity} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400 flex-1">{finding.summary}</p>
      <p className="mt-4 text-xs font-mono text-neutral-500 mt-auto">{finding.status}</p>
    </Link>
  );
}
