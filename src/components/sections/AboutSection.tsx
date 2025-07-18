import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Shield, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState("");
  const heading = t("aboutSection.heading");

  // Typewriter effect for heading
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= heading.length) {
        setTypedText(heading.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Counting animation component
  const CountingNumber = ({
    target,
    suffix = "",
  }: {
    target: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 40);
        return () => clearInterval(timer);
      }
    }, [isInView, target]);

    return (
      <motion.span
        ref={ref}
        className="font-bold text-primary mb-2"
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {count}
        {suffix}
      </motion.span>
    );
  };

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 8 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-primary/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ));
    return (
      <div className="absolute inset-0 pointer-events-none">{particles}</div>
    );
  };

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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const iconSpin = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  // Features from About.tsx
  const features = [
    {
      icon: GraduationCap,
      title: t("aboutSection.featureStudentTitle"),
      description: t("aboutSection.featureStudentDesc"),
      link: "/about/student-focused",
    },
    {
      icon: Shield,
      title: t("aboutSection.featureScamTitle"),
      description: t("aboutSection.featureScamDesc"),
      link: "/about/scam-awareness",
    },
    {
      icon: Code,
      title: t("aboutSection.featureWebsitesTitle"),
      description: t("aboutSection.featureWebsitesDesc"),
      link: "/about/free-websites",
    },
    {
      icon: Users,
      title: t("aboutSection.featureCommunityTitle"),
      description: t("aboutSection.featureCommunityDesc"),
      link: "/about/community-driven",
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-muted/20 to-accent/10 relative overflow-hidden">
      <FloatingParticles />
      <div className="max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16 px-2 sm:px-4">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="font-montserrat text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block"
                  >
                    |
                  </motion.span>
                </motion.h2>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.div>
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium"
                >
                  {t("aboutSection.intro")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Avatar Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                      color: "hsl(var(--primary-foreground))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                      fontWeight: "bold",
                    }}
                    whileHover={{
                      boxShadow: "0 20px 40px hsl(var(--foreground) / 0.3)",
                    }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          "0 0 20px hsl(var(--primary-foreground) / 0.5)",
                          "0 0 30px hsl(var(--primary-foreground) / 0.8)",
                          "0 0 20px hsl(var(--primary-foreground) / 0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      NKR
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Decorative Elements with particle trails */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full"
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-accent rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Additional floating elements */}
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    rotate: 360,
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-8 left-8 w-4 h-4 bg-primary/30 rounded-full"
                />
                <motion.div
                  animate={{
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                    rotate: -360,
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute bottom-8 right-8 w-3 h-3 bg-accent/40 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                {t("aboutSection.behindTitle")}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("aboutSection.behindPara1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("aboutSection.behindPara2")}
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  rotateY: 3,
                  rotateX: 3,
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{ perspective: 1000 }}
              >
                <Link to={feature.link} className="block h-full">
                  <div className="h-full border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm cursor-pointer">
                    <div className="p-6 relative overflow-hidden">
                      {/* Background Pattern */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                        initial={{ scale: 0, rotate: 45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.div
                            className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <motion.div
                              animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.5,
                              }}
                            >
                              <feature.icon className="text-primary text-2xl" />
                            </motion.div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.2,
                            }}
                          >
                            <h5
                              className="font-bold text-foreground"
                            >
                              {feature.title}
                            </h5>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.3,
                          }}
                        >
                          <p
                            className="text-muted-foreground leading-relaxed"
                          >
                            {feature.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Hover Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Impact Section */}
          <motion.div
            variants={fadeUp}
            className="text-center mt-12 sm:mt-16 max-w-4xl mx-auto px-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-border shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                <div className="p-6 sm:p-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h5
                      className="font-bold mb-6 text-foreground"
                    >
                      {t("aboutSection.impactTitle")}
                    </h5>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    {[
                      {
                        value: 10000,
                        suffix: "+",
                        label: t("aboutSection.impactStatStudents"),
                      },
                      {
                        value: 100,
                        suffix: "+",
                        label: t("aboutSection.impactStatVideos"),
                      },
                      {
                        value: 50,
                        suffix: "+",
                        label: t("aboutSection.impactStatResources"),
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                        }}
                      >
                        <motion.div
                          className="relative mb-2"
                          whileHover={{
                            textShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                          }}
                        >
                          <h4
                            className="text-4xl font-bold text-primary relative z-10"
                          >
                            <CountingNumber
                              target={stat.value}
                              suffix={stat.suffix}
                            />
                          </h4>

                          {/* Pulsing background circle */}
                          <motion.div
                            className="absolute inset-0 bg-primary/10 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.3,
                          }}
                        >
                          <p
                            className="text-muted-foreground font-medium"
                          >
                            {stat.label}
                          </p>
                        </motion.div>

                        {/* Progress bar animation */}
                        <motion.div
                          className="mt-3 h-1 bg-muted rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.5,
                          }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.3 + 0.8,
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
