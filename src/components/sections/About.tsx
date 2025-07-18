import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Shield, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const features = [
    {
      icon: GraduationCap,
      title: t("about.featureStudentTitle"),
      description: t("about.featureStudentDesc"),
      link: "/about/student-focused",
    },
    {
      icon: Shield,
      title: t("about.featureScamTitle"),
      description: t("about.featureScamDesc"),
      link: "/about/scam-awareness",
    },
    {
      icon: Code,
      title: t("about.featureWebsitesTitle"),
      description: t("about.featureWebsitesDesc"),
      link: "/about/free-websites",
    },
    {
      icon: Users,
      title: t("about.featureCommunityTitle"),
      description: t("about.featureCommunityDesc"),
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Avatar replacement */}
                <div className="mx-auto w-[400px] h-[400px] flex items-center justify-center rounded-full text-[8rem] bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold select-none">
                  NKR
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                {t("about.heading")}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {t("about.para1")}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed mt-4"
              >
                {t("about.para2")}
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={feature.link} className="block h-full">
                    <Card className="h-full border border-border hover:border-primary/30 transition-colors cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <feature.icon className="text-primary" />
                          </div>
                          <h3 className="font-semibold">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
