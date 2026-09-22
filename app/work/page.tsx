import type { Metadata } from "next";
import WorkExplorer from "./WorkExplorer";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected engineering across payments, infrastructure, protocols, and security.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Work</p>
      <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">Selected work</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
        Financial infrastructure, protocol mechanics, monitoring, and the research harnesses
        used to test whether those systems hold.
      </p>
      <WorkExplorer />
    </div>
  );
}
