import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 transition-transform group-hover:scale-105">
              <Logo />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-serif text-xl font-bold tracking-wide leading-none ${scrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
                KL Herbal
              </span>
              {/* <span className="text-[0.6rem] uppercase tracking-widest text-brand-primary font-medium leading-none mt-1">Enterprises</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-stone-600 hover:text-brand-dark transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
                <Button variant="primary" className="ml-4 !py-2.5 !px-6 text-xs uppercase tracking-widest shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Request Quote
                </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream shadow-lg border-t border-stone-100">
          <div className="px-6 pt-4 pb-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-brand-primary w-full text-center border-b border-stone-100 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 w-full max-w-xs">
              <Link to="/contact">
                  <Button className="w-full justify-center">Request Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;