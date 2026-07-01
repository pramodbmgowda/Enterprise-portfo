import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.href} className="flex items-center gap-2">
            {isLast ? (
              <span className="text-emerald-500">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:text-emerald-500"
              >
                {item.label}
              </Link>
            )}

            {!isLast && <ChevronRight size={12} className="text-slate-700" />}
          </span>
        );
      })}
    </nav>
  );
}