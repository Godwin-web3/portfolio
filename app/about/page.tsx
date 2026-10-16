import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "GodwinXbt builds financial and distributed systems and tests whether they behave as designed.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <Image src="/avatar.jpg" alt="GodwinXbt" width={96} height={96} className="h-24 w-24 border border-line object-cover" />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">About</p>
      <h1 className="mt-3 font-serif text-4xl leading-[1.1] text-paper sm:text-5xl">
        Engineer. Protocol researcher. Security as a method.
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-mute">
        <p>
          I am GodwinXbt. Researcher first, builder second. I study protocols, contracts, attack surfaces, payments, and the systems that connect them.
        </p>
        <p>
          I started with the question of how systems fail when their assumptions stop holding. That remains the filter: follow the accounting, the settlement path, the transaction traces.
        </p>
        <p>
          The work sits at the intersection of DeFi, smart contract security, stablecoins, payments, privacy, and real-world financial infrastructure. Problems I can verify with on-chain data, contract code, and primary sources.
        </p>
        <p>
          Self-taught. The only computer for a long time was a phone. Crypto gave access to systems that traditional rails left closed. The Naira-to-RMB payment friction is one I have seen directly.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-5 text-sm">
        <Link href="/work" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">Work</Link>
        <Link href="/research" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">Research</Link>
        <Link href="/contact" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">Contact</Link>
        <a href="https://github.com/Godwin-web3" target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">GitHub</a>
      </div>
    </div>
  );
}
