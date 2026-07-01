"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/inventory";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock the background scroll when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const waNumber = SITE_CONFIG?.phone?.replace(/\D/g, "") || "919844107053";
  const waMessage = encodeURIComponent("Hello GreenRider, I am interested in your machinery.");

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Inventory", href: "/#inventory" },
    { label: "Brands", href: "/#brands" },
    { label: "Services", href: "/#features" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-screen-2xl w-full items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col z-50 relative">
            <span className="text-xl font-black uppercase tracking-widest text-white leading-none">
              Green<span className="text-emerald-500">Rider</span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-1">
              Enterprises
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-4 rounded-sm bg-emerald-600 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-500"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-white md:hidden"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Backdrop + Sliding Drawer — only mounted while open, so it can never
          contribute to page width when closed (fixes mobile horizontal overflow) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 z-[60] h-[100dvh] w-[85%] max-w-sm bg-slate-950 border-l border-white/10 flex flex-col shadow-2xl md:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
                <span className="text-lg font-black uppercase tracking-widest text-white">
                  Green<span className="text-emerald-500">Rider</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="border-t border-white/10 p-6 flex flex-col gap-3 bg-slate-900/50 pb-safe">
                <a
                  href={`tel:${SITE_CONFIG?.phone?.replace(/[^0-9+]/g, "") || "+919844107053"}`}
                  className="flex w-full items-center justify-center gap-3 rounded-sm bg-emerald-600 py-4 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-emerald-500"
                >
                  <Phone size={16} />
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-sm bg-[#25D366] py-4 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#20bd5a]"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}