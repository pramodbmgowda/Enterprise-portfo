import { CATEGORIES, PRODUCTS, SITE_CONFIG } from "@/data/inventory";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductImage } from "@/components/sections/ProductImage";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.categoryId,
    productId: product.id,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug, productId } = await params;

  const product = PRODUCTS.find(
    (p) =>
      p.id === productId &&
      p.categoryId === slug
  );

  if (!product) {
    notFound();
  }

  const category = CATEGORIES.find(
    (c) => c.id === slug
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="relative pt-20 pb-16">

        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute inset-0 bg-slate-950" />

          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />

        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}

          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">

            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href={`/category/${slug}`}
              className="hover:text-white transition-colors"
            >
              {category?.title}
            </Link>

            <ChevronRight size={14} />

            <span className="text-emerald-400">
              {product.name}
            </span>

          </nav>

          {/* Back */}

          <Link
            href={`/category/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ChevronLeft size={18} />
            Back to {category?.title}
          </Link>

          {/* Product */}

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">

            {/* Image */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">

              <ProductImage
                src={product.image}
                alt={product.name}
              />

            </div>

            {/* Details */}

            <div>

              <h1 className="text-3xl font-black leading-tight md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4">

                <p className="text-3xl font-black text-emerald-400">
                  {product.price}
                </p>

                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Ready for Delivery
                  </span>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 flex-shrink-0 text-emerald-500"
                    />

                    <span className="text-slate-300">
                      {spec}
                    </span>
                  </div>
                ))}

              </div>
                            {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-emerald-500 hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Call Now
                </a>

                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-emerald-500 hover:bg-white/10"
                >
                  Enquire Now
                </Link>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Contact us for the latest pricing, finance options,
                government subsidy assistance, and delivery availability.
              </p>

            </div>

          </div>

          {/* Divider */}

          <div className="my-16 border-t border-white/10" />

          {/* Similar Products */}

          <div>

            <h2 className="mb-8 text-2xl font-bold">
              Similar Products
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {PRODUCTS.filter(
                (p) =>
                  p.categoryId === slug &&
                  p.id !== product.id
              )
                .slice(0, 4)
                .map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/category/${slug}/${item.id}`}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40"
                  >

                    <div className="relative aspect-square overflow-hidden bg-slate-950">

                      <ProductImage
                        src={item.image}
                        alt={item.name}
                      />

                    </div>

                    <div className="p-5">

                      <h3 className="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-emerald-400">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-xl font-bold text-emerald-400">
                        {item.price}
                      </p>

                    </div>

                  </Link>
                ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}