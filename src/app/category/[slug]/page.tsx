import { CATEGORIES, PRODUCTS } from "@/data/inventory";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, PackageX } from "lucide-react";
import { ProductCard } from "@/components/sections/ProductCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.id }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);
  if (!category) notFound();

  const products = PRODUCTS.filter((p) => p.categoryId === slug);

  return (
    <main className="bg-slate-950 min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-10">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#inventory" className="hover:text-emerald-400 transition-colors">Inventory</Link>
            <span>/</span>
            <span className="text-emerald-400">{category.title}</span>
          </div>

          <Link href="/#inventory" className="group inline-flex items-center gap-1 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 hover:gap-2 transition-all">
            <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to Inventory
          </Link>

          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-2 block">
            {category.desc}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16">
            {category.title}
          </h1>

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-24 border border-white/10 rounded-2xl bg-black/30">
              <PackageX size={40} className="text-slate-600 mb-4" />
              <p className="text-slate-400 text-lg font-bold mb-2">No products listed yet</p>
              <p className="text-slate-500 text-sm max-w-sm">We're updating this category. Call us directly to check current stock.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} slug={slug} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}