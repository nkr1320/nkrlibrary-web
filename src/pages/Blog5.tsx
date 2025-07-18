import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";

const Blog5: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <SEOHead
      title="Blog 5: Science & Tech Innovations | NKR Library"
      description="Explore the latest in science and technology, from Chandrayaan 3 to AI and AR. Watch our video guides and stay curious!"
    />
    <h1 className="text-3xl font-bold mb-4">Blog 5: Science & Tech Innovations</h1>
    <p className="mb-4">
      Science and technology are rapidly changing our world. From space missions to artificial intelligence, staying informed about the latest innovations is key to understanding the future.
    </p>
    <div className="my-6">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/JOOgkr9zDcY"
        title="Why Chandrayaan 3 is Important to India"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
        loading="lazy"
      ></iframe>
    </div>
    <h2 className="text-xl font-semibold mt-6 mb-2">Featured Topics</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Chandrayaan 3: India’s lunar mission and its significance</li>
      <li>Neuralink: The future of brain-computer interfaces</li>
      <li>DeepSeek AI vs ChatGPT: Comparing leading AI technologies</li>
      <li>Augmented Reality: How AR is transforming learning and work</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Why Stay Curious?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Innovations open new career and learning opportunities.</li>
      <li>Understanding tech trends helps you adapt and thrive.</li>
      <li>Our video guides make complex topics easy to grasp.</li>
    </ul>
    <p className="mb-4">
      Explore our science and tech videos to stay ahead of the curve and fuel your curiosity!
    </p>
    <h3 className="text-lg font-semibold mt-8 mb-2">Related Blogs</h3>
    <ul className="list-disc ml-6 mb-4">
      <li><a href="/blog4" className="text-blue-600 underline">Medical Coding – A Career Path in Healthcare</a></li>
      <li><a href="/blog10" className="text-blue-600 underline">The Future of AI and Technology</a></li>
    </ul>
  </main>
);

export default Blog5; 