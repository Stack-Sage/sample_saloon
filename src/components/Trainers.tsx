import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/assets/change/1.jpg",
  "/assets/change/2.jpg",
  "/assets/change/3.jpg",
  "/assets/change/4.jpg",
];

export const Trainers = () => (
  <section id="salon-images" className="section-cover">
    <div className="bg-image opacity-10" style={{ backgroundImage: "url('/assets/change/1.jpg')" }} />
    <div className="bg-fade" />
    <div className="site-container">
      <h3 className="heading-gradient font-sans text-4xl md:text-5xl font-bold mb-14 text-center md:text-left">
        Salon Visuals
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {images.map((src, i) => (
          <figure
            key={src + i}
            className="relative h-56 md:h-64 rounded-2xl overflow-hidden group glass"
          >
            <img
              src={src}
              alt={`gym-${i}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
          </figure>
        ))}
      </div>
    </div>
  </section>
);
