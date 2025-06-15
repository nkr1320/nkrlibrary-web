import React from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Card, CardContent, Button, Chip } from '@mui/material';
import { 
  Security, Warning, PhoneAndroid, Email, VpnKey, BugReport, Report, 
  SentimentVeryDissatisfied, Shield, CheckCircle, ArrowBack, YouTube,
  Phone, Computer, CreditCard
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ElasticText } from '@/components/ui/elastic-text';
import { ParticleSystem } from '@/components/ui/particle-system';
import { useMotionPreferences } from '@/hooks/use-motion-preferences';

const CyberScams = () => {
  const { prefersReducedMotion } = useMotionPreferences();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const scamDetails = [
    {
      title: "Data Leaks & Privacy Breaches",
      icon: VpnKey,
      severity: "high",
      description: "Personal information theft through data breaches, unsecured databases, and identity fraud.",
      prevention: [
        "Use strong, unique passwords for each account",
        "Enable two-factor authentication (2FA)",
        "Regularly check your credit reports",
        "Be cautious about sharing personal information online"
      ],
      warning_signs: [
        "Unexpected account notifications",
        "Unknown charges on bank statements",
        "Calls about accounts you didn't open"
      ]
    },
    {
      title: "Honey Trap Scams",
      icon: SentimentVeryDissatisfied,
      severity: "high",
      description: "Fraudsters create fake romantic relationships to exploit emotions and steal money or information.",
      prevention: [
        "Never send money to someone you've only met online",
        "Be skeptical of too-good-to-be-true romantic advances",
        "Do reverse image searches on profile photos",
        "Video call before meeting in person"
      ],
      warning_signs: [
        "Refuses to video call or meet in person",
        "Asks for money for emergencies",
        "Professes love very quickly"
      ]
    },
    {
      title: "Phishing Attacks",
      icon: Email,
      severity: "critical",
      description: "Fake emails, websites, and messages designed to steal login credentials and sensitive information.",
      prevention: [
        "Always verify sender email addresses",
        "Don't click suspicious links or attachments",
        "Type URLs directly instead of clicking links",
        "Look for HTTPS and security certificates"
      ],
      warning_signs: [
        "Urgent requests for personal information",
        "Generic greetings like 'Dear Customer'",
        "Spelling and grammar errors",
        "Mismatched URLs and sender addresses"
      ]
    },
    {
      title: "Cyber Attacks & Malware",
      icon: BugReport,
      severity: "critical",
      description: "Malicious software, ransomware, and system attacks that can damage devices and steal data.",
      prevention: [
        "Keep software and operating systems updated",
        "Use reputable antivirus software",
        "Don't download from untrusted sources",
        "Regular system backups"
      ],
      warning_signs: [
        "Slow computer performance",
        "Unexpected pop-ups or ads",
        "Programs opening by themselves",
        "Unusual network activity"
      ]
    },
    {
      title: "Sextortion & Blackmail",
      icon: Warning,
      severity: "high",
      description: "Criminals threaten to share intimate content unless victims pay money or provide more content.",
      prevention: [
        "Never share intimate content with strangers",
        "Be cautious about webcam usage",
        "Cover webcams when not in use",
        "Report threats immediately"
      ],
      warning_signs: [
        "Threats to share personal content",
        "Demands for money or more content",
        "Claims to have hacked your devices"
      ]
    },
    {
      title: "Fraudulent Phone Calls",
      icon: PhoneAndroid,
      severity: "medium",
      description: "Scam calls impersonating banks, government agencies, or tech support to steal information or money.",
      prevention: [
        "Never give personal info over the phone",
        "Verify caller identity independently",
        "Don't trust caller ID completely",
        "Hang up and call back official numbers"
      ],
      warning_signs: [
        "Pressure to act immediately",
        "Requests for sensitive information",
        "Threats of legal action",
        "Offers that seem too good to be true"
      ]
    }
  ];

  const securityChecklist = [
    "Use strong, unique passwords for all accounts",
    "Enable two-factor authentication (2FA) everywhere possible",
    "Keep all software and devices updated",
    "Use reputable antivirus software",
    "Be cautious with public Wi-Fi",
    "Regularly review bank and credit card statements",
    "Backup important data regularly",
    "Be skeptical of unsolicited communications",
    "Verify requests for personal information",
    "Report suspicious activities immediately"
  ];

  const emergencySteps = [
    {
      title: "If You've Been Scammed",
      steps: [
        "Stop all communication with the scammer",
        "Change passwords for affected accounts",
        "Contact your bank and credit card companies",
        "Report to local police and online fraud centers",
        "Monitor your accounts closely"
      ]
    },
    {
      title: "If Your Data is Compromised",
      steps: [
        "Change all passwords immediately",
        "Enable 2FA on all accounts",
        "Contact credit reporting agencies",
        "Monitor credit reports regularly",
        "Consider identity theft protection services"
      ]
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

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-destructive/10';
      case 'high': return 'bg-orange-500/10';
      case 'medium': return 'bg-yellow-600/10';
      default: return 'bg-muted';
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Digital Safety & Cyber Scam Awareness - NKR Library</title>
        <meta name="description" content="Comprehensive guide to staying safe online. Learn about cyber scams, prevention strategies, and emergency response procedures from NKR Library." />
        <meta name="keywords" content="cyber security, digital safety, scam awareness, phishing, malware, online fraud, data protection" />
      </Helmet>

      <div className="min-h-screen py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-destructive/5 to-accent/10 relative overflow-hidden">
        {/* Background Effects */}
        <ParticleSystem 
          count={30} 
          colors={['bg-destructive/15', 'bg-primary/15', 'bg-accent/15']}
          size={4}
          speed={6}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Button
                  component={Link}
                  to="/"
                  startIcon={<ArrowBack />}
                  variant="outlined"
                  className="mb-4"
                  sx={{
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--muted-foreground))',
                    '&:hover': {
                      borderColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary))',
                    }
                  }}
                >
                  Back to Home
                </Button>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Shield className="text-4xl sm:text-5xl text-primary mr-4" />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>Digital Safety Guide</ElasticText>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stay protected in the digital world. Learn to identify, prevent, and respond to cyber threats with our comprehensive safety guide.
              </p>
            </motion.div>

            {/* Security Checklist */}
            <motion.div variants={itemVariants} className="mb-16">
              <Card className="border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="text-green-500 text-3xl mr-3" />
                    <h2 className="text-2xl font-bold">Essential Security Checklist</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityChecklist.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                      >
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Detailed Scam Information */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                <ElasticText delay={0.2}>Common Cyber Threats</ElasticText>
              </h2>
              
              <div className="grid gap-8">
                {scamDetails.map((scam, index) => (
                  <motion.div
                    key={scam.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <MagneticCard intensity={0.15} scale={1.02}>
                      <Card className="border border-border hover:border-destructive/30 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Icon and Title */}
                            <div className="flex items-start gap-4 lg:w-1/3">
                              <motion.div 
                                className={`p-4 ${getSeverityBg(scam.severity)} rounded-xl group-hover:scale-110 transition-transform`}
                                whileHover={{ rotate: prefersReducedMotion ? 0 : 360 }}
                                transition={{ duration: 0.8 }}
                              >
                                <scam.icon className={`text-3xl ${getSeverityColor(scam.severity)}`} />
                              </motion.div>
                              <div>
                                <h3 className="text-xl font-bold mb-2">{scam.title}</h3>
                                <Chip 
                                  label={scam.severity.toUpperCase()}
                                  size="small"
                                  className={`${getSeverityColor(scam.severity)} ${getSeverityBg(scam.severity)}`}
                                />
                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                  {scam.description}
                                </p>
                              </div>
                            </div>

                            {/* Prevention and Warning Signs */}
                            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center">
                                  <Shield className="mr-2" />
                                  Prevention Tips
                                </h4>
                                <ul className="space-y-2">
                                  {scam.prevention.map((tip, tipIndex) => (
                                    <li key={tipIndex} className="flex items-start text-sm">
                                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0 text-xs" />
                                      {tip}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400 flex items-center">
                                  <Warning className="mr-2" />
                                  Warning Signs
                                </h4>
                                <ul className="space-y-2">
                                  {scam.warning_signs.map((sign, signIndex) => (
                                    <li key={signIndex} className="flex items-start text-sm">
                                      <Warning className="text-orange-500 mr-2 mt-0.5 flex-shrink-0 text-xs" />
                                      {sign}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </MagneticCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Response */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                <ElasticText delay={0.3}>Emergency Response</ElasticText>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {emergencySteps.map((emergency, index) => (
                  <Card key={index} className="border border-destructive/30 bg-destructive/5 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-destructive flex items-center">
                        <Report className="mr-2" />
                        {emergency.title}
                      </h3>
                      <ol className="space-y-3">
                        {emergency.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Contact and Resources */}
            <motion.div variants={itemVariants} className="text-center">
              <Card className="border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Need Help or Have Questions?</h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    If you've encountered a scam or need additional guidance on digital safety, don't hesitate to reach out or check our educational content.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <MagneticCard intensity={0.2} scale={1.05}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        size="large"
                        startIcon={<Email />}
                        sx={{
                          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                          color: 'hsl(var(--primary-foreground))',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            filter: 'brightness(0.9)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Contact Us
                      </Button>
                    </MagneticCard>
                    
                    <MagneticCard intensity={0.2} scale={1.05}>
                      <Button
                        component="a"
                        href="https://www.youtube.com/@nkrlibrary"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="large"
                        startIcon={<YouTube />}
                        sx={{
                          borderColor: 'hsl(var(--border))',
                          color: 'hsl(var(--foreground))',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary))',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Watch Tutorials
                      </Button>
                    </MagneticCard>
                  </div>

                  <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Emergency:</strong> If you're experiencing immediate financial fraud, contact your bank and local authorities immediately.
                    </p>
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

export default CyberScams;