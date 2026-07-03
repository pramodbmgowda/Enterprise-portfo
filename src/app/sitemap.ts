import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/data/inventory';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://greenriderskb.com';

  // 1. Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // 2. Category Pages (e.g., /category/weeders)
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${base}/category/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // We no longer generate individual product URLs because the 
  // product details are now displayed directly on the category cards!

  return [...staticRoutes, ...categoryRoutes];
}