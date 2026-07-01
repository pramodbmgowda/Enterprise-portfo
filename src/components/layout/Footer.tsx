"use client";
import { useState, useEffect } from 'react'; // 1. Add these hooks
import { SITE_CONFIG } from '@/data/inventory';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false); // 2. Add state

  useEffect(() => {
    // 3. Add scroll listener to detect position
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h4 className="font-black text-xl uppercase tracking-tighter text-white mb-2">
            Green<span className="text-emerald-500">Rider</span>
          </h4>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
            © 2026 GreenRider Manufacturing. All Rights Reserved.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-xs">
          <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Phone size={14} /> {SITE_CONFIG.phone}
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> {SITE_CONFIG.address}
          </span>
        </div>

        {/* 4. Conditional Rendering for Back to Top */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
          >
            Back to Top
            <div className="p-2 bg-slate-900 border border-white/10 rounded-full group-hover:border-emerald-500/50 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        )}
      </div>
    </footer>
  );
}