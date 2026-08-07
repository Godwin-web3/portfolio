import Link from "next/link";
import type { Finding } from "@/app/lib/findings";
import ChainIcon from "./ChainIcon";
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
      className="group block h-full flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_-12px_rgba(52,211,153,0.25)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-neutral-500">
            {!hideProtocol && `${finding.protocol} · `}
            <ChainIcon chain={finding.chain} size={12} />
            {finding.chain}
          </p>
          <h3 className="mt-1 break-words text-base font-medium text-white group-hover:text-emerald-400 transition">
            {finding.title}
          </h3>
        </div>
        <SeverityBadge severity={finding.severity} />
      </div>
      <p className="mt-3 break-words text-sm leading-relaxed text-neutral-400 flex-1">{finding.summary}</p>
      <p className="mt-4 text-xs font-mono text-neutral-500 mt-auto">{finding.status}</p>
    </Link>
  );
}
