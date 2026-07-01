export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; productId: string }>;
}): Promise<Metadata> {
  const { slug, productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId && p.categoryId === slug);
  if (!product) return {};

  return {
    title: `${product.name} | GreenRider Enterprises`,
    description: `Buy ${product.name} in Kunigal Karnataka. ${product.description} Price: ${product.price}. Call for subsidy details.`,
    openGraph: {
      title: `${product.name} | GreenRider`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}