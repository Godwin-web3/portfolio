import type { Metadata } from "next";
import Link from "next/link";
import SeverityBadge from "../components/SeverityBadge";
import { findings, stats } from "../lib/findings";

export const metadata: Metadata = {
  title: "Research",
  description: "Investigating how financial protocols behave under adversarial conditions.",
};

const featuredSlugs = [
  "lemon-fun-bonding-curve-theft",
  "noon-redeemhandler-unratiod-drain",
  "flex-lender-auction-self-deal",
  "hydrex-minter-initializer-noop",
  "orvex-voterv5-stale-reward-index",
  "ripe-sequencer-uptime",
];

export default function ResearchPage() {
  const selected = featuredSlugs.map((slug) => findings.find((f) => f.slug === slug)).filter(Boolean);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Research</p>
      <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">How financial protocols behave under adversarial conditions.</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
        {stats.totalFindings} documented findings across {stats.protocols} protocols.
        Source-to-deployment verification. Economic analysis. Executable proofs. Falsification when the path does not pay.
      </p>
      <div className="mt-12 grid gap-4">
        {selected.map((f) => (
          <Link key={f!.slug} href={`/findings/${f!.slug}`} className="border border-line bg-card p-5 transition hover:border-accent/40">
            <div className="flex flex-wrap items-center gap-3">
              <SeverityBadge severity={f!.severity} />
              <span className="font-mono text-[11px] uppercase tracking-wider text-mute">{f!.protocol} · {f!.chain}</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl text-paper">{f!.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">{f!.summary}</p>
            <p className="mt-3 font-mono text-[11px] text-mute">{f!.status}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-wider">
        <Link href="/findings" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">Complete findings</Link>
        <a href="https://github.com/Godwin-web3/Godwin-web3/blob/main/FINDINGS.md" target="_blank" rel="noopener noreferrer" className="text-mute hover:text-paper">GitHub index</a>
      </div>
    </div>
  );
}
