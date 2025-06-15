import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@mui/material';
import { Computer, Apps, School, PhotoCamera } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { useMotionPreferences, getAnimationConfig } from '@/hooks/use-motion-preferences';

const SoftwareSkills = () => {
  const { prefersReducedMotion } = useMotionPreferences();
  
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 40,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
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

  const skillCards = [
    {
      title: "Computer Basics",
      icon: Computer,
      description: "Master fundamental computer skills",
      topics: ["Adjust Display Settings", "Uninstall Programs", "Windows Themes", "Internet Speed in Taskbar", "Windows 11 Features"],
      path: "/software/computer-basics",
      available: true
    },
    {
      title: "Software Installations",
      icon: Apps,
      description: "Install and configure software correctly",
      topics: ["Git Installation", "Node.js", "React JS", "Windows Setup", "Bootstrap"],
      path: "/software/installations",
      available: true
    },
    {
      title: "All Courses",
      icon: School,
      description: "Comprehensive learning paths",
      topics: ["Project-based Learning", "Interactive Tutorials", "Real-world Examples"],
      path: "/software/courses",
      available: true
    },
    {
      title: "Photoshop",
      icon: PhotoCamera,
      description: "Design and photo editing",
      topics: ["Logo Designing", "Photo Editing", "UI Design"],
      path: "/software/photoshop",
      available: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-card to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">Software</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Learn top IT software from scratch.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {skillCards.map((skill, index) => (
              <MagneticCard 
                key={skill.title} 
                className="h-full"
                intensity={0.15}
                scale={1.05}
              >
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    scale: prefersReducedMotion ? 1 : 1.02, 
                    y: prefersReducedMotion ? 0 : -12,
                    rotateY: prefersReducedMotion ? 0 : 5,
                    rotateX: prefersReducedMotion ? 0 : 5,
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="h-full group"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                >
                  <Card className="h-full border border-border group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 ease-out backdrop-blur-sm bg-card/95">
                    <CardContent className="p-4 sm:p-5 md:p-6 h-full flex flex-col relative overflow-hidden">
                      {/* Animated gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, rotate: 45 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                       />
                      
                      <div className="flex items-center space-x-3 mb-4 relative z-10">
                        <div className="p-3 bg-primary/10 group-hover:bg-primary/15 rounded-lg transition-colors duration-300">
                          <skill.icon className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors duration-300">{skill.title}</h3>
                          {!skill.available && (
                            <span className="text-xs text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 sm:py-1 rounded border border-orange-200 dark:border-orange-800">
                              In Development
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 sm:mb-4 flex-grow group-hover:text-foreground/80 transition-colors duration-300 text-sm sm:text-base relative z-10">
                        {skill.description}
                      </p>
                      
                      <div className="mb-4 sm:mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-1.5">
                          {skill.topics.slice(0, 3).map((topic, idx) => (
                            <li key={idx} className="flex items-center transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:bg-primary/80"></span>
                              {topic}
                            </li>
                          ))}
                          {skill.topics.length > 3 && (
                            <li className="text-primary/70 group-hover:text-primary font-medium transition-colors duration-300">
                              +{skill.topics.length - 3} more...
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <Button
                        component={Link}
                        to={skill.available ? skill.path : '#'}
                        variant={skill.available ? "contained" : "outlined"}
                        fullWidth
                        disabled={!skill.available}
                        sx={{
                          mt: 'auto',
                          borderRadius: 2,
                          textTransform: 'none',
                          background: skill.available ? 'hsl(var(--primary))' : 'transparent',
                          color: skill.available ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted-foreground))',
                          '&:hover': {
                            background: skill.available ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                            filter: skill.available ? 'brightness(0.9)' : 'none',
                          },
                        }}
                      >
                        {skill.available ? 'Learn Now' : 'Get Notified'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </MagneticCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareSkills;