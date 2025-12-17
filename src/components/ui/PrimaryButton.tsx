import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export function PrimaryButton({ children, className, variant = "solid", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "group flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm active:scale-95",
        variant === "solid" 
          ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20" 
          : "border border-white/20 text-white hover:bg-white hover:text-slate-950 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}