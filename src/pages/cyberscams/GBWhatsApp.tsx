import React from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Card, CardContent, Button } from '@mui/material';
import { PhoneAndroid, ArrowBack, CheckCircle, Warning, Shield } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MagneticCard } from '@/components/ui/magnetic-card';
import { ElasticText } from '@/components/ui/elastic-text';
import { ParticleSystem } from '@/components/ui/particle-system';

const GBWhatsApp = () => {
  const preventionTips = [
    "Use only official WhatsApp from app stores",
    "Avoid downloading modified WhatsApp versions",
    "Keep your official WhatsApp updated",
    "Enable two-step verification",
    "Review app permissions regularly",
    "Don't share APK files with others",
    "Use official backup features only",
    "Report suspicious apps to authorities"
  ];

  const warningSignsData = [
    "App downloaded from unofficial sources",
    "Requests for excessive permissions",
    "Unusual data usage patterns",
    "Battery draining faster than normal",
    "Unexpected ads or pop-ups",
    "Messages not syncing properly",
    "Friends reporting strange messages from you",
    "Security warnings from your device"
  ];

  const responseSteps = [
    "Uninstall GB WhatsApp immediately",
    "Install official WhatsApp from app store",
    "Change your phone number's verification",
    "Review and revoke suspicious app permissions",
    "Scan your device for malware",
    "Inform contacts about potential security breach"
  ];

  const risks = [
    {
      title: "Data Theft",
      description: "Personal messages, photos, and contacts can be stolen and misused"
    },
    {
      title: "Account Ban",
      description: "WhatsApp may permanently ban accounts using unofficial versions"
    },
    {
      title: "Malware Infection",
      description: "Modified apps often contain hidden malicious software"
    },
    {
      title: "Privacy Violations",
      description: "No guarantee that your private conversations remain private"
    },
    {
      title: "Financial Fraud",
      description: "Scammers can access banking apps and financial information"
    },
    {
      title: "Identity Theft",
      description: "Personal information can be used to impersonate you online"
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>GB WhatsApp & Unofficial App Risks - NKR Library</title>
        <meta name="description" content="Learn about the security risks of GB WhatsApp and other unofficial messaging apps. Complete guide on safe messaging practices." />
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
                <PhoneAndroid className="text-4xl sm:text-5xl text-destructive mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>GB WhatsApp Risks</ElasticText>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Understand the serious security risks of using unofficial WhatsApp modifications and protect your data.
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
                  <h2 className="text-2xl font-bold mb-4 text-destructive">Why GB WhatsApp is Dangerous</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    GB WhatsApp and similar unofficial apps may offer extra features, but they come with serious security risks. 
                    These modified apps are not developed by WhatsApp and can compromise your privacy, security, and device safety.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {risks.map((risk, index) => (
                      <motion.div
                        key={risk.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-card rounded-lg border border-destructive/20"
                      >
                        <h3 className="font-semibold mb-2 text-destructive">{risk.title}</h3>
                        <p className="text-sm text-muted-foreground">{risk.description}</p>
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
                    <h2 className="text-2xl font-bold">Safe Messaging Practices</h2>
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
                    <h2 className="text-2xl font-bold">Signs Your Device May Be Compromised</h2>
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
                  <h2 className="text-2xl font-bold mb-6 text-destructive">If You're Using GB WhatsApp</h2>
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

            {/* Alternative Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-16"
            >
              <Card className="border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold mb-4 text-primary">Safe Alternatives</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Instead of using unofficial apps, consider these safe alternatives for enhanced messaging features:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Official WhatsApp Business for business features</li>
                    <li>• Telegram for advanced messaging features</li>
                    <li>• Signal for enhanced privacy and security</li>
                    <li>• Official WhatsApp Web for desktop usage</li>
                  </ul>
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
                  <h2 className="text-2xl font-bold mb-4">Need Help Securing Your Device?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you think your device may be compromised, get help immediately to secure your accounts and data.
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
                        Get Security Help
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

export default GBWhatsApp;