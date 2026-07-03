import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { InventoryItem } from "@/data/inventoryData";

export function ProductCard({ product, slug }: { product: InventoryItem; slug: string }) {
  const isSoldOut = product.stock === "Sold Out";
  const isLowStock = product.stock === "Low Stock";

  return (
    <div className="group flex flex-col bg-white border border-gray-200 hover:border-brand-green transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
      
      {/* Image Frame */}
      <div className="relative aspect-[4/3] w-full bg-white border-b border-gray-200 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // FIX: Removed the grayscale effect here so images show in full color instantly
          className={`object-contain p-4 md:p-6 group-hover:scale-105 transition-transform duration-500 ${
            isSoldOut ? "grayscale opacity-50" : ""
          }`}
        />
        
        {/* Stock Status Pill */}
        <div className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest border ${
          isSoldOut ? "bg-red-100 text-red-700 border-red-300" :
          isLowStock ? "bg-amber-100 text-amber-800 border-amber-300" :
          "bg-green-100 text-brand-green border-green-300"
        }`}>
          {product.stock}
        </div>
      </div>

      {/* Info Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
            {product.category}
          </div>
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-brand-green transition-colors">
            {product.name}
          </h3>
          <p className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
            {product.price}
          </p>

          {/* Specifications List */}
          <ul className="space-y-2 border-t border-gray-100 pt-6 mb-8">
            {product.specs?.slice(0, 4).map((spec, idx) => (
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
            href="/#contact"
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
}