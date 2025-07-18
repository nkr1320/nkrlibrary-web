import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Tutorials", path: "/tutorials" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com/@nkrlibrary/playlists",
      label: "YouTube",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/nkrlibrary/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nkrlibrary/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/naveenkumar-reddy-70b1a314b",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-muted/30 border-t border-border py-12 sm:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold text-primary no-underline"
            >
              NKR Library
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm sm:text-base">
              Tech tutorials, scam awareness, and free websites for students.
              Building digital confidence one learner at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                </motion.div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 leading-relaxed">
              Subscribe to our YouTube channel for the latest tech tutorials and
              scam awareness content.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2025 NKR Library. Built by NKR from nkrlibrary
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
