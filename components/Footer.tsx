import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 pt-20 pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 pr-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10">
                <Logo />
              </div>
              <span className="font-serif text-xl font-bold text-brand-dark tracking-wide">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Crafting pure, natural amenities for the world's finest hotels and wellness sanctuaries. Elevating hospitality through herbal innovation.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-stone-400 hover:text-brand-dark transition-colors transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-brand-dark transition-colors transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
               <a href="#" className="text-stone-400 hover:text-brand-dark transition-colors transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h3 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Products', 'About Us', 'Manufacturing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-stone-500 hover:text-brand-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-stone-500">
              <li className="flex flex-col">
                <span className="text-xs text-stone-400 mb-1">Email</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-primary transition-colors font-medium">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-stone-400 mb-1">Phone</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-primary transition-colors font-medium">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-stone-400 mb-1">Factory</span>
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

           {/* Compliance */}
           <div>
            <h3 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-6">Certifications</h3>
            <ul className="space-y-3 text-xs text-stone-500">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  GST: {COMPANY_INFO.gst}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  ISO 9001:2015 Certified
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  TrustSEAL Verified
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  GMP Compliant Facility
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-brand-dark transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-dark transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-brand-dark transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;