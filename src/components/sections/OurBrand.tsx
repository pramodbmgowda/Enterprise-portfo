"use client";

import { ShieldCheck, Wrench, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function OurBrand() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            The GreenRider Advantage
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mb-6"></div>
          <p className="text-slate-600 max-w-2xl text-lg">
            Engineered for maximum uptime. We don't just sell machinery; we partner with you to ensure your operations never stop.
          </p>
        </div>

        {/* Industrial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Feature Block (Spans 2 Columns) */}
          <div className="lg:col-span-2 group relative flex flex-col bg-[#f4f4f4] border border-gray-200 hover:border-brand-green transition-colors duration-300 overflow-hidden">
            <div className="absolute top-6 left-6 z-10 bg-brand-green px-3 py-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                Authorized Dealer
              </span>
            </div>
            
            <div className="relative h-64 md:h-80 w-full bg-gray-200">
              {/* Replace with a high-quality machinery action shot */}
              <Image 
                src="/agro5.jpg" 
                alt="Heavy Machinery in Field" 
                fill 
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="flex flex-col flex-1 p-8 md:p-10 bg-white">
              <ShieldCheck size={32} className="text-brand-green mb-4" strokeWidth={1.5} />
              <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                Certified OEM Equipment
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl mb-8 flex-1">
                We supply strictly authentic, factory-direct agricultural machinery. Every unit is backed by comprehensive manufacturer warranties to protect your investment against premature failure.
              </p>
              <Link 
                href="/#brands" 
                className="inline-flex items-center gap-2 text-brand-green font-black uppercase tracking-widest hover:text-green-800 transition-colors"
              >
                View Our Brands <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Side Stacked Blocks (Span 1 Column) */}
          <div className="flex flex-col gap-6">
            
            {/* Top Side Block */}
            <div className="flex-1 flex flex-col bg-white border border-gray-200 p-8 hover:border-brand-green transition-colors duration-300">
              <div className="mb-6 bg-[#f4f4f4] w-14 h-14 flex items-center justify-center">
                <Wrench size={24} className="text-brand-green" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                Rapid Deployment Service
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                Downtime costs money. Our factory-trained technicians are equipped for on-site emergency repairs during peak seasons.
              </p>
              <Link 
                href="/#services" 
                className="w-full bg-brand-yellow text-slate-900 text-xs font-black uppercase tracking-widest py-3 text-center hover:bg-[#e6c800] transition-colors"
              >
                Service Details
              </Link>
            </div>

            {/* Bottom Side Block */}
            <div className="flex-1 flex flex-col bg-brand-green border border-brand-green p-8 text-white">
              <div className="mb-6 w-14 h-14 flex items-center justify-center border border-white/20">
                <Truck size={24} className="text-brand-yellow" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight">
                Extensive Parts Inventory
              </h3>
              <p className="text-green-50 text-sm leading-relaxed flex-1">
                A massive local inventory of consumable and structural OEM parts ensures you don't wait weeks for shipping. 
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase tracking-widest hover:text-white transition-colors text-xs"
                >
                  Request A Part <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}