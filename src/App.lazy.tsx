import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/layout/Layout";
import { SentrumProvider } from "./contexts/SentrumContext";
import SentrumModal from "./components/sentrum/SentrumModal";

// Lazy load heavy components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const Contact = lazy(() => import("./pages/Contact"));
const Videos = lazy(() => import("./pages/Videos"));
const CyberScams = lazy(() => import("./pages/CyberScams"));

// CyberScams pages
const DataLeaks = lazy(() => import("./pages/cyberscams/DataLeaks"));
const HoneyTrap = lazy(() => import("./pages/cyberscams/HoneyTrap"));
const Phishing = lazy(() => import("./pages/cyberscams/Phishing"));
const CyberAttacks = lazy(() => import("./pages/cyberscams/CyberAttacks"));
const Sextortion = lazy(() => import("./pages/cyberscams/Sextortion"));
const StrangerCalls = lazy(() => import("./pages/cyberscams/StrangerCalls"));
const GBWhatsApp = lazy(() => import("./pages/cyberscams/GBWhatsApp"));
const Cyberbullying = lazy(() => import("./pages/cyberscams/Cyberbullying"));

// Software pages
const ComputerBasics = lazy(() => import("./pages/software/ComputerBasics"));
const Installations = lazy(() => import("./pages/software/Installations"));
const SoftwareCourses = lazy(() => import("./pages/software/Courses"));
const Photoshop = lazy(() => import("./pages/software/Photoshop"));

// About pages
const StudentFocused = lazy(() => import("./pages/about/StudentFocused"));
const ScamAwareness = lazy(() => import("./pages/about/ScamAwareness"));
const FreeWebsites = lazy(() => import("./pages/about/FreeWebsites"));
const CommunityDriven = lazy(() => import("./pages/about/CommunityDriven"));
const Freebies = lazy(() => import("./pages/Freebies"));
const Donate = lazy(() => import("./pages/Donate"));
const Social = lazy(() => import("./pages/Social"));

const Chatbot = lazy(() => import("./pages/Chatbot"));

const NotFound = lazy(() => import("./pages/NotFound"));

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
        <SentrumProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cyberscams" element={<CyberScams />} />
                <Route path="/cyberscams/data-leaks" element={<DataLeaks />} />
                <Route path="/cyberscams/honey-trap" element={<HoneyTrap />} />
                <Route path="/cyberscams/phishing" element={<Phishing />} />
                <Route path="/cyberscams/cyber-attacks" element={<CyberAttacks />} />
                <Route path="/cyberscams/sextortion" element={<Sextortion />} />
                <Route path="/cyberscams/stranger-calls" element={<StrangerCalls />} />
                <Route path="/cyberscams/gb-whatsapp" element={<GBWhatsApp />} />
                <Route path="/cyberscams/cyberbullying" element={<Cyberbullying />} />
                
                {/* Software routes */}
                <Route path="/software/computer-basics" element={<ComputerBasics />} />
                <Route path="/software/installations" element={<Installations />} />
                <Route path="/software/courses" element={<SoftwareCourses />} />
                <Route path="/software/photoshop" element={<Photoshop />} />
                
                {/* About routes */}
                <Route path="/about/student-focused" element={<StudentFocused />} />
                <Route path="/about/scam-awareness" element={<ScamAwareness />} />
                <Route path="/about/free-websites" element={<FreeWebsites />} />
                <Route path="/about/community-driven" element={<CommunityDriven />} />
                
                {/* Chatbot route */}
                <Route path="/chatbot" element={<Chatbot />} />
                {/* Freebies route */}
                <Route path="/freebies" element={<Freebies />} />
                {/* Donate route */}
                <Route path="/donate" element={<Donate />} />
                {/* Social route */}
                <Route path="/social" element={<Social />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <SentrumModal />
          </Layout>
          </BrowserRouter>
        </SentrumProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;