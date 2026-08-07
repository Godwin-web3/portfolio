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
                    <path d="M23 2.3c-.8.4-1.6.7-2.4.8.9-.5 1.6-1.3 1.9-2.2-.8.5-1.7.8-2.6 1C18.8.9 17.5 0 16 0c-2.4 0-4.3 1.9-4.3 4.3 0 .3 0 .7.1 1C7.4 5 4 3.2 1.8.3c-.4.7-.6 1.5-.6 2.3 0 1.5.8 2.8 2 3.5-.7 0-1.4-.2-2-.5v.1c0 2.1 1.4 3.9 3.3 4.3-.4.1-.9.1-1.3.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.2 4.5 3.3-1.6 1.3-3.6 2.1-5.8 2.1-.4 0-.8 0-1.2-.1C4 21 6.1 22 8.4 22c7.9 0 12.2-6.5 12.2-12.1v-.6c.9-.6 1.7-1.4 2.3-2.4-.8.3-1.5.5-2.3.6z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M21 3L3 10.2l4.4 1.4L19 6l-5.8 8.1L21 3z" />
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
