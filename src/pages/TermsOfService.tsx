import React from "react";

const TermsOfService: React.FC = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-4">
      By using NKR Library, you agree to the following terms and conditions.
      Please read them carefully.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Use of Site</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You must use this site in compliance with all applicable laws.</li>
      <li>Do not misuse or attempt to disrupt the site or its services.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
    <p className="mb-4">
      All content on this site is the property of NKR Library or its licensors.
      Do not copy or redistribute without permission.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
    <p className="mb-4">
      This site is provided "as is" without warranties of any kind. We are not
      liable for any damages resulting from use of the site.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
    <p className="mb-4">
      We may update these terms at any time. Continued use of the site means you
      accept the updated terms.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
    <p className="mb-4">
      For questions about these terms, contact us at{" "}
      <a href="mailto:info@nkrlibrary.net" className="text-blue-600 underline">
        info@nkrlibrary.net
      </a>
      .
    </p>
  </main>
);

export default TermsOfService;
