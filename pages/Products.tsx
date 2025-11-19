import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = ['All', ...Object.values(ProductCategory).filter(x => x !== 'All')];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
                <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">
                    Pure Herbal Innovation for <br/> Elevated Wellness
                </h1>
                <p className="text-stone-500 text-lg font-light">
                    Crafted for discerning hotels and wellness centers, our collection embodies the pinnacle of natural purity and efficacy.
                </p>
            </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                    ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                    : 'bg-stone-100 text-stone-600 border-transparent hover:bg-stone-200 hover:text-brand-dark'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {filteredProducts.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/5] mb-6 shadow-sm transition-shadow hover:shadow-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {product.category}
                    </span>
                  </div>
                </div>

                <div className="text-center px-4">
                  <h3 className="font-serif text-2xl text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm mb-3 font-light">
                    {product.description}
                  </p>
                   <div className="flex flex-wrap justify-center gap-2">
                    {product.features.slice(0, 2).map(f => (
                        <span key={f} className="text-[10px] uppercase tracking-wider text-stone-400 border border-stone-200 px-2 py-0.5 rounded-sm">
                            {f}
                        </span>
                    ))}
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;