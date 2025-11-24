import Head from "next/head";
import dynamic from "next/dynamic";
import { salonContent } from "@/data/gym/content";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
const About = dynamic(() => import("@/components/About").then(m => m.About), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery").then(m => m.Gallery), { ssr: false });
const Services = dynamic(() => import("@/components/Facilities").then(m => m.Services), { ssr: false });
const Pricing = dynamic(() => import("@/components/Pricing").then(m => m.Pricing), { ssr: false });
const Reviews = dynamic(() => import("@/components/Reviews").then(m => m.Reviews), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact").then(m => m.Contact), { ssr: false });

const SalonHome = () => {
  return (
    <>
      <Head>
        <title>{salonContent.name} – {salonContent.tagline}</title>
        <meta name="description" content={salonContent.about} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${salonContent.name} – ${salonContent.tagline}`} />
        <meta property="og:description" content={salonContent.about} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#e977b4" />
        <meta property="og:image" content="/assets/change/1.jpg" />
        <link rel="canonical" href="/" />
        <link rel="preconnect" href="https://instagram.com" />
        <link rel="dns-prefetch" href="https://instagram.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </Head>
      <main className="flex flex-col">
        <Navbar name={salonContent.name} />
        <Hero data={salonContent} />
        <About data={salonContent} />
        <Gallery />
        <Services data={salonContent} />
        <Pricing data={salonContent} />
        <Reviews data={salonContent} />
        <Contact data={salonContent} />
      </main>
    </>
  );
};

export default SalonHome;
