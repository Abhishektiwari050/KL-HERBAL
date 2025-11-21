import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages with Dark Hero sections (Video/Image backgrounds) where text should be white at the top
  const hasDarkHero = ['/', '/manufacturing', '/contact'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dynamic styles based on scroll and page type
  const isTransparent = !scrolled && hasDarkHero;
  
  const navClasses = scrolled 
    ? 'bg-white/90 backdrop-blur-xl shadow-sm py-2 border-stone-200/50' 
    : 'bg-transparent py-6 border-transparent';

  const textColorClass = isTransparent ? 'text-white/90 hover:text-white' : 'text-stone-700 hover:text-brand-dark';
  const underlineClass = isTransparent ? 'bg-brand-gold' : 'bg-brand-dark';
  const logoDarkProp = isTransparent; // If transparent (dark hero), use Dark mode logo (which returns White color)

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${navClasses}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="relative flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center z-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                <Logo dark={logoDarkProp} />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`font-serif text-xl font-bold tracking-wide leading-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-brand-dark'}`}>
                  KL Herbal
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side: Desktop Nav + CTA */}
          <div className="hidden lg:flex items-center gap-10 z-20">
            {/* Nav Links */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-xs font-bold transition-colors uppercase tracking-[0.2em] group py-2 ${textColorClass}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${underlineClass}`}></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
                <Button variant={isTransparent ? "outline" : "primary"} className={`!py-2.5 !px-6 text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all ${isTransparent ? '!border-white !text-white hover:!bg-white hover:!text-brand-dark' : ''}`}>
                Request Quote
                </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (Visible < lg) */}
          <div className="lg:hidden flex items-center z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-brand-dark hover:bg-black/5'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-brand-cream/95 backdrop-blur-xl shadow-xl border-t border-stone-100 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pt-8 pb-12 space-y-6 flex flex-col items-center h-screen">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-2xl font-serif text-brand-dark hover:text-brand-primary hover:italic transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 w-full max-w-xs">
              <Link to="/contact">
                  <Button className="w-full justify-center !text-sm !py-4">Request Quote</Button>
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;