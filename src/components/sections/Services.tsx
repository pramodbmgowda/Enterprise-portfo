"use client";

import { SERVICES } from "@/data/inventory";
import { Wrench, Settings, FileText, Tag, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "tag":
        return <Tag size={26} strokeWidth={1.5} />;
      case "wrench":
        return <Wrench size={26} strokeWidth={1.5} />;
      case "settings":
        return <Settings size={26} strokeWidth={1.5} />;
      case "file":
        return <FileText size={26} strokeWidth={1.5} />;
      default:
        return <Wrench size={26} strokeWidth={1.5} />;
    }
  };

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 text-white"
    >
      {/* Background depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f0d] via-[#0f1a16] to-[#050807]" />

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-xs mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Complete Farming{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-500">
              Support
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }} // ⬅ earlier trigger = smoother
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                group relative rounded-2xl
                border border-white/10
                bg-black/40
                p-8 shadow-xl
                transition-colors
                md:hover:border-emerald-500/40
              "
            >
              {/* ICON */}
              <div className="w-14 h-14 mb-6 rounded-xl border border-white/10 bg-black/50 flex items-center justify-center text-emerald-400 shadow-inner">
                {getIcon(service.icon)}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-black uppercase text-white mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 text-sm leading-relaxed border-l-4 border-white/10 pl-4 mb-8 md:group-hover:border-emerald-500/50 transition-colors">
                {service.desc}
              </p>

              {/* VISUAL AFFORDANCE (DESKTOP ONLY) */}
              <div className="hidden md:block absolute bottom-6 right-6 opacity-40 group-hover:opacity-80 transition-opacity">
                <ArrowUpRight size={18} className="text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}