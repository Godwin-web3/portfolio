import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findings } from "../../lib/findings";
import { explorerUrl } from "../../lib/explorers";
import ChainIcon from "../../components/ChainIcon";
import SeverityBadge from "../../components/SeverityBadge";

export function generateStaticParams() {
  return findings.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const finding = findings.find((f) => f.slug === slug);
  if (!finding) return {};
  return { title: finding.title, description: finding.summary };
}

export default async function FindingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = findings.findIndex((f) => f.slug === slug);
  const finding = findings[index];
  if (!finding) notFound();

  const prev = index > 0 ? findings[index - 1] : null;
  const next = index < findings.length - 1 ? findings[index + 1] : null;
  const explorer = finding.address ? explorerUrl(finding.chain, finding.address) : null;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
      <Link href="/findings" className="text-sm text-mute transition hover:text-paper">
        All findings
      </Link>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-mute">
            {finding.protocol} ·
            <ChainIcon chain={finding.chain} size={14} />
            {finding.chain}
          </p>
          <h1 className="mt-2 break-words font-serif text-3xl tracking-tight text-paper sm:text-4xl">
            {finding.title}
          </h1>
        </div>
        <SeverityBadge severity={finding.severity} />
      </div>
      <p className="mt-3 font-mono text-sm text-mute">{finding.status}</p>
      {finding.address ? (
        <p className="mt-2 break-words font-mono text-xs text-mute">
          Contract:{" "}
          {explorer ? (
            <a href={explorer} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-paper/25 underline-offset-4 hover:decoration-copper">
              {finding.address}
            </a>
          ) : (
            <span className="text-paper/80">{finding.address}</span>
          )}
        </p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-2">
        {finding.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-paper/15 px-2.5 py-0.5 text-xs text-mute">
            {tag}
          </span>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Summary</h2>
        <p className="mt-3 break-words leading-relaxed text-paper/85">{finding.summary}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Root cause</h2>
        <p className="mt-3 break-words leading-relaxed text-paper/85">{finding.rootCause}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Verification</h2>
        <p className="mt-3 break-words leading-relaxed text-paper/85">{finding.verification}</p>
        <p className="mt-3 text-sm text-mute">
          {finding.verifiedLive
            ? "Verified against real, live deployed contract state."
            : "Verified against real source code, not live deployed on this chain."}
        </p>
        {finding.pocUrl ? (
          <a href={finding.pocUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-paper underline decoration-copper/70 underline-offset-4 hover:decoration-copper">
            View the Foundry PoC
          </a>
        ) : null}
      </section>
      <div className="mt-16 flex items-start justify-between gap-4 border-t border-paper/10 pt-8 text-sm">
        {prev ? (
          <Link href={`/findings/${prev.slug}`} className="group block max-w-[45%] text-mute hover:text-paper">
            <span className="block text-xs">Previous</span>
            <span className="mt-1 block truncate group-hover:text-copper">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/findings/${next.slug}`} className="group block max-w-[45%] text-right text-mute hover:text-paper">
            <span className="block text-xs">Next</span>
            <span className="mt-1 block truncate group-hover:text-copper">{next.title}</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
