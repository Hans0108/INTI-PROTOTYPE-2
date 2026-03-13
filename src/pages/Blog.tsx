import React from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/layout/Header';
import { CloudDivider } from '../components/ui/CloudDivider';
import { Scroll, Tag, Calendar, User } from 'lucide-react';

const CATEGORIES = ['Culture', 'Heritage', 'Community', 'History', 'Philanthropy'];

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-bg pt-32 pb-24">
      <Header />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar - Ink Wash Style */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h4 className="text-gold-accent text-xs uppercase tracking-[0.3em] mb-6 font-bold border-b border-gold-accent/20 pb-2">
                Archives
              </h4>
              <ul className="space-y-4">
                {CATEGORIES.map((cat) => (
                  <li key={cat} className="group cursor-pointer">
                    <div className="flex items-center gap-3 text-white/50 group-hover:text-jade-green transition-colors">
                      <div className="w-2 h-2 rounded-full bg-transparent border border-jade-green/30 group-hover:bg-jade-green transition-all" />
                      <span className="text-sm font-light">{cat}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-imperial-red/5 border border-imperial-red/20 rounded-sm">
              <h4 className="text-imperial-red text-xs uppercase tracking-widest mb-4 font-bold">Newsletter</h4>
              <p className="text-white/40 text-xs mb-4">Receive heritage insights directly in your scroll.</p>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white focus:outline-none focus:border-gold-accent transition-colors"
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-20">
            {[1, 2, 3].map((i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-72 h-48 bg-white/5 border border-white/10 rounded-sm overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                      <Scroll size={64} className="text-gold-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-[10px] text-gold-accent/60 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} /> March 12, 2026</span>
                      <span className="flex items-center gap-1"><User size={12} /> Heritage Board</span>
                    </div>
                    <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-gold-accent transition-colors">
                      Preserving the Pecinan Districts: A Vision for Urban Heritage
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                      Exploring the architectural significance of historical shophouses and the importance of maintaining the cultural identity of Chinese Indonesian districts in rapidly developing cities...
                    </p>
                    <button className="flex items-center gap-3 text-gold-accent text-xs uppercase tracking-widest font-bold group/btn">
                      Read Full Scroll 
                      <div className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center group-hover/btn:bg-gold-accent group-hover/btn:text-slate-bg transition-all relative">
                        <div className="absolute inset-0 bg-imperial-red/20 rounded-full scale-0 group-hover/btn:scale-100 transition-transform" />
                        <span className="relative z-10">印</span>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </main>
        </div>
      </div>

      <CloudDivider className="mt-24 opacity-30" />
    </div>
  );
};

