import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://somihaiti.org";
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/donate`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/terms&conditions`,
      lastModified: new Date(),
    },
  ];
}
