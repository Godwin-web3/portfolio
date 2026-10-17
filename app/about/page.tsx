import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "GodwinXbt builds Solidity systems and researches how financial protocols behave under adversarial conditions.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <Image src="/avatar.jpg" alt="GodwinXbt" width={96} height={96} className="h-24 w-24 rounded-2xl border border-line object-cover" />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">About</p>
      <h1 className="mt-3 font-serif text-4xl font-[750] leading-[1.1] tracking-[-0.02em] text-paper sm:text-5xl">
        Software developer. Protocol researcher... Security as a method.
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-mute">
        <p className="text-[19px] font-medium leading-snug text-paper/90">
          I build and ship Solidity systems, research protocol design, and investigate how financial systems behave under adversarial conditions.
        </p>
        <p>
          My work focuses on DeFi, smart contract security, stablecoins, payments, privacy, and financial infrastructure. I study the mechanics beneath the interface: accounting invariants, settlement paths, trust assumptions, and the conditions under which systems break.
        </p>
        <p>
          I approach research through code, transaction traces, on-chain data, and primary sources. The objective is to understand what a system actually guarantees, where those guarantees fail, and what the failure means in practice.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/work" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">Work</Link>
        <Link href="/research" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">Research</Link>
        <Link href="/contact" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">Contact</Link>
        <a href="https://github.com/Godwin-web3" target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">GitHub</a>
      </div>
    </div>
  );
}
