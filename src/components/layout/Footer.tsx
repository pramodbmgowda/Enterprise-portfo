import { SITE_CONFIG } from "@/data/inventory";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
       <div className="col-span-2 md:col-span-1">
  <h4 className="font-black text-xl mb-4">
    <span className="text-white">GREEN</span>
    <span className="text-emerald-500">RIDER</span>
  </h4>
  <p className="text-slate-500 text-xs leading-relaxed">
    Authorized OEM Dealer & Service Center for agricultural automation.
  </p>
</div>
          
          {/* Legal/Links */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h5>
            <ul className="space-y-3 text-slate-500 text-xs">
              <li><a href="/privacy" className="hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-emerald-500">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-4">HQ</h5>
            <p className="text-slate-500 text-xs leading-relaxed">{SITE_CONFIG.address}</p>
          </div>

          {/* Compliance Badge */}
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">GST Registration</p>
            <p className="text-white font-mono text-sm">29AAAAA0000A1Z5</p>
            <p className="text-[9px] text-slate-600 mt-2">Verified Business Entity</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-slate-600 uppercase tracking-widest">
          <p>© 2026 GreenRider Industries. All Rights Reserved.</p>
          <p>AUTHORIZED DEALER · KARNATAKA, INDIA</p>
        </div>
      </div>
    </footer>
  );
}