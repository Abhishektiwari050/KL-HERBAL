
import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import TextGenerateEffect from '../components/TextGenerateEffect';
import { CardHoverEffect } from '../components/CardHoverEffect';
import { ShieldCheck, Award, Factory, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Parallax for CTA background
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 1.1]);
  // Parallax for legacy section image
  const yLegacy = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

  const trustItems = [
    {
      title: "GST Verified",
      description: "Fully compliant and registered business entity.",
      icon: ShieldCheck
    },
    {
      title: "TrustSEAL",
      description: "Verified authentication by IndiaMART standards.",
      icon: Award
    },
    {
      title: "ISO 9001:2015",
      description: "International standard for quality management.",
      icon: Factory
    },
    {
      title: "FSSAI Certified",
      description: "Adhering to strict safety and food standards.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="overflow-hidden bg-stone-50">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
                {/* Pexels video: Water ripples/nature vibe - HD 1080p for reliability */}
                <source src="https://videos.pexels.com/video-files/5515667/5515667-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
             {/* Dark overlay for text readability - Adjusted opacity for better video visibility */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white pt-16">
            <div className="mb-6">
                <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight tracking-tight drop-shadow-xl">
                    <TextGenerateEffect words="Pure Herbal Innovation for Hotels & Wellness" />
                </h1>
            </div>
          
          <FadeIn delay={1.2}>
            <p className="text-lg md:text-2xl text-stone-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
              Elevate the guest experience with our natural, luxurious herbal products, ethically sourced and scientifically formulated.
            </p>
          </FadeIn>
          
          <FadeIn delay={1.5}>
            <Link to="/contact">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="!bg-brand-gold hover:!bg-white hover:!text-brand-dark !text-brand-dark font-bold border-none !px-12 !py-5 text-lg shadow-[0_0_40px_-10px_rgba(212,175,55,0.6)] transition-all duration-500">
                        Request Quote
                    </Button>
                </motion.div>
            </Link>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
        >
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Trust Indicators - Aceternity Hover Effect */}
      <section className="py-20 bg-white border-b border-stone-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
                <FadeIn>
                    <h3 className="font-serif text-3xl text-brand-dark mb-2">Trusted By The Best</h3>
                    <p className="text-stone-500 font-light">Committed to quality, transparency, and global standards.</p>
                </FadeIn>
            </div>
            <FadeIn delay={0.3}>
                <CardHoverEffect items={trustItems} />
            </FadeIn>
        </div>
      </section>

      {/* Legacy Section with Parallax Image */}
      <section className="py-32 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction='right' className="order-2 lg:order-1">
              <h2 className="font-serif text-5xl md:text-6xl text-brand-dark mb-10 leading-tight">
                A Legacy of <br/> <span className="text-brand-primary italic">Purity & Potency</span>
              </h2>
              <div className="space-y-8 text-stone-600 font-light leading-relaxed text-lg">
                <p>
                  Founded in 1998, KL Herbal began with a simple yet profound vision: to bring the purest essence of nature into the world of luxury hospitality. Our heritage is rooted in ancient herbal traditions, combined with modern scientific precision.
                </p>
                <p>
                  Every product is a testament to our manufacturing ethos: ethically sourced, scientifically formulated, and crafted with unwavering attention to quality.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/about">
                    <Button variant="outline" className="!px-10 !py-4 text-base tracking-widest border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-500">
                        READ OUR STORY
                    </Button>
                </Link>
              </div>
            </FadeIn>
            
            <div className="order-1 lg:order-2 relative group">
                <motion.div 
                    style={{ y: yLegacy }}
                    className="relative z-10"
                >
                     <img 
                        src="https://picsum.photos/800/800?random=10" 
                        alt="Herbal Ingredients" 
                        className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                    />
                     {/* Floating Element */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
                    >
                        <p className="font-serif italic text-brand-dark text-lg">"True luxury lies in authenticity."</p>
                    </motion.div>
                </motion.div>
                
                {/* Decorative Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight / CTA */}
      <section className="py-40 relative overflow-hidden bg-brand-dark text-white">
          <motion.div 
            style={{ scale }} 
            className="absolute inset-0 opacity-20"
          >
               <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Spa Background" 
                className="w-full h-full object-cover"
               />
          </motion.div>
          
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
                <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                Ready to Elevate Your <br/> Guest Experience?
                </h2>
                <p className="text-brand-light/80 text-xl mb-16 max-w-2xl mx-auto font-light">
                Let us help you create unforgettable moments of wellness for your guests. Contact our team for a custom quote and to explore our exclusive B2B collection.
                </p>
                <Link to="/contact">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-brand-dark px-14 py-6 rounded-full text-lg font-bold tracking-wide shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all"
                    >
                        Request a Quote Now
                    </motion.button>
                </Link>
            </FadeIn>
          </div>
      </section>
    </div>
  );
};

export default Home;
