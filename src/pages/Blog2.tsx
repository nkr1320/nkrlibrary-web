import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";

const Blog2: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <SEOHead
      title="Blog 2: Mastering Software & Development Tools | NKR Library"
      description="Learn how to master Git, React, NodeJS, Bootstrap, and more with our expert video tutorials and tips for tech success."
    />
    <h1 className="text-3xl font-bold mb-4">
      Blog 2: Mastering Software & Development Tools
    </h1>
    <p className="mb-4">
      In today’s digital world, mastering software and development tools is
      essential for students, professionals, and anyone looking to build a tech
      career. With the right resources and guidance, you can quickly become
      proficient in the tools that power modern technology.
    </p>
    <div className="my-6">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/YCrXCm416mY"
        title="Git Installation Latest Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
      <p className="text-xs text-muted-foreground mt-2">
        Watch our latest video on setting up Git for your software projects!
      </p>
    </div>
    <h2 className="text-xl font-semibold mt-6 mb-2">Featured Tutorials</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>
        <a
          href="https://www.youtube.com/watch?v=YCrXCm416mY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Git Installation Latest Video
        </a>
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
        <a href="/videos" className="text-blue-600 underline">
          Explore all our video tutorials
        </a>
      </li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Tips for Success</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Practice with real-world projects to reinforce your learning.</li>
      <li>Stay updated with the latest software releases and features.</li>
      <li>
        Join online communities and forums to ask questions and share knowledge.
      </li>
      <li>Watch step-by-step video tutorials for hands-on guidance.</li>
    </ul>
    <p className="mb-4">
      By dedicating time to learn and experiment with these tools, you’ll gain
      the confidence and skills needed to succeed in the tech industry. Explore
      our video tutorials for more in-depth guidance!
    </p>
    <h3 className="text-lg font-semibold mt-8 mb-2">Related Blogs</h3>
    <ul className="list-disc ml-6 mb-4">
      <li>
        <a href="/blog3" className="text-blue-600 underline">
          Protect Yourself from Cyber Scams
        </a>
      </li>
      <li>
        <a href="/blog7" className="text-blue-600 underline">
          Getting Started with Git
        </a>
      </li>
    </ul>
    <div className="mt-8">
      <a href="/" className="text-primary underline">
        ← Back to Home
      </a>
    </div>
  </main>
);

export default Blog2;
