import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";

const Blog1: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <SEOHead
      title="Blog 1: The Power of Learning Online | NKR Library"
      description="Online learning has revolutionized education, making it accessible to millions worldwide. Explore benefits, tips for success, and more."
    />
    <h1 className="text-3xl font-bold mb-4">
      Blog 1: The Power of Learning Online
    </h1>
    <p className="mb-4">
      Online learning has revolutionized education, making it accessible to
      millions worldwide. Whether you’re a student, a professional, or a
      lifelong learner, digital platforms offer flexibility and a wealth of
      resources.
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
    <h2 className="text-xl font-semibold mt-6 mb-2">
      Benefits of Online Learning
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Learn at your own pace, anytime and anywhere.</li>
      <li>Access to a global pool of courses and instructors.</li>
      <li>Cost-effective compared to traditional education.</li>
      <li>Interactive tools and multimedia enhance understanding.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Tips for Success</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Set a regular study schedule and stick to it.</li>
      <li>Participate in online forums and discussions.</li>
      <li>Take notes and review them regularly.</li>
      <li>Don’t hesitate to ask questions or seek help.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Related Videos</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>
        <a href="/videos" className="text-blue-600 underline">
          Explore all our video tutorials
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
        <a href="/blog2" className="text-blue-600 underline">
          Mastering Software & Development Tools
        </a>
      </li>
      <li>
        <a href="/blog6" className="text-blue-600 underline">
          Building a Career in the Digital Age
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

export default Blog1;
