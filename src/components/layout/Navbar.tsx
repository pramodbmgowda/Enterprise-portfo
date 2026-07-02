"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/inventory";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Equipment", href: "/#inventory" },
    { label: "Parts & Service", href: "/#services" },
    { label: "Contact Us", href: "/#contact" },
    { label: "FAQ", href: "/#faq"},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-brand-green shadow-sm">
      <div className="mx-auto flex h-20 max-w-screen-2xl w-full items-center justify-between px-4 lg:px-12">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-black uppercase text-brand-green leading-none">
            GreenRider
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
            Enterprises
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-bold text-slate-700 hover:text-brand-green transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="ml-4 bg-brand-yellow text-slate-900 px-6 py-3 text-sm font-black uppercase tracking-wide hover:bg-yellow-400 transition-colors shadow-sm">
            Request Quote
          </Link>
        </nav>

        {/* MOBILE TRIGGER */}
        <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-brand-green" aria-label="Menu">
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-white transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex h-20 items-center justify-between px-4 border-b-4 border-brand-green">
          <span className="text-xl font-black uppercase text-brand-green">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-slate-600">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-slate-900 border-b border-gray-100 pb-4">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 flex gap-4 bg-brand-gray pb-safe">
          <a href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`} className="flex-1 py-4 flex items-center justify-center gap-2 bg-brand-green text-sm font-bold text-white shadow-sm">
            <Phone size={18} /> Call Sales
          </a>
        </div>
      </div>
    </header>
  );
}