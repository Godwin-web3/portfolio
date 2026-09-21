import type { MetadataRoute } from "next";
import { findings } from "./lib/findings";

const base = "https://godwinxbt.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const findingPages = findings.map((f) => ({
    url: `${base}/findings/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/findings`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...findingPages,
  ];
}
