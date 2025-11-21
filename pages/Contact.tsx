
import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  // Stagger animation variants for sidebar list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Changed x to y for slide-up
    visible: { 
      opacity: 1, 
      y: 0, // Changed x to y for slide-up
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
        {/* Hero Section with Video */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.pexels.com/photos/8063850/pexels-photo-8063850.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                {/* Pexels video: Green leaves/nature close up - HD 1080p */}
                <source src="https://videos.pexels.com/video-files/5373360/5373360-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
             {/* Dark overlay for visibility */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-brand-dark/30 mix-blend-multiply" />
            
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <FadeIn amount={0.5}>
                    <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 tracking-tight drop-shadow-lg">
                        Partner with KL Herbal
                    </h1>
                    <p className="text-stone-200 text-lg md:text-xl font-light max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                        Fill out the form below to request a quote or ask about our pure herbal innovations.
                    </p>
                </FadeIn>
            </div>
        </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Form (Left - spans 8 cols) */}
          <div className="lg:col-span-8">
             <FadeIn delay={0.2} className="h-full" direction="up">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12 h-full">
                    <h2 className="font-serif text-3xl text-brand-dark mb-8">Request a Quote</h2>
                    
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Full Name</label>
                                <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all font-light" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Company Name</label>
                                <input type="text" placeholder="Enter your company name" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all font-light" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Work Email</label>
                                <input type="email" placeholder="Enter your work email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all font-light" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Phone Number</label>
                                <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all font-light" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-700">Inquiry Type</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all font-light appearance-none text-stone-600">
                                    <option>Request a Quote</option>
                                    <option>Wholesale Partnership</option>
                                    <option>Custom Formulation</option>
                                    <option>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-700">Message</label>
                            <textarea rows={5} placeholder="Tell us more about your needs..." className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all font-light resize-none"></textarea>
                        </div>

                        <Button className="w-full !py-4 text-lg bg-brand-dark hover:bg-brand-primary text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                            Submit Inquiry
                        </Button>
                    </form>
                </div>
             </FadeIn>
          </div>

          {/* Sidebar Info (Right - spans 4 cols) */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.4} className="h-full" direction="up">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 h-full flex flex-col">
                    <h3 className="font-serif text-2xl text-brand-dark mb-8">Contact Information</h3>
                    
                    {/* Staggered List Container */}
                    <motion.div 
                      className="space-y-8 flex-grow"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <div className="mt-1 text-brand-dark p-3 bg-brand-cream rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300"><MapPin size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-brand-dark mb-1">Factory Address</h4>
                                <p className="text-stone-500 font-light text-sm leading-relaxed text-balance">
                                    {COMPANY_INFO.address}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <div className="mt-1 text-brand-dark p-3 bg-brand-cream rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300"><Phone size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-brand-dark mb-1">Phone</h4>
                                <p className="text-stone-500 font-light text-sm">{COMPANY_INFO.phone}</p>
                                <p className="text-stone-400 text-xs mt-1">Mon-Fri, 9am - 6pm IST</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <div className="mt-1 text-brand-dark p-3 bg-brand-cream rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300"><Mail size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-brand-dark mb-1">Email</h4>
                                <p className="text-stone-500 font-light text-sm">{COMPANY_INFO.email}</p>
                                <p className="text-stone-400 text-xs mt-1">Responses within 24 hours</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <FadeIn delay={0.8} direction="up">
                      <div className="mt-10 space-y-6">
                          <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
                              <button className="w-full flex items-center justify-center gap-3 border border-stone-200 text-stone-700 hover:border-green-600 hover:text-green-700 bg-stone-50 hover:bg-green-50 py-3 rounded-xl font-medium transition-all duration-300 mb-6">
                                  <MessageCircle size={20} />
                                  Chat on WhatsApp
                              </button>
                          </a>

                          <div className="rounded-xl overflow-hidden border border-stone-200 h-48 w-full relative group">
                              <img 
                                  src="https://picsum.photos/600/400?random=map&grayscale" 
                                  alt="Map Location" 
                                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                              />
                              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-medium text-stone-600 shadow-sm flex items-center justify-between">
                                  <span>New Delhi, India</span>
                                  <MapPin size={14} className="text-brand-dark"/>
                              </div>
                          </div>
                      </div>
                    </FadeIn>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
