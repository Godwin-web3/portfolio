import type { MetadataRoute } from "next";
import { findings } from "./lib/findings";

const base = "https://godwinxbt.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/research`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/engineering`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/findings`, changeFrequency: "weekly", priority: 0.7 },
    ...findings.map((f) => ({
      url: `${base}/findings/${f.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
