import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Chronicles } from './components/sections/Chronicles';
import { FloatingPetals } from './components/ui/FloatingPetals';
import { CloudDivider } from './components/ui/CloudDivider';
import { BlogPage } from './pages/Blog';
import { ContactPage } from './pages/Contact';

const LandingPage = () => (
  <main>
    <Hero />
    <CloudDivider className="bg-slate-bg" />
    <Chronicles />
    <section className="py-24 bg-slate-bg border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-serif text-white mb-8">
            Ready to Support Your <span className="text-gold-accent italic">Heritage</span>?
          </h3>
          <button className="mercury-fill px-12 py-5 border border-gold-accent text-gold-accent font-bold tracking-[0.3em] uppercase text-sm">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  </main>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-gold-accent selection:text-slate-bg">
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              key="loader"
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-bg flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-gold-accent border-t-transparent rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {isLoaded && (
          <motion.div 
            className="fan-fold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Header />
            <FloatingPetals />
            
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <footer className="py-12 bg-slate-bg border-t border-white/5 px-6">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gold-accent/20 border border-gold-accent rounded-sm flex items-center justify-center">
                    <span className="text-gold-accent font-serif font-bold">印</span>
                  </div>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest">
                    © 2026 Chinese Indonesian Association. All Rights Reserved.
                  </span>
                </div>
                
                <div className="flex items-center gap-8">
                  {['Privacy', 'Terms', 'Network'].map((item) => (
                    <a key={item} href="#" className="text-white/30 hover:text-gold-accent transition-colors text-[10px] uppercase tracking-widest">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </div>
    </Router>
  );
}


