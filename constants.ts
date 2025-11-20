
import { Product, ProductCategory, Testimonial } from './types';
import { ShieldCheck, Award, Factory, CheckCircle, Calendar, Leaf, FlaskConical, Droplets, PackageCheck, Truck } from 'lucide-react';

export const COMPANY_INFO = {
  name: "K L Herbal Enterprises",
  address: "Ground Floor, Kh No. 6/24, Street No.14 Blk-J, Nearby Govt School, Swaroop Nagar, North Delhi, New Delhi - 110042",
  gst: "07FRLPK4415C1ZX",
  phone: "+91 98765 43210",
  email: "contact@klherbal.com",
  tagline: "Pure Herbal Innovation for Hotels & Wellness",
  whatsapp: "+919876543210",
  founder: "Lata Verma"
};

export const BUSINESS_PROFILE = [
    { label: "Nature of Business", value: "Manufacturer" },
    { label: "Additional Business", value: "Factory / Manufacturing" },
    { label: "Company CEO", value: "Lata Verma" },
    { label: "Year of Establishment", value: "2023" },
    { label: "Legal Status", value: "Proprietorship" },
    { label: "GST Registration Date", value: "09-10-2023" },
    { label: "Annual Turnover", value: "0 - 40 L" },
    { label: "GST No.", value: "07FRLPK4415C1ZX" },
    { label: "Total Employees", value: "Upto 10 People" },
    { label: "Banker", value: "State Bank of India" },
];

// Carousel images for the Products page hero
export const PRODUCT_HERO_IMAGES = [
  "https://images.pexels.com/photos/8063850/pexels-photo-8063850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Green Leaf/Aloe
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Soap stack
  "https://images.unsplash.com/photo-1612486875798-4b8cd8478f76?q=80&w=2000&auto=format&fit=crop", // Bottles
  "https://images.unsplash.com/photo-1556228720-19de777237a9?q=80&w=2000&auto=format&fit=crop" // Lavender/Herbs
];

