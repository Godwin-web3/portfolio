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
      <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">Engineer. Protocol researcher. Security as a method.</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-mute">
        <p>I am GodwinXbt. I build software around financial infrastructure, payments, blockchain systems, developer tooling, and security.</p>
        <p>I started in Web3 through security research. That taught a question I still use: what assumptions does the system depend on, and what happens when they stop being true?</p>
        <p>I enjoy building systems as much as investigating them. The work sits at the intersection of software, financial infrastructure, and systems correctness.</p>
        <p>Particular interest: payments, stablecoins, settlement, distributed systems, protocol design, and security.</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-5 text-sm">
        <Link href="/work" className="text-paper underline decoration-line underline-offset-4">Work</Link>
        <Link href="/research" className="text-paper underline decoration-line underline-offset-4">Research</Link>
        <Link href="/contact" className="text-paper underline decoration-line underline-offset-4">Contact</Link>
      </div>
    </div>
  );
}
