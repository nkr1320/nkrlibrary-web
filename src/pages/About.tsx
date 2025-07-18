import React from "react";
import { motion } from "framer-motion";
import About from "@/components/sections/About";
import { SEOHead } from "@/components/seo/SEOHead";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEOHead
        title="About NKR Library"
        description="Learn about NKR Library's mission, vision, and the team behind free tech education and scam awareness."
      />
      <About />
    </motion.div>
  );
};

export default AboutPage;
