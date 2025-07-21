import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How to Build a Modern Portfolio Website",
    excerpt:
      "Step-by-step guide to creating a stunning portfolio using React and Tailwind CSS.",
    date: "2024-05-01",
    tags: ["React", "Tailwind CSS", "Portfolio"],
    image: "https://placehold.co/400x200?text=Portfolio+Blog",
    slug: "blog1",
  },
  {
    title: "Understanding JavaScript Closures",
    excerpt:
      "A deep dive into closures in JavaScript and how to use them effectively.",
    date: "2024-04-20",
    tags: ["JavaScript", "Closures"],
    image: "https://placehold.co/400x200?text=JS+Closures",
    slug: "blog2",
  },
  {
    title: "Getting Started with MongoDB",
    excerpt:
      "Beginner's guide to setting up and using MongoDB in your web projects.",
    date: "2024-04-10",
    tags: ["MongoDB", "Database", "Backend"],
    image: "https://placehold.co/400x200?text=MongoDB",
    slug: "blog3",
  },
  {
    title: "Responsive Design Best Practices",
    excerpt:
      "Tips and tricks for making your websites look great on any device.",
    date: "2024-03-28",
    tags: ["CSS", "Responsive Design"],
    image: "https://placehold.co/400x200?text=Responsive+Design",
    slug: "blog4",
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

const Blogs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-2 sm:px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-muted-foreground mb-10">
        Read the latest articles, guides, and tutorials.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
            variants={cardVariants}
            className="h-full group"
          >
            <MagneticCard intensity={0.2} scale={1.06} className="h-full">
              <Link
                to={`/${post.slug}`}
                className="no-underline text-inherit h-full block focus:outline-none"
              >
                <Card className="h-full border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm cursor-pointer flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-t-lg w-full h-40 object-cover mb-4"
                    loading="lazy"
                  />
                  <CardContent className="flex-1 flex flex-col text-center p-6 pt-0">
                    <CardTitle className="mb-2 text-lg font-bold line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-auto">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
