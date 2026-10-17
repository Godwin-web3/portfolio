import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BrandIcon from "./components/BrandIcon";
import Reveal from "./components/Reveal";
import SeverityBadge from "./components/SeverityBadge";
import { featured, projects } from "./lib/projects";
import { findings, stats } from "./lib/findings";
import { languages, systems, chains, infra } from "./lib/stack";

const socials = [
  { name: "GitHub", slug: "github", hex: "currentColor", href: "https://github.com/Godwin-web3" },
  { name: "X", slug: "x", hex: "currentColor", href: "https://x.com/GodwinXbt" },
];

const selectedFindings = [
  "lemon-fun-bonding-curve-theft",
  "noon-redeemhandler-unratiod-drain",
  "flex-lender-auction-self-deal",
  "hydrex-minter-initializer-noop",
].map((slug) => findings.find((f) => f.slug === slug)).filter(Boolean);

export default function Home() {
  const expertise = [...languages, ...systems, ...chains, ...infra];
  const chainCount = new Set(findings.map((f) => f.chain)).size;

  const glance = [
    { label: "Findings", value: stats.totalFindings, href: "/findings" },
    { label: "Protocols", value: stats.protocols, href: "/research" },
    { label: "Critical / High", value: stats.criticalOrHigh, href: "/findings" },
    { label: "Chains", value: chainCount, href: "/findings" },
    { label: "Projects", value: projects.length, href: "/work" },
  ];

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        />
        <Reveal className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-line sm:h-36 sm:w-36">
            <Image src="/avatar.jpg" alt="GodwinXbt" width={288} height={288} priority className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">GodwinXbt</p>
            <h1 className="mt-3 font-serif text-3xl font-[750] leading-[1.1] tracking-[-0.02em] text-paper sm:text-4xl">
              I study how protocols fail before I write the code that is supposed to stop them.
            </h1>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-6 space-y-4 text-mute">
        <p className="text-[19px] font-medium leading-snug text-paper/90">
          I build and ship Solidity systems — payment infrastructure, protocol tooling, on-chain policy enforcement — then audit them the way an attacker would: reading real, deployed source, tracing root causes, proving exploits against forked mainnet state.
        </p>
        <p className="text-base leading-relaxed">
          Verified findings with working PoCs against live forks. Tools for monitoring invariants and adversarial research. Interests in DeFi, smart contract security, stablecoins, payments, and real-world settlement.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 rounded-2xl border border-line bg-card p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">At a glance</p>
        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-5">
          {glance.map((g) => (
            <Link
              key={g.label}
              href={g.href}
              className="group flex flex-col items-start bg-card p-4 transition hover:bg-ink"
            >
              <div className="flex w-full items-start justify-between">
                <dd className="font-serif text-3xl font-[650] text-paper">{g.value}</dd>
                <ChevronRight size={14} className="mt-1 text-mute transition group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
              </div>
              <dt className="mt-1 text-xs text-mute">{g.label}</dt>
            </Link>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-[650] tracking-tight text-paper">Work</h2>
          <Link href="/work" className="inline-flex items-center gap-0.5 font-mono text-[11px] uppercase tracking-wider text-mute hover:text-paper">
            All work
            <ChevronRight size={12} aria-hidden />
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-line">
          {featured.map((p) => (
            <li key={p.slug}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-3 flex items-start justify-between gap-4 rounded-lg px-3 py-5 transition hover:bg-card"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-medium text-paper underline decoration-line underline-offset-4 group-hover:decoration-accent">
                      {p.title}
                    </span>
                    <span className="text-sm text-mute">{p.line}</span>
                    {p.live && (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{p.problem}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">
                    {p.tags.join(" · ")}
                  </p>
                </div>
                <ChevronRight size={16} className="mt-1 shrink-0 text-mute transition group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-[650] tracking-tight text-paper">Selected findings</h2>
          <Link href="/research" className="inline-flex items-center gap-0.5 font-mono text-[11px] uppercase tracking-wider text-mute hover:text-paper">
            All research
            <ChevronRight size={12} aria-hidden />
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-line">
          {selectedFindings.map((f) => (
            <li key={f!.slug}>
              <Link
                href={`/findings/${f!.slug}`}
                className="group -mx-3 flex items-start justify-between gap-4 rounded-lg px-3 py-5 transition hover:bg-card"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <SeverityBadge severity={f!.severity} />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-mute">{f!.protocol} · {f!.chain}</span>
                  </div>
                  <p className="mt-2 font-medium text-paper underline decoration-line underline-offset-4 group-hover:decoration-accent">
                    {f!.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{f!.summary.slice(0, 140)}...</p>
                  <p className="mt-2 font-mono text-[11px] text-mute">{f!.status}</p>
                </div>
                <ChevronRight size={16} className="mt-1 shrink-0 text-mute transition group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="font-serif text-2xl font-[650] tracking-tight text-paper">Expertise</h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-mute sm:grid-cols-3">
          {expertise.map((item) => (
            <li key={item.name} className="flex items-center">
              <BrandIcon item={item} size={16} />
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-mute">
          Solidity and Foundry for contracts and fork proofs. TypeScript and Next.js for surfaces. viem for reads and traces.
        </p>
      </Reveal>

      <Reveal className="mt-16 flex flex-wrap items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent"
          >
            <BrandIcon item={s} size={16} showLabel={false} />
            {s.name}
          </a>
        ))}
        <Link href="/about" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">
          About
        </Link>
        <Link href="/contact" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">
          Contact
        </Link>
        <Link href="/findings" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">
          Findings
        </Link>
      </Reveal>
    </div>
  );
}
