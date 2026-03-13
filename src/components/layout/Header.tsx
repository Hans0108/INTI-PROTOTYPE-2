import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, Search, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-header px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-gold-accent rounded-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-slate-bg font-serif font-bold text-xl">帝</span>
          </div>
          <span className="text-white font-serif text-xl tracking-widest hidden sm:block">
            HERITAGE <span className="text-gold-accent">INTI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-white/60 hover:text-gold-accent transition-colors text-[10px] uppercase tracking-[0.3em] font-bold">Heritage</Link>
          <Link to="/blog" className="text-white/60 hover:text-gold-accent transition-colors text-[10px] uppercase tracking-[0.3em] font-bold">Chronicles</Link>
          <Link to="/contact" className="text-white/60 hover:text-gold-accent transition-colors text-[10px] uppercase tracking-[0.3em] font-bold">Contact</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-gold-accent transition-colors">
            <Search size={18} />
          </button>
          <button className="text-white/60 hover:text-gold-accent transition-colors">
            <Globe size={18} />
          </button>
          <button className="md:hidden text-white/60 hover:text-gold-accent transition-colors">
            <Menu size={20} />
          </button>
          <button className="hidden md:block mercury-fill px-6 py-2 border border-gold-accent text-gold-accent text-[10px] uppercase tracking-widest font-bold">
            Get Access
          </button>
        </div>
      </div>
    </header>
  );
};

