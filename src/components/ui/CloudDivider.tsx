import React from 'react';
import { motion } from 'motion/react';

export const CloudDivider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gold-accent/20">
        <path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1200,0 1200,0 L1200,120 L0,120 Z" />
        <path d="M0,30 C200,120 400,20 600,80 C800,140 1000,40 1200,100 L1200,120 L0,120 Z" opacity="0.5" />
      </svg>
    </div>
  );
};
