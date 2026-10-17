"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../lib/nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden shrink-0 border-r border-line md:sticky md:top-0 md:flex md:h-screen md:w-60 md:flex-col print:hidden">
      <div className="flex h-full flex-col gap-8 px-6 py-8">
        <Link href="/" className="font-mono text-sm tracking-tight text-paper">
          godwinxbt
        </Link>
        <nav className="flex-1">
          <ul className="space-y-1 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              const Icon = l.icon;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2.5 rounded-lg border-l-2 px-3 py-2 transition ${
                      active
                        ? "border-accent bg-card text-paper"
                        : "border-transparent text-mute hover:border-line hover:text-paper"
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
        <ThemeToggle />
      </div>
    </aside>
  );
}
