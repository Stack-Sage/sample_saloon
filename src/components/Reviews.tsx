import { type SalonContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface ReviewsProps {
  data: SalonContent;
}

export const Reviews = ({ data }: ReviewsProps) => {
  const reviews = useMemo(() => data.reviews, [data.reviews]);

  return (
    <section id="reviews" className="section-cover snap-section" data-section="reviews">
      <div className="bg-image opacity-10" style={{ backgroundImage: "url('/assets/change/4.jpg')" }} />
      <div className="bg-fade" />
      <div className="site-container content-scale">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-gradient font-sans text-4xl md:text-5xl font-bold mb-14 text-center md:text-left"
        >
          Reviews ({data.rating}★)
        </motion.h3>
        <div className="flex flex-col gap-7">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.author + i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-soft border-l-4 border-rose-400 pl-5 hover:shadow-lg hover:shadow-rose-200/40 transition-shadow"
            >
              <p className="text-sm md:text-lg text-slate-700 mb-2 hover-accent">
                “{r.text}”
              </p>
              <footer className="text-xs md:text-sm text-slate-500 flex items-center gap-2">
                <cite className="not-italic hover-accent">{r.author}</cite>
                <span className="text-rose-600" aria-label={`Rating ${r.rating} of 5`}>
                  {"★".repeat(r.rating)}
                  <span className="text-slate-300">{"★".repeat(5 - r.rating)}</span>
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
