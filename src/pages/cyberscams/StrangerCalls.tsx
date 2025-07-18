import React from "react";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Smartphone, AlertTriangle, Frown } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { ElasticText } from "@/components/ui/elastic-text";
import { ParticleSystem } from "@/components/ui/particle-system";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const StrangerCalls = () => {
  const preventionTips = [
    "Never give personal info over the phone",
    "Verify caller identity independently",
    "Don't trust caller ID completely",
    "Hang up and call back official numbers",
    "Use call blocking apps and features",
    "Register with Do Not Call registries",
    "Be suspicious of urgent demands",
    "Don't press numbers when prompted by robocalls",
  ];

  const warningSignsData = [
    "Pressure to act immediately",
    "Requests for sensitive information",
    "Threats of legal action",
    "Offers that seem too good to be true",
    "Claims your account is compromised",
    "Requests for remote computer access",
    "Demands for gift cards or wire transfers",
    "Poor audio quality or background noise",
  ];

  const responseSteps = [
    "Hang up immediately if you suspect a scam",
    "Block the number on your device",
    "Report the scam call to authorities",
    "Check your accounts for unauthorized access",
    "Warn friends and family about the scam",
    "Consider changing passwords if you shared information",
  ];

  const scamTypes = [
    {
      title: "IRS/Tax Scams",
      description:
        "Fake calls claiming you owe taxes or are eligible for refunds",
    },
    {
      title: "Tech Support Scams",
      description: "Claims your computer is infected and needs immediate help",
    },
    {
      title: "Bank/Credit Card Scams",
      description: "Fake alerts about suspicious account activity",
    },
    {
      title: "Prize/Lottery Scams",
      description: "Claims you've won a prize but need to pay fees to claim it",
    },
    {
      title: "Charity Scams",
      description: "Fake fundraising calls for disasters or causes",
    },
    {
      title: "Insurance Scams",
      description: "Offers for fake insurance policies or claims processing",
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Stranger Call Scams Protection - NKR Library</title>
        <meta
          name="description"
          content="Learn to identify and protect yourself from phone scams and fraudulent calls. Complete guide on phone security and scam prevention."
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
                startIcon={<AlertTriangle />}
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
                <Smartphone className="text-4xl sm:text-5xl text-destructive mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>Stranger Call Scams</ElasticText>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Protect yourself from fraudulent phone calls and protect your
                personal information from scammers.
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
                    Common Phone Scam Types
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Phone scammers use various tactics to trick people into
                    sharing personal information, sending money, or providing
                    access to their computers. Learning to recognize these scams
                    is your first line of defense.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {scamTypes.map((type, index) => (
                      <motion.div
                        key={type.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-card rounded-lg"
                      >
                        <h3 className="font-semibold mb-2">{type.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {type.description}
                        </p>
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
                    <Frown className="text-green-500 text-3xl mr-3" />
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
                        <Frown className="text-green-500 mr-3 flex-shrink-0" />
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
                      Red Flags in Phone Calls
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
                    If You Receive a Scam Call
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
                  <h2 className="text-2xl font-bold mb-4">
                    Report Suspicious Calls
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Help protect others by reporting scam calls to the
                    appropriate authorities and telecom providers.
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
                        Report a Scam Call
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

export default StrangerCalls;
