import { PRODUCTS } from "@/data/inventory";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function ProductPage({ params }: { params: Promise<{ slug: string; productId: string }> }) {
  const { slug, productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) notFound();

  return (
    <main className="min-h-[100svh] bg-[#f4f4f4] pt-32 pb-24">
      <div className="mx-auto max-w-screen-xl w-full px-6">
        
        {/* Compact Back Link */}
        <Link 
          href={`/category/${slug}`} 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 hover:text-brand-green transition-colors"
        >
          <ChevronLeft size={14} /> Back to {slug.replace("-", " ")}
        </Link>

        {/* Industrial Split Layout (Constrained to max-w-screen-xl) */}
        <div className="grid lg:grid-cols-2 gap-8 bg-white border border-gray-200 shadow-sm">
          
          {/* Image Block: Staged in Light Grey */}
          <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </div>

          {/* Content Block: Tighter Typography */}
          <div className="p-8 md:p-10 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="mb-8">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Price</span>
              <span className="text-2xl font-black text-brand-green">{product.price}</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-8 font-medium max-w-lg">
              {product.description}
            </p>

            {/* Specifications: Tight grid */}
            {product.specs && (
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-4">
                  Technical Specs
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-600">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-green"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Inquire Button - NOW ROUTES TO CONTACT SECTION */}
            <div className="mt-8">
              <Link
                href="/#contact"
                className="block w-full bg-brand-yellow text-slate-900 font-black uppercase tracking-widest py-4 text-center text-xs hover:bg-[#e6c800] transition-colors"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}