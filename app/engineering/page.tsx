import type { Metadata } from "next";
import BrandIcon from "../components/BrandIcon";
import { chains, infra, languages, systems } from "../lib/stack";

export const metadata: Metadata = {
  title: "Engineering",
  description: "Languages, systems, and infrastructure GodwinXbt works with.",
};

export default function EngineeringPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Engineering</p>
      <h1 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">The hard part is not the happy path.</h1>
      <p className="mt-4 text-sm leading-relaxed text-mute">
        I enjoy building systems where the difficult part is not making the happy path work.
        It is making the system behave correctly when the environment does not cooperate.
      </p>
      {[
        ["Languages", languages],
        ["Systems", systems],
        ["Chains", chains],
        ["Infrastructure", infra],
      ].map(([label, items]) => (
        <section key={label as string} className="mt-10">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{label as string}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {(items as typeof languages).map((item) => (
              <li key={item.name} className="flex items-center gap-3 border border-line bg-card px-4 py-3 text-sm">
                <BrandIcon item={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Systems work</h2>
        <ul className="mt-4 space-y-2 text-sm text-mute">
          <li>Distributed systems and multi-RPC observation</li>
          <li>Monitoring and invariant evaluation</li>
          <li>Financial accounting and settlement state</li>
          <li>Event-driven backends</li>
          <li>Blockchain infrastructure</li>
        </ul>
      </section>
    </div>
  );
}
