const EXPLORERS: Record<string, string> = {
  Ethereum: "https://etherscan.io/address/",
  Base: "https://basescan.org/address/",
  BSC: "https://bscscan.com/address/",
  "Robinhood Chain": "https://robinhoodchain.blockscout.com/address/",
  Arbitrum: "https://arbiscan.io/address/",
  Solana: "https://solscan.io/account/",
};

export function explorerUrl(chain: string, address: string): string | null {
  const base = EXPLORERS[chain];
  if (!base) return null;
  return `${base}${address}`;
}
