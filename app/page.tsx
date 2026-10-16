import Link from "next/link";
import BrandIcon from "./components/BrandIcon";
import SeverityBadge from "./components/SeverityBadge";
import { featured } from "./lib/projects";
import { findings } from "./lib/findings";
import { languages, systems, chains, infra } from "./lib/stack";

const socials = [
  { name: "GitHub", slug: "github", hex: "ffffff", href: "https://github.com/Godwin-web3" },
  { name: "X", slug: "x", hex: "ffffff", href: "https://x.com/GodwinXbt" },
];

const selectedFindings = [
  "lemon-fun-bonding-curve-theft",
  "noon-redeemhandler-unratiod-drain",
  "flex-lender-auction-self-deal",
  "hydrex-minter-initializer-noop",
].map((slug) => findings.find((f) => f.slug === slug)).filter(Boolean);

export default function Home() {
  const expertise = [...languages, ...systems, ...chains, ...infra];

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">GodwinXbt</p>
      <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl">
        I study how protocols fail before I write the code that is supposed to stop them.
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-mute">
        <p>
          Researcher first. Builder second. I follow the mechanism: contracts, settlement paths, accounting, and the places a system can break even when the dashboard looks fine.
        </p>
        <p>
          Verified findings with working PoCs against live forks. Tools for monitoring invariants and adversarial research. Interests in DeFi, smart contract security, stablecoins, payments, and real-world settlement.
        </p>
      </div>

      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl text-paper">Selected findings</h2>
          <Link href="/research" className="font-mono text-[11px] uppercase tracking-wider text-mute hover:text-paper">
            All research
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-line">
          {selectedFindings.map((f) => (
            <li key={f!.slug} className="py-5 first:pt-0">
              <div className="flex flex-wrap items-center gap-3">
                <SeverityBadge severity={f!.severity} />
                <span className="font-mono text-[11px] uppercase tracking-wider text-mute">{f!.protocol} · {f!.chain}</span>
              </div>
              <Link href={`/findings/${f!.slug}`} className="mt-2 block font-medium text-paper underline decoration-line underline-offset-4 hover:decoration-accent">
                {f!.title}
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-mute">{f!.summary.slice(0, 140)}...</p>
              <p className="mt-2 font-mono text-[11px] text-mute">{f!.status}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl text-paper">Work</h2>
          <Link href="/work" className="font-mono text-[11px] uppercase tracking-wider text-mute hover:text-paper">
            All work
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-line">
          {featured.map((p) => (
            <li key={p.slug} className="py-5 first:pt-0">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-paper underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  {p.title}
                </a>
                <span className="text-sm text-mute">{p.line}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-mute">{p.problem}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">
                {p.tags.join(" · ")}
                {p.live ? " · Live" : ""}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-2xl text-paper">Expertise</h2>
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
      </section>

      <div className="mt-16 flex flex-wrap items-center gap-6">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-paper underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            <BrandIcon item={s} size={16} />
          </a>
        ))}
        <Link href="/about" className="text-sm text-paper underline decoration-line underline-offset-4 hover:decoration-accent">
          About
        </Link>
        <Link href="/contact" className="text-sm text-paper underline decoration-line underline-offset-4 hover:decoration-accent">
          Contact
        </Link>
        <Link href="/findings" className="text-sm text-paper underline decoration-line underline-offset-4 hover:decoration-accent">
          Findings
        </Link>
      </div>
    </div>
  );
}
