"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  categoryId: string;
  brand?: string;
}

interface ProductCardProps {
  product: Product;
  slug: string;
  index: number;
}

export function ProductCard({ product, slug, index }: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.06,
      }}
      className="h-full"
    >
      <Link
        href={`/category/${slug}/${product.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-800/50">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                Image Unavailable
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 backdrop-blur">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300">
              {product.brand ?? "GreenRider"}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="min-h-[48px] text-base font-bold leading-6 text-white transition-colors duration-300 group-hover:text-emerald-400">
            {product.name}
          </h3>

          <div className="mt-2">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
              Starting From
            </p>
            <p className="mt-1 text-xl font-black text-emerald-400">
              {product.price}
            </p>
          </div>

          <div className="mt-auto pt-5">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
              <span className="text-sm font-semibold text-white">
                View Details
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={14} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}