import React, { useMemo } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import Header from "./Header";
import Footer from "./Footer";
import FloatingChatbot from "../sentrum/FloatingChatbot";
import { Helmet } from "react-helmet-async";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Plausible Analytics for privacy-friendly site analytics. Replace domain with your own if needed. */}
      <Helmet>
        <script
          async
          defer
          data-domain="nkrlibrary.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 w-full flex flex-col" style={{ scrollMarginTop: '72px' }}>
          <div className="container mx-auto px-2 sm:px-4 md:px-8 flex-1 w-full">
            {children}
          </div>
        </main>
        <Footer />
        <FloatingChatbot />
      </div>
    </>
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
    </NextThemeProvider>
  );
};

export default LayoutWrapper;
