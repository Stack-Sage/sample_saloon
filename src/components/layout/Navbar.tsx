import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

interface NavbarProps {
  name?: string;
}

export const Navbar = ({ name }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const items = ["hero", "about", "gallery", "services", "pricing", "reviews", "contact"];
  const active = useActiveSection(items);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => { document.documentElement.style.overflow = prev; };
    }
  }, [open]);

  const displayName = useMemo(() => name ?? "Salon Name", [name]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div id="scroll-progress" />
      <div aria-live="polite" className="sr-only">{active} section active</div>
      <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white/90 text-rose-600 px-3 py-2 rounded shadow">
        Skip to content
      </a>
      <nav className="h-16 md:h-16 flex items-center sticky top-0 bg-white/95 backdrop-blur-xl border-b border-[#e6d9d2] shadow-sm z-50">
        <article className="site-container flex items-center justify-between gap-3 md:gap-6 !px-4 md:!px-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans font-bold tracking-wide text-base md:text-lg lg:text-xl xl:text-2xl flex-1 whitespace-nowrap leading-none text-rose-700"
            title={displayName}
          >
            {displayName} 
          </motion.span>
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-sm lg:text-base text-slate-700">
            {items.map(id => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={e => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  aria-current={active === id ? "page" : undefined}
                  className="relative hover:text-rose-600 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-rose-500 after:transition-all font-medium data-[active=true]:text-rose-600"
                  data-active={active === id}
                >
                  {id.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl border border-rose-300 bg-rose-50 text-rose-700 shadow-sm backdrop-blur-sm active:scale-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="w-6 space-y-1.5">
              <span className="block h-0.5 bg-rose-600" />
              <span className="block h-0.5 bg-rose-600" />
              <span className="block h-0.5 bg-rose-600" />
            </div>
          </button>
        </article>
      </nav>
      {/* Mobile menu panel */}
      {open && (
        <div
          className="fixed top-16 left-0 right-0 bottom-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-rose-200 shadow-lg md:hidden flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col py-6 px-5 gap-2">
            {items.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={e => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(id);
                  }}
                  className="block w-full rounded-md px-4 py-3 text-[11px] sm:text-xs font-medium tracking-wide text-rose-700 hover:bg-rose-100 focus:bg-rose-200 focus:outline-none transition-colors data-[active=true]:bg-rose-100"
                  data-active={active === id}
                  aria-current={active === id ? "page" : undefined}
                >
                  {id.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-auto mx-5 mb-6 rounded-md border border-rose-300 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition-colors"
          >
            Close
          </button>
        </div>
      )}

      <noscript>
        <div className="bg-white border-b border-rose-200 px-4 py-2 text-xs flex flex-wrap gap-3">
          {items.map(i => (
            <a key={i} href={`#${i}`} className="text-rose-700 hover:underline">
              {i}
            </a>
          ))}
        </div>
      </noscript>
    </>
  );
};
