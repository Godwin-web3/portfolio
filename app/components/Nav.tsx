"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, FlaskConical, Wrench, FileText, User, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/work", label: "Work", icon: Briefcase },
  { href: "/research", label: "Research", icon: FlaskConical },
  { href: "/engineering", label: "Engineering", icon: Wrench },
  { href: "/cv", label: "CV", icon: FileText },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
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
            const Icon = l.icon;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 transition hover:text-paper ${active ? "text-accent" : ""}`}
                >
                  <Icon size={13} strokeWidth={2} aria-hidden />
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
