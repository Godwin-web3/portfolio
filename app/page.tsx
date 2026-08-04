import Link from "next/link";
import { findings, stats } from "./lib/findings";
import FindingCard from "./components/FindingCard";

function pickFeatured(): typeof findings {
  const ranked = findings
    .filter((f) => f.severity === "Critical" || f.severity === "High")
    .sort((a, b) => (a.severity === b.severity ? 0 : a.severity === "Critical" ? -1 : 1));

  const seenProtocols = new Set<string>();
  const picked: typeof findings = [];
  for (const f of ranked) {
    if (seenProtocols.has(f.protocol)) continue;
    seenProtocols.add(f.protocol);
    picked.push(f);
    if (picked.length === 3) break;
  }
  return picked;
}

export default function Home() {
  const featured = pickFeatured();

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-24">
        <p className="font-mono text-sm text-emerald-400">Smart contract security research</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          I build the tools I audit with.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
          ChainSentinel is an AI-augmented security audit engine I designed and shipped myself:
          structural detectors, an adversarial AI review gate that catches its own false
          positives, and real, verified findings against live protocols.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/findings"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            View real findings
          </Link>
          <a
            href="https://github.com/godwin-web3/chainsentinel"
            target="_blank"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30"
          >
            ChainSentinel on GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
        <div className="bg-[#0a0a0a] p-6">
          <p className="text-3xl font-semibold text-white">{stats.totalFindings}</p>
          <p className="mt-1 text-sm text-neutral-500">Real findings, each with a working PoC or independently traced root cause</p>
        </div>
        <div className="bg-[#0a0a0a] p-6">
          <p className="text-3xl font-semibold text-white">{stats.protocols}</p>
          <p className="mt-1 text-sm text-neutral-500">Distinct protocols audited</p>
        </div>
        <div className="bg-[#0a0a0a] p-6">
          <p className="text-3xl font-semibold text-white">{stats.criticalOrHigh}</p>
          <p className="mt-1 text-sm text-neutral-500">Critical / High severity findings</p>
        </div>
      </section>

      {/* Featured findings */}
      <section className="py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-white">Featured findings</h2>
          <Link href="/findings" className="text-sm text-neutral-400 hover:text-white">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((f) => (
            <FindingCard key={f.slug} finding={f} />
          ))}
        </div>
      </section>

      {/* ChainSentinel callout */}
      <section className="mb-24 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-emerald-400">Flagship project</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">ChainSentinel</h2>
        <p className="mt-3 max-w-2xl text-neutral-400">
          An AI-augmented smart contract audit engine. Structural detectors generate candidates,
          Echidna fuzzes them for free, and an adversarial AI review gate — which I designed after
          catching it wrongly confirm a false positive on a live protocol mid-audit — decides what
          actually earns the CONFIRMED label. Every finding carries provenance: what flagged it,
          whether AI reviewed it, and why.
        </p>
        <a
          href="https://github.com/godwin-web3/chainsentinel"
          target="_blank"
          className="mt-5 inline-block text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          Read the source &rarr;
        </a>
      </section>
    </div>
  );
}
