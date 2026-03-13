import React from 'react';
import { motion } from 'motion/react';
import { CloudDivider } from '../ui/CloudDivider';
import { LiquidSilkHero } from './HeroCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-bg">
      <LiquidSilkHero />
      
      <div className="calligraphy-watermark top-10 left-10">傳承</div>
      <div className="calligraphy-watermark bottom-10 right-10">團結</div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-gold-accent text-sm uppercase tracking-[0.5em] mb-4 font-sans font-semibold">
            Perhimpunan Tionghoa Indonesia
          </h2>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Heritage <span className="text-gold-accent italic">& Unity</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/60 text-lg font-light leading-relaxed mb-10">
            Preserving the rich tapestry of Chinese Indonesian culture through education, community, and modern innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="mercury-fill px-10 py-4 border border-gold-accent text-gold-accent font-semibold tracking-widest uppercase text-xs transition-all hover:jade-glow">
              Our Chronicles
            </button>
            <button className="px-10 py-4 text-white/80 hover:text-gold-accent transition-colors font-semibold tracking-widest uppercase text-xs">
              Join the Association
            </button>
          </div>
        </motion.div>
      </div>

      <CloudDivider className="absolute bottom-0 w-full rotate-180" />
    </section>
  );
};
