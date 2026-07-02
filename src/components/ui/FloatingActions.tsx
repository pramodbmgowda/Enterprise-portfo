"use client";

import { MessageCircle, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/inventory";

export function FloatingActions() {
  const waNumber = SITE_CONFIG.phone.replace(/\D/g, ""); 
  const waMessage = encodeURIComponent("Hello GreenRider, I am interested in a quotation.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      
      {/* Scroll to Contact / Lead Capture Button */}
      <a
        href="#contact"
        aria-label="View Location and Request Quote"
        className="group relative flex h-14 w-14 items-center justify-center bg-white border border-gray-200 text-brand-green shadow-lg transition-transform hover:scale-110"
      >
        <MapPin size={24} strokeWidth={2.5} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 whitespace-nowrap bg-slate-900 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none md:block hidden">
          Location & Quote
        </span>
      </a>

      {/* WhatsApp Button (Using official WA green which fits the theme well, or can use brand-green) */}
      <a
        href={`https://wa.me/91${waNumber}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle size={26} className="fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 whitespace-nowrap bg-slate-900 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none md:block hidden">
          Chat Support
        </span>
      </a>

    </div>
  );
}