export type StackItem = {
  name: string;
  slug: string;
  hex: string;
};

export const languages: StackItem[] = [
  { name: "TypeScript", slug: "typescript", hex: "3178C6" },
  { name: "JavaScript", slug: "javascript", hex: "F7DF1E" },
  { name: "Python", slug: "python", hex: "3776AB" },
  { name: "Solidity", slug: "solidity", hex: "363636" },
];

export const systems: StackItem[] = [
  { name: "React", slug: "react", hex: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", hex: "ffffff" },
  { name: "Node.js", slug: "nodedotjs", hex: "339933" },
  { name: "PostgreSQL", slug: "postgresql", hex: "4169E1" },
];

export const chains: StackItem[] = [
  { name: "Ethereum", slug: "ethereum", hex: "627EEA" },
  { name: "Solana", slug: "solana", hex: "9945FF" },
];

export const infra: StackItem[] = [
  { name: "Vercel", slug: "vercel", hex: "ffffff" },
  { name: "Docker", slug: "docker", hex: "2496ED" },
  { name: "GitHub", slug: "github", hex: "ffffff" },
];

export function simpleIconUrl(slug: string, hex: string) {
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
}
