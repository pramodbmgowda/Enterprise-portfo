"use client";

import { CATEGORIES } from "@/data/inventory";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function BentoGrid() {
  return (
    <section id="inventory" className="py-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Equipment & Implements
          </h2>
          <div className="h-1 w-24 bg-brand-green mb-6"></div>
          <p className="text-slate-600 max-w-2xl text-lg">
            Explore our complete lineup of heavy-duty machinery. Built for rigorous daily use and maximum field efficiency.
          </p>
        </div>

        {/* Industrial Block Grid (The "Deere" Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => {
            // Make the first item span 2 columns on larger screens to keep the "Bento" feel, 
            // but keep the styling strictly brutalist and corporate.
            const isLargeBlock = index === 0;

            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className={`group flex flex-col bg-[#f4f4f4] border-t-4 border-transparent hover:border-brand-green hover:shadow-lg transition-all duration-200 ${
                  isLargeBlock ? "md:col-span-2" : "col-span-1"
                }`}
              >
                <div className={`p-8 md:p-10 flex flex-col h-full ${isLargeBlock ? "justify-between" : ""}`}>
                  
                  {/* Icon / Marker */}
                  <div className="mb-10 flex justify-between items-start">
                    <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center text-brand-green font-black text-2xl shadow-sm">
                      {category.title.charAt(0)}
                    </div>
                    {isLargeBlock && (
                      <div className="bg-brand-green px-3 py-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">
                          Featured Category
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-700 mb-8 flex-1 max-w-lg leading-relaxed">
                      {category.desc || "Industrial-grade equipment for professional farming applications. Built to withstand the harshest environments."}
                    </p>
                  </div>
                  
                  {/* Action Link */}
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wide group-hover:text-brand-green transition-colors">
                      Explore Models <ChevronRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}