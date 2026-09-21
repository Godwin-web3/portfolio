import type { Metadata } from "next";
import Link from "next/link";
import { groupedByProtocol, severityBreakdown, stats } from "../lib/findings";
import FindingsExplorer from "./FindingsExplorer";
import SeverityBreakdown from "../components/SeverityBreakdown";

export const metadata: Metadata = {
  title: "Findings",
  description:
    "Verified smart contract findings with working PoCs or independently traced root causes against live source and forked state.",
};

export default function FindingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Findings</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-paper sm:text-5xl">
        {stats.totalFindings} findings across {stats.protocols} protocols
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
        Selected work lives on the{" "}
        <Link href="/#work" className="text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-copper">
          homepage
        </Link>
        . Every entry here has a working proof-of-concept or an independently traced root cause
        against real source and, where possible, forked mainnet state. Severity is reported as
        found. Including the ones that were not exploitable in practice.
      </p>
      <div className="mt-10 max-w-md">
        <SeverityBreakdown data={severityBreakdown} />
      </div>
      <FindingsExplorer groups={groupedByProtocol} />
    </div>
  );
}
