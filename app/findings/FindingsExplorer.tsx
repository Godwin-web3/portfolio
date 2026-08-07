"use client";

import { useState } from "react";
import FindingCard from "../components/FindingCard";
import type { ProtocolGroup, Severity } from "../lib/findings";

const SEVERITY_ORDER: Severity[] = ["Critical", "High", "Medium", "Low", "Informational"];

export default function FindingsExplorer({ groups }: { groups: ProtocolGroup[] }) {
  const allFindings = groups.flatMap((g) => g.findings);
  const severities = SEVERITY_ORDER.filter((s) => allFindings.some((f) => f.severity === s));
  const chains = Array.from(new Set(allFindings.map((f) => f.chain))).sort();

  const [activeSeverities, setActiveSeverities] = useState<Set<Severity>>(new Set());
  const [activeChain, setActiveChain] = useState<string | null>(null);

  function toggleSeverity(s: Severity) {
    setActiveSeverities((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  }

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      findings: group.findings.filter((f) => {
        if (activeSeverities.size > 0 && !activeSeverities.has(f.severity)) return false;
        if (activeChain && f.chain !== activeChain) return false;
        return true;
      }),
    }))
    .filter((group) => group.findings.length > 0);

  const shownCount = filteredGroups.reduce((n, g) => n + g.findings.length, 0);
  const hasFilters = activeSeverities.size > 0 || activeChain !== null;

  function clearFilters() {
    setActiveSeverities(new Set());
    setActiveChain(null);
  }

  return (
    <div>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {severities.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => toggleSeverity(s)}
            aria-pressed={activeSeverities.has(s)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              activeSeverities.has(s)
                ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300"
                : "border-white/10 text-neutral-400 hover:border-white/25 hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}

        <span className="mx-1 h-4 w-px bg-white/10" aria-hidden />

        <select
          value={activeChain ?? ""}
          onChange={(e) => setActiveChain(e.target.value || null)}
          aria-label="Filter by chain"
          className="rounded-full border border-white/10 bg-transparent px-3 py-1 text-xs font-medium text-neutral-400 transition hover:border-white/25 hover:text-white"
        >
          <option value="" className="bg-[#0a0a0a]">
            All chains
          </option>
          {chains.map((c) => (
            <option key={c} value={c} className="bg-[#0a0a0a]">
              {c}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-full px-3 py-1 text-xs font-medium text-neutral-500 underline underline-offset-4 hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Showing {shownCount} of {allFindings.length} finding{allFindings.length === 1 ? "" : "s"}
      </p>

      <div className="mt-8 space-y-14">
        {filteredGroups.map((group) => (
          <section key={group.protocol}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/10 pb-3">
              <h2 className="text-lg font-semibold text-white">{group.protocol}</h2>
              <span className="font-mono text-xs uppercase tracking-wide text-neutral-500">
                {Array.from(new Set(group.findings.map((f) => f.chain))).join(" / ")}
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

        {filteredGroups.length === 0 && (
          <p className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-neutral-500">
            No findings match these filters.
          </p>
        )}
      </div>
    </div>
  );
}
