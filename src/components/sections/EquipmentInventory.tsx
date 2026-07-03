import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GREENRIDER_INVENTORY, InventoryItem } from "@/data/inventory";

export function EquipmentInventory() {
  return (
    <section id="inventory" className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block bg-brand-green px-3 py-1 mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">
              Live Machinery Showroom
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Current <span className="text-brand-green">Stock.</span>
          </h2>
          <p className="text-slate-600 max-w-xl text-sm md:text-base font-medium leading-relaxed">
            Browse our up-to-date physical inventory ready for immediate dispatch. Contact our sales office directly to finalize quotes.
          </p>
        </div>

        {/* Dynamic Heavy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GREENRIDER_INVENTORY.map((item: InventoryItem) => {
            
            // Contextual badge coloring based on stock levels
            const isSoldOut = item.stock === "Sold Out";
            const isLowStock = item.stock === "Low Stock";
            
            return (
              <div 
                key={item.id} 
                className="group flex flex-col bg-white border border-gray-200 hover:border-brand-green transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 border-b border-gray-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
                      isSoldOut ? "grayscale opacity-60" : "grayscale group-hover:grayscale-0"
                    }`}
                  />
                  
                  {/* Stock Status Pill */}
                  <div className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest border ${
                    isSoldOut ? "bg-red-100 text-red-700 border-red-300" :
                    isLowStock ? "bg-amber-100 text-amber-800 border-amber-300" :
                    "bg-green-100 text-brand-green border-green-300"
                  }`}>
                    {item.stock}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-brand-green transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                      {item.price}
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <ul className="space-y-2 border-t border-gray-100 pt-4 mb-8">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                          <span className="w-1.5 h-1.5 bg-brand-yellow flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link linking straight to WhatsApp setup in Contact */}
                  <div>
                    <a
                      href={`#contact`}
                      className={`w-full flex items-center justify-center gap-3 font-black uppercase tracking-widest py-4 px-4 text-xs transition-colors border ${
                        isSoldOut 
                          ? "bg-gray-100 text-gray-400 border-gray-200 pointer-events-none cursor-not-allowed" 
                          : "bg-brand-yellow text-slate-900 border-yellow-500 hover:bg-yellow-400"
                      }`}
                    >
                      {isSoldOut ? "Out of Stock" : "Inquire Pricing"}
                      {!isSoldOut && <ArrowRight size={14} strokeWidth={2.5} />}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}