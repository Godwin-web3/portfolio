export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-neutral-500">
      <p>
        Findings on this site are verified with{" "}
        <a
          href="https://github.com/godwin-web3/chainsentinel"
          className="text-neutral-300 underline underline-offset-4 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChainSentinel
        </a>
        , my own audit tool, as its own proof of work.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
        <a href="mailto:godwinxbt@gmail.com" className="-m-2 rounded-md p-2 transition hover:text-white">
          Email
        </a>

        <a
          href="https://x.com/GodwinXbt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter (X)"
          className="-m-2 rounded-md p-2 transition hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block h-5 w-5">
            <title>Twitter</title>
            <path d="M23 4.557a9.83 9.83 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.935 4.935 0 0 1-2.224.085 4.919 4.919 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 23 4.557z" />
          </svg>
        </a>

        <a
          href="https://t.me/GodwinXbt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="-m-2 rounded-md p-2 transition hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="currentColor" className="inline-block h-5 w-5">
            <title>Telegram</title>
            <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm57.27 81.92l-20.77 98.02c-1.57 6.98-5.7 8.72-11.57 5.44l-31.98-23.56-15.43 14.85c-1.71 1.71-3.14 3.14-6.42 3.14l2.29-32.26L164.8 87.6c3.26-2.96-0.71-4.6-5.05-1.64L71.9 131.1 36.86 121.4c-7.56-2.37-7.71-7.56 1.58-11.17L176.66 68.3c6.49-2.37 12.12 1.58 11.61 13.62z" />
          </svg>
        </a>

        <a
          href="https://github.com/godwin-web3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="-m-2 rounded-md p-2 transition hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block h-5 w-5">
            <title>GitHub</title>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.866 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.003.07 1.531 1.033 1.531 1.033.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.396.099 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.679.92.679 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.137 20.194 22 16.443 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
