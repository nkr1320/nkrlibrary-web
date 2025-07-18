import React from "react";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import SoftwareSkills from "@/components/sections/SoftwareSkills";
import CyberScamsSection from "@/components/sections/CyberScamsSection";
import VisionSection from "@/components/sections/VisionSection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Newsletter from "@/components/sections/Newsletter";
import { StructuredData } from "@/components/seo/structured-data";

const Home = () => {
  const structuredData = {
    name: "NKR Library",
    description:
      "Free tech tutorials, scam awareness, and custom websites for students",
    url: "https://nkrlibrary.com",
    sameAs: [
      "https://www.youtube.com/@nkrlibrary",
      "https://twitter.com/nkrlibrary",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@nkrlibrary.com",
    },
    founder: {
      "@type": "Person",
      name: "NKR",
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          NKR Library — Free Tech Tutorials, Scam Awareness & Student Websites
        </title>
        <meta
          name="description"
          content="Master software skills with free tutorials, stay safe from digital scams, and get custom websites. NKR Library empowers students with practical tech education."
        />
        <meta
          name="keywords"
          content="tech tutorials, programming, cybersecurity, scam awareness, student websites, free education, software development, medical coding, React tutorials, Git installation"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta
          property="og:title"
          content="NKR Library — Free Tech Tutorials, Scam Awareness & Student Websites"
        />
        <meta
          property="og:description"
          content="Master software skills with free tutorials, stay safe from digital scams, and get custom websites. NKR Library empowers students with practical tech education."
        />
        <meta
          property="og:image"
          content="https://nkrlibrary.com/og-image.png"
        />
        <meta property="og:url" content="https://nkrlibrary.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NKR Library — Free Tech Tutorials, Scam Awareness & Student Websites"
        />
        <meta
          name="twitter:description"
          content="Master software skills with free tutorials, stay safe from digital scams, and get custom websites. NKR Library empowers students with practical tech education."
        />
        <meta
          name="twitter:image"
          content="https://nkrlibrary.com/og-image.png"
        />
        <link rel="canonical" href="https://nkrlibrary.com" />
      </Helmet>

      <StructuredData type="website" data={structuredData} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        role="main"
        aria-label="NKR Library homepage"
      >
        <Hero />
        <AboutSection />
        <SoftwareSkills />
        <VideoShowcase />
        <CyberScamsSection />
        <VisionSection />
        <Newsletter />
      </motion.main>
    </HelmetProvider>
  );
};

export default Home;
