export interface SalonService {
  title: string;
  description: string;
}
export interface SalonPricing {
  plan: string;
  amount: string;
}
export interface SalonReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}
export interface SalonContent {
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  openingHours: string;
  googleMapEmbedUrl: string;
  website?: string;
  about: string;
  services: SalonService[];
  pricing: SalonPricing[];
  gallery: string[];
  reviews: SalonReview[];
  amenities: string[];
  planning: string[];
  payments: string[];
  tags: string[];
  links?: { label: string; url: string }[];
  plusCode?: string;
  identity?: string; // e.g. women-owned
}

export const salonContent: SalonContent = {
  name: "Liv's Beauty",
  tagline: "Beauty Parlour in Sargasan • Urvashi",
  rating: 4.9,
  reviewCount: 78,
  address: "Shiv Sahjanand, 6, near Divine Hospital, Gandhinagar, Gujarat 382419, India",
  phone: "+91 97149 00113",
  openingHours: "Opens 10:00 AM daily",
  googleMapEmbedUrl: "https://www.google.com/maps?q=Liv's+Beauty+Sargasan+Gandhinagar&output=embed",
  plusCode: "5JR4+P2 Gandhinagar, Gujarat",
  identity: "Identifies as women-owned",
  about:
    "Liv's Beauty (Sargasan) offers professional, attentive and comfort-focused salon care including hair botox treatment, makeup, facials, waxing and precision haircut services. Urvashi Mam and her trained team balance skill with warm hospitality—clients highlight excellent hair transformations, glowing skin results and polite knowledgeable staff. Appointments recommended; walk-ins accepted when slots allow.",
  services: [
    { title: "Hair Botox Treatment", description: "Advanced smoothing & repair for dull or frizzy hair." },
    { title: "Professional Makeup", description: "Event, party & natural enhancement looks." },
    { title: "Facials & Skin Glow", description: "Targeted facial routines for radiance & clarity." },
    { title: "Waxing Services", description: "Hygienic, comfortable and efficient body waxing." },
    { title: "Precision Haircut & Style", description: "Tailored cuts with polished finish & shaping." },
    { title: "Eyebrow Shaping", description: "Defined brows with gentle technique." },
    { title: "Bridal / Occasion Prep", description: "Comprehensive makeup & styling packages." },
    { title: "Kids-Friendly Care", description: "Patient, gentle approach suitable for children." },
    { title: "Consult & Aftercare", description: "Guidance on maintenance & product usage." },
  ],
  pricing: [
    { plan: "Haircut & Style", amount: "₹ From 699" },
    { plan: "Hair Botox Treatment", amount: "₹ Service Quote" },
    { plan: "Facial Glow Packages", amount: "₹ From 1299" },
    { plan: "Bridal / Occasion Makeup", amount: "₹ From 1999" },
  ],
  gallery: [],
  reviews: [
    {
      author: "Nidhi Reghuvaran",
      rating: 5,
      text: "Loved my experience—staff are thorough professionals and very caring. Felt at home.",
    },
    {
      author: "Niana Nithyakeertana",
      rating: 5,
      text: "Warm, attentive team who listened carefully and suggested improvements. Loved the result.",
    },
    {
      author: "Client Feedback",
      rating: 5,
      text: "Hair Botox treatment was amazing—excellent service and very professional.",
    },
  ],
  amenities: ["Restroom"],
  planning: ["On-site services", "Appointments recommended"],
  payments: ["Google Pay", "NFC mobile payments"],
  tags: [
    "hair botox",
    "makeup",
    "facials",
    "waxing",
    "haircut",
    "professional staff",
    "good for kids",
    "women-owned",
    "on-site services",
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=Liv's+Beauty+Sargasan+Gandhinagar" },
    { label: "Call", url: "tel:+919714900113" },
  ],
};
