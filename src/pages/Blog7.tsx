import React from "react";

const Blog7: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-4">Blog 7: Getting Started with Git</h1>
    <p className="mb-4">
      Git is a powerful version control system used by developers worldwide. Learning Git is essential for managing code, collaborating with teams, and tracking project changes.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Why Use Git?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Track changes in your codebase over time</li>
      <li>Collaborate with other developers on projects</li>
      <li>Revert to previous versions if something goes wrong</li>
      <li>Work on multiple features or fixes simultaneously</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Getting Started</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Install Git on your computer (see our video tutorial)</li>
      <li>Learn basic commands: <code>git init</code>, <code>git add</code>, <code>git commit</code>, <code>git push</code></li>
      <li>Use GitHub or GitLab to host your repositories online</li>
      <li>Practice by contributing to open source projects</li>
    </ul>
    <p className="mb-4">
      Mastering Git will make you a more effective and confident developer. Check out our Git video guides for step-by-step instructions!
    </p>
  </main>
);

export default Blog7; 