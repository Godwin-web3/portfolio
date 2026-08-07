import type { Metadata } from "next";
import { groupedByProtocol, stats } from "../lib/findings";
import FindingsExplorer from "./FindingsExplorer";

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

      <FindingsExplorer groups={groupedByProtocol} />
    </div>
  );
}
