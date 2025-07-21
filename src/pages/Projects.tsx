import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Yoga Studio Website",
    description:
      "A modern, responsive website for a local yoga studio with class schedules and booking.",
    image: "https://placehold.co/400x220?text=Yoga+Studio+Website",
    tech: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://yogastudio.com",
    github: "https://github.com/username/yoga-studio",
    videoUrl: "https://www.youtube.com/embed/cQaQ9hHPM_c",
    testimonial: {
      client: "Priya S.",
      feedback: "The website is beautiful and easy to use. My clients love it!",
    },
  },
  {
    title: "Interior Designing Website",
    description:
      "Full-featured online store with shopping cart, payments, and admin dashboard.",
    image: "https://placehold.co/400x220?text=Interior+Designing+Website",
    tech: ["Next.js", "Stripe", "MongoDB"],
    liveUrl: "https://clothingstore.com",
    github: "https://github.com/username/ecommerce-store",
    videoUrl: "https://www.youtube.com/embed/P9-0iWH9TXk",
    testimonial: {
      client: "Rohit K.",
      feedback:
        "The new website helped us attract more clients and looks fantastic!",
    },
  },
  {
    title: "Personal Portfolio",
    description: "A portfolio to showcase my work, skills, and contact info.",
    image: "https://placehold.co/400x220?text=Education+Website",
    tech: ["React", "Framer Motion"],
    liveUrl: "https://myportfolio.com",
    github: "",
    videoUrl: "https://www.youtube.com/embed/McMYEuwTCnk",
    testimonial: {
      client: "Naveen R.",
      feedback:
        "The portfolio site is clean, modern, and helped me land new opportunities!",
    },
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
      <p className="text-lg text-muted-foreground mb-10">
        Explore my featured websites and web apps below.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="h-full group"
          >
            <MagneticCard intensity={0.2} scale={1.01} className="h-full">
              <Card className="h-full min-h-[540px] flex flex-col border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg w-full h-20 object-cover mb-4 transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
                <CardContent className="flex-1 flex flex-col text-center p-6 pt-0 justify-between">
                  <div>
                    <CardTitle className="mb-0 text-lg font-bold line-clamp-2 min-h-[0.25rem] flex items-center justify-center">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mb-4 flex-grow line-clamp-3 min-h-[3.5rem] flex items-center justify-center">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center mb-4 min-h-[2.5rem] items-center">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {/* Fill empty tech tags for alignment */}
                      {Array.from({
                        length: Math.max(0, 3 - project.tech.length),
                      }).map((_, i) => (
                        <span
                          key={"empty-tech-" + i}
                          className="px-2 py-0.5 invisible"
                        >
                          -
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Always render video container for alignment */}
                  <div className="mb-4 aspect-w-16 aspect-h-9 w-full rounded overflow-hidden">
                    {project.videoUrl ? (
                      <iframe
                        src={project.videoUrl}
                        title={project.title + " walkthrough"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-40 sm:h-48 md:h-56 lg:h-44"
                      ></iframe>
                    ) : (
                      <div className="w-full h-40 sm:h-48 md:h-56 lg:h-44 bg-muted flex items-center justify-center text-xs text-muted-foreground">
                        &nbsp;
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center mb-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-full font-semibold text-xs shadow hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </a>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-muted text-foreground rounded-full font-semibold text-xs shadow hover:bg-muted/80 transition-colors border border-border"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 invisible">
                        Code
                      </span>
                    )}
                  </div>

                  {/* Always render testimonial container for alignment */}
                  <div className="min-h-[70px] flex items-end">
                    {project.testimonial ? (
                      <div className="bg-muted/60 border border-border rounded p-3 mt-2 text-left text-sm italic text-muted-foreground w-full">
                        <span className="block mb-1">
                          “{project.testimonial.feedback}”
                        </span>
                        <span className="block text-xs font-semibold text-primary">
                          - {project.testimonial.client}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-full invisible">Testimonial</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>
      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-primary/10 border border-primary/20 rounded-2xl px-8 py-8 shadow-lg max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
            Do you need a professional website?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's build your dream website together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+918309800253"
              className="px-6 py-2.5 rounded-full bg-muted text-primary font-semibold text-lg shadow border border-primary hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://wa.me/918309800253"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-green-500 text-white font-semibold text-lg shadow hover:bg-green-600 transition-colors"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
