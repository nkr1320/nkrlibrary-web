import React from "react";

const PrivacyPolicy: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-4">This Privacy Policy explains how NKR Library collects, uses, and protects your information when you use our website.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Personal information you provide (such as name, email, etc.)</li>
      <li>Usage data (pages visited, browser type, etc.)</li>
      <li>Cookies and similar technologies</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To provide and improve our services</li>
      <li>To communicate with you</li>
      <li>To comply with legal obligations</li>
      <li>For analytics and advertising (including Google AdSense)</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
    <p className="mb-4">We use third-party services such as Google AdSense, which may collect information via cookies and similar technologies. Please review their privacy policies for more details.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Your Choices</h2>
    <p className="mb-4">You can manage cookies through your browser settings. For questions about your data, contact us at <a href="mailto:info@nkrlibrary.net" className="text-blue-600 underline">info@nkrlibrary.net</a>.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Updates</h2>
    <p className="mb-4">We may update this Privacy Policy from time to time. Please check this page for the latest version.</p>
  </main>
);

export default PrivacyPolicy; 