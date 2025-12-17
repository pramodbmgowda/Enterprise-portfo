"use client";
import { SERVICES } from '@/data/inventory';
import { Wrench, Settings, FileText, Tag, ArrowUpRight } from 'lucide-react';

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
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            Complete Farming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Support</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            We don't just sell machines; we keep them running. From purchase to maintenance, we are with you at every step.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div key={i} className="group bg-slate-900/50 border border-white/5 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden rounded-xl backdrop-blur-sm">
              
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>

              {/* Number Watermark */}
              <span className="text-white/5 font-black text-7xl absolute -top-6 -right-6 select-none group-hover:text-white/10 transition-colors">
                0{i + 1}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-slate-950 border border-white/10 rounded-lg flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {getIcon(service.icon)}
              </div>

              <h3 className="text-lg font-bold uppercase mb-3 text-slate-100 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-emerald-500/50 transition-colors">
                {service.desc}
              </p>

              {/* Action Link */}
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                Learn More <ArrowUpRight size={14} className="text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}