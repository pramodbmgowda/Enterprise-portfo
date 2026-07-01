import { MetadataRoute } from 'next';
import { CATEGORIES, PRODUCTS } from '@/data/inventory';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://greenrider.in';

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${base}/category/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const productPages = PRODUCTS.map((p) => ({
    url: `${base}/category/${p.categoryId}/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categoryPages,
    ...productPages,
  ];
}