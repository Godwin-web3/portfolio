import Link from "next/link";
import type { Finding } from "@/app/lib/findings";
import ChainIcon from "./ChainIcon";
import SeverityBadge from "./SeverityBadge";

export default function FindingCard({
  finding,
  hideProtocol = false,
}: {
  finding: Finding;
  hideProtocol?: boolean;
}) {
  return (
    <Link
      href={`/findings/${finding.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line p-5 transition duration-200 hover:border-accent/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-mute">
            {!hideProtocol && `${finding.protocol} · `}
            <ChainIcon chain={finding.chain} size={12} />
            {finding.chain}
          </p>
          <h3 className="mt-1 break-words text-base font-medium text-paper transition group-hover:text-accent">
            {finding.title}
          </h3>
        </div>
        <SeverityBadge severity={finding.severity} />
      </div>
      <p className="mt-3 flex-1 break-words text-sm leading-relaxed text-mute">{finding.summary}</p>
      <p className="mt-4 font-mono text-[11px] text-mute">{finding.status}</p>
    </Link>
  );
}
