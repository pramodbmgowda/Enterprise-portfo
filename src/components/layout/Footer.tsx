"use client";
import { SITE_CONFIG } from '@/data/inventory';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          
          <h4 className="font-black text-xl uppercase tracking-tighter text-white mb-2 ">
            Sri Kaalabhyraveshwara <span className="text-emerald-500 " >Enterprises</span>
          </h4>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
            © 2025 Authorized Retailer. All Rights Reserved.
          </p>
        </div>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
        >
          Back to Top
          <div className="p-2 bg-slate-900 border border-white/10 rounded-full group-hover:border-emerald-500/50 transition-colors">
            <ArrowUp size={14} />
          </div>
        </button>

      </div>
    </footer>
  );
}