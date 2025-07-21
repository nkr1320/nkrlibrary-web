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
  title: "Responsive Design Best Practices",
  excerpt: "Tips and tricks for making your websites look great on any device.",
  date: "2024-03-28",
  tags: ["CSS", "Responsive Design"],
  image: "https://placehold.co/800x320?text=Responsive+Design",
  video: "https://www.youtube.com/embed/N7jZxShJ3uI",
};

const Blog4: React.FC = () => (
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
              title="Responsive Design Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Key Topics in Responsive Design
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>ICD guidelines: The foundation of medical coding</li>
            <li>Pregnancy coding: Special considerations and best practices</li>
            <li>HIV/AIDS coding: Ensuring accuracy and confidentiality</li>
            <li>BMI and obesity coding: Why it matters for patient care</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Tips for Aspiring Designers
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Take certified courses to build a strong foundation.</li>
            <li>Practice coding with real-world case studies.</li>
            <li>
              Stay updated with the latest coding standards and regulations.
            </li>
            <li>
              Watch our medical coding video tutorials for practical guidance.
            </li>
          </ul>
          <p className="mb-4">
            Responsive design offers stability, growth, and the chance to make a
            difference in web development. Explore our resources to start your
            journey today!
          </p>
          <h3 className="text-lg font-semibold mt-8 mb-2">Related Blogs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <Link to="/blog6" className="text-blue-600 underline">
                Building a Career in the Digital Age
              </Link>
            </li>
            <li>
              <Link to="/blog5" className="text-blue-600 underline">
                Science & Tech Innovations
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

export default Blog4;
