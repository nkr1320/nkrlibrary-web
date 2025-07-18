import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, Smartphone, Mail, KeyRound, Bug, FileWarning, Frown } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { ElasticText } from "@/components/ui/elastic-text";
import { ParticleSystem } from "@/components/ui/particle-system";
import { useMotionPreferences } from "@/hooks/use-motion-preferences";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const CyberScamsSection = () => {
  const { t } = useTranslation();
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
      title: t("cyberscams.dataLeaksTitle"),
      icon: KeyRound,
      description: t("cyberscams.dataLeaksDesc"),
      severity: "high",
      path: "/cyberscams/data-leaks",
    },
    {
      title: t("cyberscams.honeyTrapTitle"),
      icon: Frown,
      description: t("cyberscams.honeyTrapDesc"),
      severity: "high",
      path: "/cyberscams/honey-trap",
    },
    {
      title: t("cyberscams.phishingTitle"),
      icon: Mail,
      description: t("cyberscams.phishingDesc"),
      severity: "critical",
      path: "/cyberscams/phishing",
    },
    {
      title: t("cyberscams.cyberAttacksTitle"),
      icon: Bug,
      description: t("cyberscams.cyberAttacksDesc"),
      severity: "critical",
      path: "/cyberscams/cyber-attacks",
    },
    {
      title: t("cyberscams.sextortionTitle"),
      icon: AlertTriangle,
      description: t("cyberscams.sextortionDesc"),
      severity: "high",
      path: "/cyberscams/sextortion",
    },
    {
      title: t("cyberscams.strangerCallsTitle"),
      icon: Smartphone,
      description: t("cyberscams.strangerCallsDesc"),
      severity: "medium",
      path: "/cyberscams/stranger-calls",
    },
    {
      title: t("cyberscams.gbWhatsappTitle"),
      icon: Smartphone,
      description: t("cyberscams.gbWhatsappDesc"),
      severity: "medium",
      path: "/cyberscams/gb-whatsapp",
    },
    {
      title: t("cyberscams.cyberbullyingTitle"),
      icon: FileWarning,
      description: t("cyberscams.cyberbullyingDesc"),
      severity: "high",
      path: "/cyberscams/cyberbullying",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-destructive";
      case "high":
        return "text-orange-500 dark:text-orange-400";
      case "medium":
        return "text-yellow-600 dark:text-yellow-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-destructive/5 to-accent/10 relative overflow-hidden">
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
        colors={["bg-destructive/15", "bg-primary/15", "bg-accent/15"]}
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
          <motion.div
            variants={cardVariants}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-4 px-2 sm:px-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Shield className="text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-0 sm:mr-3" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
                <ElasticText delay={0.4}>{t("cyberscams.header")}</ElasticText>
              </h2>
            </div>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
              {t("cyberscams.subtitle")}
            </p>
          </motion.div>

          {/* Scams Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-0"
          >
            {scamTypes.map((scam, index) => (
              <motion.div
                key={scam.title}
                variants={cardVariants}
                className="h-full group"
              >
                <MagneticCard intensity={0.2} scale={1.06} className="h-full">
                  <motion.div
                    whileHover={{
                      rotateX: prefersReducedMotion ? 0 : 5,
                      rotateY: prefersReducedMotion ? 0 : 8,
                      z: 30,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: 800,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Card className="h-full border border-border hover:border-destructive/30 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm cursor-pointer">
                      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                        <a href={scam.path} className="flex flex-col h-full text-inherit no-underline">
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
                                  ease: "easeInOut",
                                }}
                              />
                            </motion.div>
                            <motion.span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${getSeverityColor(scam.severity)} bg-accent`}
                              animate={{
                                scale:
                                  scam.severity === "critical" ? [1, 1.1, 1] : 1,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat:
                                  scam.severity === "critical" ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                            >
                              {t(`cyberscams.severity.${scam.severity}`)}
                            </motion.span>
                          </div>

                          <h3 className="font-semibold text-base sm:text-lg mb-3 group-hover:text-primary transition-colors">
                            <ElasticText delay={0.1 * index}>
                              {scam.title}
                            </ElasticText>
                          </h3>

                          <p className="text-muted-foreground text-xs sm:text-sm flex-grow leading-relaxed">
                            {scam.description}
                          </p>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </MagneticCard>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={cardVariants} className="text-center">
            <MagneticCard intensity={0.3} scale={1.08}>
              <Button size="lg" className="inline-flex items-center gap-2 justify-center" asChild>
                <a href="/cyberscams">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Shield />
                  </motion.div>
                  {t("cyberscams.cta")}
                </a>
              </Button>
            </MagneticCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberScamsSection;
