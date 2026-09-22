"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-paper hover:border-accent print:hidden"
    >
      Print / PDF
    </button>
  );
}
