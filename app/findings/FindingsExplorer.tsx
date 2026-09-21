"use client";

import { useState } from "react";
import ChainIcon from "../components/ChainIcon";
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
                ? "border-copper/50 bg-copper/10 text-paper"
                : "border-paper/15 text-mute hover:border-paper/40 hover:text-paper"
            }`}
          >
            {s}
          </button>
        ))}
        <span className="mx-1 h-4 w-px bg-paper/10" aria-hidden />
        <select
          value={activeChain ?? ""}
          onChange={(e) => setActiveChain(e.target.value || null)}
          aria-label="Filter by chain"
          className="rounded-full border border-paper/15 bg-ink px-3 py-1 text-xs font-medium text-mute transition hover:border-paper/40 hover:text-paper"
        >
          <option value="" className="bg-ink">All chains</option>
          {chains.map((c) => (
            <option key={c} value={c} className="bg-ink">{c}</option>
          ))}
        </select>
        {hasFilters && (
          <button type="button" onClick={clearFilters} className="rounded-full px-3 py-1 text-xs font-medium text-mute underline underline-offset-4 hover:text-paper">
            Clear filters
          </button>
        )}
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-mute">
        Showing {shownCount} of {allFindings.length} finding{allFindings.length === 1 ? "" : "s"}
      </p>
      <div className="mt-8 space-y-14">
        {filteredGroups.map((group) => (
          <section key={group.protocol}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-paper/10 pb-3">
              <h2 className="font-serif text-xl text-paper">{group.protocol}</h2>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-mute">
                {Array.from(new Set(group.findings.map((f) => f.chain))).map((c) => (
                  <span key={c} className="flex items-center gap-1">
                    <ChainIcon chain={c} size={12} />
                    {c}
                  </span>
                ))}
              </span>
              <span className="text-xs text-mute">
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
          <p className="rounded-xl border border-paper/12 bg-card p-8 text-center text-sm text-mute">
            No findings match these filters.
          </p>
        )}
      </div>
    </div>
  );
}
