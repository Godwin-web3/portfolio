import Image from "next/image";
import Link from "next/link";
import { simpleIconUrl } from "../lib/stack";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center font-mono text-xs text-mute print:hidden">
      <p>godwinxbt. Build systems. Understand them. Then try to break them.</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-5">
        <Link href="/work" className="hover:text-paper">Work</Link>
        <Link href="/research" className="hover:text-paper">Research</Link>
        <Link href="/cv" className="hover:text-paper">CV</Link>
        <a href="https://github.com/Godwin-web3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-paper">
          <Image src={simpleIconUrl("github", "ffffff")} alt="" width={14} height={14} unoptimized className="opacity-80" />
          GitHub
        </a>
        <a href="mailto:godwinxbt@gmail.com" className="hover:text-paper">Email</a>
      </div>
    </footer>
  );
}
