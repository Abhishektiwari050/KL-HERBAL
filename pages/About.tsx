import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ParallaxImage from '../components/ParallaxImage';
import { TIMELINE_DATA, CERTIFICATIONS, COMPANY_INFO } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-brand-cream">
      {/* Parallax Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
         {/* Parallax Background */}
         <motion.div 
            style={{ y: heroParallax }}
            className="absolute inset-0 z-0"
         >
             <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
                alt="Herbal Roots Background" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-black/30"></div>
         </motion.div>

         <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 w-full pt-20">
             <FadeIn>
                <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-8 drop-shadow-2xl">
                    Our <span className="italic text-brand-gold drop-shadow-md">Heritage</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <div className="h-[2px] w-full bg-brand-gold/80 mt-4 shadow-lg"></div>
                    </div>
                    <div className="lg:col-span-7">
                        <p className="text-xl md:text-2xl font-light text-stone-100 leading-relaxed drop-shadow-lg">
                            Established in 2023, KL Herbal Enterprises was born from a desire to bring transparency, purity, and authentic wellness back to the hospitality industry.
                        </p>
                    </div>
                </div>
             </FadeIn>
         </div>
      </section>

      {/* Cinematic Founder Story */}
      <section className="py-20">
         <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
             <ParallaxImage 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000" 
                alt="Lata Verma, Founder"
                className="w-full h-full"
                speed={0.05}
             />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
             
             <div className="absolute inset-0 flex items-center">
                 <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 w-full">
                     <div className="max-w-2xl">
                        <FadeIn>
                            <Quote size={48} className="text-brand-gold mb-6 opacity-50" />
                            <blockquote className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8 drop-shadow-lg">
                                "We don't just manufacture products; we craft experiences. Quality isn't a checklist for us—it's the soul of our company."
                            </blockquote>
                            <div className="text-white">
                                <div className="text-2xl font-bold font-serif drop-shadow-md">{COMPANY_INFO.founder}</div>
                                <div className="text-brand-gold uppercase tracking-widest text-sm mt-1 drop-shadow-md">Founder & CEO</div>
                            </div>
                        </FadeIn>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Alternating Milestone Timeline */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto relative">
          <FadeIn className="mb-24 text-center">
             <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">Our Journey</h2>
             <div className="h-[1px] w-24 bg-brand-gold mx-auto"></div>
          </FadeIn>

          {/* Central Line (Desktop Only) */}
          <div className="absolute left-1/2 top-[20%] bottom-[10%] w-[1px] bg-brand-dark/10 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-24 md:space-y-0">
              {TIMELINE_DATA.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center relative md:pb-32 last:pb-0">
                      
                      {/* Center Dot */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-gold rounded-full border-4 border-brand-cream z-10 hidden md:block shadow-sm"></div>

                      {/* Left Column */}
                      <div className={`md:pr-24 ${index % 2 !== 0 ? 'md:order-2 md:pl-24 md:pr-0' : ''}`}>
                          {index % 2 === 0 ? (
                              // Even: Text on Left
                              <FadeIn direction="right" className="text-left md:text-right">
                                  <span className="text-6xl md:text-8xl font-serif text-brand-gold/20 font-bold leading-none -mb-8 relative z-0 block">{item.year}</span>
                                  <div className="relative z-10">
                                      <h3 className="text-3xl font-serif text-brand-dark mb-4">{item.title}</h3>
                                      <p className="text-stone-600 font-light leading-relaxed max-w-md ml-auto">{item.description}</p>
                                  </div>
                              </FadeIn>
                          ) : (
                              // Odd: Image on Left
                              <FadeIn direction="right">
                                  <div className="relative aspect-[4/3] shadow-2xl overflow-hidden group">
                                      <ParallaxImage src={item.image} alt={item.title} className="w-full h-full" speed={0.1} />
                                      <div className="absolute inset-0 border border-brand-gold/20 pointer-events-none"></div>
                                  </div>
                              </FadeIn>
                          )}
                      </div>

                      {/* Right Column */}
                      <div className={`md:pl-24 ${index % 2 !== 0 ? 'md:order-1 md:pr-24 md:pl-0' : ''}`}>
                          {index % 2 === 0 ? (
                              // Even: Image on Right
                              <FadeIn direction="left">
                                  <div className="relative aspect-[4/3] shadow-2xl overflow-hidden group">
                                       <ParallaxImage src={item.image} alt={item.title} className="w-full h-full" speed={0.1} />
                                       <div className="absolute inset-0 border border-brand-gold/20 pointer-events-none"></div>
                                  </div>
                              </FadeIn>
                          ) : (
                              // Odd: Text on Right
                              <FadeIn direction="left" className="text-left">
                                  <span className="text-6xl md:text-8xl font-serif text-brand-gold/20 font-bold leading-none -mb-8 relative z-0 block">{item.year}</span>
                                  <div className="relative z-10">
                                      <h3 className="text-3xl font-serif text-brand-dark mb-4">{item.title}</h3>
                                      <p className="text-stone-600 font-light leading-relaxed max-w-md">{item.description}</p>
                                  </div>
                              </FadeIn>
                          )}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Certifications - Minimalist Grid */}
      <section className="py-32 bg-white border-t border-stone-100">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100 border border-stone-100">
                 {CERTIFICATIONS.map((cert, idx) => (
                     <div key={idx} className="bg-white p-12 flex flex-col items-start hover:bg-stone-50 transition-colors duration-500 group">
                         <div className="mb-6 text-brand-dark group-hover:text-brand-gold transition-colors">
                             <cert.icon size={32} strokeWidth={1} />
                         </div>
                         <h3 className="font-serif text-xl text-brand-dark mb-3">{cert.title}</h3>
                         <p className="text-stone-500 font-light text-sm">{cert.description}</p>
                     </div>
                 ))}
             </div>
         </div>
      </section>
    </div>
  );
};

export default About;