import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchBar } from "@/components/search/SearchBar";
import { useSentrum } from "@/contexts/SentrumContext";
import HeaderLogo from "./header/HeaderLogo";
import DesktopNavigation from "./header/DesktopNavigation";
import SentrumActions from "./header/SentrumActions";
import MobileActions from "./header/MobileActions";
import MobileMenu from "./header/MobileMenu";
import { useHeaderAnimation } from "./header/useHeaderAnimation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { openSentrum } = useSentrum();
  const { isScrolled, headerVariants } = useHeaderAnimation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Videos", path: "/videos" },
    { label: "Blog" },
    { label: "Resume", action: () => openSentrum("resume") },
    { label: "Notebook", action: () => openSentrum("notebook") },
    { label: "Freebies", path: "/freebies" },
    { label: "Donate", path: "/donate" },
    { label: "Contact", path: "/contact" },
    { label: "Chatbot", path: "/chatbot" },
  ];

  return (
    <>
      <motion.div
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={headerVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="glass-nav border-b border-white/10 dark:border-white/5">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center">
            {/* Logo */}
            <HeaderLogo />

            {/* Search Bar - Desktop */}
            {!isMobile && (
              <div className="flex-1 max-w-md ml-12 mr-8">
                <SearchBar
                  className="w-full"
                  placeholder="Search videos..."
                  variant="header"
                />
              </div>
            )}

            {/* SENTRUM Actions - Desktop */}
            {!isMobile && <SentrumActions />}

            {/* Desktop Navigation */}
            {!isMobile && <DesktopNavigation navItems={navItems} />}

            {/* Mobile Actions */}
            {isMobile && (
              <MobileActions onMenuOpen={() => setMobileMenuOpen(true)} />
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
