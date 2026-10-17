import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://svmjpr.com";
const routes = ["", "/about", "/academics", "/admissions", "/campus", "/student-life", "/results", "/gallery", "/contact", "/mandatory-disclosure"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" || r === "/admissions" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/admissions" ? 0.9 : 0.7,
  }));
}
