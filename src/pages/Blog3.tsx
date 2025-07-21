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
  title: "Getting Started with MongoDB",
  excerpt:
    "Beginner's guide to setting up and using MongoDB in your web projects.",
  date: "2024-04-10",
  tags: ["MongoDB", "Database", "Backend"],
  image: "https://placehold.co/800x320?text=MongoDB",
  video: "https://www.youtube.com/embed/EeKi6msUr28",
};

const Blog3: React.FC = () => (
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
              title="MongoDB Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Common Scams to Watch For
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Sextortion: Understanding the risks and how to respond</li>
            <li>Phishing attacks: Spotting suspicious emails and links</li>
            <li>
              Fake apps like GB WhatsApp: Why you should avoid unofficial
              downloads
            </li>
            <li>
              Data breach protection: Monitoring your accounts for unusual
              activity
            </li>
            <li>Adding recovery options to your email for extra security</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">How to Stay Safe</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Never share sensitive information with unknown contacts.</li>
            <li>
              Use strong, unique passwords and enable two-factor authentication.
            </li>
            <li>Be cautious of urgent requests and suspicious attachments.</li>
            <li>Regularly update your software and security settings.</li>
          </ul>
          <p className="mb-4">
            Digital safety is everyone’s responsibility. Share these tips with
            friends and family, and explore our video guides for more ways to
            stay protected online.
          </p>
          <h3 className="text-lg font-semibold mt-8 mb-2">Related Blogs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <Link to="/blog2" className="text-blue-600 underline">
                Mastering Software & Development Tools
              </Link>
            </li>
            <li>
              <Link to="/blog9" className="text-blue-600 underline">
                How to Spot Phishing and Email Scams
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

export default Blog3;
