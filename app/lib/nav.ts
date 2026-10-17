import { Home, Briefcase, FlaskConical, Wrench, FileText, User, Mail, type LucideIcon } from "lucide-react";

export type NavLink = { href: string; label: string; icon: LucideIcon };

export const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/work", label: "Work", icon: Briefcase },
  { href: "/research", label: "Research", icon: FlaskConical },
  { href: "/engineering", label: "Engineering", icon: Wrench },
  { href: "/cv", label: "CV", icon: FileText },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];
