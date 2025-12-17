"use client";
import { CATEGORIES } from '@/data/inventory';
import { ArrowUpRight, Crosshair } from 'lucide-react';

export function BentoGrid() {
  return (
    <section id="inventory" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header - Cleaned up & Responsive */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-slate-800">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 block">
              // Inventory Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Machinery <span className="text-slate-700">/</span> Stock
            </h2>
          </div>
        </div>

        {/* THE RESPONSIVE GRID */}
        {/* - Mobile: 1 column
           - Tablet: 2 columns
           - Desktop: 4 columns (gives better control over the 'wide' cards)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <div 
              key={cat.id} 
              // Logic: On mobile/tablet, reset col-span. On Desktop, apply specific span.
              className={`group relative h-[350px] md:h-[450px] bg-slate-900 border border-slate-800 hover:border-amber-500 transition-colors duration-300 overflow-hidden col-span-1 lg:${cat.colSpan}`}
            >
              
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
              </div>

              {/* ID Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[10px] text-amber-500 border border-amber-500/30 bg-black/50 px-2 py-1 backdrop-blur-md">
                  CAT_0{i + 1}
                </span>
              </div>
              
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-amber-500" size={32} />
              </div>

              <div className="absolute bottom-4 right-4 text-slate-700">
                <Crosshair size={16} strokeWidth={1} />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mb-2 group-hover:text-amber-500 transition-colors">
                    {cat.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-slate-600 my-4 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500"></div>
                  <p className="text-slate-400 font-medium tracking-wide text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}