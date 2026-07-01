import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);
  if (!category) return {};

  return {
    title: `${category.title} | GreenRider Enterprises Kunigal`,
    description: `Buy ${category.title} in Kunigal Karnataka. ${category.desc}. Authorized dealer, genuine warranty, SMAM subsidy support.`,
    openGraph: {
      title: `${category.title} | GreenRider Enterprises`,
      description: `${category.desc} — Authorized dealer in Kunigal, Karnataka.`,
      images: [{ url: category.image }],
    },
  };
}