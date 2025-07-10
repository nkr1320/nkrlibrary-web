import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@mui/material';
import { Visibility, Psychology, Handshake } from '@mui/icons-material';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ElasticText } from '@/components/ui/elastic-text';
import { ParticleSystem } from '@/components/ui/particle-system';
import { useMotionPreferences } from '@/hooks/use-motion-preferences';
import { useTranslation } from 'react-i18next';

const VisionSection = () => {
  const { t } = useTranslation();
  const { prefersReducedMotion } = useMotionPreferences();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const visionItems = [
    {
      title: t('vision.ourVisionTitle'),
      icon: Visibility,
      content: t('vision.ourVisionContent'),
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: t('vision.ourExpertiseTitle'), 
      icon: Psychology,
      content: t('vision.ourExpertiseContent'),
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      title: t('vision.ourApproachTitle'),
      icon: Handshake,
      content: t('vision.ourApproachContent'),
      gradient: "from-accent/20 to-secondary/20"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-secondary/20 to-accent/10 relative overflow-hidden">
      <ParticleSystem 
        count={10} 
        colors={['bg-primary/6', 'bg-accent/6']}
        size={2}
        speed={6}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              <ElasticText delay={0.3}>{t('vision.header')}</ElasticText>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t('vision.subtitle')}
            </p>
          </motion.div>

          {/* Vision Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {visionItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="h-full"
              >
                <MagneticCard 
                  intensity={0.25}
                  scale={1.06}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ 
                      rotateY: prefersReducedMotion ? 0 : 10,
                      rotateX: prefersReducedMotion ? 0 : 5,
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: 1000
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Card className={`h-full border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm`}>
                      <CardContent className="p-6 sm:p-8 h-full flex flex-col text-center">
                        <motion.div 
                          className="mb-6"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: prefersReducedMotion ? 0 : 360,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="inline-flex p-4 bg-primary/10 rounded-2xl">
                            <item.icon className="text-primary text-3xl" />
                          </div>
                        </motion.div>
                        
                        <h3 className="font-bold text-lg sm:text-xl mb-4 text-foreground">
                          <ElasticText delay={0.1 * index}>{item.title}</ElasticText>
                        </h3>
                        
                        <blockquote className="text-muted-foreground leading-relaxed italic text-base sm:text-lg flex-grow">
                          "{item.content}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </motion.div>
                </MagneticCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;