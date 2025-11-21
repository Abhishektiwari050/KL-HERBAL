
import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import TextGenerateEffect from '../components/TextGenerateEffect';
import ParallaxImage from '../components/ParallaxImage';
import Marquee from '../components/Marquee';
import { ShieldCheck, Award, Factory, CheckCircle, Leaf, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOME_PRODUCT_IMAGES } from '../constants';

const Home: React.FC = () => {
  const trustItems = [
    { title: "GST Verified", icon: ShieldCheck },
    { title: "TrustSEAL Verified", icon: Award },
    { title: "ISO 9001:2015", icon: Factory },
    { title: "FSSAI Compliant", icon: CheckCircle },
    { title: "Organic Sourcing", icon: Leaf },
    { title: "Pure Extracts", icon: Droplets },
  ];

  return (
    <div className="overflow-hidden bg-brand-cream">
      {/* Hero Section - Editorial Style */}
      <section className="relative h-[90vh] min-h-[700px] flex flex-col justify-end pb-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://images.pexels.com/photos/8063850/pexels-photo-8063850.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://videos.pexels.com/video-files/5515667/5515667-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
             {/* Cinematic Grading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
                <div className="mb-6 overflow-hidden">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                         <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-white tracking-tight">
                            <span className="block text-brand-gold/90 font-light italic text-3xl md:text-4xl mb-2">The Art of</span>
                            Pure Herbal <br/> Innovation
                        </h1>
                    </motion.div>
                </div>
                
                <FadeIn delay={0.5} className="max-w-xl">
                    <p className="text-lg md:text-xl text-stone-200 font-light leading-relaxed mb-10 border-l-2 border-brand-gold pl-6">
                        Crafting luxurious, ethically sourced amenities for the world’s most discerning hotels and wellness sanctuaries.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/products">
                            <Button className="!bg-brand-gold !text-brand-dark hover:!bg-white shadow-2xl shadow-brand-gold/20">
                                Explore Collection
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* Trust Ticker - Kinetic Typography */}
      <section className="py-6 bg-brand-dark border-b border-white/5 relative z-20">
         <Marquee speed={40}>
            {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-brand-light/60 px-8">
                    <item.icon size={20} />
                    <span className="uppercase tracking-widest text-xs font-bold">{item.title}</span>
                </div>
            ))}
         </Marquee>
      </section>

      {/* Introduction - Editorial Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
                <FadeIn>
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-dark leading-[1.1] mb-8">
                        Where <span className="text-brand-primary italic">Nature</span> Meets <br/> Scientific Precision.
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed font-light mb-8">
                        Founded in 2023 with a vision to redefine luxury, KL Herbal blends ancient botanical wisdom with modern manufacturing excellence. We don't just make soap; we curate wellness experiences.
                    </p>
                    <Link to="/about" className="inline-block border-b border-brand-dark pb-1 text-brand-dark uppercase tracking-widest text-xs font-bold hover:text-brand-primary hover:border-brand-primary transition-colors">
                        Read Our Story
                    </Link>
                </FadeIn>
            </div>
            
            <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-2 gap-6">
                    <div className="pt-20">
                        <ParallaxImage 
                            src={HOME_PRODUCT_IMAGES.aloe}
                            alt="Aloe Vera Hotel Soap"
                            className="rounded-none aspect-[3/4] shadow-2xl"
                            speed={0.1}
                        />
                         <div className="mt-3 text-xs font-bold uppercase tracking-widest text-brand-dark/60 text-center">Aloe Vera Collection</div>
                    </div>
                    <div>
                         <ParallaxImage 
                            src={HOME_PRODUCT_IMAGES.charcoal}
                            alt="Charcoal Soap Base"
                            className="rounded-none aspect-[3/4] shadow-2xl"
                            speed={0.2}
                        />
                         <div className="mt-3 text-xs font-bold uppercase tracking-widest text-brand-dark/60 text-center">Charcoal Detox</div>
                    </div>
                </div>
                {/* Decorative text behind */}
                <div className="absolute -top-20 -right-20 text-[200px] font-serif text-brand-primary/5 leading-none select-none pointer-events-none z-[-1]">
                    Pure
                </div>
            </div>
        </div>
      </section>

      {/* Featured Product Spotlight - Dark Mode */}
      <section className="py-40 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                  <ParallaxImage 
                    src={HOME_PRODUCT_IMAGES.pinkRose}
                    alt="Pink Rose Soap Base"
                    className="aspect-square shadow-2xl border border-white/10"
                  />
              </div>
              
              <FadeIn direction="left">
                  <div className="flex items-center gap-4 mb-6">
                      <div className="h-[1px] w-12 bg-brand-gold"></div>
                      <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Signature Collection</span>
                  </div>
                  <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                      The Essence of <br/> <span className="italic text-brand-light/50">Pink Rose</span>
                  </h2>
                  <p className="text-brand-light/70 text-xl font-light leading-relaxed mb-12 max-w-lg">
                      Our Pink Rose soap base is crafted with 100% organic extracts, offering an indulgent lather and a delicate floral scent that guests remember.
                  </p>
                  <Link to="/products">
                      <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark">
                          View Catalog
                      </Button>
                  </Link>
              </FadeIn>
          </div>
      </section>

      {/* CTA - Grainy Gradient */}
      <section className="py-32 relative bg-brand-gold overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay"></div>
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-20 bg-grain"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
              <FadeIn>
                  <h2 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8 leading-[1.1]">
                      Ready to elevate your <br/> brand experience?
                  </h2>
                  <p className="text-brand-dark/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
                      Join the premier hotels trusting KL Herbal for their guest amenities.
                  </p>
                  <Link to="/contact">
                      <Button className="!bg-brand-dark !text-white !px-16 !py-5 text-lg shadow-2xl hover:scale-105 transition-transform">
                          Request Consultation
                      </Button>
                  </Link>
              </FadeIn>
          </div>
      </section>
    </div>
  );
};

export default Home;