export const PRODUCTS: Product[] = [
  // --- Soap Bases ---
  {
    id: 'sb-1',
    name: 'Pink Rose Soap Base',
    category: ProductCategory.SOAP_BASE,
    description: 'Premium melt-and-pour soap base infused with rose essence for a luxurious floral fragrance.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306759076/OV/QT/UT/2493339/pink-rose-soap-base.jpg',
    features: ['Rose Infused', 'High Lather', 'Melt & Pour']
  },
  {
    id: 'sb-2',
    name: 'Blueberry Soap Base',
    category: ProductCategory.SOAP_BASE,
    description: 'Antioxidant-rich blueberry soap base offering a fruity aroma and deep cleansing properties.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306760393/FX/OD/XQ/2493339/blueberry-soap-base.jpg',
    features: ['Fruity Aroma', 'Antioxidant Rich', 'Vibrant Color']
  },
  {
    id: 'sb-3',
    name: 'Transparent Glycerin Soap Base',
    category: ProductCategory.SOAP_BASE,
    description: 'Crystal clear glycerin base perfect for embedding herbs or creating custom designs.',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/XG/CO/XG/2493339/product-jpeg-500x500.jpg',
    features: ['High Transparency', 'Moisturizing', 'Customizable']
  },
  {
    id: 'sb-4',
    name: 'Redwine Soap Base',
    category: ProductCategory.SOAP_BASE,
    description: 'Luxurious red wine extract base known for anti-aging properties and rich texture.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306761566/QW/ZR/EY/2493339/red-wine-soap-base.jpg',
    features: ['Anti-aging', 'Rich Lather', 'Premium Quality']
  },

  // --- Hotel Soaps ---
  {
    id: 'hs-1',
    name: 'Hotel Toilet Soap',
    category: ProductCategory.SOAPS,
    description: 'Standard hotel guest soap providing a fresh and hygienic bathing experience.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/YC/VL/OD/2493339/hotel-soap-500x500.jpg',
    features: ['Standard Size', 'Fresh Scent', 'Cost Effective']
  },
  {
    id: 'hs-2',
    name: 'Hotel Guest Toiletries',
    category: ProductCategory.SOAPS,
    description: 'A comprehensive range of small bar soaps tailored for hospitality guest usage.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/344896131/OW/QJ/GL/2493339/hotel-toiletry-kit.jpg',
    features: ['Eco Packaging', 'Guest Ready', 'Variety']
  },
  {
    id: 'hs-3',
    name: 'Hotel Soap 10g',
    category: ProductCategory.SOAPS,
    description: 'Compact 10g soap bars, perfect for short stays and eco-conscious hotels.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/KO/TS/XU/2493339/hotel-toiletries-shampoo-500x500.jpg',
    features: ['10g Size', 'Single Use', 'Budget Friendly']
  },
  {
    id: 'hs-4',
    name: 'Hotel Soap 20g',
    category: ProductCategory.SOAPS,
    description: 'Standard 20g hotel soap bars offering a balance of longevity and convenience.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/VR/YI/GA/2493339/neem-soap.jpeg',
    features: ['20g Size', 'Pleat Wrapped', 'Popular Choice']
  },
  {
    id: 'hs-5',
    name: 'White Hotel Soap',
    category: ProductCategory.SOAPS,
    description: 'Classic opaque white soap bars with a mild fragrance for universal appeal.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/IO/CR/XM/2493339/hotel-shampoo-500x500.jpg',
    features: ['Pure White', 'Mild Fragrance', 'Gentle']
  },
  {
    id: 'hs-6',
    name: 'Glycerine Soap For Hotels',
    category: ProductCategory.SOAPS,
    description: 'Gentle glycerin-based bars designed to prevent dry skin for hotel guests.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/UY/QO/GL/2493339/body-wash-500x500.jpg',
    features: ['Skin Friendly', 'Moisturizing', 'Translucent']
  },
  {
    id: 'hs-7',
    name: 'Aloe Vera Hotel Soap',
    category: ProductCategory.SOAPS,
    description: 'Enriched with Aloe Vera extract to soothe and nourish skin after travel.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/VR/YI/GA/2493339/neem-soap.jpeg',
    features: ['Aloe Extract', 'Soothing', 'Herbal Scent']
  },
  {
    id: 'hs-8',
    name: 'Lemon Glycerine Bath Soap',
    category: ProductCategory.SOAPS,
    description: 'Zesty lemon infused glycerin soap for a refreshing morning shower.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/UY/QO/GL/2493339/body-wash-500x500.jpg',
    features: ['Lemon Scent', 'Refreshing', 'Glycerin Base']
  },
  {
    id: 'hs-9',
    name: 'Hotel Guest Soaps',
    category: ProductCategory.SOAPS,
    description: 'Assorted shapes and sizes of guest soaps available for bulk orders.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/YC/VL/OD/2493339/hotel-soap-500x500.jpg',
    features: ['Bulk Pack', 'Assorted', 'Custom Logo']
  },

  // --- Raw Materials ---
  {
    id: 'rm-1',
    name: 'Stearic Acid Flakes',
    category: ProductCategory.RAW_MATERIALS,
    description: 'High-quality Stearic Acid flakes used as a hardener in soap making.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/YI/QZ/XO/2493339/stearic-acid-flakes.jpg',
    features: ['Industrial Grade', 'Soap Hardener', 'White Flakes']
  },
  {
    id: 'rm-2',
    name: 'Lauric Acid',
    category: ProductCategory.RAW_MATERIALS,
    description: 'Essential fatty acid used to create hardness and lather in soap formulations.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/OK/PL/ZA/2493339/lauric-acid.jpg',
    features: ['Lather Booster', 'Vegetable Origin', 'Pure']
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
    year: "2023",
    title: "Inception",
    description: "Established as K L Herbal Enterprises, a proprietorship firm in New Delhi under the leadership of Lata Verma.",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop"
  },
  {
    year: "2024",
    title: "Market Expansion",
    description: "Rapidly growing manufacturer of Pink Rose Soap Base, Hotel Amenities, and Raw Materials, serving clients pan-India.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
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
    title: "Fastest Growing",
    description: "Established in 2023, we are a modern, agile manufacturer adapting quickly to market needs.",
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

export const MANUFACTURING_STEPS = [
    {
        title: "Ethical Sourcing",
        description: "We begin by selecting only the finest botanicals from certified organic growers.",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Cold Extraction",
        description: "Our proprietary cold-press technology preserves 99% of herbal potency.",
        icon: Droplets,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Lab Formulation",
        description: "Scientists blend ingredients under strict GMP guidelines for stability and efficacy.",
        icon: FlaskConical,
        image: "https://images.unsplash.com/photo-1579165466741-7f35e4755652?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Quality Control",
        description: "Rigorous testing at every stage ensures safety, consistency, and purity.",
        icon: CheckCircle,
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Eco Packaging",
        description: "Products are packaged in sustainable, recyclable materials ready for dispatch.",
        icon: PackageCheck,
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop"
    }
];

export const MANUFACTURING_STATS = [
    { label: "Daily Production", value: "1,500 kg" },
    { label: "Quality Checks", value: "15+" },
    { label: "Expert Staff", value: "10+" },
    { label: "Delivery Success", value: "100%" },
];
