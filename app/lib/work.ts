export type Work = {
  title: string;
  problem: string;
  blurb: string;
  image?: string;
  width?: number;
  height?: number;
  alt?: string;
  tags: string[];
  live?: string;
  github: string;
  /** Scale a sparse screenshot so the product UI fills the card. */
  zoom?: number;
};

export const works: Work[] = [
  {
    title: "Blast Radius",
    problem: "Approvals stay live long after the app is gone.",
    blurb:
      "Paste an address. See every spender that can still move tokens on Ethereum, Base, Arbitrum, and Solana delegates.",
    image: "/work/blast-radius.png",
    width: 1440,
    height: 900,
    alt: "Blast Radius scanning vitalik.eth: chain filters and a list of token approvals with spenders and allowances",
    tags: ["Next.js", "viem", "Solana"],
    live: "https://blast-radius-pearl.vercel.app",
    github: "https://github.com/Godwin-web3/blast-radius",
  },
  {
    title: "Assay",
    problem: "A ticker on Solana is not proof of what the token is.",
    blurb:
      "One pass over a tokenized stock: mint, supply, freeze authority, and whether the contract matches the claim.",
    image: "/work/assay.png",
    width: 1440,
    height: 900,
    alt: "Assay verification report for AAPLx, a tokenized Apple stock on Solana",
    tags: ["Solana", "TypeScript"],
    live: "https://assay-gold.vercel.app",
    github: "https://github.com/Godwin-web3/assay",
  },
  {
    title: "Paidline",
    problem: "An invoice that dies at the settlement hop is not a paid invoice.",
    blurb:
      "Invoice in. USDC on Ethereum. Settlement on Creditcoin. A status page that follows the money, not the story.",
    image: "/work/paidline.png",
    width: 1440,
    height: 900,
    alt: "Paidline invoice marked paid and settled on Creditcoin testnet",
    tags: ["Solidity", "USDC", "Creditcoin"],
    live: "https://paidline.vercel.app",
    github: "https://github.com/Godwin-web3/paidline",
    zoom: 2.2,
  },
  {
    title: "Ragnarok",
    problem: "A finding is not a finding until a fork proves it.",
    blurb:
      "Contradiction-driven adversarial research. Invent a state the designers never wrote down. Reach it with valid calls. Prove it on a fork. Kill it if you cannot.",
    tags: ["Foundry", "DeFi", "research"],
    github: "https://github.com/Godwin-web3/ragnarok",
  },
  {
    title: "Keel",
    problem: "A public guess is worthless if it can be copied before the window.",
    blurb:
      "Commit-reveal for Somnia event contracts. Lock the guess in public. Reveal when the window opens, or it stays locked.",
    image: "/work/keel.png",
    width: 1440,
    height: 900,
    alt: "Keel commit-reveal board with a guess locked for a Somnia event contract",
    tags: ["Solidity", "commit-reveal"],
    live: "https://keel-black-phi.vercel.app",
    github: "https://github.com/Godwin-web3/keel",
    zoom: 2.2,
  },
  {
    title: "NoGhosts / Berth",
    problem: "Agent hire pages that show a logo and no evidence are noise.",
    blurb:
      "Intent-hire for live ERC-8004 agents. Post a job, fund escrow, an agent takes the work. Evidence over vanity.",
    image: "/work/noghosts.png",
    width: 1440,
    height: 900,
    alt: "Berth, the NoGhosts app, showing an open intent-hire job with escrow funded",
    tags: ["Solidity", "ERC-8004"],
    live: "https://noghosts.vercel.app",
    github: "https://github.com/Godwin-web3/noghosts",
  },
  {
    title: "Folio",
    problem: "A shared apartment has no single source of truth.",
    blurb:
      "One housing file per apartment. Rooms, documents, vendors. Shared with the people who live there. Convex underneath.",
    image: "/work/folio-poster.png",
    width: 1280,
    height: 800,
    alt: "Folio poster: an apartment housing file with rooms, documents, and vendors",
    tags: ["Convex", "TypeScript"],
    live: "https://folio-three-taupe.vercel.app",
    github: "https://github.com/Godwin-web3/folio",
  },
];

export const stack = [
  { name: "Solidity", use: "Contracts, PoCs, fork tests" },
  { name: "Foundry", use: "Mainnet-fork proofs" },
  { name: "TypeScript", use: "Product and tooling" },
  { name: "Next.js", use: "Live surfaces" },
  { name: "viem", use: "EVM reads and traces" },
  { name: "Solana", use: "Accounts, authorities, mints" },
  { name: "Convex", use: "Realtime product backends" },
  { name: "Python", use: "Monitors and research bots" },
] as const;
