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
  name: "Sky Touch The Salon - Morbi",
  tagline: "Best Salon • Hair Salon • Skin Care • Hair Spa • Hair Treatment",
  rating: 4.9,
  reviewCount: 5576,
  address: "2nd floor, Bapa Sitaram Circle (Manav Plaza), opp. Narsang Mandir, Ravapar, Morbi, Gujarat 363641, India",
  phone: "+91 89808 91600",
  openingHours: "Open · Closes 8:00 PM",
  googleMapEmbedUrl: "https://www.google.com/maps?q=Sky+Touch+The+Salon+Morbi&output=embed",
  plusCode: "QRWG+VG Morbi, Gujarat",
  identity: "Identifies as women-owned • LGBTQ+ friendly",
  about:
    "Sky Touch The Salon – Morbi provides advanced hair spa, precision cutting, skin care, blow dry styling, manicure–pedicure and targeted hair treatment services. Guests note consistent staff courtesy, calm child-friendly approach and skilled finishing. Services cover hair health rejuvenation, waxing by trained specialists, styling longevity focus, and comfort amenities including Wi‑Fi and beverages. Accessible features and multiple parking options support a broad client base.",
  services: [
    { title: "Precision Haircut & Styling", description: "Custom unisex cuts with shape, texture and finish detailing." },
    { title: "Hair Spa & Treatment", description: "Deep nourishment, repair masks and scalp revitalization." },
    { title: "Blow Dry & Finish", description: "Smooth, volume or sleek styling with longevity focus." },
    { title: "Manicure & Pedicure", description: "Clean, shape, exfoliate and relaxing hand/foot care." },
    { title: "Waxing (Specialist Bhumi)", description: "Comfort-oriented hygienic waxing with smooth results." },
    { title: "Skin Care Consultation", description: "Assessment for glow, hydration and maintenance planning." },
    { title: "Kids Haircut (Calm Care)", description: "Patient approach for young children—gentle handling." },
    { title: "Beard Groom / Shave", description: "Trim, define and clean razor or machine finish." },
    { title: "Express Touch-Up", description: "Quick in-between refresh: fringe, light style or polish." }
  ],
  pricing: [
    { plan: "Standard Haircut", amount: "₹ From 299" },
    { plan: "Hair Spa Session", amount: "₹ From 799" },
    { plan: "Manicure + Pedicure Combo", amount: "₹ From 999" },
    { plan: "Waxing (Per Zone)", amount: "₹ From 299" }
  ],
  gallery: [],
  reviews: [
    {
      author: "Client Experience",
      rating: 5,
      text: "Good experience for haircut—staff behaved well and finish was clean."
    },
    {
      author: "Sakshi Kakade",
      rating: 3,
      text: "Blow dry lost effect within 20 minutes. Hoping technique longevity improves for trusted professional service."
    },
    {
      author: "Archi Patel",
      rating: 5,
      text: "Great service and committed team—would not go elsewhere. Consistent quality."
    }
  ],
  amenities: [
    "Restroom",
    "Free Wi-Fi",
    "Assistive hearing loop",
    "Wheelchair-accessible entrance",
    "Wheelchair-accessible seating",
    "Wheelchair-accessible toilet",
    "Beverages"
  ],
  planning: [
    "Appointment required",
    "Appointments recommended",
    "Accepts walk-ins"
  ],
  payments: [
    "Credit cards",
    "Debit cards",
    "Google Pay",
    "NFC mobile payments"
  ],
  tags: [
    "hair cutting",
    "blow dry",
    "hair spa",
    "hair treatment",
    "manicure pedicure",
    "waxing",
    "skin care",
    "kids haircut",
    "beard grooming",
    "women-owned",
    "LGBTQ+ friendly",
    "accessible",
    "free parking garage",
    "free parking lot",
    "free street parking",
    "on-site parking",
    "beverages",
    "express touch-up",
    "consultation"
  ],
  links: [
    { label: "Directions", url: "https://www.google.com/maps?q=Sky+Touch+The+Salon+Morbi" },
    { label: "Call", url: "tel:+918980891600" }
  ]
};
