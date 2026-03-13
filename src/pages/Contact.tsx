import React from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/layout/Header';
import { CloudDivider } from '../components/ui/CloudDivider';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-bg pt-32 pb-24 relative overflow-hidden">
      <Header />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/ink/1000/1000')] bg-cover bg-center grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-gold-accent text-sm uppercase tracking-[0.5em] mb-4 font-sans font-semibold">
              Connect with Heritage
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Initiate <span className="text-gold-accent italic">Correspondence</span>
            </h1>
            <div className="w-24 h-1 bg-gold-accent mx-auto opacity-30" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info - "Ink Wash" style cards */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="group">
                <h3 className="text-gold-accent text-xs uppercase tracking-widest mb-6 font-bold flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold-accent/30" />
                  Contact Channels
                </h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: 'Electronic Scroll', value: 'secretariat@heritage-inti.org' },
                    { icon: Phone, label: 'Voice Link', value: '+62 21 555 0198' },
                    { icon: MapPin, label: 'Physical Archive', value: 'Jl. Gajah Mada No. 18, Jakarta, Indonesia' }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-6 group/item"
                    >
                      <div className="w-12 h-12 rounded-sm border border-gold-accent/20 flex items-center justify-center group-hover/item:border-gold-accent transition-colors">
                        <item.icon size={20} className="text-gold-accent/60 group-hover/item:text-gold-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                        <p className="text-white text-lg font-light">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gold-accent/5 border border-gold-accent/10 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <span className="text-6xl font-serif text-gold-accent">印</span>
                </div>
                <h4 className="text-white font-serif text-xl mb-4">Visit Our Cultural Center</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Our doors are open for heritage consultations and community gatherings from Monday to Friday, 09:00 — 17:00 WIB.
                </p>
              </div>
            </motion.div>

            {/* Contact Form - "Folding Fan" reveal animation */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <form className="space-y-6 bg-white/5 p-10 border border-white/10 rounded-sm shadow-2xl backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-accent/60">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-accent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-accent/60">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-accent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold-accent/60">Inquiry Type</label>
                  <select className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-accent transition-all appearance-none cursor-pointer">
                    <option className="bg-slate-bg">General Membership</option>
                    <option className="bg-slate-bg">Heritage Research</option>
                    <option className="bg-slate-bg">Cultural Events</option>
                    <option className="bg-slate-bg">Philanthropy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold-accent/60">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold-accent transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mercury-fill py-5 border border-gold-accent text-gold-accent font-bold tracking-[0.3em] uppercase text-xs flex items-center justify-center gap-3 group"
                >
                  Seal & Send
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
              
              {/* Decorative Calligraphy Stroke */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-24 h-1 bg-gold-accent origin-left"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <CloudDivider className="mt-24 opacity-30" />
    </div>
  );
};
