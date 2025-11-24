import { type SalonContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface AboutProps {
  data: SalonContent;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section
      id="about"
      className="section-cover snap-section pt-12 md:pt-16 pb-14"
      data-section="about"
    >
      <div className="bg-image opacity-10" style={{ backgroundImage: "url('/assets/change/1.jpg')" }} />
      <div className="bg-fade" />
      <div className="site-container flex flex-col gap-6">
        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="heading-gradient font-sans text-4xl md:text-5xl font-bold mb-1 text-center md:text-left"
        >
          Overview
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-700 leading-relaxed text-sm md:text-lg text-center md:text-left text-float"
        >
          {data.about}
        </motion.p>
        {/* Removed cards & quick links */}
      </div>
    </section>
  );
};
