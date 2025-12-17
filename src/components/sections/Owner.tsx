"use client";
import { OWNER } from '@/data/inventory';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Owner() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: THE MESSAGE (Clean Editorial Typography) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-2 lg:order-1"
          >
            {/* Minimalist Accent */}
            <div className="w-12 h-1 bg-amber-500 mb-8"></div>
            
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">
              A Message from the Proprietor
            </h4>

            <div className="relative">
              {/* Giant background quote for texture */}
              <Quote className="text-slate-900 absolute -top-8 -left-4 transform -scale-x-100 -z-10" size={120} />
              
              <h2 className="text-2xl md:text-4xl font-light text-white leading-tight font-serif italic mb-8">
                "{OWNER.message}"
              </h2>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                {OWNER.name}
              </h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                {OWNER.role} • Est. 2017
              </p>
            </div>

            {/* Signature Graphic (Simulated) */}
            <div className="mt-8 opacity-60">
              <p className="font-serif text-3xl italic text-slate-400 rotate-[-2deg]">{OWNER.signature}</p>
            </div>
          </motion.div>

          {/* RIGHT: THE IMAGE (The Studio Shot) */}
          <div className="relative h-[500px] flex items-end justify-center lg:justify-end order-1 lg:order-2">
            
            {/* 1. BACKLIGHT: Essential for Black Shirt on Dark Background */}
            {/* A subtle gray/slate glow behind the subject to create separation */}
            <div className="absolute bottom-0 w-[400px] h-[400px] bg-gradient-to-t from-slate-800 to-transparent opacity-60 rounded-full blur-[80px]"></div>
            
            {/* 2. IMAGE */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={OWNER.image} 
              alt={OWNER.name}
              className="relative z-10 w-auto h-full max-h-[500px] object-contain drop-shadow-2xl"
              // Fade the bottom edge so it blends into the footer area smoothly
              style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}