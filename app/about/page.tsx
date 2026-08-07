import type { Metadata } from "next";
import Image from "next/image";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "About — Godwin",
  description: "Smart contract developer and security researcher.",
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
        Smart contract developer. Security researcher.
      </h1>

      <div className="mt-8 space-y-5 leading-relaxed text-neutral-400">
        <p>
          I build and ship Solidity systems, and I do smart contract security research on the
          side — reading real, deployed source, tracing root causes, and proving them with
          working proofs-of-concept against forked mainnet state, not just theorizing about what
          could go wrong.
        </p>
        <p>
          ChainSentinel is my project: an AI-augmented smart contract audit engine that
          combines deterministic structural detectors with an LLM reasoning layer. It doesn&apos;t
          just generate candidate hypotheses — it runs an adversarial review gate that catches its
          own false positives before they&apos;re ever reported, because I watched it wrongly
          confirm one on a live protocol and decided that couldn&apos;t ship as-is.
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
