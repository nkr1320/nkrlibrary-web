import React from "react";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Users, AlertTriangle, Frown } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { ElasticText } from "@/components/ui/elastic-text";
import { ParticleSystem } from "@/components/ui/particle-system";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HoneyTrap = () => {
  const preventionTips = [
    "Never send money to someone you've only met online",
    "Be skeptical of too-good-to-be-true romantic advances",
    "Do reverse image searches on profile photos",
    "Video call before meeting in person",
    "Share relationship details with trusted friends/family",
    "Take relationships slow and don't rush into commitments",
    "Be wary of people who avoid phone calls or meetings",
    "Trust your instincts if something feels wrong",
  ];

  const warningSignsData = [
    "Refuses to video call or meet in person",
    "Asks for money for emergencies or travel",
    "Professes love very quickly",
    "Photos look too professional or model-like",
    "Stories about their life don't add up",
    "Limited social media presence or recent accounts",
    "Avoids talking about specific local details",
    "Pushes for financial information or gifts",
  ];

  const responseSteps = [
    "Stop all communication immediately",
    "Don't send any more money or personal information",
    "Report the scammer to the platform you met them on",
    "Contact your bank if you've sent money",
    "Report to local police and online fraud centers",
    "Seek emotional support from friends, family, or counselors",
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Honey Trap Scams Protection - NKR Library</title>
        <meta
          name="description"
          content="Learn to identify and protect yourself from romance scams and honey trap frauds. Complete guide on prevention and response strategies."
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
                <AlertTriangle className="mr-2" />
                Back to Digital Safety
              </Button>

              <div className="flex items-center justify-center mb-6">
                <Frown className="text-4xl sm:text-5xl text-destructive mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>Honey Trap Scams</ElasticText>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Learn to identify and protect yourself from romance scams and
                emotional manipulation online.
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
                    What Are Honey Trap Scams?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Honey trap scams involve fraudsters creating fake romantic
                    relationships to exploit victims emotionally and
                    financially. Scammers build trust over time, then request
                    money for various emergencies or reasons.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">
                        Emotional Manipulation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Building fake emotional connections
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">
                        Financial Exploitation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Requesting money for emergencies
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">Identity Theft</h3>
                      <p className="text-sm text-muted-foreground">
                        Stealing personal information
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
                    <Users className="text-green-500 text-3xl mr-3" />
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
                        <Users className="text-green-500 mr-3 flex-shrink-0" />
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
                    <h2 className="text-2xl font-bold">
                      Red Flags to Watch For
                    </h2>
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
                    If You've Been Targeted
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

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center"
            >
              <Card className="border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Get Support</h2>
                  <p className="text-muted-foreground mb-6">
                    If you've been a victim of a romance scam, remember that
                    it's not your fault. Seek support and report the crime.
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
                        Get Help
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

export default HoneyTrap;
