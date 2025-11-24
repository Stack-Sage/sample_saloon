import { useScroll, useTransform, motion } from "framer-motion";
import { type SalonContent } from "@/data/gym/content";
import { FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useMemo } from "react";

interface HeroProps {
  data: SalonContent;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Hero = ({ data }: HeroProps) => {
  const heroBg = useMemo(
    () => [data.gallery?.[0], "/assets/change/1.jpg", "/assets/change/2.jpg"].filter(Boolean)[0],
    [data.gallery]
  );
  const sanitizedPhone = useMemo(() => data.phone.replace(/\D/g, ""), [data.phone]);
  const whatsappLink = useMemo(() => `https://wa.me/${sanitizedPhone}`, [sanitizedPhone]);
  const instagramLink = "https://instagram.com/zubasalon"; // change if needed

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 0.5], ["0%", "8%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <header
      id="hero"
      aria-labelledby="hero-heading"
      className="section-cover snap-section pt-6"
      data-section="hero"
    >
      <motion.div
        className="bg-image parallax-bg"
        style={{ backgroundImage: `url('${heroBg}')`, y: yBg, scale: scaleBg }}
      />
      <div className="bg-fade" />
      <div className="site-container">
        <div className="glass-surface px-5 md:px-12 pt-16 md:pt-24 lg:pt-28 pb-12 md:pb-18 flex flex-col items-center justify-center text-center gap-8 md:gap-10">
          <motion.h1
            id="hero-heading"
            custom={0}
            initial="hidden"
            animate="show"
            variants={variants}
            className="heading-gradient font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            {data.name}
          </motion.h1>
          <motion.p
            custom={1}
            // rating line
            initial="hidden"
            animate="show"
            variants={variants}
            className="text-float text-xs sm:text-sm md:text-xl font-medium text-rose-600 tracking-wide"
          >
            {data.tagline} • {data.rating}★ ({data.reviewCount.toLocaleString()} Reviews)
          </motion.p>
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={variants}
            className="text-float text-xs sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-[70ch]"
          >
            {data.about.slice(0, 260)}...
          </motion.p>
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={variants}
            className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-2"
          >
            <a
              href="#services"
              className="btn-accent text-xs sm:text-sm md:text-base px-7 md:px-8 py-3 md:py-3.5 text-float"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="btn-outline-accent text-xs sm:text-sm md:text-base px-7 md:px-8 py-3 md:py-3.5 text-float"
            >
              Book / Call
            </a>
          </motion.div>
          {/* Social / Quick Actions */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={variants}
            className="mt-6 flex items-center gap-5"
          >
            <a
              href={`tel:${sanitizedPhone}`}
              aria-label="Call salon"
              className="glass w-11 h-11 flex items-center justify-center rounded-xl text-rose-600 hover:text-white hover:bg-rose-500/80 transition-colors"
            >
              <FaPhoneAlt size={18} />
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              className="glass w-11 h-11 flex items-center justify-center rounded-xl text-rose-600 hover:text-white hover:bg-rose-500/80 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="glass w-11 h-11 flex items-center justify-center rounded-xl text-rose-600 hover:text-white hover:bg-rose-500/80 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
