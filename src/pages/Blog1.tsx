import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";

const blogData = {
  title: "How to Build a Modern Portfolio Website",
  excerpt:
    "Step-by-step guide to creating a stunning portfolio using React and Tailwind CSS.",
  date: "2024-05-01",
  tags: ["React", "Tailwind CSS", "Portfolio"],
  image: "https://placehold.co/800x320?text=Portfolio+Blog",
  video: "https://www.youtube.com/embed/YCrXCm416mY",
};

const Blog1: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-2 sm:px-4 md:px-8">
    <SEOHead
      title={`${blogData.title} | NKR Library`}
      description={blogData.excerpt}
    />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-border bg-card/80 backdrop-blur-sm shadow-lg">
        <img
          src={blogData.image}
          alt={blogData.title}
          className="rounded-t-lg w-full h-56 object-cover mb-4"
          loading="lazy"
        />
        <CardContent className="p-6 pt-0">
          <div className="flex flex-wrap gap-2 mb-2">
            {blogData.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
            <span className="text-xs text-muted-foreground ml-auto">
              {new Date(blogData.date).toLocaleDateString()}
            </span>
          </div>
          <CardTitle className="mb-2 text-2xl font-bold">
            {blogData.title}
          </CardTitle>
          <CardDescription className="mb-6 text-lg">
            {blogData.excerpt}
          </CardDescription>
          <div className="my-6">
            <iframe
              width="100%"
              height="315"
              src={blogData.video}
              title="Portfolio Blog Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              loading="lazy"
            ></iframe>
            <p className="text-xs text-muted-foreground mt-2">
              Watch our latest video on building a modern portfolio website!
            </p>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Benefits of a Modern Portfolio
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Showcase your skills and projects professionally.</li>
            <li>Attract potential employers or clients.</li>
            <li>Easy to update and maintain.</li>
            <li>Stand out with a unique design.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">Tips for Success</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Use clear navigation and structure.</li>
            <li>Highlight your best work with visuals.</li>
            <li>Optimize for mobile and fast loading.</li>
            <li>Include contact information and links.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">Related Videos</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <Link to="/videos" className="text-blue-600 underline">
                Explore all our video tutorials
              </Link>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Nq5c1FtOrac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                React Hooks in Telugu Tutorial 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=N7jZxShJ3uI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Medical Coding Course Part 1
              </a>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-8 mb-2">Related Blogs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <Link to="/blog2" className="text-blue-600 underline">
                Understanding JavaScript Closures
              </Link>
            </li>
            <li>
              <Link to="/blog4" className="text-blue-600 underline">
                Responsive Design Best Practices
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <Link to="/blogs" className="text-primary underline">
              ← Back to Blog
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default Blog1;
