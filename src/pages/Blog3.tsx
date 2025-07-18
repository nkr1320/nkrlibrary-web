import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";

const Blog3: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <SEOHead
      title="Blog 3: Protect Yourself from Cyber Scams | NKR Library"
      description="Learn how to spot phishing, sextortion, and other cyber scams. Get practical digital safety tips and watch our video guides."
    />
    <h1 className="text-3xl font-bold mb-4">
      Blog 3: Protect Yourself from Cyber Scams
    </h1>
    <p className="mb-4">
      As our lives become more digital, cyber scams are becoming increasingly
      common. From phishing emails to fake apps, it’s important to stay informed
      and vigilant to protect your personal information and finances.
    </p>
    <div className="my-6">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/EeKi6msUr28"
        title="What is Phishing Attack and Types of Email Scams"
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
        Fake apps like GB WhatsApp: Why you should avoid unofficial downloads
      </li>
      <li>
        Data breach protection: Monitoring your accounts for unusual activity
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
      Digital safety is everyone’s responsibility. Share these tips with friends
      and family, and explore our video guides for more ways to stay protected
      online.
    </p>
    <h3 className="text-lg font-semibold mt-8 mb-2">Related Blogs</h3>
    <ul className="list-disc ml-6 mb-4">
      <li>
        <a href="/blog2" className="text-blue-600 underline">
          Mastering Software & Development Tools
        </a>
      </li>
      <li>
        <a href="/blog9" className="text-blue-600 underline">
          How to Spot Phishing and Email Scams
        </a>
      </li>
    </ul>
  </main>
);

export default Blog3;
