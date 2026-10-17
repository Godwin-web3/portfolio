"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition hover:opacity-85 print:hidden"
    >
      <Download size={12} aria-hidden />
      Print / PDF
    </button>
  );
}
