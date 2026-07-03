"use client";

import { ShieldCheck, Wrench, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function OurBrand() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "5000+", label: "Machines Sold" },
    { value: "20+", label: "Years Experience" },
    { value: "5+", label: "Trained Professionals" },
  ];

  return (
    <section id="ourbrand" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            The GreenRider Advantage
          </h2>
          <div className="h-1 w-16 md:w-24 bg-brand-yellow mb-6"></div>
          <p className="text-slate-600 max-w-2xl text-base md:text-lg font-medium">
            We don't just sell machinery; we partner with you to ensure your operations never stop.
          </p>
        </div>

        {/* ANIMATED STATS ROW */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 lg:mb-12"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-brand-green text-white p-6 md:p-8 flex flex-col justify-center border-l-4 border-brand-yellow shadow-sm transition-all duration-1000 ease-out transform ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <span className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-green-100 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Industrial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Feature Block (Spans 2 Columns on Desktop) */}
          <div className="lg:col-span-2 group relative flex flex-col bg-[#f4f4f4] border border-gray-200 hover:border-brand-green transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-md">
            
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 bg-brand-green px-3 py-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                Authorized Dealer
              </span>
            </div>
            
            <div className="relative h-56 sm:h-64 lg:h-80 w-full bg-gray-200 border-b border-gray-200">
              <Image 
                src="/agro5.jpg" 
                alt="Heavy Machinery in Field" 
                fill 
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4f4f4]/40 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-8 lg:p-10 bg-white">
              <ShieldCheck size={28} className="text-brand-green mb-4 md:w-8 md:h-8" strokeWidth={2} />
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 md:mb-4 uppercase tracking-tight">
                Certified OEM Equipment
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mb-6 md:mb-8 flex-1 font-medium">
                We supply strictly authentic, factory-direct agricultural machinery. Every unit is backed by comprehensive manufacturer warranties to protect your investment against premature failure.
              </p>
              <Link 
                href="/#brands" 
                className="inline-flex items-center gap-2 text-brand-green text-sm font-black uppercase tracking-widest hover:text-green-800 transition-colors w-fit"
              >
                View Our Brands <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Side Stacked Blocks (Span 1 Column on Desktop) */}
          <div className="flex flex-col gap-6">
            
            {/* Top Side Block */}
            <div className="flex-1 flex flex-col bg-white border border-gray-200 p-6 md:p-8 hover:border-brand-green transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="mb-5 md:mb-6 bg-[#f4f4f4] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-gray-100">
                <Wrench size={20} className="text-brand-green md:w-6 md:h-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 md:mb-3 uppercase tracking-tight">
                Rapid Deployment Service
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 flex-1 font-medium">
                Downtime costs money. Our factory-trained technicians are equipped for on-site emergency repairs during peak seasons.
              </p>
              <Link 
                href="/#services" 
                className="w-full bg-brand-yellow text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest py-3 md:py-4 text-center hover:bg-[#e6c800] transition-colors"
              >
                Service Details
              </Link>
            </div>

            {/* Bottom Side Block */}
            <div className="flex-1 flex flex-col bg-brand-green border border-brand-green p-6 md:p-8 text-white shadow-sm hover:shadow-md">
              <div className="mb-5 md:mb-6 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 bg-white/5">
                <Truck size={20} className="text-brand-yellow md:w-6 md:h-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 uppercase tracking-tight">
                Extensive Parts Inventory
              </h3>
              <p className="text-green-50 text-xs md:text-sm leading-relaxed flex-1 font-medium">
                A massive local inventory of consumable and structural OEM parts ensures you don't wait weeks for shipping. 
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-brand-yellow text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
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