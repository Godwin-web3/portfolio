import Image from "next/image";
import type { Work } from "../lib/work";

type WorkCardProps = {
  work: Work;
  index: number;
  featured?: boolean;
  priority?: boolean;
};

export default function WorkCard({ work, index, featured = false, priority = false }: WorkCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasImage = Boolean(work.image);

  return (
    <article className="group overflow-hidden rounded-2xl border border-paper/12 bg-card transition-colors hover:border-copper/45">
      <div className={featured && hasImage ? "lg:grid lg:grid-cols-[1.45fr_1fr]" : undefined}>
        {hasImage ? (
          <div
            className={
              featured
                ? "relative aspect-[16/10] overflow-hidden border-b border-paper/10 bg-ink lg:border-b-0 lg:border-r"
                : "relative aspect-[16/10] overflow-hidden border-b border-paper/10 bg-ink"
            }
          >
            <Image
              src={work.image!}
              alt={work.alt ?? work.title}
              fill
              priority={priority}
              quality={90}
              sizes={
                work.zoom
                  ? "(min-width: 640px) 1400px, 100vw"
                  : featured
                    ? "(min-width: 1024px) 960px, 100vw"
                    : "(min-width: 640px) 640px, 100vw"
              }
              className="object-cover"
              style={work.zoom ? { transform: `scale(${work.zoom})` } : undefined}
            />
          </div>
        ) : null}
        <div className="flex flex-col p-5 sm:p-6 lg:justify-center lg:p-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-copper">{number}</p>
          <h3 className="mt-2 font-serif text-3xl tracking-tight text-paper">{work.title}</h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-paper/90">{work.problem}</p>
          <p className="mt-2 text-sm leading-relaxed text-mute">{work.blurb}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-paper/15 px-2.5 py-1 font-mono text-[11px] text-mute">
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.16em]">
            {work.live ? (
              <a href={work.live} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-copper/70 underline-offset-4 transition hover:decoration-copper">
                Live
              </a>
            ) : null}
            <a href={work.github} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-paper/30 underline-offset-4 transition hover:decoration-paper">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
