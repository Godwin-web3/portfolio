"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../lib/nav";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-line bg-ink/90 backdrop-blur md:hidden print:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="font-mono text-sm tracking-tight text-paper" onClick={() => setOpen(false)}>
          godwinxbt
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper transition hover:border-accent"
          >
            {open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="absolute left-0 top-full w-full border-b border-line bg-ink px-5 py-4">
          <ul className="space-y-1 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              const Icon = l.icon;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 transition ${
                      active ? "bg-card text-paper" : "text-mute hover:text-paper"
                    }`}
                  >
                    <Icon size={14} strokeWidth={2} aria-hidden />
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
