import type { Metadata } from "next";
import BrandIcon from "../components/BrandIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Available for software engineering, protocol work, payments, and security research.",
};

const links = [
  { name: "Email", href: "mailto:godwinxbt@gmail.com", label: "godwinxbt@gmail.com" },
  { name: "GitHub", href: "https://github.com/Godwin-web3", label: "github.com/Godwin-web3", slug: "github", hex: "ffffff" },
  { name: "X", href: "https://x.com/GodwinXbt", label: "x.com/GodwinXbt", slug: "x", hex: "ffffff" },
  { name: "Telegram", href: "https://t.me/GodwinXbt", label: "t.me/GodwinXbt", slug: "telegram", hex: "26A5E4" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Contact</p>
      <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">Let us build something useful.</h1>

      <section className="mt-10">
        <p className="text-sm text-mute">Available for</p>
        <ul className="mt-3 space-y-1 text-sm text-paper">
          <li>Software engineering</li>
          <li>Protocol engineering</li>
          <li>Payments / fintech</li>
          <li>Developer tooling</li>
          <li>Security research</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Reporting a vulnerability</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">
          Found something in a protocol I&apos;ve already written up, or want a second pair of eyes on one you
          maintain? Email directly. Include the protocol and chain, the contract address, and what makes the
          path exploitable — not just that it looks wrong. A working PoC speeds things up but isn&apos;t
          required to start the conversation. Findings stay private until the protocol has had a chance to
          fix them, then get disclosed and published, same as everything on this site.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Reach out</h2>
        <ul className="mt-4 space-y-3">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm text-paper underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {l.slug && <BrandIcon item={{ name: l.name, slug: l.slug, hex: l.hex! }} size={16} showLabel={false} />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
