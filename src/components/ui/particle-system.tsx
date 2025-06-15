import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMotionPreferences } from '@/hooks/use-motion-preferences';

interface ParticleSystemProps {
  count?: number;
  className?: string;
  colors?: string[];
  size?: number;
  speed?: number;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 12,
  className = '',
  colors = ['bg-primary/20', 'bg-accent/20', 'bg-secondary/20'],
  size = 3,
  speed = 8,
}) => {
  const { prefersReducedMotion } = useMotionPreferences();

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 4,
      duration: speed + Math.random() * 4,
      amplitude: 30 + Math.random() * 40,
    }));
  }, [count, colors, speed]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-${size} h-${size} ${particle.color} rounded-full`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, particle.amplitude, -particle.amplitude, 0],
            y: [0, -particle.amplitude, particle.amplitude, 0],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};