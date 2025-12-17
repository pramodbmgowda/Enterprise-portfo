"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/inventory';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Inventory', href: '#inventory' },
    { name: 'Brands', href: '#brands' },
    { name: 'Services', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // ✅ FIX: Removed 'border-b' entirely. Now it relies only on shadow and background color.
    // This eliminates any possibility of a flickering line during scroll.
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-2xl shadow-slate-950/50' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link href="/" className="group flex flex-col leading-tight">
          
          {/* MOBILE VIEW: Full Name */}
          <div className="md:hidden flex flex-col">
            <span className="text-sm font-black text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
              Kaalabhyraveshwara
            </span>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest group-hover:text-white transition-colors">
              Enterprises
            </span>
          </div>
          
          {/* DESKTOP VIEW: Standard Layout */}
          <div className="hidden md:flex items-baseline gap-1.5">
            <span className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
              Sri 
            </span>
            <span className="text-xl lg:text-2xl font-black text-emerald-500 uppercase tracking-tighter group-hover:text-white transition-colors">
              Kaalabhyraveshwara
            </span>
          </div>
          
          {/* Subtext */}
          <span className="hidden md:block text-[10px] font-extrabold text-slate-100 tracking-[0.25em] uppercase group-hover:text-emerald-400 transition-colors mt-0.5 ml-0.5 opacity-90">
            Enterprises
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="relative group text-sm font-bold text-slate-300 uppercase tracking-widest transition-colors hover:text-white"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full box-border"></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pl-6 border-l border-white/10">
             <a 
               href={`tel:${SITE_CONFIG.phone}`} 
               className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5 active:translate-y-0"
             >
               <Phone size={16} fill="currentColor" /> <span>Call Support</span>
             </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-sm transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 p-6 flex flex-col gap-6 lg:hidden h-screen shadow-2xl animate-in slide-in-from-top-5">
           {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-4 active:text-emerald-500"
            >
              {item.name}
            </Link>
          ))}
          <a href={`tel:${SITE_CONFIG.phone}`} className="mt-4 flex justify-center items-center gap-2 bg-emerald-600 text-white py-4 font-bold uppercase tracking-widest rounded-sm">
            <Phone size={18} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
}