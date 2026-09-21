import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Contact";
import { stats } from "../lib/findings";

export const metadata: Metadata = {
  title: "About",
  description:
    "Godwin Mbah studies protocols, settlement paths, and the accounting that dashboards hide. Researcher first. Builder second.",
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
        Researcher first. Builder second.
      </h1>

      <div className="mt-8 space-y-5 leading-relaxed text-mute">
        <p>
          I am Godwin Mbah. GodwinXbt. Self-taught. I built my way into Web3 without the usual
          advantages. For a long time the only computer I had was a phone.
        </p>
        <p>
          I found crypto when I was broke and looking for a way forward. I stayed because the
          rails can reach people that traditional systems leave out. The Naira-to-RMB payment
          problem is not a thought experiment. I have seen the friction firsthand.
        </p>
        <p>
          That proximity is the method. I start with a problem I understand, then follow it down
          to contract code, transaction traces, and protocol docs. A stablecoin can work until
          you examine the settlement path. A payment problem can look like a business problem
          until you trace the infrastructure underneath it.
        </p>
        <p>
          I work as a Smart Contract Auditor at SMC Audits (Sir Mapy &amp; Co), full-time and
          remote since Sep 2026. EVM and Solana. Threat models. Working proofs-of-concept.
          Re-audits after the fix.
        </p>
        <p>
          The record so far: {stats.totalFindings} findings, {stats.protocols} protocols,{" "}
          {stats.criticalOrHigh} critical or high. Each one has a PoC or a traced root cause.
          Including the ones that were not exploitable once I actually ran them.
        </p>
        <p>
          I do not want to sound like an expert. I want the work to make that obvious. The goal
          is not to look established. The goal is to become undeniable.
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
          href="https://github.com/Godwin-web3/ragnarok"
          target="_blank"
          rel="noopener noreferrer"
          className="text-paper underline decoration-paper/30 underline-offset-4"
        >
          Ragnarok
        </a>
      </div>

      <Contact />
    </div>
  );
}
