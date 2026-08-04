export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-neutral-500">
      <p>
        Built with{" "}
        <a
          href="https://github.com/godwin-web3/chainsentinel"
          className="text-neutral-300 underline underline-offset-4 hover:text-white"
          target="_blank"
        >
          ChainSentinel
        </a>{" "}
        as its own proof of work.
      </p>
    </footer>
  );
}
