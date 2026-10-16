import {
  siTypescript,
  siJavascript,
  siPython,
  siSolidity,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siEthereum,
  siSolana,
  siVercel,
  siDocker,
  siGithub,
  siX,
  siTelegram,
} from "simple-icons";
import type { StackItem } from "../lib/stack";

const ICONS: Record<string, { path: string }> = {
  typescript: siTypescript,
  javascript: siJavascript,
  python: siPython,
  solidity: siSolidity,
  react: siReact,
  nextdotjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  ethereum: siEthereum,
  solana: siSolana,
  vercel: siVercel,
  docker: siDocker,
  github: siGithub,
  x: siX,
  telegram: siTelegram,
};

export default function BrandIcon({
  item,
  size = 16,
  showLabel = true,
}: {
  item: StackItem;
  size?: number;
  showLabel?: boolean;
}) {
  const icon = ICONS[item.slug];

  return (
    <span className="inline-flex items-center gap-2">
      {icon && (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={`#${item.hex}`} aria-hidden className="shrink-0">
          <path d={icon.path} />
        </svg>
      )}
      {showLabel && <span>{item.name}</span>}
    </span>
  );
}
