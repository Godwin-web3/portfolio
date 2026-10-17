import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import type { Project } from "../lib/projects";
import BrandIcon from "./BrandIcon";

export default function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line transition duration-200 hover:-translate-y-0.5 hover:border-accent/50">
      {project.image ? (
        <div className="relative aspect-[16/9] border-b border-line bg-ink">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{project.line}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2.5">
          <h3 className="font-serif text-3xl font-[650] tracking-tight text-paper">{project.title}</h3>
          {project.live && (
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              Live
            </span>
          )}
        </div>
        <dl className="mt-5 grid gap-5 text-sm leading-relaxed text-mute sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Problem</dt>
            <dd className="mt-1.5">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Approach</dt>
            <dd className="mt-1.5">{project.approach}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Result</dt>
            <dd className="mt-1.5">{project.result}</dd>
          </div>
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-mute">{tag}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper transition hover:border-accent"
          >
            <BrandIcon item={{ name: "GitHub", slug: "github", hex: "currentColor" }} size={12} showLabel={false} />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper transition hover:border-accent"
            >
              <ExternalLink size={12} aria-hidden />
              Live
            </a>
          ) : null}
          <Link
            href="/work"
            className="ml-auto inline-flex items-center gap-0.5 font-mono text-[11px] uppercase tracking-wider text-mute hover:text-paper"
          >
            All work
            <ChevronRight size={12} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
