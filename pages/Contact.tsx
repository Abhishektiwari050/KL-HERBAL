import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-20">
        {/* Header */}
        <section className="bg-stone-50 pt-16 pb-12 text-center px-4">
            <FadeIn>
                <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-4 tracking-tight">
                    Partner with KL Herbal
                </h1>
                <p className="text-stone-500 text-lg font-light">
                    Fill out the form below to request a quote or ask about our pure herbal innovations.
                </p>
            </FadeIn>
        </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          
          {/* Contact Form (Left 2/3) */}
          <div className="lg:col-span-2">
             <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12">
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

                        <Button className="w-full !py-4 text-lg bg-brand-dark hover:bg-brand-primary">
                            Submit Inquiry
                        </Button>
                    </form>
                </div>
             </FadeIn>
          </div>

          {/* Sidebar Info (Right 1/3) */}
          <div className="lg:col-span-1 space-y-8">
            <FadeIn delay={0.4}>
                {/* Contact Details */}
                <div className="bg-transparent space-y-8">
                    <h3 className="font-bold text-xl text-brand-dark mb-6">Direct Contact Information</h3>
                    
                    <div className="flex items-start gap-4">
                        <div className="mt-1 text-brand-dark"><MapPin size={24} /></div>
                        <div>
                            <h4 className="font-semibold text-brand-dark">KL Herbal Factory</h4>
                            <p className="text-stone-500 font-light text-sm mt-1 leading-relaxed text-balance">
                                {COMPANY_INFO.address}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 text-brand-dark"><Phone size={24} /></div>
                        <div>
                            <h4 className="font-semibold text-brand-dark">Phone</h4>
                            <p className="text-stone-500 font-light text-sm mt-1">{COMPANY_INFO.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 text-brand-dark"><Mail size={24} /></div>
                        <div>
                            <h4 className="font-semibold text-brand-dark">Email</h4>
                            <p className="text-stone-500 font-light text-sm mt-1">{COMPANY_INFO.email}</p>
                        </div>
                    </div>

                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
                        <button className="w-full flex items-center justify-center gap-3 mt-6 border-2 border-brand-dark text-brand-dark py-3 rounded-full font-semibold hover:bg-brand-dark hover:text-white transition-all duration-300">
                            <MessageCircle size={20} />
                            Chat with us on WhatsApp
                        </button>
                    </a>
                </div>

                {/* Map Section */}
                <div className="mt-10">
                     <h3 className="font-bold text-xl text-brand-dark mb-4">Our Location</h3>
                     <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 h-64 bg-stone-200 relative">
                        {/* Static Map Image Placeholder since we don't have a Google Maps Key */}
                        <img 
                            src="https://picsum.photos/600/400?random=map&grayscale" 
                            alt="Map Location" 
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="bg-brand-dark text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2">
                                <MapPin size={16} /> Delhi, India
                             </div>
                        </div>
                     </div>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;