import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import { VirtualizedVideoGrid } from "@/components/ui/virtualized-video-grid";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { ElasticText } from "@/components/ui/elastic-text";
import { ParticleSystem } from "@/components/ui/particle-system";
import {
  useMotionPreferences,
  getAnimationConfig,
} from "@/hooks/use-motion-preferences";
import { useTranslation } from "react-i18next";

interface Video {
  id: string;
  title: string;
  url: string;
  category: string;
  year?: string;
  thumbnail?: string;
}

const videos: Video[] = [
  // Software & Development
  {
    id: "1",
    title: "Git Installation Latest Video",
    url: "https://www.youtube.com/watch?v=YCrXCm416mY",
    category: "Software",
    year: "2024",
  },
  {
    id: "2",
    title: "React Hooks in Telugu Tutorial 2025",
    url: "https://www.youtube.com/watch?v=Nq5c1FtOrac",
    category: "Software",
    year: "2025",
  },
  {
    id: "3",
    title: "How to Run First ReactJS App Tutorial 2024",
    url: "https://www.youtube.com/watch?v=M2kV39OWfOQ",
    category: "Software",
    year: "2024",
  },
  {
    id: "4",
    title: "How to Download and Install NodeJS 2024",
    url: "https://www.youtube.com/watch?v=33O-LtTpbWU",
    category: "Software",
    year: "2024",
  },
  {
    id: "5",
    title: "How to Add Bootstrap in HTML 2024",
    url: "https://www.youtube.com/watch?v=a4juG-3Ky7A",
    category: "Software",
    year: "2024",
  },
  {
    id: "6",
    title: "Eclipse IDE Download and Setup 2022",
    url: "https://www.youtube.com/watch?v=M1wL9T2bM68",
    category: "Software",
    year: "2024",
  },

  // CyberScams & Security
  {
    id: "7",
    title: "Sextortion Explanation in Telugu",
    url: "https://www.youtube.com/watch?v=wBUtiufAUsk",
    category: "CyberScams",
    year: "2024",
  },
  {
    id: "8",
    title: "What is Phishing Attack and Types of Email Scams",
    url: "https://www.youtube.com/watch?v=EeKi6msUr28",
    category: "CyberScams",
    year: "2024",
  },
  {
    id: "9",
    title: "Uninstall GB WhatsApp - Use WhatsApp Only",
    url: "https://www.youtube.com/watch?v=cGNH94OmxVs",
    category: "CyberScams",
    year: "2024",
  },
  {
    id: "10",
    title: "Dark Web Monitoring in Gmail - Data Breach Protection",
    url: "https://www.youtube.com/watch?v=VEq9C_vQF6I",
    category: "CyberScams",
    year: "2024",
  },
  {
    id: "11",
    title: "How to Add Recovery Mail to Gmail 2024",
    url: "https://www.youtube.com/watch?v=r_1P_RYPibU",
    category: "CyberScams",
    year: "2024",
  },

  // Medical Coding
  {
    id: "12",
    title: "Medical Coding Course Part 1",
    url: "https://www.youtube.com/watch?v=N7jZxShJ3uI",
    category: "Medical",
    year: "2024",
  },
  {
    id: "13",
    title: "Pregnancy Guidelines Part 2 in Telugu 2025",
    url: "https://www.youtube.com/watch?v=ue2K1Ud8oDY",
    category: "Medical",
    year: "2025",
  },
  {
    id: "14",
    title: "HIV and AIDS Coding Tips 2025",
    url: "https://www.youtube.com/watch?v=74dHD1PeSWo",
    category: "Medical",
    year: "2025",
  },
  {
    id: "15",
    title: "BMI Coding 2024 - Obesity",
    url: "https://www.youtube.com/watch?v=Klf60A_WRpA",
    category: "Medical",
    year: "2024",
  },

  // Science & Tech
  {
    id: "16",
    title: "Why Chandrayaan 3 is Important to India",
    url: "https://www.youtube.com/watch?v=JOOgkr9zDcY",
    category: "Science",
    year: "2024",
  },
  {
    id: "17",
    title: "Elon Musk Neuralink Brain Chip Implant",
    url: "https://www.youtube.com/watch?v=om4inGelcp0",
    category: "Science",
    year: "2024",
  },
  {
    id: "18",
    title: "DeepSeek AI vs ChatGPT - Who Wins?",
    url: "https://www.youtube.com/watch?v=WUebh8yL_1U",
    category: "Science",
    year: "2025",
  },
  {
    id: "19",
    title: "Augmented Reality in 1 Minute",
    url: "https://www.youtube.com/watch?v=z9lnL4JR8n4",
    category: "Science",
    year: "2024",
  },

  // Career & Jobs
  {
    id: "20",
    title: "How to Add Upwork Withdrawal Bank Account",
    url: "https://www.youtube.com/watch?v=093smeLTJ50",
    category: "Career",
    year: "2024",
  },
  {
    id: "21",
    title: "Latest Job Notification TCS 2024",
    url: "https://www.youtube.com/watch?v=xkamoggx4AA",
    category: "Career",
    year: "2024",
  },
  {
    id: "22",
    title: "Latest Job Notification Amazon ML Data Associate",
    url: "https://www.youtube.com/watch?v=2ip7wtiDVgQ",
    category: "Career",
    year: "2024",
  },
];

