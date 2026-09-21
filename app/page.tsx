import Image from "next/image";
import Link from "next/link";
import Contact from "./components/Contact";
import WorkCard from "./components/WorkCard";
import { stats } from "./lib/findings";
import { stack, works } from "./lib/work";

const links = [
  { href: "https://github.com/Godwin-web3", label: "GitHub" },
  { href: "https://x.com/GodwinXbt", label: "X" },
  { href: "mailto:godwinxbt@gmail.com", label: "Email" },
  { href: "https://t.me/GodwinXbt", label: "Telegram" },
];

export default function Home() {
  const [lead, ...rest] = works;

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <section className="pb-6 pt-14 sm:pt-20">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpg"
            alt="Godwin Mbah"
            width={72}
            height={72}
            priority
            className="h-[72px] w-[72px] rounded-2xl border border-paper/15 object-cover"
          />
          <div>
            <p className="font-serif text-2xl tracking-tight text-paper">Godwin Mbah</p>
            <p className="mt-0.5 font-mono text-xs tracking-wide text-mute">GodwinXbt · Remote</p>
          </div>
        </div>

        <h1 className="mt-8 max-w-3xl font-serif text-[2.6rem] leading-[1.05] tracking-tight text-paper sm:text-6xl">
          I build cool shit on-chain.
          <span className="mt-1 block italic text-paper/85">Then I break it on purpose.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          Full-stack. Next.js, Solidity, Solana. The cards below are live.
        </p>

        <p className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-3 py-1.5 text-xs text-paper sm:text-sm">
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
          Smart Contract Auditor @ SMC Audits · Sep 2026–Present
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-paper underline decoration-paper/25 underline-offset-4 transition hover:decoration-copper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#work"
            className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white"
          >
            View work
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium text-paper transition hover:border-paper/50"
          >
            Contact
          </Link>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 pb-4 pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Selected work</p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight text-paper sm:text-5xl">
          {works.length} things that are live.
        </h2>

        <div className="mt-8 flex flex-col gap-8">
          {lead ? <WorkCard work={lead} index={0} featured priority /> : null}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {rest.map((work, i) => (
              <WorkCard key={work.title} work={work} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="proof-heading" className="mt-16 border-y border-paper/10 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <h2
              id="proof-heading"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
            >
              Security
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Smart Contract Auditor @ SMC Audits (Sir Mapy &amp; Co) · full-time · remote · Sep
              2026–Present. PoCs against forked live state, including the bugs that turned out
              not to pay.
            </p>
            <Link
              href="/findings"
              className="mt-4 inline-block text-sm text-paper underline decoration-copper/70 underline-offset-4 transition hover:decoration-copper"
            >
              Read the findings
            </Link>
          </div>
          <dl className="grid grid-cols-3 gap-x-6 sm:gap-x-10">
            <div>
              <dd className="font-serif text-4xl text-paper sm:text-5xl">{stats.totalFindings}</dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">
                Findings
              </dt>
            </div>
            <div>
              <dd className="font-serif text-4xl text-paper sm:text-5xl">{stats.protocols}</dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">
                Protocols
              </dt>
            </div>
            <div>
              <dd className="font-serif text-4xl text-paper sm:text-5xl">{stats.criticalOrHigh}</dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">
                Crit + High
              </dt>
            </div>
          </dl>
        </div>
      </section>

      <section aria-labelledby="stack-heading" className="py-14">
        <h2 id="stack-heading" className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
          Stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-paper/15 px-3 py-1.5 font-mono text-xs text-paper"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <Contact />
    </div>
  );
}
