import { CATEGORIES, PRODUCTS } from "@/data/inventory";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PackageX } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/sections/ProductCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.id,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);

  if (!category) {
    notFound();
  }

  const products = PRODUCTS.filter((product) => product.categoryId === slug);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4">

          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Inventory", href: "/#inventory" },
              { label: category.title, href: "#" },
            ]}
          />

          {/* Header Section */}
          <div className="mb-16 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
              {category.title}
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              {category.desc || "High-performance agricultural machinery built for operational excellence."}
            </p>
          </div>

          {/* Product Grid */}
          {products.length === 0 ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded border border-white/10 bg-white/[0.02] px-6 text-center">
              <PackageX size={48} className="mb-6 text-slate-700" strokeWidth={1} />
              <h2 className="text-xl font-black uppercase tracking-widest">No Models Available</h2>
              <p className="mt-3 max-w-sm text-sm text-slate-500">
                This category is currently being updated with new technical specifications.
              </p>
              <Link
                href="/#inventory"
                className="mt-8 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all"
              >
                Back to Categories
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  slug={slug}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}