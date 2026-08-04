export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-neutral-500">
      <p>
        Findings on this site are verified with{" "}
        <a
          href="https://github.com/godwin-web3/chainsentinel"
          className="text-neutral-300 underline underline-offset-4 hover:text-white"
          target="_blank"
        >
          ChainSentinel
        </a>
        , my own audit tool, as its own proof of work.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
        <a href="mailto:godwinxbt@gmail.com" className="transition hover:text-white">
          Email
        </a>
        <a href="https://x.com/GodwinXbt" target="_blank" className="transition hover:text-white">
          X
        </a>
        <a href="https://t.me/GodwinXbt" target="_blank" className="transition hover:text-white">
          Telegram
        </a>
      </div>
    </footer>
  );
}
