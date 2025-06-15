import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@mui/material';
import { PlayArrow, Web, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ParticleSystem } from '@/components/ui/particle-system';
import { ElasticText } from '@/components/ui/elastic-text';
import { useMotionPreferences, getAnimationConfig } from '@/hooks/use-motion-preferences';

const Hero = () => {
  const { prefersReducedMotion } = useMotionPreferences();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: getAnimationConfig(prefersReducedMotion).duration,
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-accent/5"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Advanced Particle System */}
      <ParticleSystem 
        count={prefersReducedMotion ? 0 : 15}
        colors={['bg-primary/10', 'bg-accent/10', 'bg-secondary/10']}
        speed={6}
      />
      
      {/* 3D Animated Background with parallax */}
      <motion.div
        animate={{
          backgroundPosition: prefersReducedMotion ? "0% 0%" : ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 25,
          ease: "linear",
          repeat: prefersReducedMotion ? 0 : Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 opacity-60"
        style={{
          background: "linear-gradient(45deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1), hsl(var(--secondary) / 0.1), hsl(var(--primary) / 0.1))",
          backgroundSize: "400% 400%",
          y: y1,
          opacity,
        }}
      />
      
      {/* Interactive gradient overlay */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="absolute inset-0 opacity-30"
        animate={{
          background: prefersReducedMotion ? "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)" : [
            "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, hsl(var(--secondary) / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 8,
          repeat: prefersReducedMotion ? 0 : Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Enhanced 3D Floating Elements with physics */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 overflow-hidden"
      >
        {!prefersReducedMotion && Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              y: [0, -20 - i * 5, 0],
              x: [0, 10 - i * 2, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 40 + i * 10, ease: "linear", repeat: Infinity },
              y: { duration: 6 + i * 2, ease: "easeInOut", repeat: Infinity },
              x: { duration: 8 + i * 1.5, ease: "easeInOut", repeat: Infinity },
              scale: { duration: 4 + i, ease: "easeInOut", repeat: Infinity },
            }}
            className={`absolute glass-heavy rounded-xl transform-gpu`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              transformStyle: 'preserve-3d',
            }}
            whileHover={{
              scale: 1.2,
              rotateY: 45,
              z: 50,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        style={{ y: y1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Enhanced Main Headline with 3D effect */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight perspective-1000"
            style={{
              textShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transformStyle: 'preserve-3d',
            }}
            whileHover={{
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <motion.span 
              className="text-foreground block"
              initial={{ rotateX: -20, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ElasticText delay={0.5}>Empower Yourself With</ElasticText>
            </motion.span>
            <br />
            <motion.span 
              className="text-primary block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              initial={{ rotateX: 20, opacity: 0 }}
              animate={{ 
                rotateX: 0, 
                opacity: 1,
                backgroundPosition: prefersReducedMotion ? '0% 50%' : ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                rotateX: { duration: 0.8, delay: 0.6 },
                opacity: { duration: 0.8, delay: 0.6 },
                backgroundPosition: {
                  duration: prefersReducedMotion ? 0 : 4,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "linear",
                },
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              <ElasticText delay={1}>Tech That Matters</ElasticText>
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
          >
            Master software, stay cyber-safe, and explore science with clarity.
          </motion.p>

          {/* Enhanced CTA Buttons with magnetic effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <MagneticCard intensity={0.2} scale={1.05}>
              <motion.div
                whileHover={{ 
                  scale: prefersReducedMotion ? 1 : 1.05,
                  y: prefersReducedMotion ? 0 : -5,
                  boxShadow: prefersReducedMotion ? "none" : "0 20px 40px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <Button
                  href="https://www.youtube.com/@nkrlibrary/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  endIcon={<ArrowForward />}
                  sx={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                    color: 'hsl(var(--primary-foreground))',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                      transform: 'translateY(-2px)',
                      '&::after': {
                        transform: 'translateX(100%)',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'transform 0.6s ease',
                    },
                  }}
                  aria-label="Watch tutorials on YouTube"
                >
                  Watch on YouTube
                </Button>
              </motion.div>
            </MagneticCard>

            <MagneticCard intensity={0.2} scale={1.05}>
              <motion.div
                whileHover={{ 
                  scale: prefersReducedMotion ? 1 : 1.05,
                  y: prefersReducedMotion ? 0 : -5,
                }}
                whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <Button
                  component={Link}
                  to="/courses"
                  variant="outlined"
                  size="large"
                  startIcon={<Web />}
                  sx={{
                    borderColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary))',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: 'hsl(var(--primary))',
                      background: 'hsl(var(--primary) / 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    },
                  }}
                  aria-label="Explore available courses"
                >
                  Explore Courses
                </Button>
              </motion.div>
            </MagneticCard>
          </motion.div>

          {/* Enhanced Stats with 3D hover effects */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16 px-4"
          >
            {[
              { number: "10K+", label: "Students Helped", icon: "👨‍🎓" },
              { number: "50+", label: "Free Websites Built", icon: "🌐" },
              { number: "100+", label: "Tech Tutorials", icon: "📚" },
            ].map((stat, index) => (
              <MagneticCard key={stat.label} intensity={0.1} scale={1.08}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: 1 + index * 0.15, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-center glass-card p-6 relative overflow-hidden group"
                  whileHover={{
                    rotateY: prefersReducedMotion ? 0 : 10,
                    rotateX: prefersReducedMotion ? 0 : 5,
                    z: prefersReducedMotion ? 0 : 50,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  
                  <motion.div 
                    className="text-3xl mb-2"
                    animate={{
                      rotateY: prefersReducedMotion ? 0 : [0, 360],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 10,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "linear",
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary relative z-10"
                    whileHover={{
                      scale: prefersReducedMotion ? 1 : 1.1,
                      textShadow: prefersReducedMotion ? "none" : "0 0 20px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-xs sm:text-sm text-muted-foreground mt-1 relative z-10"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </motion.div>
              </MagneticCard>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;