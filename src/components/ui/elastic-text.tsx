import React from "react";
import { motion } from "framer-motion";
import {
  useMotionPreferences,
  getSpringConfig,
} from "@/hooks/use-motion-preferences";

interface ElasticTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const ElasticText: React.FC<ElasticTextProps> = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}) => {
  const { prefersReducedMotion } = useMotionPreferences();

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  const letters = children.split("");

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: delay + index * staggerDelay,
            type: "spring" as const,
            stiffness: 300,
            damping: 20,
          }}
          whileHover={{
            y: -5,
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};
