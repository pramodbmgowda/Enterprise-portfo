import { Metadata } from 'next';
import { CATEGORIES, PRODUCTS } from '@/data/inventory';
import Link from 'next/link';

// 1. SEO Metadata for the Category
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);
  
  return {
    title: category ? `${category.title} | GreenRider` : 'Category | GreenRider',
    description: category?.desc || 'Explore our agricultural machinery.',
  };
}

// 2. The Page Component
export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const category = CATEGORIES.find((c) => c.id === slug);
  const products = PRODUCTS.filter((p) => p.categoryId === slug);

  if (!category) {
    return <div className="text-white p-20 text-center">Category not found.</div>;
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            {category.title}
          </h1>
          <p className="text-slate-400 max-w-2xl">{category.desc}</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/category/${slug}/${product.id}`}
              className="group border border-white/10 p-6 hover:border-emerald-500/50 transition-colors"
            >
              <div className="h-48 bg-slate-900 mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h2 className="text-xl font-bold uppercase mb-2 group-hover:text-emerald-400 transition-colors">
                {product.name}
              </h2>
              <p className="text-slate-500 text-sm">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}