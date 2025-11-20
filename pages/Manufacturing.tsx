
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { MANUFACTURING_STEPS, MANUFACTURING_STATS } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Manufacturing: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Manufacturing Facility"
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white mt-16">
            <FadeIn delay={0.2}>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 drop-shadow-2xl">
                    Enhance Guest Experiences <br/>
                    <span className="text-brand-primary italic">with Pure Herbal Innovation</span>
                </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light text-stone-200 mb-10 leading-relaxed">
                   KL Herbal is committed to providing the finest natural amenities for the hospitality industry, elevating every stay into a memorable wellness journey.
                </p>
            </FadeIn>
             <FadeIn delay={0.8}>
                <Link to="/products">
                    <Button variant="primary" className="!bg-brand-primary hover:!bg-white hover:!text-brand-dark border border-transparent hover:border-brand-primary !px-10 !py-4 text-lg">
                        Explore Our Solutions
                    </Button>
                </Link>
            </FadeIn>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-8 leading-tight">
                    Tailored Solutions for Your Business
                </h2>
                <p className="text-stone-600 text-lg font-light leading-relaxed">
                    Our state-of-the-art facility in Swaroop Nagar combines traditional herbal wisdom with cutting-edge manufacturing technology. We control every aspect of the production line to ensure consistency, purity, and scalability for our global partners.
                </p>
            </FadeIn>
        </div>
      </section>

      {/* The Manufacturing Process */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <FadeIn>
                    <span className="text-brand-gold uppercase tracking-widest font-bold text-sm mb-3 block">The Process</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">From Nature to Nurture</h2>
                </FadeIn>
            </div>

            <div className="space-y-32">
                {MANUFACTURING_STEPS.map((step, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Image */}
                        <div className="w-full lg:w-1/2 relative">
                             <FadeIn direction={index % 2 === 0 ? 'right' : 'left'} className="relative z-10">
                                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                             </FadeIn>
                             {/* Decorative element */}
                             <div className={`absolute top-10 -bottom-10 w-full h-full border-2 border-brand-gold/30 rounded-2xl -z-0 ${index % 2 === 0 ? '-right-10' : '-left-10'}`}></div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2">
                            <FadeIn direction={index % 2 === 0 ? 'left' : 'right'}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-gold flex items-center justify-center text-xl font-bold font-serif">
                                        {index + 1}
                                    </div>
                                    <div className="h-[1px] flex-grow bg-stone-200"></div>
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">{step.title}</h3>
                                <p className="text-stone-500 text-lg font-light leading-relaxed mb-8">
                                    {step.description}
                                </p>
                                <div className="flex items-center gap-3 text-brand-primary font-medium uppercase tracking-wide text-sm">
                                    <step.icon size={18} />
                                    <span>Verified Step</span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Stats / Infrastructure Highlight */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                {MANUFACTURING_STATS.map((stat, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1} className="px-4">
                        <div className="text-4xl md:text-6xl font-serif font-bold text-brand-gold mb-4">{stat.value}</div>
                        <div className="text-brand-light/70 text-sm uppercase tracking-widest">{stat.label}</div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">
                    Ready to Partner?
                </h2>
                <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto">
                    Our facility is ready to handle orders of any scale with precision and speed. Let's discuss your manufacturing needs.
                </p>
                <Link to="/contact">
                    <Button className="!bg-brand-dark !text-white !px-12 !py-4 text-lg hover:!bg-brand-primary shadow-xl">
                        Schedule a Factory Visit
                    </Button>
                </Link>
            </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
