import { type SalonContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface PricingProps {
  data: SalonContent;
}

export const Pricing = ({ data }: PricingProps) => {
  const pricing = useMemo(() => data.pricing, [data.pricing]);

  return (
    <section id="pricing" className="section-cover snap-section" data-section="pricing">
      <div className="bg-image opacity-10" style={{ backgroundImage: "url('/assets/change/5.jpg')" }} />
      <div className="bg-fade" />
      <div className="site-container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-gradient font-sans text-4xl md:text-5xl font-bold mb-14 text-center md:text-left"
        >
          Pricing
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center md:justify-items-stretch" role="list" aria-label="Service pricing options">
          {pricing.map((p, i) => (
            <motion.div
              key={p.plan}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              role="listitem"
              className="card-soft flex flex-col items-center md:items-start gap-3 p-6 w-full hover:shadow-xl hover:shadow-rose-200/40"
            >
              <h5 className="font-semibold text-lg md:text-xl text-slate-700 hover-accent text-float">
                {p.plan}
              </h5>
              <span className="text-rose-600 font-bold text-xl md:text-2xl">{p.amount}</span>
              <button className="btn-accent mt-2 text-xs md:text-sm px-5 py-2 text-float" aria-label={`Enquire about ${p.plan}`}>
                Enquire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
