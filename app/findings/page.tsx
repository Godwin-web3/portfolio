import type { Metadata } from "next";
import { groupedByProtocol, stats } from "../lib/findings";
import FindingCard from "../components/FindingCard";

export const metadata: Metadata = {
  title: "Findings — Godwin",
  description: "Real, verified smart contract security findings across live protocols.",
};

export default function FindingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-sm text-emerald-400">Findings</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        {stats.totalFindings} findings across {stats.protocols} protocols
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-400">
        Every entry here has a working proof-of-concept or an independently traced root cause
        against real, live source and, where possible, forked mainnet state. Severity and status
        are reported as found — including the ones that turned out not to be exploitable in
        practice.
      </p>

      <div className="mt-12 space-y-14">
        {groupedByProtocol.map((group) => (
          <section key={group.protocol}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/10 pb-3">
              <h2 className="text-lg font-semibold text-white">{group.protocol}</h2>
              <span className="font-mono text-xs uppercase tracking-wide text-neutral-500">
                {group.chains.join(" / ")}
              </span>
              <span className="text-xs text-neutral-500">
                {group.findings.length} finding{group.findings.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {group.findings.map((f) => (
                <FindingCard key={f.slug} finding={f} hideProtocol />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
