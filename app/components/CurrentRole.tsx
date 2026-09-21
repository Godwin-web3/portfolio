const duties = [
  "Hands-on security reviews of EVM (Solidity) and Solana (Rust) smart contracts.",
  "Threat models, working proofs-of-concept, and severity-rated reports.",
  "Re-audits after fixes.",
];

export default function CurrentRole() {
  return (
    <section className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-emerald-400">Experience</p>
          <h2 className="mt-2 text-lg font-semibold text-white">Smart Contract Auditor</h2>
          <p className="mt-1 text-sm text-neutral-400">SMC Audits (Sir Mapy &amp; Co) · Remote · Full-time</p>
        </div>
        <p className="font-mono text-xs text-neutral-500">Sep 2026 – Present</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-400">
        {duties.map((duty) => (
          <li key={duty} className="flex gap-2.5">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
            <span>{duty}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
