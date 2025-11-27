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
  identity?: string;
  heroQuote?: string; // short slogan / quote for hero
}

export const salonContent: SalonContent = {
  name: "StyleLab Beauty Salon LLC",
  tagline: "Beauty Parlour • Hair • Skin • Care",
  rating: 4.9,
  reviewCount: 106,
  address: "AL BUDOOR BUILDING - SHOP NO. 6 - 6th St - Naif - Deira - Dubai - United Arab Emirates",
  phone: "+971 54 778 5921",
  openingHours: "Open · Closes 10:00 PM",
  googleMapEmbedUrl: "https://www.google.com/maps?q=StyleLab+Beauty+Salon+LLC+Deira+Dubai&output=embed",
  plusCode: "78F6+X6 Dubai - United Arab Emirates",
  website: undefined,
  identity: undefined,
  heroQuote: "Refined styling. Consistent care.",
  about:
    "StyleLab Beauty Salon LLC in Deira delivers attentive hair, skin and grooming services with polished finishing. Guests highlight professional staff, clean environment and reliable results across cuts, spa nourishment, facials and routine care. Walk-ins welcomed when slots permit; appointments advised for peak evening hours.",
  services: [
    { title: "Precision Haircut & Styling", description: "Tailored shape and finish for daily or occasion looks." },
    { title: "Hair Spa & Treatment", description: "Deep moisture, repair masks and scalp comfort." },
    { title: "Glow Facial / Renewal", description: "Radiance boost and texture refinement." },
    { title: "Waxing & Threading", description: "Hygienic gentle hair removal." },
    { title: "Manicure & Pedicure", description: "Shape, exfoliate, cuticle care and polish." },
    { title: "Kids Friendly Haircut", description: "Calm, patient approach for children." },
    { title: "Express Touch-Up", description: "Quick refresh between full services." },
    { title: "Consultation & Aftercare", description: "Product and maintenance guidance." }
  ],
  pricing: [
    { plan: "Standard Haircut", amount: "AED From 45" },
    { plan: "Hair Spa Treatment", amount: "AED From 120" },
    { plan: "Glow Facial", amount: "AED From 160" },
    { plan: "Manicure + Pedicure", amount: "AED From 110" }
  ],
  gallery: [],
  reviews: [
    { author: "Satisfied Guest", rating: 5, text: "Professional finishing and friendly staff. Will return." },
    { author: "Regular Client", rating: 5, text: "Consistent hair spa quality and clean environment." }
  ],
  amenities: ["Restroom"],
  planning: [],
  payments: ["Credit cards", "Debit cards", "NFC mobile payments"],
  tags: [
    "beauty parlour",
    "haircut",
    "hair spa",
    "hair treatment",
    "facial",
    "manicure",
    "pedicure",
    "waxing",
    "threading",
    "kids friendly",
    "express touch-up"
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=StyleLab+Beauty+Salon+LLC+Deira+Dubai" },
    { label: "Call", url: "tel:+971547785921" }
  ]
};
