"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";

export function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900 min-h-[320px] flex items-center justify-center"
    >
      {imgError ? (
        <div className="flex flex-col items-center gap-2 text-slate-600 py-20">
          <ImageOff size={40} />
          <span className="text-xs uppercase tracking-widest font-bold">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-auto object-cover"
        />
      )}
    </motion.div>
  );
}