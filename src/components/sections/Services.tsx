"use client";
import { SERVICES } from '@/data/inventory';
import { Wrench, Settings, FileText, Tag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'tag': return <Tag size={28} strokeWidth={1.5} />;
      case 'wrench': return <Wrench size={28} strokeWidth={1.5} />;
      case 'settings': return <Settings size={28} strokeWidth={1.5} />;
      case 'file': return <FileText size={28} strokeWidth={1.5} />;
      default: return <Wrench size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-950 text-white relative border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            Complete Farming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Support</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              // ✅ HYBRID LOGIC: whileHover for Desktop, whileInView for Mobile
              whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.5)" }}
              whileInView={{ scale: [0.98, 1], opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-slate-900/50 border border-white/5 p-8 transition-all duration-300 relative overflow-hidden rounded-xl backdrop-blur-sm"
            >
              {/* Icon Container with Auto-Scale on Mobile */}
              <motion.div 
                whileInView={{ scale: [1, 1.1, 1] }}
                viewport={{ once: false }}
                className="w-14 h-14 bg-slate-950 border border-white/10 rounded-lg flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform shadow-xl"
              >
                {getIcon(service.icon)}
              </motion.div>

              <h3 className="text-lg font-bold uppercase mb-3 text-slate-100 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-emerald-500/50 transition-colors">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                Learn More <ArrowUpRight size={14} className="text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}