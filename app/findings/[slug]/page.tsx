import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findings } from "../../lib/findings";
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
  return {
    title: `${finding.title} — Godwin`,
    description: finding.summary,
  };
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

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/findings" className="text-sm text-neutral-500 hover:text-white">
        &larr; All findings
      </Link>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-sm uppercase tracking-wide text-neutral-500">
            {finding.protocol} · {finding.chain}
          </p>
          <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white">
            {finding.title}
          </h1>
        </div>
        <SeverityBadge severity={finding.severity} />
      </div>

      <p className="mt-3 font-mono text-sm text-neutral-500">{finding.status}</p>

      {finding.address && (
        <p className="mt-2 break-words font-mono text-xs text-neutral-600">
          Contract: <span className="text-neutral-400">{finding.address}</span>
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {finding.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Summary</h2>
        <p className="mt-3 break-words leading-relaxed text-neutral-300">{finding.summary}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Root cause</h2>
        <p className="mt-3 break-words leading-relaxed text-neutral-300">{finding.rootCause}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Verification</h2>
        <p className="mt-3 break-words leading-relaxed text-neutral-300">{finding.verification}</p>
        <p className="mt-3 text-sm text-neutral-500">
          {finding.verifiedLive
            ? "Verified against real, live deployed contract state."
            : "Verified against real source code, not live/deployed on this chain."}
        </p>
        {finding.pocUrl && (
          <a
            href={finding.pocUrl}
            target="_blank"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            View the Foundry PoC &rarr;
          </a>
        )}
      </section>

      <div className="mt-16 flex items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm">
        {prev ? (
          <Link
            href={`/findings/${prev.slug}`}
            className="group block max-w-[45%] text-neutral-500 hover:text-white"
          >
            <span className="block text-xs">&larr; Previous</span>
            <span className="mt-1 block truncate group-hover:text-emerald-400">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/findings/${next.slug}`}
            className="group block max-w-[45%] text-right text-neutral-500 hover:text-white"
          >
            <span className="block text-xs">Next &rarr;</span>
            <span className="mt-1 block truncate group-hover:text-emerald-400">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
