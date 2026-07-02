import Link from "next/link";
import { SITE_CONFIG } from "@/data/inventory";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white border-t-8 border-brand-yellow">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex flex-col mb-6 inline-block">
              <span className="text-3xl font-black uppercase tracking-widest text-white leading-none">
                GreenRider
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mt-1">
                Enterprises
              </span>
            </Link>
            <p className="text-green-100 text-sm leading-relaxed max-w-sm">
              Authorized dealership for premium agricultural and dairy machinery. Reliable performance for the toughest terrain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-yellow font-black uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/#inventory" className="text-white hover:text-brand-yellow text-sm font-bold uppercase transition-colors">Equipment</Link></li>
              <li><Link href="/#brands" className="text-white hover:text-brand-yellow text-sm font-bold uppercase transition-colors">Our Brands</Link></li>
              <li><Link href="/#services" className="text-white hover:text-brand-yellow text-sm font-bold uppercase transition-colors">Parts & Service</Link></li>
              <li><Link href="/#contact" className="text-white hover:text-brand-yellow text-sm font-bold uppercase transition-colors">Contact Store</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-brand-yellow font-black uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-sm text-green-100">
                <span className="block font-bold text-white uppercase text-[10px] tracking-widest mb-1">Phone</span>
                {SITE_CONFIG.phone}
              </li>
              <li className="text-sm text-green-100">
                <span className="block font-bold text-white uppercase text-[10px] tracking-widest mb-1">Address</span>
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-200 text-xs font-bold tracking-widest uppercase">
            &copy; {currentYear} GreenRider Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-green-200 text-[10px] font-bold uppercase tracking-widest hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-green-200 text-[10px] font-bold uppercase tracking-widest hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}