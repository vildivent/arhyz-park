import { type MetadataRoute } from "next";
import { env } from "~/env";

const baseUrl = env.NEXTAUTH_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: baseUrl + "/champion-school",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseUrl + "/instructors",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/reviews",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: baseUrl + "/prices",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: baseUrl + "/contacts",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: baseUrl + "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
