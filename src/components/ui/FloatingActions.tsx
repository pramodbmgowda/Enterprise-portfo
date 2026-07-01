"use client";

import { MessageCircle, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/inventory";

export function FloatingActions() {
  // Format phone number for WhatsApp API (removes spaces/pluses)
  const waNumber = SITE_CONFIG.phone.replace(/\D/g, ""); 
  const waMessage = encodeURIComponent("Hello GreenRider, I am interested in a quotation.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      
      {/* Scroll to Contact / Lead Capture Button */}
      <a
        href="#contact"
        aria-label="View Location and Request Quote"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 border border-white/10 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all hover:scale-110 hover:border-emerald-500/50"
      >
        <MapPin size={24} className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />
        
        {/* Tooltip (Visible on Desktop hover only) */}
        <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-slate-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none md:block hidden">
          Location & Quote
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${waNumber}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-110 hover:bg-[#20bd5a]"
      >
        <MessageCircle size={26} className="fill-current" />
        
        {/* Tooltip (Visible on Desktop hover only) */}
        <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-slate-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none md:block hidden">
          Chat Support
        </span>
      </a>

    </div>
  );
}