"use client";
import { CATEGORIES } from '@/data/inventory';
import { ArrowUpRight, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

export function BentoGrid() {
  return (
    <section id="inventory" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-slate-800">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2 block">
              // Inventory Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Machinery <span className="text-slate-700">/</span> Stock
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.id} 
              // Initial state for scroll reveal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative h-[350px] md:h-[450px] bg-slate-900 border border-slate-800 hover:border-amber-500 transition-colors duration-500 overflow-hidden col-span-1 lg:${cat.colSpan}`}
            >
              
              <div className="absolute inset-0 z-0">
                {/* DESKTOP: Hover triggers grayscale(0)
                   MOBILE: Scroll into view triggers grayscale(0) 
                */}
                <motion.img 
                  src={cat.image} 
                  alt={cat.title}
                  whileInView={{ filter: "grayscale(0%)", opacity: 0.9, scale: 1.05 }}
                  viewport={{ once: false, amount: 0.7 }} // Triggers when 70% visible on mobile
                  className="w-full h-full object-cover opacity-60 grayscale md:grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
              </div>

              {/* ID Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[10px] text-amber-500 border border-amber-500/30 bg-black/50 px-2 py-1 backdrop-blur-md">
                  CAT_0{i + 1}
                </span>
              </div>
              
              {/* Arrow reveals on scroll for mobile, hover for desktop */}
              <motion.div 
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-4 right-4 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              >
                <ArrowUpRight className="text-amber-500" size={32} />
              </motion.div>

              <div className="absolute bottom-4 right-4 text-slate-700">
                <Crosshair size={16} strokeWidth={1} />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
                {/* Content slides up on scroll for mobile */}
                <motion.div 
                  whileInView={{ y: 0 }}
                  initial={{ y: 20 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500"
                >
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mb-2 group-hover:text-amber-500 transition-colors">
                    {cat.title}
                  </h3>
                  
                  {/* Line expands on mobile scroll */}
                  <motion.div 
                    whileInView={{ width: "100%", backgroundColor: "#f59e0b" }}
                    viewport={{ once: false, amount: 0.9 }}
                    className="h-[1px] w-12 bg-slate-600 my-4 md:w-12 md:group-hover:w-full md:group-hover:bg-amber-500 transition-all duration-500"
                  ></motion.div>

                  <p className="text-slate-400 font-medium tracking-wide text-xs md:text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">
                    {cat.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}