const VideoShowcase = React.memo(() => {
  const { t } = useTranslation();
  const { prefersReducedMotion } = useMotionPreferences();
  const animationConfig = getAnimationConfig(prefersReducedMotion);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const allCategories = [
    {
      name: t("videoShowcase.all"),
      description: t("videoShowcase.allDesc"),
      count: videos.length,
    },
    {
      name: t("videoShowcase.software"),
      description: t("videoShowcase.softwareDesc"),
      count: videos.filter((v) => v.category === "Software").length,
    },
    {
      name: t("videoShowcase.cyberScams"),
      description: t("videoShowcase.cyberScamsDesc"),
      count: videos.filter((v) => v.category === "CyberScams").length,
    },
    {
      name: t("videoShowcase.medical"),
      description: t("videoShowcase.medicalDesc"),
      count: videos.filter((v) => v.category === "Medical").length,
    },
    {
      name: t("videoShowcase.science"),
      description: t("videoShowcase.scienceDesc"),
      count: videos.filter((v) => v.category === "Science").length,
    },
    {
      name: t("videoShowcase.career"),
      description: t("videoShowcase.careerDesc"),
      count: videos.filter((v) => v.category === "Career").length,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animationConfig.duration,
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationConfig.duration,
      },
    },
  };

  // Filter and memoize videos based on selected category
  const featuredVideos = React.useMemo(() => {
    const filteredVideos =
      selectedCategory === "All"
        ? videos
        : videos.filter((video) => video.category === selectedCategory);
    return filteredVideos.slice(0, 12);
  }, [selectedCategory]);

  // Handle category selection
  const handleCategoryClick = React.useCallback((categoryName: string) => {
    setSelectedCategory(categoryName);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-muted/10 to-card relative overflow-hidden">
      <ParticleSystem
        count={prefersReducedMotion ? 0 : 6}
        colors={["bg-primary/6", "bg-accent/6"]}
        size={1}
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
            variants={itemVariants}
            className="flex flex-col items-center text-center mb-12 sm:mb-16"
          >
            {" "}
            {/* Ensures all content is centered */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              <ElasticText delay={0.2}>{t("videoShowcase.header")}</ElasticText>
            </h2>
            {/* Subtitle is perfectly centered using flex and text-center */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6 sm:mb-8 px-4 text-center">
              {t("videoShowcase.subtitle")}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline">
                <a
                  href="https://www.youtube.com/@nkrlibrary/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2" />
                  {t("videoShowcase.viewAllVideos")}
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Category Pills */}
          {/* Each category uses category.name as a unique key (names are unique) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          >
            {allCategories.map((category) => {
              const isActive = selectedCategory === category.name;
              return (
                <motion.button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 hover:shadow-lg backdrop-blur-sm cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-accent/50 border-border hover:border-primary/30"
                  }`}
                >
                  <span
                    className={`font-medium text-sm sm:text-base ${isActive ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {category.name}
                  </span>
                  <span
                    className={`ml-1 sm:ml-2 text-xs sm:text-sm ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    ({category.count})
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Video Grid */}
          <VirtualizedVideoGrid
            videos={featuredVideos}
            itemsPerPage={12}
            showLoadMore={false}
            className="mb-8"
          />

          {/* View More */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8 sm:mt-12 px-4"
          >
            <Button asChild variant="default">
              <a href="/videos">{t("videoShowcase.exploreAllCategories")}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default VideoShowcase;
