import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Contact";
import { stats } from "../lib/findings";

export const metadata: Metadata = {
  title: "About",
  description:
    "Godwin Mbah is a full-stack builder who ships live on-chain products and audits smart contracts at SMC Audits.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <Image
        src="/avatar.jpg"
        alt="Godwin Mbah"
        width={96}
        height={96}
        className="h-24 w-24 rounded-2xl border border-paper/15 object-cover"
      />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-copper">About</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-paper sm:text-5xl">
        I build cool shit on-chain. Then I break it on purpose.
      </h1>

      <div className="mt-8 space-y-5 leading-relaxed text-mute">
        <p>
          I&apos;m Godwin Mbah — GodwinXbt — a full-stack builder, remote. I ship live tools:
          a wallet blast map, an apartment file, commit–reveal, tokenized-stock checks, invoice
          settlement, and intent-hire for agents.
        </p>
        <p>
          I work as a Smart Contract Auditor at SMC Audits (Sir Mapy &amp; Co), full-time and
          remote since Sep 2026. EVM (Solidity) and Solana (Rust). Threat models, working
          proofs-of-concept, re-audits after the fix. That skill sits next to the products.
        </p>
        <p>
          The findings are real: {stats.totalFindings} of them, {stats.protocols} protocols,{" "}
          {stats.criticalOrHigh} critical or high. Each one has a PoC or a traced root cause,
          including the ones that weren&apos;t exploitable once I actually ran them. ChainSentinel
          is the audit tool I built for that work — it has to argue with itself before it calls
          something confirmed.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link href="/#work" className="text-paper underline decoration-copper/70 underline-offset-4">
          Selected work
        </Link>
        <Link href="/findings" className="text-paper underline decoration-paper/30 underline-offset-4">
          Findings
        </Link>
        <a
          href="https://github.com/godwin-web3/chainsentinel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-paper underline decoration-paper/30 underline-offset-4"
        >
          ChainSentinel
        </a>
      </div>

      <Contact />
    </div>
  );
}
