import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, TextField, Button, Alert } from '@mui/material';
import { Email, CheckCircle } from '@mui/icons-material';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ElasticText } from '@/components/ui/elastic-text';
import { ParticleSystem } from '@/components/ui/particle-system';
import { useMotionPreferences } from '@/hooks/use-motion-preferences';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const { prefersReducedMotion } = useMotionPreferences();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const eduDomains = ['.edu', '.ac.in', '.edu.in'];
    return eduDomains.some(domain => email.toLowerCase().includes(domain));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage(t('newsletter.errorNoEmail'));
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage(t('newsletter.errorDomain'));
      return;
    }

    // Simulate success
    setStatus('success');
    setMessage(t('newsletter.success'));
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-secondary/10 to-accent/10 relative overflow-hidden">
      <ParticleSystem 
        count={6} 
        colors={['bg-primary/8', 'bg-accent/8']}
        size={2}
        speed={4}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MagneticCard intensity={0.25} scale={1.03}>
            <motion.div
              whileHover={{ 
                rotateX: prefersReducedMotion ? 0 : 5,
                scale: 1.01
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
              <Card className="border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto px-4">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6"
                >
                  <motion.div 
                    className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 relative"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Email className="text-primary text-3xl" />
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                >
                  <ElasticText delay={0.5}>{t('newsletter.headline')}</ElasticText>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8"
                >
                  {t('newsletter.subtitle')}
                  <br />
                  <span className="text-sm">{t('newsletter.note')}</span>
                </motion.p>

                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6"
                  >
                    <Alert 
                      severity={status === 'success' ? 'success' : 'error'}
                      icon={status === 'success' ? <CheckCircle /> : undefined}
                    >
                      {message}
                    </Alert>
                  </motion.div>
                )}

                <motion.form
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
                >
                  <TextField
                    type="email"
                    placeholder={t('newsletter.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    className="flex-1"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        background: 'hsl(var(--background))',
                        '&:hover fieldset': {
                          borderColor: 'hsl(var(--primary))',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'hsl(var(--primary))',
                        },
                      },
                    }}
                  />
                  
                  <MagneticCard intensity={0.15} scale={1.05}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'hsl(var(--primary))',
                        color: 'hsl(var(--primary-foreground))',
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          background: 'hsl(var(--primary))',
                          filter: 'brightness(0.9)',
                          transform: 'translateY(-2px)',
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
                      {t('newsletter.subscribe')}
                    </Button>
                  </MagneticCard>
                </motion.form>
              </div>
                </CardContent>
              </Card>
            </motion.div>
          </MagneticCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;