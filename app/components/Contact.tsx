"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "godwinxbt@gmail.com";
  const socials = [
    { name: "X", href: "https://x.com/GodwinXbt", label: "@GodwinXbt" },
    { name: "Telegram", href: "https://t.me/GodwinXbt", label: "@GodwinXbt" },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore failures silently; modern browsers on secure origins should work
    }
  }

  return (
    <div className="mt-12 border-t border-white/10 pt-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
        Get in touch
      </p>

      {/* Email box */}
      <div className="mt-4 flex items-center justify-between w-full max-w-xl bg-white/2 border border-white/6 rounded-md px-5 py-4">
        <div className="text-white text-sm font-medium break-words">{email}</div>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={`Copy ${email}`}
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-white/8 bg-transparent text-neutral-200 hover:bg-white/3 transition"
        >
          {copied ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
              <path d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12L19.6 5.6 9 16.2z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-200">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor" />
            </svg>
          )}
          <span className="text-sm">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Stacked social buttons */}
      <div className="mt-6 flex flex-col gap-3 max-w-xl">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 px-4 py-3 rounded-md bg-white/2 border border-white/6 hover:bg-white/3 transition"
          >
            <div className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center text-neutral-300">
                {/* simple platform icon */}
                {s.name === "X" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                )}
              </span>
              <div className="text-left">
                <div className="text-sm font-medium text-neutral-200">{s.name}</div>
                <div className="text-sm text-neutral-400">{s.label}</div>
              </div>
            </div>

            {/* external arrow */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
              <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
