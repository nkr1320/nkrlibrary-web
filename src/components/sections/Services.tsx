import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { ElasticText } from "@/components/ui/elastic-text";
import { ParticleSystem } from "@/components/ui/particle-system";
import { useMotionPreferences } from "@/hooks/use-motion-preferences";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useTranslation();
  const { prefersReducedMotion } = useMotionPreferences();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const services = [
    {
      icon: Globe,
      title: t("services.customWebsitesTitle"),
      description: t("services.customWebsitesDesc"),
      features: [
        t("services.responsiveDesign"),
        t("services.seoOptimized"),
        t("services.fastLoading"),
        t("services.mobileFriendly"),
      ],
      price: t("services.free"),
      highlight: true,
      link: "/contact",
    },
    {
      icon: Shield,
      title: t("services.scamAwarenessTitle"),
      description: t("services.scamAwarenessDesc"),
      features: [
        t("services.latestThreats"),
        t("services.preventionTips"),
        t("services.realExamples"),
        t("services.safetyGuides"),
      ],
      price: t("services.free"),
      highlight: false,
      link: "/tutorials",
    },
    {
      icon: Play,
      title: t("services.techTutorialsTitle"),
      description: t("services.techTutorialsDesc"),
      features: [
        t("services.videoTutorials"),
        t("services.writtenGuides"),
        t("services.toolReviews"),
        t("services.tipsTricks"),
      ],
      price: t("services.free"),
      highlight: false,
      link: "/tutorials",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-muted/30 relative overflow-hidden">
      <ParticleSystem
        count={18}
        colors={["bg-primary/8", "bg-accent/8", "bg-secondary/8"]}
        size={4}
        speed={15}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            <ElasticText delay={0.2}>{t("services.header")}</ElasticText>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t("services.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <MagneticCard
                intensity={0.3}
                scale={service.highlight ? 1.08 : 1.05}
                className="h-full"
              >
                <motion.div
                  whileHover={{
                    rotateY: prefersReducedMotion ? 0 : 8,
                    z: service.highlight ? 100 : 50,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1200,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <Card
                    className={`h-full relative overflow-hidden ${
                      service.highlight
                        ? "border-2 border-primary shadow-2xl"
                        : "border border-border hover:border-primary/30"
                    } transition-all duration-500 backdrop-blur-sm`}
                  >
                    {service.highlight && (
                      <motion.div
                        className="absolute top-0 right-0"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="inline-block px-2 py-0.5 rounded-full bg-muted text-xs font-medium border">
                          {t("services.mostPopular")}
                        </span>
                      </motion.div>
                    )}

                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <motion.div
                          whileHover={{
                            scale: 1.2,
                            rotate: prefersReducedMotion ? 0 : 360,
                            y: -10,
                          }}
                          transition={{ duration: 0.6 }}
                          className="inline-flex p-4 bg-primary/10 rounded-full mb-4 relative"
                        >
                          <service.icon
                            sx={{
                              fontSize: "3rem",
                              color: "hsl(var(--primary))",
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-primary/20 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3">
                          <ElasticText delay={0.1 * index}>
                            {service.title}
                          </ElasticText>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.2 + index * 0.1,
                            staggerChildren: 0.1,
                          }}
                        >
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: 0.3 + index * 0.1 + featureIndex * 0.05,
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              <span className="inline-block px-2 py-0.5 rounded-full bg-muted text-xs font-medium border">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      <div className="text-center">
                        <motion.div
                          className="text-2xl font-bold text-primary mb-4"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {service.price}
                        </motion.div>
                        <MagneticCard intensity={0.15} scale={1.03}>
                          <Button
                            asChild
                            variant={
                              service.highlight ? "contained" : "outlined"
                            }
                            fullWidth
                            sx={{
                              py: 1.5,
                              borderRadius: 2,
                              textTransform: "none",
                              fontWeight: 600,
                              ...(service.highlight
                                ? {
                                    background: "hsl(var(--primary))",
                                    color: "hsl(var(--primary-foreground))",
                                    "&:hover": {
                                      background: "hsl(var(--primary))",
                                      filter: "brightness(0.9)",
                                      transform: "translateY(-2px)",
                                    },
                                  }
                                : {
                                    borderColor: "hsl(var(--primary))",
                                    color: "hsl(var(--primary))",
                                    "&:hover": {
                                      borderColor: "hsl(var(--primary))",
                                      background: "hsl(var(--primary) / 0.1)",
                                      transform: "translateY(-2px)",
                                    },
                                  }),
                              transition: "all 0.3s ease",
                            }}
                          >
                            {service.title === t("services.customWebsitesTitle")
                              ? t("services.requestYours")
                              : t("services.learnMore")}
                            <ArrowRight className="ml-2" />
                          </Button>
                        </MagneticCard>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
