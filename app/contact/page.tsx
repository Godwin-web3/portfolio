import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Available for software engineering, protocol work, payments, and security research.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Contact</p>
      <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">Let us build something useful.</h1>
      <p className="mt-4 text-sm text-mute">Available for</p>
      <ul className="mt-3 space-y-1 text-sm text-paper">
        <li>Software engineering</li>
        <li>Protocol engineering</li>
        <li>Payments / fintech</li>
        <li>Developer tooling</li>
        <li>Security research</li>
      </ul>
      <ul className="mt-10 space-y-3 text-sm">
        <li><a href="mailto:godwinxbt@gmail.com" className="text-paper underline decoration-line underline-offset-4">godwinxbt@gmail.com</a></li>
        <li><a href="https://github.com/Godwin-web3" target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-line underline-offset-4">github.com/Godwin-web3</a></li>
        <li><a href="https://x.com/GodwinXbt" target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-line underline-offset-4">x.com/GodwinXbt</a></li>
        <li><a href="https://t.me/GodwinXbt" target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-line underline-offset-4">t.me/GodwinXbt</a></li>
      </ul>
    </div>
  );
}
