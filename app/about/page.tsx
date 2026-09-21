import type { Metadata } from "next";
import Image from "next/image";
import Contact from "../components/Contact";
import CurrentRole from "../components/CurrentRole";

export const metadata: Metadata = {
  title: "About — Godwin, Smart Contract Auditor",
  description:
    "Smart Contract Auditor at SMC Audits. Independent builder and security researcher behind ChainSentinel and Blast Radius.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <Image
        src="/avatar.jpg"
        alt="GodwinXbt"
        width={96}
        height={96}
        className="rounded-2xl border border-white/10"
      />
      <p className="mt-6 font-mono text-sm text-emerald-400">About</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Smart Contract Auditor at SMC Audits.
      </h1>
      <p className="mt-3 text-neutral-300">Independent builder and security researcher.</p>

      <div className="mt-8">
        <CurrentRole />
      </div>

      <div className="mt-8 space-y-5 leading-relaxed text-neutral-400">
        <p>
          I&apos;m Godwin Mbah (GodwinXbt). The auditor role is new — September 2026, full-time,
          remote — and it sits next to the work I already publish. I still build security tools
          in the open, and I still read deployed source, trace root causes, and prove them with
          working proofs-of-concept instead of theorizing about what could go wrong.
        </p>
        <p>
          ChainSentinel is my project: an AI-augmented smart contract audit engine that
          combines deterministic structural detectors with an LLM reasoning layer. It doesn&apos;t
          just generate candidate hypotheses — it runs an adversarial review gate that catches its
          own false positives before they&apos;re ever reported, because I watched it wrongly
          confirm one on a live protocol and decided that couldn&apos;t ship as-is.
        </p>
        <p>
          Blast Radius is a live wallet-approval blast map — token approvals on Ethereum, Base,
          and Arbitrum, plus Solana delegate approvals.{" "}
          <a
            href="https://blast-radius-pearl.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Open the map
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/godwin-web3/blast-radius"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            read the source
          </a>
          .
        </p>
        <p>
          Every finding on this site is real: independently verified, honestly scoped (including
          the ones that turned out not to be exploitable in practice), and backed by either a
          passing Foundry PoC against forked live state or a direct source-level trace.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="https://github.com/godwin-web3/chainsentinel"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30"
        >
          ChainSentinel on GitHub
        </a>
        <a
          href="https://github.com/godwin-web3"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30"
        >
          GitHub Profile
        </a>
      </div>

      <Contact />
    </div>
  );
}
