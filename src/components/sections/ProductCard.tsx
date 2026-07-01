"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  categoryId: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/category/${product.categoryId}/${product.id}`}
      className="group relative block border border-white/10 bg-slate-900 overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            {product.name}
          </h3>
          <ArrowUpRight 
            size={18} 
            className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0" 
          />
        </div>
        
        <p className="text-emerald-600 font-mono text-xs uppercase tracking-widest">
          {product.price}
        </p>
      </div>

      {/* Active state line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 group-hover:w-full transition-all duration-500 ease-out" />
    </Link>
  );
}