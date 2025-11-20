
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

  // Filter Logic
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = ['All', ...Object.values(ProductCategory).filter(x => x !== 'All')];

  // Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PRODUCT_HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % PRODUCT_HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + PRODUCT_HERO_IMAGES.length) % PRODUCT_HERO_IMAGES.length);

  // Pastel backgrounds for cards
  const cardBackgrounds = [
    'bg-[#FDF6E3]', // Cream/Beige
    'bg-[#E9F5E9]', // Light Green
    'bg-[#F5E6E0]', // Light Terracotta
    'bg-[#F3F4F6]', // Light Grey
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Hero Section - Split Layout with Carousel */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <FadeIn direction="right">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-8 leading-[1.1]">
              Purity in Every Particle: <br/>
              <span className="text-brand-primary">The Journey of Our Products</span>
            </h1>
            <p className="text-stone-500 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl">
              Discover our commitment to transparency, from the source to the final formulation, delivering pure, potent herbal innovations for your brand.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button 
                 onClick={() => document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' })}
                 className="!bg-[#22c55e] hover:!bg-[#16a34a] text-white px-8 py-4 text-base font-bold shadow-lg transition-transform hover:-translate-y-1"
               >
                 Explore Our Collection
               </Button>
            </div>
          </FadeIn>

          {/* Right: Image Carousel */}
          <FadeIn direction="left" className="w-full h-full min-h-[400px] lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group">
             <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={PRODUCT_HERO_IMAGES[currentSlide]}
                  alt="Product Showcase"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </AnimatePresence>
             
             {/* Carousel Controls */}
             <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                <button onClick={prevSlide} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-brand-dark transition-colors">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-brand-dark transition-colors">
                   <ChevronRight size={20} />
                </button>
             </div>
             
             {/* Dark Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </FadeIn>
        </div>
      </section>

      {/* Product Filter & Grid */}
      <section id="product-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
           {/* Category Tabs */}
           <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 tracking-wide border ${
                    activeCategory === cat
                      ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                      : 'bg-white text-stone-500 border-stone-200 hover:border-brand-dark hover:text-brand-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
           </FadeIn>

           {/* Grid */}
           <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
           >
              <AnimatePresence>
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    key={product.id}
                    className={`group relative rounded-xl overflow-hidden p-6 pb-20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${cardBackgrounds[idx % cardBackgrounds.length]}`}
                  >
                    {/* Image Container */}
                    <div className="aspect-square w-full mb-6 relative flex items-center justify-center">
                       <div className="w-full h-full rounded-full bg-white/40 absolute inset-0 transform scale-75 blur-xl group-hover:scale-90 transition-transform duration-700"></div>
                       <img 
                         src={product.image} 
                         alt={product.name} 
                         className="w-full h-full object-contain relative z-10 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" 
                       />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-serif text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-brand-dark/60 text-sm font-medium mb-3 tracking-wide uppercase">
                         {product.category}
                      </p>
                      <p className="text-stone-600 text-sm font-light leading-relaxed line-clamp-2 mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="absolute bottom-6 left-6 right-6">
                         <button className="w-full py-3 bg-white/60 backdrop-blur-sm hover:bg-white text-brand-dark font-bold text-sm rounded-lg shadow-sm transition-all duration-300 uppercase tracking-wider">
                            Learn More
                         </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
                <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-6 leading-tight">
                    Partner with Nature's Finest
                </h2>
                <p className="text-stone-500 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                    Elevate your guest experience with our pure, sustainably sourced herbal ingredients. Let's create something exceptional together.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/contact">
                        <Button className="w-full sm:w-auto !bg-[#22c55e] hover:!bg-[#16a34a] !px-10 !py-4 text-lg shadow-xl shadow-green-200">
                            Request a Sample Kit
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" className="w-full sm:w-auto border-stone-300 !bg-white hover:!bg-stone-100 text-stone-600 !px-10 !py-4 text-lg">
                            Partner With Us
                        </Button>
                    </Link>
                </div>
            </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Products;
