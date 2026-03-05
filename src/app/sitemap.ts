import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pucontour.zeroaustral.cl";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/itinerarios`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/restaurantes`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/termas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/aventura`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/naturaleza`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cultura`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/info`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
