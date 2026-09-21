export type Work = {
  title: string;
  blurb: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  tags: string[];
  live: string;
  github: string;
  /** Scale a sparse screenshot so the product UI fills the card. */
  zoom?: number;
};

export const works: Work[] = [
  {
    title: "Blast Radius",
    blurb:
      "Wallet approval blast map. Ethereum, Base, Arbitrum, plus Solana delegates — paste an address and see who can still move the money.",
    image: "/work/blast-radius.png",
    width: 1440,
    height: 900,
    alt: "Blast Radius scanning vitalik.eth: chain filters and a list of token approvals with spenders and allowances",
    tags: ["Next.js", "TypeScript", "viem", "Solana"],
    live: "https://blast-radius-pearl.vercel.app",
    github: "https://github.com/Godwin-web3/blast-radius",
  },
  {
    title: "Folio",
    blurb:
      "A housing file for one apartment. Rooms, documents, vendors — shared with the people who actually live there. Convex underneath.",
    image: "/work/folio-poster.png",
    width: 1280,
    height: 800,
    alt: "Folio poster: an apartment housing file with rooms, documents, and vendors",
    tags: ["Next.js", "Convex", "TypeScript"],
    live: "https://folio-three-taupe.vercel.app",
    github: "https://github.com/Godwin-web3/folio",
  },
  {
    title: "Keel",
    blurb:
      "Commit–reveal for Somnia event contracts. Lock a guess in public. Reveal it when the window opens, or it stays locked.",
    image: "/work/keel.png",
    width: 1440,
    height: 900,
    alt: "Keel commit-reveal board with a guess locked for a Somnia event contract",
    tags: ["Next.js", "Solidity", "TypeScript"],
    live: "https://keel-black-phi.vercel.app",
    github: "https://github.com/Godwin-web3/keel",
    zoom: 2.2,
  },
  {
    title: "Assay",
    blurb:
      "Verify a tokenized stock on Solana before you trust the ticker. Contract, supply, freeze authority — one pass.",
    image: "/work/assay.png",
    width: 1440,
    height: 900,
    alt: "Assay verification report for AAPLx, a tokenized Apple stock on Solana",
    tags: ["Next.js", "Solana", "TypeScript"],
    live: "https://assay-gold.vercel.app",
    github: "https://github.com/Godwin-web3/assay",
  },
  {
    title: "Paidline",
    blurb: "Invoice in. USDC across. Creditcoin settles it. A status page for the payment.",
    image: "/work/paidline.png",
    width: 1440,
    height: 900,
    alt: "Paidline invoice marked paid and settled on Creditcoin testnet",
    tags: ["Next.js", "Solidity", "USDC"],
    live: "https://paidline.vercel.app",
    github: "https://github.com/Godwin-web3/paidline",
    zoom: 2.2,
  },
  {
    title: "NoGhosts / Berth",
    blurb:
      "Intent-hire for ERC-8004 agents. The live app is Berth: post a job, fund escrow, an agent takes the work.",
    image: "/work/noghosts.png",
    width: 1440,
    height: 900,
    alt: "Berth, the NoGhosts app, showing an open intent-hire job with escrow funded",
    tags: ["Next.js", "Solidity", "ERC-8004"],
    live: "https://noghosts.vercel.app",
    github: "https://github.com/Godwin-web3/noghosts",
  },
];

export const stack = [
  "TypeScript",
  "Next.js",
  "Solidity",
  "Foundry",
  "viem",
  "Solana",
  "Convex",
  "Python",
] as const;
