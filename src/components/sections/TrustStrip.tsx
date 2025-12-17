"use client";
import { BRANDS, STATS } from '@/data/inventory';
import { motion } from 'framer-motion';

export function TrustStrip() {
  return (
    <section id="brands" className="bg-slate-950 text-white border-y border-white/5 relative z-20">
      
      {/* 1. STATS SECTION: Clean, airy, authoritative */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-3 gap-8 border-b border-white/5">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i} 
            // ✅ MOBILE REVEAL: Stats pulse and brighten when scrolled into view
            whileInView={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1] 
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center group cursor-default"
          >
            {/* Desktop Hover functionality remains via group-hover classes */}
            <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-emerald-500 transition-colors duration-500">
              {stat.value}
            </div>
            <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-white transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. BRANDS MARQUEE: The "Fade" Upgrade */}
      <div className="py-12 bg-emerald-950/30 overflow-hidden relative flex flex-col justify-center">
        
        {/* Label Badge */}
        <div className="container mx-auto px-4 mb-8 relative z-10 text-center">
           <span className="bg-emerald-900/50 border border-emerald-500/20 text-emerald-100 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm backdrop-blur-sm">
             Authorized Service Partners
           </span>
        </div>

        {/* The Marquee */}
        <div className="relative flex overflow-hidden z-10">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
              <motion.span 
                key={i} 
                // ✅ MOBILE: Subtle glow for the brands as they enter the screen center
                whileInView={{ color: "rgba(255, 255, 255, 0.4)" }}
                viewport={{ once: false, amount: "all" }}
                className="text-3xl md:text-5xl font-black text-white/20 uppercase cursor-default select-none hover:text-white/80 transition-colors duration-300"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>

          {/* ✨ THE 10/10 FIX: Side Fade Gradients */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}