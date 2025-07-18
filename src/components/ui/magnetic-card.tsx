import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMotionPreferences } from "@/hooks/use-motion-preferences";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  scale?: number;
}

export const MagneticCard: React.FC<MagneticCardProps> = ({
  children,
  className = "",
  intensity = 0.3,
  scale = 1.02,
}) => {
  const { prefersReducedMotion } = useMotionPreferences();
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 400, damping: 35 });
  const y = useSpring(0, { stiffness: 400, damping: 35 });
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={{ scale }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.15,
      }}
    >
      <motion.div
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
