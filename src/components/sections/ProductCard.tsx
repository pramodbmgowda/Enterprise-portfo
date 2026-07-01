"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImageOff } from "lucide-react";

type Product = {
  id: string;
  name: string;
  image: string;
  brand: string;
  isOwnBrand: boolean;
  badge: string;
};

export function ProductCard({
  product,
  slug,
  index,
}: {
  product: Product;
  slug: string;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
    >
      <Link
        href={`/category/${slug}/${product.id}`}
        className="group block rounded-2xl overflow-hidden border border-white/10 bg-black/40 hover:border-emerald-500/40 transition-colors"
      >
        <div className="relative h-48 md:h-56 bg-slate-900 flex items-center justify-center overflow-hidden">

          {/* IN STOCK — top right */}
          <div className="absolute top-3 right-3 z-10">
            <span className="font-mono text-[9px] text-emerald-400 border border-emerald-400/30 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-sm tracking-widest">
              IN STOCK
            </span>
          </div>

          {/* Brand badge — top left, different style per brand type */}
          <div className="absolute top-3 left-3 z-10">
            {product.isOwnBrand ? (
              <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-600 text-white px-2.5 py-1 rounded-sm">
                GreenRider
              </span>
            ) : (
              <span className="text-[9px] font-black uppercase tracking-widest bg-black/70 border border-white/20 text-slate-300 px-2.5 py-1 rounded-sm backdrop-blur-sm">
                {product.brand}
              </span>
            )}
          </div>

          {imgError ? (
            <div className="flex flex-col items-center gap-2 text-slate-600">
              <ImageOff size={28} />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Image unavailable
              </span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        <div className="p-4">
          <h3 className="text-sm md:text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">
            {product.badge}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}