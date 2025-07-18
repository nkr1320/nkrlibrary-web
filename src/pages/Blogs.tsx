import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";

const blogs = [
  {
    path: "/blog1",
    title: "The Power of Learning Online",
    description: "Explore how online learning is transforming education and empowering students worldwide.",
  },
  {
    path: "/blog2",
    title: "Mastering Software & Development Tools",
    description: "Learn how to master Git, React, NodeJS, and more with our expert video tutorials.",
  },
  {
    path: "/blog3",
    title: "Protect Yourself from Cyber Scams",
    description: "Stay safe online by learning to recognize and avoid common cyber scams and threats.",
  },
  {
    path: "/blog4",
    title: "Medical Coding: A Beginner's Guide",
    description: "An introduction to medical coding, its importance, and how to get started in the field.",
  },
  {
    path: "/blog5",
    title: "Science & Technology: The Future is Now",
    description: "Discover the latest trends and breakthroughs in science and technology.",
  },
  {
    path: "/blog6",
    title: "Building a Career in the Digital Age",
    description: "Tips and resources for launching and growing your career in today’s digital world.",
  },
  {
    path: "/blog7",
    title: "Getting Started with Git",
    description: "A step-by-step guide to installing and using Git for version control.",
  },
  {
    path: "/blog8",
    title: "ReactJS: From Zero to Hero",
    description: "Learn the basics of ReactJS and how to build modern web applications.",
  },
  {
    path: "/blog9",
    title: "Upwork & Freelancing: Your First Steps",
    description: "How to set up your Upwork account and start your freelancing journey.",
  },
  {
    path: "/blog10",
    title: "AI & The Future of Work",
    description: "Explore how artificial intelligence is changing the workplace and what it means for you.",
  },
];

const Blogs: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-5xl">
    <SEOHead
      title="Our Blog | NKR Library"
      description="Browse our collection of educational blogs on software, cybersecurity, medical coding, science, and more."
    />
    <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.path}
          className="bg-card border border-border rounded-lg shadow p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-muted-foreground mb-4">{blog.description}</p>
          </div>
          <Link
            to={blog.path}
            className="mt-auto text-primary underline font-medium hover:text-primary/80"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  </main>
);

export default Blogs; 