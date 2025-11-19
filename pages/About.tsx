import React from 'react';
import FadeIn from '../components/FadeIn';
import { TIMELINE_DATA, CERTIFICATIONS, TRUST_REASONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-brand-dark text-white">
        <div className="absolute inset-0">
           <img 
             src="https://picsum.photos/1920/1080?random=20&grayscale&blur=2" 
             alt="Herbal Laboratory" 
             className="w-full h-full object-cover opacity-30 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              Pioneering Herbal <br/> Excellence Since 1998
            </h1>
            <p className="text-lg md:text-xl text-brand-light/80 max-w-2xl mx-auto font-light">
              Blending ancient herbal wisdom with modern science for our B2B partners in the hotel and wellness industry. We are dedicated to purity, efficacy, and partnership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
                Our Heritage of Purity and Innovation
              </h2>
              <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
                Follow our journey from humble beginnings to a leader in herbal solutions, built on a foundation of quality and trust.
              </p>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-16 md:space-y-24">
              {TIMELINE_DATA.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-dark border-4 border-white shadow-sm transform -translate-x-[5px] md:-translate-x-1/2 z-10 mt-8 md:mt-0"></div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left md:text-right relative mb-8 md:mb-0">
                     <div className={index % 2 !== 0 ? 'md:text-left md:pl-16 md:pr-0' : ''}>
                        <FadeIn delay={0.2} direction={index % 2 === 0 ? 'right' : 'left'}>
                            <span className="text-brand-gold font-bold text-sm tracking-widest uppercase block mb-2">{item.year}</span>
                            <h3 className="font-serif text-2xl text-brand-dark mb-3">{item.title}</h3>
                            <p className="text-stone-500 font-light leading-relaxed">{item.description}</p>
                        </FadeIn>
                     </div>
                  </div>

                  {/* Image Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-16 ${index % 2 !== 0 ? 'md:pr-16 md:pl-0' : ''}`}>
                     <FadeIn delay={0.3} direction={index % 2 === 0 ? 'left' : 'right'}>
                        <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
                             <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                     </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-200 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-stone-100 shadow-inner">
                  <img src="https://picsum.photos/400/400?random=33&grayscale" alt="Founder" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-serif text-3xl text-brand-dark mb-6">A Message From Our Founder</h3>
                <blockquote className="font-serif italic text-xl text-stone-600 leading-relaxed mb-8">
                  "Our promise has always been to deliver unparalleled purity and efficacy. We blend time-honored traditions with scientific precision to create herbal solutions that elevate your guest's experience. Our partners' trust is the cornerstone of our legacy."
                </blockquote>
                <div>
                  <div className="font-serif text-lg font-bold text-brand-dark">Founder's Signature</div>
                  <div className="text-xs uppercase tracking-widest text-stone-500 mt-1">CEO & Founder, KL Herbal</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
                <h2 className="font-serif text-4xl text-brand-dark mb-4">Certified Quality, Unwavering Trust</h2>
                <p className="text-stone-500 max-w-2xl mx-auto font-light">
                    We adhere to the highest standards of quality and transparency. Our certifications are a testament to our commitment to excellence.
                </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="bg-stone-50 rounded-xl p-8 text-center h-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-stone-100">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-dark">
                    <cert.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-brand-dark mb-3">{cert.title}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{cert.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust KL Herbal */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <FadeIn>
                    <h2 className="font-serif text-4xl text-brand-dark">Why Trust KL Herbal?</h2>
                </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TRUST_REASONS.map((reason, index) => (
                    <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                        <div className="flex items-start gap-5">
                            <div className="shrink-0 mt-1">
                                <reason.icon className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-brand-dark mb-2">{reason.title}</h4>
                                <p className="text-stone-600 font-light leading-relaxed">{reason.description}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;