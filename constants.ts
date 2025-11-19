import { Product, ProductCategory, Testimonial } from './types';
import { ShieldCheck, Award, Factory, CheckCircle, Calendar, Leaf, FlaskConical, Users } from 'lucide-react';

export const COMPANY_INFO = {
  name: "KL Herbal",
  // Using the real address from the prompt, not the lorem ipsum one in the mockup
  address: "Ground Floor, Kh No. 6/24, Street No.14 Blk-J, Swaroop Nagar, North Delhi, Delhi - 110042",
  gst: "07FRLPK4415C1ZX",
  phone: "+91 98765 43210",
  email: "contact@klherbal.com",
  tagline: "Pure Herbal Innovation for Hotels & Wellness",
  whatsapp: "+919876543210"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Revitalizing Body Wash',
    category: ProductCategory.AMENITIES,
    description: 'A refreshing blend of citrus and organic herbs designed to awaken the senses.',
    image: 'https://picsum.photos/600/600?random=1',
    features: ['Sulfate-free', 'Vegan', 'Biodegradable packaging']
  },
  {
    id: '2',
    name: 'Calming Lavender Oil',
    category: ProductCategory.AROMATHERAPY,
    description: 'Pure essential oils extracted from Himalayan lavender for deep relaxation.',
    image: 'https://picsum.photos/600/600?random=2',
    features: ['100% Organic', 'Cold-pressed', 'Therapeutic grade']
  },
  {
    id: '3',
    name: 'Aurora Moisture Lotion',
    category: ProductCategory.SPA,
    description: 'Deeply hydrating lotion enriched with shea butter and aloe vera.',
    image: 'https://picsum.photos/600/600?random=3',
    features: ['Non-greasy', 'Long-lasting hydration', 'Subtle fragrance']
  },
  {
    id: '4',
    name: 'Detoxifying Clay Mask',
    category: ProductCategory.SPA,
    description: 'Mineral-rich clay mask that draws out impurities and revitalizes skin.',
    image: 'https://picsum.photos/600/600?random=4',
    features: ['Paraben-free', 'Cruelty-free', 'For all skin types']
  },
  {
    id: '5',
    name: 'Rose Bath Salts',
    category: ProductCategory.SPA,
    description: 'Himalayan pink salt infused with dried rose petals for a luxurious soak.',
    image: 'https://picsum.photos/600/600?random=5',
    features: ['Hand-blended', 'Natural exfoliant', 'Relaxes muscles']
  },
  {
    id: '6',
    name: 'Invigorating Room Mist',
    category: ProductCategory.AROMATHERAPY,
    description: 'Instantly refresh any room with notes of lemongrass and ginger.',
    image: 'https://picsum.photos/600/600?random=6',
    features: ['Alcohol-free base', 'Long-lasting scent', 'Eco-friendly spray']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "KL Herbal has transformed our guest amenity experience. The quality is unmatched.",
    author: "Aditi Sharma",
    role: "Procurement Manager",
    company: "The Royal Orchid"
  },
  {
    id: 't2',
    quote: "Reliable manufacturing and truly natural products. A trusted partner for years.",
    author: "Rajiv Malhotra",
    role: "Director of Operations",
    company: "Zenith Wellness Resorts"
  }
];

export const TIMELINE_DATA = [
  {
    year: "1998",
    title: "The Journey Begins",
    description: "Founded with a vision to bring pure, effective herbal wellness to a wider audience, starting in a small, dedicated facility.",
    image: "https://picsum.photos/800/600?random=10"
  },
  {
    year: "2005",
    title: "First Major Innovation",
    description: "Launched our proprietary cold-extraction technique, preserving the potency of herbs and setting a new industry standard.",
    image: "https://picsum.photos/800/600?random=11"
  },
  {
    year: "2015",
    title: "State-of-the-Art Expansion",
    description: "Opened our new GMP-certified manufacturing facility, integrating advanced technology with our traditional values.",
    image: "https://picsum.photos/800/600?random=12"
  },
  {
    year: "Today",
    title: "Commitment to the Future",
    description: "Continuously investing in R&D and sustainable practices to innovate for our partners and a healthier planet.",
    image: "https://picsum.photos/800/600?random=13"
  }
];

export const CERTIFICATIONS = [
  {
    title: "ISO Certified",
    description: "Ensuring international standards for quality management.",
    icon: Award
  },
  {
    title: "FSSAI Compliant",
    description: "Adhering to food safety and standards regulations.",
    icon: ShieldCheck
  },
  {
    title: "TrustSEAL Verified",
    description: "Verified for business authenticity and reliability.",
    icon: CheckCircle
  },
  {
    title: "GST Registered",
    description: "Fully compliant with national tax regulations for B2B transactions.",
    icon: Factory
  }
];

export const TRUST_REASONS = [
  {
    title: "Over 25 Years in Business",
    description: "Our long-standing presence in the market is a testament to our quality, reliability, and the trust our partners place in us.",
    icon: Calendar
  },
  {
    title: "Transparent Manufacturing",
    description: "We believe in complete transparency. Our manufacturing address is proudly displayed: Swaroop Nagar, New Delhi.",
    icon: Factory
  },
  {
    title: "Ethical & Sustainable Sourcing",
    description: "We partner with certified organic farms and local communities to source the purest ingredients while protecting our planet.",
    icon: Leaf
  },
  {
    title: "In-House R&D Laboratory",
    description: "Our dedicated team of scientists and herbalists constantly innovates to ensure every product is safe, effective, and of the highest quality.",
    icon: FlaskConical
  }
];