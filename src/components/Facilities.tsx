import { type SalonContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";

// Inline icon set (no external dependency)
const I = {
  Feather: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20C12 20 20 12 20 4C12 4 6 10 6 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 14L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 14L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Cut: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 6L21 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 6L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Brush: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 3L21 10L13 18L6 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 21C5 21 7 19 7 17C5 17 3 19 3 21Z" fill="currentColor" />
    </svg>
  ),
  Spa: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3C10 6 10 9 12 12C14 9 14 6 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 8C6 11 8 13 12 14C16 13 18 11 19 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 16C6 18 9 19 12 19C15 19 18 18 20 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Wax: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6 3H18V9H6V3Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6 9L4 21H20L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 13L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 13L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Makeup: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 3L9 7L5 11L1 7L5 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 3L21 11L13 19L9 15L13 11L9 7L13 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Nail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 3H16L17 9H7L8 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 9L6 21H18L17 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M11 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Massage: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 21C5 17 8 14 12 14C16 14 19 17 20 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M2 11L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 11L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Default: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 12L12 15L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const withTitle = (svg: JSX.Element, title: string) => (
  <span aria-hidden="true" className="inline-flex">{svg}{/* decorative */}</span>
);

const iconFor = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("brow") || t.includes("thread")) return withTitle(I.Feather, title);
  if (t.includes("haircut") || t.includes("styling")) return withTitle(I.Cut, title);
  if (t.includes("keratin") || t.includes("smooth")) return withTitle(I.Brush, title);
  if (t.includes("facial") || t.includes("clean")) return withTitle(I.Spa, title);
  if (t.includes("wax")) return withTitle(I.Wax, title);
  if (t.includes("makeup")) return withTitle(I.Makeup, title);
  if (t.includes("nail")) return withTitle(I.Nail, title);
  if (t.includes("massage") || t.includes("spa")) return withTitle(I.Massage, title);
  return withTitle(I.Default, title);
};

interface FacilitiesProps {
  data: SalonContent;
}

export const Services = memo(({ data }: FacilitiesProps) => {
  const list = useMemo(() => data.services, [data.services]);
  return (
    <section id="services" className="section-cover snap-section" data-section="services">
      <div className="bg-image opacity-15" style={{ backgroundImage: "url('/assets/change/3.jpg')" }} />
      <div className="bg-fade" />
      <div className="site-container content-scale">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-gradient font-sans text-5xl md:text-6xl font-bold mb-14 text-center md:text-left"
        >
          Services
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
          {list.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="card-soft group p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-rose-200/40 [container-type:inline-size]"
            >
              <div className="icon-wrap group-hover:shadow-md" aria-hidden="true">
                {iconFor(s.title)}
              </div>
              <h4 className="font-semibold text-sm md:text-base lg:text-lg group-hover:text-rose-600 transition-colors text-float">
                {s.title}
              </h4>
              <p className="service-desc text-[11px] md:text-xs lg:text-sm text-slate-600 leading-relaxed line-clamp-4 group-hover:text-slate-800 transition-colors">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
