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

const Cyberbullying = () => {
  const preventionTips = [
    "Keep personal information private online",
    "Use strong privacy settings on social media",
    "Think before posting or sharing content",
    "Don't engage with aggressive or hostile users",
    "Block and report abusive accounts immediately",
    "Document evidence of harassment",
    "Talk to trusted adults about online interactions",
    "Use available safety tools and reporting features",
  ];

  const warningSignsData = [
    "Receiving threatening or harassing messages",
    "Being excluded from online groups or activities",
    "Having rumors or lies spread about you online",
    "Receiving unwanted sexual messages or images",
    "Being impersonated on social media",
    "Having personal information shared without consent",
    "Experiencing coordinated attacks from multiple accounts",
    "Being doxxed (personal information published online)",
  ];

  const responseSteps = [
    "Don't respond to or retaliate against the bully",
    "Document all evidence by taking screenshots",
    "Block and report the bully on all platforms",
    "Tell a trusted adult, teacher, or counselor",
    "Report serious threats to law enforcement",
    "Seek support from friends, family, or professionals",
  ];

  const supportResources = [
    {
      title: "School Counselors",
      description:
        "Talk to teachers, counselors, or administrators about the harassment",
    },
    {
      title: "Mental Health Support",
      description: "Seek help from therapists or mental health professionals",
    },
    {
      title: "Crisis Hotlines",
      description: "Call crisis helplines for immediate emotional support",
    },
    {
      title: "Law Enforcement",
      description: "Report serious threats, blackmail, or criminal behavior",
    },
    {
      title: "Platform Support",
      description: "Use official reporting tools on social media platforms",
    },
    {
      title: "Online Safety Organizations",
      description:
        "Contact organizations dedicated to online safety and digital citizenship",
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Cyberbullying Protection & Support - NKR Library</title>
        <meta
          name="description"
          content="Learn to identify, prevent, and respond to cyberbullying. Complete guide on online harassment protection and support resources."
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
                <Users className="text-4xl sm:text-5xl text-destructive mr-4" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                  <ElasticText>Cyberbullying Protection</ElasticText>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Learn to protect yourself from online harassment and find
                support when you need it most.
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
                    Understanding Cyberbullying
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Cyberbullying is the use of digital platforms to harass,
                    intimidate, or harm others. It can happen through social
                    media, messaging apps, gaming platforms, or any online
                    space. Unlike traditional bullying, cyberbullying can follow
                    victims everywhere and happen 24/7.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">Direct Harassment</h3>
                      <p className="text-sm text-muted-foreground">
                        Sending threats, insults, or hurtful messages
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">Social Exclusion</h3>
                      <p className="text-sm text-muted-foreground">
                        Deliberately excluding someone from online groups
                      </p>
                    </div>
                    <div className="p-4 bg-card rounded-lg">
                      <h3 className="font-semibold mb-2">Public Humiliation</h3>
                      <p className="text-sm text-muted-foreground">
                        Sharing embarrassing content or spreading rumors
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
                      Signs of Cyberbullying
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
                    If You're Being Cyberbullied
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

            {/* Support Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-16"
            >
              <Card className="border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    Support Resources
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {supportResources.map((resource, index) => (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-card rounded-lg"
                      >
                        <h3 className="font-semibold mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-16"
            >
              <Card className="border border-accent/30 bg-accent/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold mb-4 text-accent">
                    You're Not Alone
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Remember that cyberbullying is not your fault, and you don't
                    have to face it alone. Reach out for help from trusted
                    adults, friends, or professionals. There are people who care
                    about you and want to help you through difficult situations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <Card className="border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Get Support Now</h2>
                  <p className="text-muted-foreground mb-6">
                    If you're experiencing cyberbullying, don't wait. Reach out
                    for support and resources to help you through this.
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
                        Find Support
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

export default Cyberbullying;
