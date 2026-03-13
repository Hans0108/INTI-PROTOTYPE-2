import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
}

const PetalItem: React.FC<{ petal: Petal; scrollY: MotionValue<number> }> = ({ petal, scrollY }) => {
  const yOffset = useTransform(scrollY, [0, 5000], [0, 1000 * petal.speed]);
  
  return (
    <motion.div
      style={{
        left: `${petal.x}%`,
        top: `${petal.y}%`,
        y: yOffset,
        rotate: petal.rotation
      }}
      className="absolute opacity-20"
    >
      <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="#FFB7C5">
        <path d="M12,2C12,2 4,10 4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15C20,10 12,2 12,2Z" />
      </svg>
    </motion.div>
  );
};

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.5 + 0.2
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <PetalItem key={petal.id} petal={petal} scrollY={scrollY} />
      ))}
    </div>
  );
};
