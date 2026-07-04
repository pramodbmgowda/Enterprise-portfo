import Link from "next/link";
import { SITE_CONFIG } from "@/data/inventory";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white border-t-8 border-brand-yellow">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        {/* Expanded to a 4-column grid for clean, Swiss-style structural balance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
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
              Authorized dealership for agricultural and dairy machinery. Reliable performance for the toughest terrain.
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
            <ul className="space-y-5">
              <li className="text-sm text-green-100">
                <span className="block font-bold text-white uppercase text-[10px] tracking-widest mb-1">Phone</span>
                {SITE_CONFIG.phone}
              </li>
              
              <li className="text-sm text-green-100">
                <span className="block font-bold text-white uppercase text-[10px] tracking-widest mb-1">Email</span>
                <a href="mailto:info@greenriderskb.in" className="hover:text-brand-yellow transition-colors">
                  info@greenriderskb.in
                </a>
              </li>

              <li className="text-sm text-green-100">
                <span className="block font-bold text-white uppercase text-[10px] tracking-widest mb-1">Operating Hours</span>
                Monday - Sunday <br />
                <span className="font-bold text-white">9:30 AM - 6:00 PM</span>
              </li>

              <li className="text-sm text-green-100">
                <span className="block font-bold text-white uppercase text-[10px] tracking-widest mb-1">Address</span>
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>

          {/* SEO & Service Areas Col (NEW) */}
          <div>
            <h4 className="text-brand-yellow font-black uppercase tracking-widest mb-6">Service Areas</h4>
            <div className="space-y-4">
              <p className="text-green-100 text-sm leading-relaxed">
                Supplying premium <strong className="text-white font-bold">tillers</strong>, <strong className="text-white font-bold">milking equipments</strong>, and <strong className="text-white font-bold">small-scale agriculture equipments</strong> to local farmers and agribusinesses.
              </p>
              <p className="text-green-100 text-sm leading-relaxed">
                Providing reliable machinery <strong className="text-white font-bold">services</strong> and expert technical <strong className="text-white font-bold">help</strong> across <span className="text-white font-semibold">Sentheepete</span>, <span className="text-white font-semibold">Kunigal</span>, <span className="text-white font-semibold">Hutridurga</span>, <span className="text-white font-semibold">Bettahalli</span>, and surrounding regions.
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="border-t border-green-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-200 text-xs font-bold tracking-widest uppercase text-center md:text-left">
            &copy; {currentYear} GreenRider Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-green-200 text-[10px] font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-green-200 text-[10px] font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}