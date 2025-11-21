
import React, { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { PRODUCTS, PRODUCT_HERO_IMAGES } from '../constants';
import { ProductCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = ['All', ...Object.values(ProductCategory).filter(x => x !== 'All')];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PRODUCT_HERO_IMAGES.length);
    }, 6000); // Slower rotation for luxury feel
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % PRODUCT_HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + PRODUCT_HERO_IMAGES.length) % PRODUCT_HERO_IMAGES.length);

  return (
    <div className="bg-brand-cream min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
                <h1 className="font-serif text-6xl md:text-8xl text-brand-dark mb-8 leading-[0.9]">
                  Curated <br/> <span className="italic text-brand-primary">Collections</span>
                </h1>
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-10 max-w-md">
                  From pure soap bases to finished guest amenities, explore our range of ethically manufactured products.
                </p>
                <Button 
                  onClick={() => document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="!bg-brand-dark !text-white hover:!bg-brand-primary"
                >
                  View Catalog
                </Button>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 relative h-[60vh] min-h-[400px]">
             <FadeIn direction="left" className="w-full h-full relative overflow-hidden">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={PRODUCT_HERO_IMAGES[currentSlide]}
                      alt="Product Showcase"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }} // Slow elegant crossfade
                      className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                 </AnimatePresence>
                 <div className="absolute bottom-0 right-0 bg-white p-4 flex gap-2">
                    <button onClick={prevSlide} className="p-2 hover:bg-stone-100 rounded-full transition-colors"><ChevronLeft size={20}/></button>
                    <button onClick={nextSlide} className="p-2 hover:bg-stone-100 rounded-full transition-colors"><ChevronRight size={20}/></button>
                 </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product-grid" className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
           
           {/* Minimalist Tabs */}
           <div className="flex flex-wrap gap-8 mb-16 border-b border-stone-200 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`pb-4 text-sm uppercase tracking-widest transition-all duration-300 relative ${
                    activeCategory === cat
                      ? 'text-brand-dark font-bold'
                      : 'text-stone-400 hover:text-brand-dark'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-dark" />
                  )}
                </button>
              ))}
           </div>

           <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8"
           >
              <AnimatePresence>
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key={product.id}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/5] w-full mb-6 relative overflow-hidden bg-stone-100">
                       <img 
                         src={product.image} 
                         alt={product.name} 
                         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                       />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>

                    <div>
                      <div className="text-brand-gold text-xs uppercase tracking-widest mb-2">{product.category}</div>
                      <h3 className="font-serif text-2xl text-brand-dark mb-2 group-hover:underline decoration-1 underline-offset-4 transition-all">
                        {product.name}
                      </h3>
                      <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-dark text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          View Details <ChevronRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
                <h2 className="font-serif text-4xl md:text-6xl mb-8">Let's Create Something <br/> <span className="italic text-brand-gold">Beautiful</span></h2>
                <Link to="/contact">
                    <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark !px-12 !py-4">
                        Start a Project
                    </Button>
                </Link>
            </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Products;
