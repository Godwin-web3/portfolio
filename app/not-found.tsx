import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-5 py-24 sm:px-6 sm:py-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl font-[750] leading-[1.1] tracking-[-0.02em] text-paper sm:text-5xl">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
        Either the link is wrong, or whatever was here moved. Here&apos;s where you can go instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">Home</Link>
        <Link href="/work" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">Work</Link>
        <Link href="/findings" className="rounded-full border border-line px-4 py-2 text-sm text-paper transition hover:border-accent">Findings</Link>
      </div>
    </div>
  );
}
