"use client";

import { SERVICES } from "@/data/inventory";
import { Wrench, Settings, FileText, Tag } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "tag": return <Tag size={28} strokeWidth={1} />;
      case "wrench": return <Wrench size={28} strokeWidth={1} />;
      case "settings": return <Settings size={28} strokeWidth={1} />;
      case "file": return <FileText size={28} strokeWidth={1} />;
      default: return <Wrench size={28} strokeWidth={1} />;
    }
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-slate-950 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Architectural Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 flex-shrink-0" />
              <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                The GreenRider Infrastructure
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Complete <br />
              <span className="text-slate-500">Operational Support</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-md lg:text-right"
          >
            <p className="text-slate-400 text-sm leading-relaxed border-l lg:border-l-0 lg:border-r border-white/10 pl-4 lg:pl-0 lg:pr-4">
              A machine is only as good as the infrastructure keeping it running. We maintain absolute control over our spares, servicing, and documentation to guarantee zero downtime.
            </p>
          </motion.div>
        </div>

        {/* The Blueprint Grid (Flat Class String Fixed Hydration) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative border-r border-b border-white/10 p-8 md:p-10 bg-transparent hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="font-mono text-[10px] text-slate-600 group-hover:text-emerald-500/50 transition-colors">
                  SEC_0{i + 1} //
                </span>
                <div className="text-slate-600 group-hover:text-emerald-400 transform group-hover:scale-110 transition-all duration-500">
                  {getIcon(service.icon)}
                </div>
              </div>

              <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4 group-hover:text-emerald-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}