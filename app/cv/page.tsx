import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV",
  description:
    "GodwinXbt — software engineer and protocol researcher. Financial systems, payments, infrastructure, security.",
};

const work = [
  {
    name: "Ragnarok",
    href: "https://github.com/Godwin-web3/ragnarok",
    line: "Adversarial research infrastructure for proving economically meaningful protocol failures.",
  },
  {
    name: "Themis",
    href: "https://github.com/Godwin-web3/themis",
    line: "Runtime invariant monitoring with multi-RPC quorum and reorg-aware validation.",
  },
  {
    name: "AgentPay",
    href: "https://github.com/Godwin-web3/AgentPay",
    line: "Policy-controlled autonomous payments. Decision off-chain, permission on-chain.",
  },
  {
    name: "Paidline",
    href: "https://github.com/Godwin-web3/paidline",
    line: "Payment and settlement infrastructure for programmable financial flows.",
  },
  {
    name: "Oracle Integrity Monitor",
    href: "https://github.com/Godwin-web3/oracle-integrity-monitor",
    line: "Detect inconsistent, stale, or manipulated protocol data.",
  },
  {
    name: "Keel",
    href: "https://github.com/Godwin-web3/keel",
    line: "Commit-reveal primitive for event contracts.",
  },
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 print:max-w-none print:px-0 print:py-0">
      <div className="flex flex-wrap items-start justify-between gap-4 print:hidden">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">CV</p>
          <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">GodwinXbt</h1>
        </div>
        <PrintButton />
      </div>

      <header className="hidden print:block">
        <h1 className="font-serif text-4xl text-black">GodwinXbt</h1>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-mute print:mt-2 print:text-neutral-700">
        Software engineer and protocol researcher. I build financial and distributed
        systems, and I use security research to understand whether they actually behave
        as designed.
      </p>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-mute print:text-neutral-600">
        Software · Protocols · Payments · Infrastructure · Security
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-mute print:text-neutral-700">
        <li><a href="mailto:godwinxbt@gmail.com" className="hover:text-paper print:text-black">godwinxbt@gmail.com</a></li>
        <li><a href="https://godwinxbt.vercel.app" className="hover:text-paper print:text-black">godwinxbt.vercel.app</a></li>
        <li><a href="https://github.com/Godwin-web3" className="hover:text-paper print:text-black">github.com/Godwin-web3</a></li>
        <li><a href="https://x.com/GodwinXbt" className="hover:text-paper print:text-black">x.com/GodwinXbt</a></li>
        <li><a href="https://t.me/GodwinXbt" className="hover:text-paper print:text-black">t.me/GodwinXbt</a></li>
      </ul>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Focus</h2>
        <ul className="mt-3 space-y-1 text-sm text-mute print:text-neutral-800">
          <li>Financial systems and payment infrastructure</li>
          <li>EVM and blockchain systems</li>
          <li>Backend and developer tooling</li>
          <li>Protocol design and mechanism research</li>
          <li>Monitoring, observability, and invariants</li>
          <li>Security engineering and adversarial testing</li>
        </ul>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Selected work</h2>
        <ul className="mt-4 space-y-5">
          {work.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="font-medium text-paper hover:text-accent print:text-black print:no-underline">
                {item.name}
              </a>
              <p className="mt-1 text-sm leading-relaxed text-mute print:text-neutral-700">{item.line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Research</h2>
        <p className="mt-3 text-sm leading-relaxed text-mute print:text-neutral-800">
          17 documented findings across 11 protocols. Source-to-deployment verification,
          economic analysis, executable proofs, and falsification when the path does not pay.
        </p>
        <p className="mt-3 font-mono text-[11px] text-mute print:text-neutral-700">
          <Link href="/research" className="hover:text-paper print:text-black">godwinxbt.vercel.app/research</Link>
          {" · "}
          <a href="https://github.com/Godwin-web3/Godwin-web3/blob/main/FINDINGS.md" className="hover:text-paper print:text-black">Findings index</a>
        </p>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Engineering</h2>
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2 print:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-mute print:text-neutral-600">Languages</dt>
            <dd className="mt-1 text-paper print:text-black">TypeScript · JavaScript · Python · Solidity · SQL</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-mute print:text-neutral-600">Systems</dt>
            <dd className="mt-1 text-paper print:text-black">React · Next.js · Node.js · Hono · Bun · PostgreSQL</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-mute print:text-neutral-600">Chains</dt>
            <dd className="mt-1 text-paper print:text-black">Ethereum · Base · Arbitrum · Optimism · Solana</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-mute print:text-neutral-600">Infrastructure</dt>
            <dd className="mt-1 text-paper print:text-black">Vercel · Supabase · GitHub Actions · Docker · RPC</dd>
          </div>
        </dl>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Currently interested in</h2>
        <p className="mt-3 text-sm leading-relaxed text-mute print:text-neutral-800">
          Financial infrastructure · stablecoins · payments · protocol engineering ·
          distributed systems · developer tools · security
        </p>
      </section>
    </div>
  );
}
