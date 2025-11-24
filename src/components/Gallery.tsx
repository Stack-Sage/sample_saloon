import Image from "next/image";
import { useMemo } from "react";

const CHANGE_IMAGES = [
  "/assets/change/1.jpg",
  "/assets/change/2.jpg",
  "/assets/change/3.jpg",
  "/assets/change/4.jpg",
  "/assets/change/5.jpg",
  "/assets/change/6.jpg",
];

export const Gallery = () => {
  const images = useMemo(() => CHANGE_IMAGES, []);
  return (
    <section id="gallery" className="section-cover snap-section" data-section="gallery">
      <div className="bg-image opacity-15" style={{ backgroundImage: "url('/assets/change/2.jpg')" }} />
      <div className="bg-fade" />
      <div className="site-container">
        <h2 className="heading-gradient font-sans text-5xl md:text-6xl font-bold mb-14 text-center md:text-left">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <figure
              key={src + i}
              className="relative h-56 md:h-64 rounded-2xl overflow-hidden group glass p-0 hover:shadow-lg transition-shadow"
            >
              <Image
                src={src}
                alt={`Salon gallery image ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 20vw"
                decoding="async"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
