import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@mui/material';
import { Computer, Apps, School, PhotoCamera } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { useMotionPreferences, getAnimationConfig } from '@/hooks/use-motion-preferences';
import { useTranslation } from 'react-i18next';

const SoftwareSkills = () => {
  const { t } = useTranslation();
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
      title: t('software.computerBasicsTitle'),
      icon: Computer,
      description: t('software.computerBasicsDesc'),
      topics: [
        t('software.computerBasicsTopic1'),
        t('software.computerBasicsTopic2'),
        t('software.computerBasicsTopic3'),
        t('software.computerBasicsTopic4'),
        t('software.computerBasicsTopic5'),
      ],
      path: "/software/computer-basics",
      available: true
    },
    {
      title: t('software.installationsTitle'),
      icon: Apps,
      description: t('software.installationsDesc'),
      topics: [
        t('software.installationsTopic1'),
        t('software.installationsTopic2'),
        t('software.installationsTopic3'),
        t('software.installationsTopic4'),
        t('software.installationsTopic5'),
      ],
      path: "/software/installations",
      available: true
    },
    {
      title: t('software.coursesTitle'),
      icon: School,
      description: t('software.coursesDesc'),
      topics: [
        t('software.coursesTopic1'),
        t('software.coursesTopic2'),
        t('software.coursesTopic3'),
      ],
      path: "/software/courses",
      available: true
    },
    {
      title: t('software.photoshopTitle'),
      icon: PhotoCamera,
      description: t('software.photoshopDesc'),
      topics: [
        t('software.photoshopTopic1'),
        t('software.photoshopTopic2'),
        t('software.photoshopTopic3'),
      ],
      path: "/software/photoshop",
      available: false
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-card to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 px-2 sm:px-4">{t('software.header')}</h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
              {t('software.subtitle')}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0"
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
                              {t('software.inDevelopment')}
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
                              {t('software.more', { count: skill.topics.length - 3 })}
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
                        {skill.available ? t('software.learnNow') : t('software.getNotified')}
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