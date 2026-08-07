import { NetworkBase, NetworkBinanceSmartChain, NetworkEthereum } from "@web3icons/react";
import type { ComponentType } from "react";

interface IconProps {
  size?: number;
  variant?: "branded" | "mono" | "background";
  className?: string;
}

const CHAIN_ICONS: Record<string, ComponentType<IconProps>> = {
  Ethereum: NetworkEthereum,
  BSC: NetworkBinanceSmartChain,
  Base: NetworkBase,
};

export default function ChainIcon({ chain, size = 14 }: { chain: string; size?: number }) {
  const Icon = CHAIN_ICONS[chain];

  if (Icon) {
    return <Icon size={size} variant="branded" className="inline-block shrink-0" />;
  }

  // Fallback for chains without a verified official logo available (e.g. Robinhood Chain) -
  // a generic network glyph rather than guessing at a brand mark.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="inline-block shrink-0 text-neutral-500"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 12h7M12 8.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
