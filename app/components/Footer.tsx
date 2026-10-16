import Link from "next/link";
import BrandIcon from "./BrandIcon";
import { infra } from "../lib/stack";

const github = infra.find((item) => item.slug === "github")!;

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center font-mono text-xs text-mute print:hidden">
      <p>godwinxbt. Build systems. Understand them. Then try to break them.</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-5">
        <Link href="/work" className="hover:text-paper">Work</Link>
        <Link href="/research" className="hover:text-paper">Research</Link>
        <Link href="/cv" className="hover:text-paper">CV</Link>
        <a href="https://github.com/Godwin-web3" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
          <BrandIcon item={github} size={14} />
        </a>
        <a href="mailto:godwinxbt@gmail.com" className="hover:text-paper">Email</a>
      </div>
    </footer>
  );
}
