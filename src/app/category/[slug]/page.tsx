// 1. Keep your existing generateMetadata function above...

// 2. Add this default export component:
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; productId: string }>;
}) {
  const { slug, productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId && p.categoryId === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-32 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black uppercase">{product.name}</h1>
        <p className="text-slate-400 mt-4">{product.description}</p>
        {/* Render the rest of your product details here */}
      </div>
    </main>
  );
}