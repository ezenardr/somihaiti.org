import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://somihaiti.org";
  return [
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/en/donate`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/en/privacy`,
      lastModified: new Date(),
    },{
      url: `${baseURL}/fr`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/fr/donate`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/fr/privacy`,
      lastModified: new Date(),
    },
  ];
}
