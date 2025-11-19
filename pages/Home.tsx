import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { ShieldCheck, Award, Factory, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#B6B6B4]">
        {/* Gradient Overlay for that "Studio Grey" look */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-400 to-stone-500 opacity-90" />
        
        {/* Subtle Texture/Noise could go here, but sticking to clean gradient for now */}
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white pt-16">
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6 tracking-tight drop-shadow-md">
              Pure Herbal Innovation for <br/> Hotels & Wellness
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-sm">
              Elevate the guest experience with our natural, luxurious herbal products, ethically sourced and scientifically formulated.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <Link to="/contact">
                <Button className="!bg-brand-dark hover:!bg-brand-primary !text-white border-none !px-10 !py-4 text-lg shadow-2xl transition-transform hover:scale-105">
                Request Quote
                </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
                <h3 className="font-serif text-2xl text-brand-dark mb-2">Trusted By The Best & Committed to Quality</h3>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors group cursor-default">
                <div className="p-3 bg-brand-cream rounded-full group-hover:bg-white transition-colors">
                    <ShieldCheck className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-600">GST Verified</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors group cursor-default">
                <div className="p-3 bg-brand-cream rounded-full group-hover:bg-white transition-colors">
                    <Award className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-600">TrustSEAL</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors group cursor-default">
                <div className="p-3 bg-brand-cream rounded-full group-hover:bg-white transition-colors">
                    <Factory className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-600">ISO 9001:2015</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors group cursor-default">
                <div className="p-3 bg-brand-cream rounded-full group-hover:bg-white transition-colors">
                    <CheckCircle className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-stone-600">FSSAI Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction='right' className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8">
                A Legacy of Purity
              </h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
                <p>
                  Founded in 1998, KL Herbal began with a simple yet profound vision: to bring the purest essence of nature into the world of luxury hospitality. Our heritage is rooted in ancient herbal traditions, combined with modern scientific precision.
                </p>
                <p>
                  Our goal is to redefine the guest experience, transforming routine moments into rituals of wellness and tranquility. We believe that true luxury lies in authenticity and purity.
                </p>
                <p>
                  Every product is a testament to our manufacturing ethos: ethically sourced, scientifically formulated, and crafted with unwavering attention to quality. We are committed to sustainability, ensuring a legacy of care for both people and the planet.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/about">
                    <Button variant="outline" className="!px-8 !py-3 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                        Read Our Story
                    </Button>
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn direction='left' className="order-1 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-brand-gold/20 rounded-xl transform rotate-3 transition-transform group-hover:rotate-0 duration-700 ease-out"></div>
                <img 
                    src="https://picsum.photos/800/800?random=10" 
                    alt="Herbal Ingredients on Dark Background" 
                    className="relative rounded-lg shadow-2xl w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature Highlight / CTA */}
      <section className="py-32 bg-stone-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
                <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-8 leading-tight">
                Ready to Elevate Your <br/> Guest Experience?
                </h2>
                <p className="text-stone-600 text-xl mb-12 max-w-2xl mx-auto font-light">
                Let us help you create unforgettable moments of wellness for your guests. Contact our team for a custom quote and to explore our exclusive B2B collection.
                </p>
                <Link to="/contact">
                    <Button size="lg" className="bg-brand-dark text-white hover:bg-brand-primary px-12 py-5 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        Request a Quote Now
                    </Button>
                </Link>
            </FadeIn>
          </div>
      </section>
    </div>
  );
};

export default Home;