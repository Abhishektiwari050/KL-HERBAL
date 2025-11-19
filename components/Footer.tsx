import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Linkedin, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-dark p-1.5 text-white rounded-sm">
                <Leaf size={16} />
              </div>
              <span className="font-serif text-lg font-bold text-brand-dark tracking-wide">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Crafting pure, natural amenities for the world's finest hotels and wellness sanctuaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-brand-dark transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-brand-dark transition-colors">
                <span className="sr-only">Twitter</span>
                <Facebook size={20} />
              </a>
               <a href="#" className="text-stone-400 hover:text-brand-dark transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Products', 'About Us', 'Manufacturing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-stone-500 hover:text-brand-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-stone-500">
              <li><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-primary transition-colors">{COMPANY_INFO.email}</a></li>
              <li><a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-primary transition-colors">{COMPANY_INFO.phone}</a></li>
              <li className="leading-relaxed">{COMPANY_INFO.address}</li>
            </ul>
          </div>

           {/* Newsletter / Extra */}
           <div>
            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-4">Compliance</h3>
            <ul className="space-y-2 text-xs text-stone-400">
                <li>GST: {COMPANY_INFO.gst}</li>
                <li>ISO 9001:2015 Certified</li>
                <li>TrustSEAL Verified</li>
                <li>GMP Compliant Facility</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-brand-dark">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-dark">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;