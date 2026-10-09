export type Category =
  | "Software"
  | "Infrastructure"
  | "Payments"
  | "Protocols"
  | "Security"
  | "Research";

export type Project = {
  slug: string;
  title: string;
  line: string;
  problem: string;
  approach: string;
  result: string;
  learned: string;
  tags: string[];
  categories: Category[];
  stack: string[];
  github: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ragnarok",
    title: "Ragnarok",
    line: "Adversarial protocol research infrastructure",
    problem: "A finding is not a finding until valid calls reach an impossible state on a fork.",
    approach: "Invent a state the designers never wrote down. Reach it with real calls. Prove economics. Kill it if you cannot.",
    result: "A research harness, not a scanner. Contradiction first. Runtime proof required.",
    learned: "Static pattern matches lie. The unit of reasoning is a protocol state nobody wrote down.",
    tags: ["Security", "EVM", "Research", "TypeScript"],
    categories: ["Security", "Research", "Infrastructure"],
    stack: ["Foundry", "Solidity", "TypeScript"],
    github: "https://github.com/Godwin-web3/ragnarok",
    featured: true,
  },
  {
    slug: "themis",
    title: "Themis",
    line: "Runtime invariant monitoring",
    problem: "Most monitors tell you the node is down. The harder failure is the node is up and the state is wrong.",
    approach: "Observe protocol state across independent RPCs. Quorum and finality first. Then evaluate invariants.",
    result: "HEALTHY / BROKEN / UNKNOWN as explicit states, not a green dashboard.",
    learned: "The interesting problem is not querying the chain. It is deciding when observed state should be trusted.",
    tags: ["Infrastructure", "Distributed systems", "EVM"],
    categories: ["Infrastructure", "Software"],
    stack: ["TypeScript", "Bun", "Hono", "JSON-RPC"],
    github: "https://github.com/Godwin-web3/themis",
    featured: true,
  },
  {
    slug: "agentpay",
    title: "AgentPay",
    line: "Programmable payment infrastructure",
    problem: "An agent that can spend without an on-chain policy is just a key with a story.",
    approach: "Decision off-chain. Permission on-chain in AgentVault. Policy constrains what the agent may sign.",
    result: "Autonomous payment flow where authorization is a contract, not a prompt.",
    learned: "The settlement hop is the product. Everything before it is narrative.",
    tags: ["Payments", "Agents", "Solidity"],
    categories: ["Payments", "Protocols", "Software"],
    stack: ["Solidity", "JavaScript", "TypeScript"],
    github: "https://github.com/Godwin-web3/AgentPay",
    live: "https://agent-pay-gray.vercel.app",
    featured: true,
  },
  {
    slug: "oracle-integrity-monitor",
    title: "Oracle Integrity Monitor",
    line: "Detect stale, inconsistent, or manipulated feeds",
    problem: "A price that is fresh on one RPC and dead on another is not a price.",
    approach: "Compare feeds across sources. Flag staleness, disagreement, and break in expected bounds.",
    result: "A monitor aimed at data integrity, not uptime.",
    learned: "Oracle failure is an accounting failure first.",
    tags: ["Infrastructure", "Oracles", "TypeScript"],
    categories: ["Infrastructure", "Research"],
    stack: ["TypeScript"],
    github: "https://github.com/Godwin-web3/oracle-integrity-monitor",
  },
  {
    slug: "keel",
    title: "Keel",
    line: "Commit-reveal for Somnia event contracts",
    problem: "A public guess is worthless if it can be copied before the window.",
    approach: "Lock the commitment on-chain. Reveal when the window opens, or it stays locked.",
    result: "Live commit-reveal board on Somnia.",
    learned: "A primitive is only a primitive if the timing assumptions are explicit.",
    tags: ["Protocols", "Solidity"],
    categories: ["Protocols", "Software"],
    stack: ["Solidity", "Next.js"],
    github: "https://github.com/Godwin-web3/keel",
    live: "https://keel-black-phi.vercel.app",
    image: "/work/keel.png",
  },
  {
    slug: "blast-radius",
    title: "Blast Radius",
    line: "Wallet approval blast map",
    problem: "Approvals stay live long after the app is gone.",
    approach: "Read live allowances on Ethereum, Base, Arbitrum, and Solana delegates. Show who can still move the money.",
    result: "A paste-an-address tool with no fake numbers.",
    learned: "Most wallet risk is leftover permission, not a new exploit.",
    tags: ["Software", "EVM", "Solana"],
    categories: ["Software", "Security"],
    stack: ["Next.js", "viem", "Solana"],
    github: "https://github.com/Godwin-web3/blast-radius",
    live: "https://blast-radius-pearl.vercel.app",
    image: "/work/blast-radius.png",
  },
  {
    slug: "folio",
    title: "Folio",
    line: "One housing file per apartment",
    problem: "A shared apartment has no single source of truth.",
    approach: "Rooms, documents, vendors. Shared with the people who live there.",
    result: "Shipped for the Convex All Gas hackathon.",
    learned: "Realtime product backends are a different reliability problem than forks.",
    tags: ["Software", "Convex"],
    categories: ["Software"],
    stack: ["Convex", "TypeScript"],
    github: "https://github.com/Godwin-web3/folio",
    live: "https://folio-three-taupe.vercel.app",
    image: "/work/folio-poster.png",
  },
];

export const featured = projects.filter((p) => p.featured);

export const categories: Category[] = [
  "Software",
  "Infrastructure",
  "Payments",
  "Protocols",
  "Security",
  "Research",
];
