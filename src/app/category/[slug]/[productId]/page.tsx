import { Metadata } from 'next';
import { PRODUCTS } from '@/data/inventory'; // Ensure this path is correct

// 1. Metadata function remains the same
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; productId: string }>;
}): Promise<Metadata> {
  const { slug, productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId && p.categoryId === slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | GreenRider Enterprises`,
    description: product.description,
  };
}

// 2. Standardized Page Component - THIS MUST MATCH EXACTLY
export default async function ProductPage(props: {
  params: Promise<{ slug: string; productId: string }>;
}) {
  const params = await props.params;
  const { slug, productId } = params;
  
  const product = PRODUCTS.find((p) => p.id === productId && p.categoryId === slug);

  if (!product) {
    return <div className="text-white p-20">Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-32 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black uppercase">{product.name}</h1>
        {/* Your content */}
      </div>
    </main>
  );
}