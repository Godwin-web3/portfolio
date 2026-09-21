"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "godwinxbt@gmail.com";
  const socials = [
    { name: "X", href: "https://x.com/GodwinXbt", label: "@GodwinXbt" },
    { name: "Telegram", href: "https://t.me/GodwinXbt", label: "@GodwinXbt" },
    { name: "GitHub", href: "https://github.com/Godwin-web3", label: "Godwin-web3" },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-paper/10 py-14">
      <h2 className="font-serif text-4xl tracking-tight text-paper">Hire me to verify it.</h2>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-mute">
        Protocol research. Smart contract review. Payments and settlement paths.
        If the claim cannot be checked on-chain or in a fork, I am the wrong person.
      </p>

      <div className="mt-6 flex w-full max-w-xl items-center justify-between gap-3 rounded-xl border border-paper/12 bg-card px-4 py-3 sm:px-5 sm:py-4">
        <a href={`mailto:${email}`} className="min-w-0 break-all text-sm font-medium text-paper">
          {email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={`Copy ${email}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-paper/15 px-3 py-2 text-sm text-paper transition hover:border-paper/40"
        >
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <ul className="mt-4 flex max-w-xl flex-col gap-2">
        {socials.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-paper/12 bg-card px-4 py-3 transition hover:border-paper/30"
            >
              <span>
                <span className="block text-sm font-medium text-paper">{s.name}</span>
                <span className="block text-sm text-mute">{s.label}</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-mute">Open</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
