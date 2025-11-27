import { type SalonContent } from "@/data/gym/content";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface ContactProps {
  data: SalonContent;
}

export const Contact = ({ data }: ContactProps) => {
  const mapHref = useMemo(
    () => data.googleMapEmbedUrl.replace("&output=embed", ""),
    [data.googleMapEmbedUrl]
  );

  return (
    <section id="contact" className="section-cover snap-section" data-section="contact">
      <div className="bg-image opacity-10" style={{ backgroundImage: "url('/assets/change/6.jpg')" }} />
      <div className="bg-fade" />
      <div className="site-container content-scale">
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-gradient font-sans text-4xl md:text-5xl font-bold mb-14 text-center md:text-left"
        >
          Contact & Location
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 flex flex-col gap-4 items-center md:items-start text-center md:text-left"
          >
            <p className="text-sm md:text-base hover-accent">
              <span className="font-semibold">Address:</span> {data.address}
            </p>
            {data.plusCode && (
              <p className="text-xs md:text-sm text-slate-500">
                Plus Code: {data.plusCode}
              </p>
            )}
            <p className="text-sm md:text-base">
              <span className="font-semibold">Phone:</span> {data.phone}
            </p>
            <p className="text-sm md:text-base">
              <span className="font-semibold">Hours:</span> {data.openingHours}
            </p>
            {data.identity && (
              <p className="text-xs md:text-sm text-rose-600 font-medium">
                {data.identity}
              </p>
            )}
            {data.website && (
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm underline text-rose-600"
              >
                {data.website.replace(/^https?:\/\//,"")}
              </a>
            )}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={`tel:${data.phone.replace(/\s+/g, "")}`}
                className="btn-accent text-xs md:text-sm px-5 py-2 text-float"
              >
                Call Now
              </a>
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-accent text-xs md:text-sm px-5 py-2 text-float"
              >
                Directions
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-[#e8ded7] h-72 md:h-96 glass"
          >
            <iframe
              title="Gym Location"
              src={data.googleMapEmbedUrl || "about:blank"}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
