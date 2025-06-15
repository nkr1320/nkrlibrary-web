import { useState, useEffect } from 'react';

export const useHeaderAnimation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(8px)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(40px)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
  };

  return { isScrolled, headerVariants };
};