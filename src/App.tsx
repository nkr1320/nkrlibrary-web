import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import { SentrumProvider } from "./contexts/SentrumContext";
import { ResumeProvider } from "./contexts/ResumeContext";
import SentrumModal from "./components/sentrum/SentrumModal";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog1 = lazy(() => import("./pages/Blog1"));
const Blog2 = lazy(() => import("./pages/Blog2"));
const Blog3 = lazy(() => import("./pages/Blog3"));
const Blog4 = lazy(() => import("./pages/Blog4"));
const Blog5 = lazy(() => import("./pages/Blog5"));
const Blog6 = lazy(() => import("./pages/Blog6"));
const Blog7 = lazy(() => import("./pages/Blog7"));
const Blog8 = lazy(() => import("./pages/Blog8"));
const Blog9 = lazy(() => import("./pages/Blog9"));
const Blog10 = lazy(() => import("./pages/Blog10"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <ResumeProvider>
          <BrowserRouter>
            <SentrumProvider>
              <Toaster />
              <Sonner />
              <ScrollToTop />
              <Layout>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/blog1" element={<Blog1 />} />
                    <Route path="/blog2" element={<Blog2 />} />
                    <Route path="/blog3" element={<Blog3 />} />
                    <Route path="/blog4" element={<Blog4 />} />
                    <Route path="/blog5" element={<Blog5 />} />
                    <Route path="/blog6" element={<Blog6 />} />
                    <Route path="/blog7" element={<Blog7 />} />
                    <Route path="/blog8" element={<Blog8 />} />
                    <Route path="/blog9" element={<Blog9 />} />
                    <Route path="/blog10" element={<Blog10 />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
                <SentrumModal />
              </Layout>
            </SentrumProvider>
          </BrowserRouter>
        </ResumeProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
