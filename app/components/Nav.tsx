"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/engineering", label: "Engineering" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur print:hidden">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-4 sm:px-6">
        <Link href="/" className="font-mono text-sm tracking-tight text-paper">
          godwinxbt
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-mute sm:gap-x-5">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link href={l.href} aria-current={active ? "page" : undefined} className={`transition hover:text-paper ${active ? "text-accent" : ""}`}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
