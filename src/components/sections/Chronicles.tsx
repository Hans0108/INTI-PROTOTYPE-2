import React from 'react';
import { motion } from 'motion/react';
import { Scroll, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Evolution of Batik Pesisir",
    excerpt: "Exploring the cross-cultural influence of Chinese motifs in Indonesian textile art.",
    category: "Culture",
    date: "2024.03.12"
  },
  {
    id: 2,
    title: "Culinary Legacies: Peranakan Flavors",
    excerpt: "How traditional recipes became the soul of Indonesian street food culture.",
    category: "Heritage",
    date: "2024.03.10"
  },
  {
    id: 3,
    title: "Modern Diaspora Identity",
    excerpt: "Navigating the dual heritage in the age of global connectivity.",
    category: "Community",
    date: "2024.03.08"
  },
  {
    id: 4,
    title: "The Architecture of Shophouses",
    excerpt: "Preserving the historical urban landscape of Pecinan districts across the archipelago.",
    category: "History",
    date: "2024.03.05"
  }
];

export const Chronicles: React.FC = () => {
  return (
    <section className="py-24 bg-slate-bg overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-gold-accent text-sm uppercase tracking-[0.3em] mb-2 font-sans">The Chronicles</h2>
            <h3 className="text-4xl font-serif text-white">Cultural Insights & <span className="italic">Community Stories</span></h3>
          </div>
          <div className="hidden md:flex items-center gap-4 text-gold-accent/60 text-xs uppercase tracking-widest">
            Scroll to Unroll <Scroll size={16} />
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-12 px-4 md:px-[10%] gap-8 no-scrollbar scroll-smooth">
        {BLOG_POSTS.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-[300px] md:w-[400px] p-8 bg-white/5 backdrop-blur-md border border-gold-accent/20 rounded-sm relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Scroll size={80} className="text-gold-accent" />
            </div>
            
            <span className="text-jade-green text-[10px] uppercase tracking-widest font-bold mb-4 block">
              {post.category}
            </span>
            <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-accent transition-colors">
              {post.title}
            </h4>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-white/30 text-[10px] font-mono">{post.date}</span>
              <button className="flex items-center gap-2 text-gold-accent text-xs uppercase tracking-widest font-bold hover:gap-4 transition-all">
                Read More 
                <div className="w-8 h-8 rounded-full border border-gold-accent/30 flex items-center justify-center group-hover:bg-gold-accent group-hover:text-slate-bg transition-all">
                  <ArrowRight size={14} />
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
