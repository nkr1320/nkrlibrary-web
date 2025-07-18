import React from "react";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AlertTriangle, ArrowLeft, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { ElasticText } from "@/components/ui/elastic-text";
import { ParticleSystem } from "@/components/ui/particle-system";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Sextortion = () => {
  const preventionTips = [
    "Never share intimate content with strangers",
    "Be cautious about webcam usage",
    "Cover webcams when not in use",
    "Don't engage with suspicious requests",
    "Use privacy settings on social media",
    "Be skeptical of modeling or job offers online",
    "Never provide personal information to strangers",
    "Trust your instincts about suspicious behavior",
  ];

  const warningSignsData = [
    "Threats to share personal content",
    "Demands for money or more content",
    "Claims to have hacked your devices",
    "Requests for intimate photos or videos",
    "Pressure to meet in person quickly",
    "Offers that seem too good to be true",
    "Requests for personal information",
    "Threats against family or friends",
  ];

  const responseSteps = [
    "Do not pay any money or provide more content",
    "Block and report the person immediately",
    "Document all communications and threats",
    "Report to local police and online authorities",
    "Secure all social media accounts",
    "Seek support from friends, family, or counselors",
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sextortion & Blackmail Protection - NKR Library</title>
        <meta
          name="description"
          content="Learn to protect yourself from sextortion and blackmail scams. Complete guide on prevention and response strategies for online threats."
        />
      </Helmet>

      <div className="min-h-screen py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-destructive/5 to-accent/10 relative overflow-hidden">
        <ParticleSystem
          count={25}
          colors={["bg-destructive/15", "bg-primary/15", "bg-accent/15"]}
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
                startIcon={<ArrowLeft />}
                variant="outlined"
                className="mb-6"
                sx={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--muted-foreground))",
                  "&:hover": {
                    borderColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary))",
                  },
                }}
              >
                Back to Digital Safety
              </Button>

              <div className="flex items-center justify-center mb-6">
                <AlertTriangle className="text-4xl sm:text-5xl text-destructive mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>Sextortion & Blackmail</ElasticText>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Protect yourself from threats and blackmail involving intimate
                content and personal information.
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
                  <h2 className="text-2xl font-bold mb-4 text-destructive">
                    Understanding Sextortion
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Sextortion is a form of blackmail where criminals threaten
                    to share intimate images, videos, or personal information
                    unless the victim pays money or provides more content. This
                    is a serious crime that affects people of all ages.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">
                        Financial Extortion
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Demanding money to prevent sharing content
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">Content Demands</h3>
                      <p className="text-sm text-muted-foreground">
                        Requesting more intimate photos or videos
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">Social Threats</h3>
                      <p className="text-sm text-muted-foreground">
                        Threatening to share content with contacts
                      </p>
                    </div>
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
                    <h2 className="text-2xl font-bold">
                      Protection Strategies
                    </h2>
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
                    <AlertTriangle className="text-orange-500 text-3xl mr-3" />
                    <h2 className="text-2xl font-bold">Warning Signs</h2>
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
                        <AlertTriangle className="text-orange-500 mr-3 flex-shrink-0" />
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
                  <h2 className="text-2xl font-bold mb-6 text-destructive">
                    If You're Being Targeted
                  </h2>
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

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-16"
            >
              <Card className="border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold mb-4 text-primary">
                    Remember: It's Not Your Fault
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you're a victim of sextortion, remember that you are not
                    to blame. These are serious crimes, and the criminals are
                    the ones at fault. Don't be ashamed to seek help from law
                    enforcement, trusted adults, or support organizations.
                  </p>
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
                  <h2 className="text-2xl font-bold mb-4">
                    Get Help Immediately
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    If you're experiencing sextortion, reach out for help
                    immediately. Time is critical in these situations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <MagneticCard intensity={0.2} scale={1.05}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        size="large"
                        sx={{
                          background:
                            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                          color: "hsl(var(--primary-foreground))",
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: "none",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                        }}
                      >
                        Get Emergency Support
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

export default Sextortion;
