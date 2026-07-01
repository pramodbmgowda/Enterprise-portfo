import { CATEGORIES, PRODUCTS, SITE_CONFIG } from "@/data/inventory";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle2, ChevronLeft } from "lucide-react";
import { ProductImage } from "@/components/sections/ProductImage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.categoryId, productId: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; productId: string }>;
}) {
  const { slug, productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId && p.categoryId === slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.id === slug);

  return (
    <main className="bg-slate-950 min-h-screen text-white flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-10">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/category/${slug}`} className="hover:text-emerald-400 transition-colors">
              {category?.title}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{product.name}</span>
          </div>

          {/* Back link */}
          <Link
            href={`/category/${slug}`}
            className="group inline-flex items-center gap-1 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 hover:gap-2 transition-all"
          >
            <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to {category?.title}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ProductImage src={product.image} alt={product.name} />

            <div>
              {/* Brand badge — GreenRider vs Authorized Dealer */}
              <div className="mb-4">
                {product.isOwnBrand ? (
                  <span className="text-xs font-black uppercase tracking-widest bg-emerald-600 text-white px-3 py-1.5 rounded-sm">
                    GreenRider Brand
                  </span>
                ) : (
                  <span className="text-xs font-black uppercase tracking-widest bg-slate-800 border border-white/10 text-slate-300 px-3 py-1.5 rounded-sm">
                    Authorized {product.brand} Dealer
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed border-l-4 border-white/10 pl-4 mb-6">
                {product.description}
              </p>

              {/* Price + stock indicator */}
              <div className="flex items-center gap-4 mb-8">
                <p className="text-2xl font-bold text-emerald-400">{product.price}</p>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/50 border border-emerald-500/20 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    Ready for Delivery
                  </span>
                </div>
              </div>

              {/* Specs */}
              <ul className="space-y-3 mb-10">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone size={18} /> Enquire Now
              </a>

              <p className="text-slate-500 text-xs mt-4">
                {product.isOwnBrand
                  ? "Call us directly — no middleman, no markup. Direct from our showroom."
                  : "Call us for current pricing, availability, and subsidy eligibility on this model."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}