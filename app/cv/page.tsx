import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";

type EngagementType = "Independent" | "Bounty" | "Private";

type Engagement = {
  protocol: string;
  chain: string;
  type: EngagementType;
  disclosed: string;
  findings: string;
  href: string;
};

export const metadata: Metadata = {
  title: "CV",
  description:
    "GodwinXbt — security researcher. Independent, deployment-aware protocol research with public writeups.",
};

const engagements: Engagement[] = [
  {
    protocol: "lemon.fun",
    chain: "Robinhood Chain",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 Critical",
    href: "/findings/lemon-fun-bonding-curve-theft",
  },
  {
    protocol: "Noon (USN)",
    chain: "Ethereum",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "2 Critical",
    href: "/findings/noon-redeemhandler-unratiod-drain",
  },
  {
    protocol: "Flex Finance",
    chain: "Ethereum",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "2 High",
    href: "/findings/flex-lender-auction-self-deal",
  },
  {
    protocol: "Hydrex",
    chain: "Ethereum",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 High",
    href: "/findings/hydrex-minter-initializer-noop",
  },
  {
    protocol: "Ripe Protocol",
    chain: "Base",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 High",
    href: "/findings/ripe-sequencer-uptime",
  },
  {
    protocol: "Orvex",
    chain: "Robinhood Chain",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "2 High · 3 Medium",
    href: "/findings/orvex-voterv5-stale-reward-index",
  },
  {
    protocol: "Ellipsis Finance",
    chain: "BSC",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 Medium",
    href: "/findings/ellipsis-incentivevoting-reentrancy",
  },
  {
    protocol: "HyperFX",
    chain: "Ethereum",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 Medium",
    href: "/findings/hyperfx-calldispatcher-drain",
  },
  {
    protocol: "Monolith Market",
    chain: "Ethereum",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 Medium",
    href: "/findings/monolith-phantom-collateral",
  },
  {
    protocol: "Panoptic V2",
    chain: "Ethereum",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 Medium",
    href: "/findings/panoptic-collateraltracker-stale-liquidation",
  },
  {
    protocol: "Ramses DLMM",
    chain: "Robinhood Chain",
    type: "Independent",
    disclosed: "Responsible disclosure · public writeup",
    findings: "1 Informational",
    href: "/findings/ramses-dlmm-composition-fee",
  },
];

