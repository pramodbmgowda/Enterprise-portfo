import { CATEGORIES, PRODUCTS } from "@/data/inventory";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, PackageX } from "lucide-react";
import { ProductCard } from "@/components/sections/ProductCard";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);
  if (!category) notFound();
  
  const products = PRODUCTS.filter((product) => product.categoryId === slug);

  return (
    <main className="min-h-[100svh] bg-[#f4f4f4] pt-28 pb-20 flex flex-col">
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16 flex-1">
        
        {/* Breadcrumb Navigation - Kept for context */}
        <nav className="mb-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <Link href="/#inventory" className="hover:text-brand-green transition-colors">Equipment</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-brand-green uppercase">{category.title}</span>
        </nav>

        {/* HEADER REMOVED: The block previously here is gone, 
           giving your cards full vertical priority. 
        */}

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center border border-gray-200 bg-white p-8 text-center shadow-sm">
            <PackageX size={48} className="mb-4 text-slate-400" strokeWidth={1.5} />
            <h2 className="text-lg font-black uppercase tracking-widest text-slate-900">No Models Available</h2>
            <Link
              href="/#inventory"
              className="mt-6 bg-brand-green text-white hover:bg-green-800 px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors"
            >
              Back to Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                slug={slug}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}