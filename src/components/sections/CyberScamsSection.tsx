import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@mui/material';
import { Security, Warning, PhoneAndroid, Email, VpnKey, BugReport, Report, SentimentVeryDissatisfied } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ElasticText } from '@/components/ui/elastic-text';
import { ParticleSystem } from '@/components/ui/particle-system';
import { useMotionPreferences } from '@/hooks/use-motion-preferences';

const CyberScamsSection = () => {
  const { prefersReducedMotion } = useMotionPreferences();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const scamTypes = [
    {
      title: "Data Leaks",
      icon: VpnKey,
      description: "How scammers steal and misuse your personal data",
      severity: "high",
      path: "/cyberscams/data-leaks"
    },
    {
      title: "Honey Trap",
      icon: SentimentVeryDissatisfied,
      description: "Fake romantic scams targeting emotions",
      severity: "high",
      path: "/cyberscams/honey-trap"
    },
    {
      title: "Phishing",
      icon: Email,
      description: "Fraudulent login pages and fake emails",
      severity: "critical",
      path: "/cyberscams/phishing"
    },
    {
      title: "Cyber Attacks",
      icon: BugReport,
      description: "Malware, trojans, and system attacks",
      severity: "critical",
      path: "/cyberscams/cyber-attacks"
    },
    {
      title: "Sextortion",
      icon: Warning,
      description: "Blackmail through compromising content",
      severity: "high",
      path: "/cyberscams/sextortion"
    },
    {
      title: "Stranger Calls",
      icon: PhoneAndroid,
      description: "Unknown number scams and fraud calls",
      severity: "medium",
      path: "/cyberscams/stranger-calls"
    },
    {
      title: "GB WhatsApp",
      icon: PhoneAndroid,
      description: "Risks of unofficial messaging apps",
      severity: "medium",
      path: "/cyberscams/gb-whatsapp"
    },
    {
      title: "Cyberbullying",
      icon: Report,
      description: "Online harassment and digital abuse",
      severity: "high",
      path: "/cyberscams/cyberbullying"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-destructive';
      case 'high': return 'text-orange-500 dark:text-orange-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-destructive/5 to-accent/10 relative overflow-hidden">
      {/* Enhanced Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-accent/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />
      
      <ParticleSystem 
        count={25} 
        colors={['bg-destructive/15', 'bg-primary/15', 'bg-accent/15']}
        size={3}
        speed={8}
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
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 px-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Security className="text-3xl sm:text-4xl text-primary mb-2 sm:mb-0 sm:mr-3" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                <ElasticText delay={0.4}>CyberScams & Awareness</ElasticText>
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Understand and stay protected from the latest digital fraud. Knowledge is your best defense.
            </p>
          </motion.div>

          {/* Scams Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {scamTypes.map((scam, index) => (
              <motion.div
                key={scam.title}
                variants={cardVariants}
                className="h-full group"
              >
                <MagneticCard 
                  intensity={0.2}
                  scale={1.06}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ 
                      rotateX: prefersReducedMotion ? 0 : 5,
                      rotateY: prefersReducedMotion ? 0 : 8,
                      z: 30
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: 800
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Card className="h-full border border-border hover:border-destructive/30 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm cursor-pointer">
                      <CardContent 
                        className="p-4 sm:p-6 h-full flex flex-col"
                        component={Link}
                        to={scam.path}
                        sx={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div className="flex items-center justify-between mb-4">
                           <motion.div 
                            className="p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors"
                            whileHover={{ 
                              scale: 1.2,
                              rotate: prefersReducedMotion ? 0 : 360,
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            <scam.icon className="text-destructive text-2xl" />
                            <motion.div
                              className="absolute inset-0 bg-destructive/20 rounded-lg"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                          <motion.span 
                            className={`text-xs font-medium px-2 py-1 rounded-full ${getSeverityColor(scam.severity)} bg-accent`}
                            animate={{
                              scale: scam.severity === 'critical' ? [1, 1.1, 1] : 1,
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: scam.severity === 'critical' ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                          >
                            {scam.severity.toUpperCase()}
                          </motion.span>
                        </div>
                        
                        <h3 className="font-semibold text-base sm:text-lg mb-3 group-hover:text-primary transition-colors">
                          <ElasticText delay={0.1 * index}>{scam.title}</ElasticText>
                        </h3>
                        
                        <p className="text-muted-foreground text-xs sm:text-sm flex-grow leading-relaxed">
                          {scam.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </MagneticCard>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={cardVariants}
            className="text-center"
          >
            <MagneticCard intensity={0.3} scale={1.08}>
              <Button
                component={Link}
                to="/cyberscams"
                variant="contained"
                size="large"
                startIcon={
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Security />
                  </motion.div>
                }
                sx={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                  color: 'hsl(var(--primary-foreground))',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    filter: 'brightness(0.9)',
                    transform: 'translateY(-3px)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More About Digital Safety
              </Button>
            </MagneticCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberScamsSection;