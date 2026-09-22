import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/projects";

export default function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="border border-line bg-card">
      {project.image ? (
        <div className="relative aspect-[16/9] border-b border-line bg-ink">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      ) : (
        <div className="border-b border-line px-5 py-8 font-mono text-[11px] leading-relaxed text-mute">
          {project.title.toUpperCase()}
          <pre className="mt-3 overflow-x-auto text-[11px] text-paper/70">{`problem  → ${project.problem.slice(0, 72)}
approach → source, state, fork
result   → ${project.result.slice(0, 72)}`}</pre>
        </div>
      )}
      <div className="p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{project.line}</p>
        <h3 className="mt-2 font-serif text-3xl text-paper">{project.title}</h3>
        <dl className="mt-5 grid gap-4 text-sm leading-relaxed text-mute sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Problem</dt>
            <dd className="mt-1">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Approach</dt>
            <dd className="mt-1">{project.approach}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Result</dt>
            <dd className="mt-1">{project.result}</dd>
          </div>
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="border border-line px-2 py-1 font-mono text-[11px] text-mute">{tag}</li>
          ))}
        </ul>
        <div className="mt-5 flex gap-5 font-mono text-[11px] uppercase tracking-wider">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">GitHub</a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-line underline-offset-4 hover:decoration-accent">Live</a>
          ) : null}
          <Link href="/work" className="text-mute hover:text-paper">All work</Link>
        </div>
      </div>
    </article>
  );
}
