import { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://studyglobal.com.tr";
  const staticPages = [
    { url: base, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/universite`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/akademik-programlar`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/sinavlar`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/yurt-disi-egitim`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/iletisim`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];
  const countryPages = countries.map((c) => ({
    url: `${base}/ulkeler/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const servicePages = services.map((s) => ({
    url: `${base}/hizmetler/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...countryPages, ...servicePages];
}
