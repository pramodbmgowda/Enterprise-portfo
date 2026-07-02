import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: any;
  slug: string;
}

export function ProductCard({ product, slug }: ProductCardProps) {
  return (
    <div className="group flex flex-col w-full bg-white border border-gray-200 hover:border-brand-green transition-all duration-200">
      
      {/* Fixed-height image staging area */}
      <div className="relative h-64 w-full bg-[#f4f4f4] p-6 flex items-center justify-center border-b border-gray-100">
        {product.image ? (
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            sizes="300px"
            className="object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        ) : (
          <span className="text-[10px] font-black uppercase text-gray-400">No Image</span>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-black uppercase text-slate-900 mb-3 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-1">
          {product.description}
        </p>

        {/* Pricing & Button area - pinned to bottom */}
        <div className="mt-auto">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
            Starting Price
          </span>
          <span className="text-brand-green font-black text-xl mb-4 block">
            {product.price}
          </span>
          
          <Link
            href={`/category/${slug}/${product.id}`}
            className="block w-full bg-brand-yellow text-slate-900 text-sm font-black uppercase tracking-widest py-3 text-center hover:bg-[#e6c800] transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}