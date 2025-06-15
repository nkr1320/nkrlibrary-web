import React from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Card, CardContent, Button } from '@mui/material';
import { Email, ArrowBack, CheckCircle, Warning, Shield } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ElasticText } from '@/components/ui/elastic-text';
import { ParticleSystem } from '@/components/ui/particle-system';

const Phishing = () => {
  const preventionTips = [
    "Always verify sender email addresses carefully",
    "Don't click suspicious links or attachments",
    "Type URLs directly instead of clicking links",
    "Look for HTTPS and security certificates",
    "Use email filters and spam protection",
    "Keep software and browsers updated",
    "Enable two-factor authentication",
    "Be skeptical of urgent requests"
  ];

  const warningSignsData = [
    "Urgent requests for personal information",
    "Generic greetings like 'Dear Customer'",
    "Spelling and grammar errors",
    "Mismatched URLs and sender addresses",
    "Requests to 'verify' account information",
    "Threats of account closure or suspension",
    "Offers that seem too good to be true",
    "Unexpected attachments or downloads"
  ];

  const responseSteps = [
    "Don't click any links or download attachments",
    "Report the phishing email to your email provider",
    "Delete the suspicious email immediately",
    "If you clicked a link, change passwords immediately",
    "Run antivirus scans on your device",
    "Monitor accounts for unauthorized access"
  ];

  const phishingTypes = [
    {
      title: "Email Phishing",
      description: "Fake emails impersonating legitimate companies to steal credentials"
    },
    {
      title: "Spear Phishing",
      description: "Targeted attacks using personal information about the victim"
    },
    {
      title: "Whaling",
      description: "High-value targets like executives and company leaders"
    },
    {
      title: "Smishing",
      description: "Phishing attacks via SMS text messages"
    },
    {
      title: "Vishing",
      description: "Voice phishing through phone calls"
    },
    {
      title: "Website Phishing",
      description: "Fake websites that look like legitimate login pages"
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Phishing Attack Protection - NKR Library</title>
        <meta name="description" content="Learn to identify and protect yourself from phishing attacks. Complete guide on email security and fraud prevention." />
      </Helmet>

      <div className="min-h-screen py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-destructive/5 to-accent/10 relative overflow-hidden">
        <ParticleSystem 
          count={25} 
          colors={['bg-destructive/15', 'bg-primary/15', 'bg-accent/15']}
          size={4}
          speed={6}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Button
                component={Link}
                to="/cyberscams"
                startIcon={<ArrowBack />}
                variant="outlined"
                className="mb-6"
                sx={{
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--muted-foreground))',
                  '&:hover': {
                    borderColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary))',
                  }
                }}
              >
                Back to Digital Safety
              </Button>
              
              <div className="flex items-center justify-center mb-6">
                <Email className="text-4xl sm:text-5xl text-destructive mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>Phishing Attacks</ElasticText>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Protect yourself from fraudulent emails, websites, and messages designed to steal your credentials.
              </p>
            </motion.div>

            {/* Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <Card className="border border-destructive/30 bg-destructive/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-destructive">What Are Phishing Attacks?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Phishing attacks use fake emails, websites, and messages that appear to come from legitimate sources 
                    to trick you into revealing sensitive information like passwords, credit card numbers, or personal data.
                  </p>
                  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {phishingTypes.map((type, index) => (
                      <motion.div
                        key={type.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-card rounded-lg"
                      >
                        <h3 className="font-semibold mb-2 text-sm">{type.title}</h3>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Prevention Tips */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <Card className="border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="text-green-500 text-3xl mr-3" />
                    <h2 className="text-2xl font-bold">Prevention Strategies</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {preventionTips.map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                      >
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{tip}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Warning Signs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <Card className="border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Warning className="text-orange-500 text-3xl mr-3" />
                    <h2 className="text-2xl font-bold">Red Flags to Identify</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {warningSignsData.map((sign, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-3 bg-orange-500/10 rounded-lg border border-orange-500/20"
                      >
                        <Warning className="text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{sign}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Steps */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <Card className="border border-destructive/30 bg-destructive/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-destructive">If You Receive a Phishing Email</h2>
                  <div className="space-y-4">
                    {responseSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start p-4 bg-card rounded-lg"
                      >
                        <span className="bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="font-medium">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center"
            >
              <Card className="border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you think you've fallen victim to a phishing attack, act quickly to secure your accounts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <MagneticCard intensity={0.2} scale={1.05}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        size="large"
                        sx={{
                          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                          color: 'hsl(var(--primary-foreground))',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                        }}
                      >
                        Get Emergency Help
                      </Button>
                    </MagneticCard>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Phishing;