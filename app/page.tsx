import Link from "next/link";
import ProjectBlock from "./components/ProjectBlock";
import { featured } from "./lib/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <section className="pb-10 pt-16 sm:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">GodwinXbt</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-paper sm:text-6xl">
          Engineer building financial systems, protocols, and infrastructure.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
          I build software around payments, blockchain systems, developer infrastructure,
          and security. Focus: how systems behave when the environment does not cooperate.
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-mute">
          Software · Protocols · Payments · Infrastructure · Security
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/work" className="bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:bg-white">
            View work
          </Link>
          <a href="https://github.com/Godwin-web3" target="_blank" rel="noopener noreferrer" className="border border-line px-5 py-2.5 text-sm text-paper hover:border-paper/40">
            GitHub
          </a>
        </div>
      </section>
      <section className="pb-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl text-paper">Selected work</h2>
          <Link href="/work" className="font-mono text-[11px] uppercase tracking-wider text-mute hover:text-paper">All work</Link>
        </div>
        <div className="mt-8 grid gap-8">
          {featured.map((project) => (
            <ProjectBlock key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