const selected = [
  {
    protocol: "lemon.fun",
    chain: "Robinhood Chain",
    sev: "Critical",
    title: "Legacy bonding curve. Total buyer-fund theft.",
    href: "/findings/lemon-fun-bonding-curve-theft",
  },
  {
    protocol: "Noon",
    chain: "Ethereum",
    sev: "Critical",
    title: "Unratiod redeem and uncollateralized self-mint.",
    href: "/findings/noon-redeemhandler-unratiod-drain",
  },
  {
    protocol: "Flex",
    chain: "Ethereum",
    sev: "High",
    title: "Auction self-deal on lender and borrower paths.",
    href: "/findings/flex-lender-auction-self-deal",
  },
  {
    protocol: "Hydrex",
    chain: "Ethereum",
    sev: "High",
    title: "One-time initializer guard never latches.",
    href: "/findings/hydrex-minter-initializer-noop",
  },
  {
    protocol: "Orvex",
    chain: "Robinhood Chain",
    sev: "High",
    title: "Stale reward index and a missing token burn path.",
    href: "/findings/orvex-voterv5-stale-reward-index",
  },
  {
    protocol: "Ripe",
    chain: "Base",
    sev: "High",
    title: "No L2 sequencer uptime check on Chainlink prices.",
    href: "/findings/ripe-sequencer-uptime",
  },
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20 print:max-w-none print:px-0 print:py-0">
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

      <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-mute print:text-neutral-600">
        Security researcher · Protocol researcher · Engineer
      </p>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute print:text-neutral-700">
        Independent, deployment-aware security research on live financial protocols.
        Source to deployment. Economic analysis. Executable PoCs. Falsification when
        the path does not pay. Findings are disclosed and published.
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-mute print:text-neutral-700">
        <li><a href="mailto:godwinxbt@gmail.com" className="hover:text-paper print:text-black">godwinxbt@gmail.com</a></li>
        <li><a href="https://godwinxbt.vercel.app/research" className="hover:text-paper print:text-black">Research</a></li>
        <li><a href="https://github.com/Godwin-web3/Godwin-web3/blob/main/FINDINGS.md" className="hover:text-paper print:text-black">Findings index</a></li>
        <li><a href="https://github.com/Godwin-web3" className="hover:text-paper print:text-black">GitHub</a></li>
        <li><a href="https://x.com/GodwinXbt" className="hover:text-paper print:text-black">X</a></li>
      </ul>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Proof</h2>
        <p className="mt-3 text-sm text-paper print:text-black">
          17 documented findings · 11 protocols · Ethereum, Base, BSC, Robinhood Chain
        </p>
        <p className="mt-2 text-sm text-mute print:text-neutral-700">
          3 Critical · 6 High · 7 Medium · 1 Informational
        </p>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">
          Security engagements
        </h2>
        <p className="mt-3 text-sm text-mute print:text-neutral-700">
          Independent research on deployed contracts. Not a retained audit roster.
          Type is the engagement model. Disclosure is public writeup after responsible handling.
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line font-mono text-[11px] uppercase tracking-wider text-mute print:border-neutral-300 print:text-neutral-600">
                <th className="py-2 pr-3 font-normal">Protocol</th>
                <th className="py-2 pr-3 font-normal">Chain</th>
                <th className="py-2 pr-3 font-normal">Type</th>
                <th className="py-2 pr-3 font-normal">Findings</th>
                <th className="py-2 font-normal">Disclosure</th>
              </tr>
            </thead>
            <tbody>
              {engagements.map((row) => (
                <tr key={row.protocol} className="border-b border-line/80 print:border-neutral-200">
                  <td className="py-2.5 pr-3 text-paper print:text-black">
                    <Link href={row.href} className="hover:text-accent print:text-black print:no-underline">
                      {row.protocol}
                    </Link>
                  </td>
                  <td className="py-2.5 pr-3 text-mute print:text-neutral-700">{row.chain}</td>
                  <td className="py-2.5 pr-3 text-mute print:text-neutral-700">{row.type}</td>
                  <td className="py-2.5 pr-3 text-mute print:text-neutral-700">{row.findings}</td>
                  <td className="py-2.5 text-mute print:text-neutral-700">{row.disclosed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">
          Selected investigations
        </h2>
        <ul className="mt-4 space-y-4">
          {selected.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-paper hover:text-accent print:text-black print:no-underline">
                {item.protocol} · {item.sev}
              </Link>
              <p className="mt-1 text-sm text-mute print:text-neutral-700">
                {item.chain}. {item.title}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 font-mono text-[11px] text-mute print:text-neutral-700">
          <Link href="/research" className="hover:text-paper print:text-black">All research</Link>
          {" · "}
          <Link href="/findings" className="hover:text-paper print:text-black">Full findings</Link>
        </p>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">Method</h2>
        <ul className="mt-3 space-y-1 text-sm text-mute print:text-neutral-800">
          <li>Source-to-deployment verification on live contracts</li>
          <li>Economic analysis before severity is assigned</li>
          <li>Executable Foundry PoCs against forked mainnet state</li>
          <li>Falsification when the path does not pay</li>
          <li>Responsible disclosure, then a public writeup</li>
        </ul>
      </section>

      <section className="mt-12 print:mt-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent print:text-black">
          Engineering used in the research
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-mute print:text-neutral-800">
          Ragnarok — adversarial research harness. Themis — runtime invariant monitoring.
          Solidity, Foundry, TypeScript, Ethereum / Base / BSC / Solana.
        </p>
        <p className="mt-3 font-mono text-[11px] text-mute print:text-neutral-700">
          <Link href="/work" className="hover:text-paper print:text-black">Selected engineering work</Link>
        </p>
      </section>
    </div>
  );
}
