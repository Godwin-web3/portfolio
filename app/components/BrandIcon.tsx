import Image from "next/image";
import { simpleIconUrl, type StackItem } from "../lib/stack";

export default function BrandIcon({ item, size = 16 }: { item: StackItem; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src={simpleIconUrl(item.slug, item.hex)} alt="" width={size} height={size} unoptimized className="opacity-90" />
      <span>{item.name}</span>
    </span>
  );
}
