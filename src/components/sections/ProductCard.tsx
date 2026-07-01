"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  categoryId: string;
}

interface ProductCardProps {
  product: Product;
  slug: string;
  index: number;
}

export function ProductCard({
  product,
  slug,
  index,
}: ProductCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
    >
      <Link
        href={`/category/${slug}/${product.id}`}
        className="group relative block overflow-hidden border border-white/10 bg-slate-900 transition-all duration-500 hover:border-emerald-500/50"
      >
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden bg-slate-950">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors group-hover:text-emerald-400">
              {product.name}
            </h3>

            <ArrowUpRight
              size={18}
              className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-emerald-500"
            />
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-emerald-500">
            {product.price}
          </p>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}