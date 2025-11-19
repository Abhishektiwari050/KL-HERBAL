export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export enum ProductCategory {
  ALL = 'All',
  AMENITIES = 'Amenities',
  SPA = 'Spa Treatments',
  AROMATHERAPY = 'Aromatherapy',
  SOAPS = 'Soaps'
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
