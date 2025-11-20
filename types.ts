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
  SOAP_BASE = 'Soap Base',
  SOAPS = 'Hotel Soaps',
  AMENITIES = 'Amenities',
  RAW_MATERIALS = 'Raw Materials',
  SPA = 'Spa Treatments'
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}