"use client";

import { useMemo, useState } from "react";
import ProjectBlock from "../components/ProjectBlock";
import { categories, projects, type Category } from "../lib/projects";

export default function WorkExplorer() {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.categories.includes(active))),
    [active],
  );

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
              active === c ? "border-accent text-paper" : "border-line text-mute hover:text-paper"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-mute">
        {shown.length} project{shown.length === 1 ? "" : "s"}
      </p>
      <div className="mt-8 grid gap-8">
        {shown.map((project) => (
          <ProjectBlock key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
