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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Inventory', href: '#inventory' },
    { name: 'Brands', href: '#brands' },
    { name: 'Services', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-2xl shadow-slate-950/50'
        : 'bg-transparent py-5'
    }`}>
      <div className="mx-auto max-w-screen-2xl w-full px-6 sm:px-8 lg:px-12 xl:px-16 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="group flex flex-col leading-tight">
          <div className="flex items-baseline gap-1">
            <span className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
              Green
            </span>
            <span className="text-xl lg:text-2xl font-black text-emerald-500 uppercase tracking-tighter group-hover:text-white transition-colors">
              Rider
            </span>
          </div>
          <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase mt-0.5">
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
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="pl-6 border-l border-white/10">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5"
            >
              <Phone size={15} fill="currentColor" />
              <span>Call Support</span>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-sm transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop — tap to close */}
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-slate-950 border-l border-slate-800 z-50 flex flex-col lg:hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-black text-white uppercase">Green</span>
                <span className="text-lg font-black text-emerald-500 uppercase">Rider</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8 gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-slate-300 uppercase tracking-widest py-4 border-b border-slate-800/50 active:text-emerald-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 font-black uppercase tracking-widest rounded-sm text-sm"
              >
                <Phone size={16} fill="currentColor" /> Call Now
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Namaskara, I am interested in your machines.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-black uppercase tracking-widest rounded-sm text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}