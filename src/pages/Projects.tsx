import React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website to showcase my work and skills.",
    liveUrl: "https://yourportfolio.com",
    github: "https://github.com/username/portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://placehold.co/400x200?text=Portfolio",
  },
  {
    title: "E-Commerce Store",
    description: "A full-featured e-commerce platform with shopping cart and payment integration.",
    liveUrl: "https://mystore.com",
    github: "https://github.com/username/ecommerce-store",
    tech: ["Next.js", "Stripe", "MongoDB"],
    image: "https://placehold.co/400x200?text=E-Commerce",
  },
  {
    title: "Blog Platform",
    description: "A multi-user blog platform with markdown support and comments.",
    liveUrl: "https://myblog.com",
    github: "https://github.com/username/blog-platform",
    tech: ["Vue.js", "Node.js", "Express", "MongoDB"],
    image: "https://placehold.co/400x200?text=Blog",
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    liveUrl: "https://weatherapp.com",
    github: "https://github.com/username/weather-app",
    tech: ["React", "API Integration"],
    image: "https://placehold.co/400x200?text=Weather+App",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-2 sm:px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-muted-foreground mb-10">Explore my previously built websites and web apps below.</p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants} className="h-full group">
            <MagneticCard intensity={0.2} scale={1.06} className="h-full">
              <Card className="h-full border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm cursor-pointer flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg w-full h-40 object-cover mb-4"
                  loading="lazy"
                />
                <CardContent className="flex-1 flex flex-col items-center text-center p-6 pt-0">
                  <CardTitle className="mb-2 text-lg font-bold">{project.title}</CardTitle>
                  <CardDescription className="mb-4 flex-grow">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary font-semibold hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects; 