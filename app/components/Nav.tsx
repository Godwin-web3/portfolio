"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/findings", label: "Findings" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-paper">
          godwin<span className="text-copper">.xbt</span>
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-mute sm:gap-x-6">
          {links.map((l) => {
            const isActive = l.href.startsWith("/#") ? false : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition hover:text-paper ${isActive ? "text-copper" : ""}`}
                >
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
