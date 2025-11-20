
import React from 'react';
import FadeIn from '../components/FadeIn';
import { CERTIFICATIONS, COMPANY_INFO, TIMELINE_DATA, TRUST_REASONS } from '../constants';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Legacy Cinematic Style */}
      <section className="relative py-32 lg:py-40 bg-brand-dark text-white flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-30">
             <img 
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2000&auto=format&fit=crop" 
                alt="Herbal Background" 
                className="w-full h-full object-cover" 
             />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
               <span className="text-brand-gold font-bold tracking-[0.3em] uppercase mb-6 block text-sm">Est. 2023</span>
               <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">Pioneering Herbal Excellence</h1>
               <p className="text-xl font-light text-brand-light max-w-2xl mx-auto">
                   Blending modern manufacturing science with timeless purity to create the finest hospitality amenities.
               </p>
            </FadeIn>
         </div>
      </section>

      {/* Timeline - Legacy Vertical Style */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-4 relative z-10">
             <div className="text-center mb-20">
                 <FadeIn>
                    <h2 className="font-serif text-4xl text-brand-dark mb-4">Our Journey</h2>
                    <p className="text-stone-500 font-light">From inception to industry leader.</p>
                 </FadeIn>
             </div>

             <div className="relative">
                 {/* Vertical Line */}
                 <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-brand-dark/20"></div>

                 {TIMELINE_DATA.map((item, index) => (
                     <div key={index} className={`flex flex-col md:flex-row items-center justify-between mb-20 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                         {/* Dot */}
                         <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-gold rounded-full border-4 border-white shadow-md z-10 mt-1.5 md:mt-0"></div>

                         {/* Content Side */}
                         <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'text-left md:text-right md:pr-12' : 'text-left md:pl-12'}`}>
                             <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                                 <div className="text-brand-gold font-bold text-6xl font-serif mb-4 opacity-80 leading-none">{item.year}</div>
                                 <h3 className="text-2xl font-bold text-brand-dark mb-3">{item.title}</h3>
                                 <p className="text-stone-600 font-light leading-relaxed">{item.description}</p>
                             </FadeIn>
                         </div>

                         {/* Image Side */}
                         <div className="w-full md:w-[45%] mt-8 md:mt-0 pl-12 md:pl-0">
                             <FadeIn direction={index % 2 === 0 ? 'left' : 'right'}>
                                 <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="rounded-lg shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" 
                                 />
                             </FadeIn>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Founder Section - Distinct Layout */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4">
             <div className="bg-stone-100 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                 {/* Decorative Background */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                     <FadeIn className="shrink-0">
                         <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                             <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                                alt="Lata Verma" 
                                className="w-full h-full object-cover" 
                             />
                         </div>
                     </FadeIn>
                     <FadeIn direction="left" className="text-center md:text-left">
                         <h2 className="font-serif text-3xl text-brand-dark mb-6">A Message From Our Founder</h2>
                         <p className="text-xl italic text-stone-600 font-serif leading-relaxed mb-8">
                             "Our promise has always been to deliver unparalleled purity and efficacy. We blend time-honored traditions with modern scientific precision to create herbal solutions that truly elevate your guest's experience."
                         </p>
                         <div className="font-bold text-brand-dark text-xl font-serif">{COMPANY_INFO.founder}</div>
                         <div className="text-brand-primary text-xs uppercase tracking-widest mt-1">CEO & Founder, {COMPANY_INFO.name}</div>
                     </FadeIn>
                 </div>
             </div>
         </div>
      </section>

      {/* Certifications - Legacy Grid */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <FadeIn>
                  <h2 className="font-serif text-4xl text-brand-dark mb-6">Certified Quality, Unwavering Trust</h2>
                  <p className="text-stone-500 font-light max-w-2xl mx-auto mb-16">
                      We adhere to the highest international standards of quality and transparency.
                  </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {CERTIFICATIONS.map((cert, idx) => (
                      <FadeIn key={idx} delay={idx * 0.1} className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-stone-100">
                          <div className="w-16 h-16 mx-auto bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6">
                              <cert.icon size={32} strokeWidth={1.5} />
                          </div>
                          <h3 className="font-bold text-brand-dark mb-3 text-lg">{cert.title}</h3>
                          <p className="text-stone-500 text-sm leading-relaxed">{cert.description}</p>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>

      {/* Why Trust - Legacy Features */}
      <section className="py-24 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4">
               <div className="text-center mb-16">
                   <h2 className="font-serif text-4xl mb-4">Why Trust KL Herbal?</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                   {TRUST_REASONS.map((reason, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1} className="text-left group">
                            <div className="text-brand-gold mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <reason.icon size={40} strokeWidth={1} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 font-serif">{reason.title}</h3>
                            <p className="text-brand-light/70 font-light text-sm leading-relaxed">{reason.description}</p>
                        </FadeIn>
                   ))}
               </div>
          </div>
      </section>
    </div>
  );
};

export default About;
