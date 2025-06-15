import { useState, useEffect } from 'react';

export const useMotionPreferences = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { prefersReducedMotion };
};

export const getAnimationConfig = (prefersReducedMotion: boolean) => ({
  duration: prefersReducedMotion ? 0.1 : 0.6,
  ease: prefersReducedMotion ? "linear" : "easeOut",
  scale: prefersReducedMotion ? 1 : undefined,
  y: prefersReducedMotion ? 0 : undefined,
  opacity: prefersReducedMotion ? 1 : undefined,
});

export const getSpringConfig = (prefersReducedMotion: boolean) => ({
  type: prefersReducedMotion ? "tween" : "spring",
  stiffness: prefersReducedMotion ? 0 : 300,
  damping: prefersReducedMotion ? 0 : 20,
  duration: prefersReducedMotion ? 0.1 : undefined,
});