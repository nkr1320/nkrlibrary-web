import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface NavItem {
  label: string;
  path?: string;
  action?: () => void;
}

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const [blogOpen, setBlogOpen] = useState(false);
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center flex-wrap gap-2 sm:gap-4 px-0.5 sm:px-0">
      {navItems.map((item) => (
        <motion.div
          key={item.path || item.label}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {item.label === "Blog" ? (
            <div className="relative group">
              <button
                className={`text-[10px] sm:text-xs font-medium transition-colors hover:text-primary px-1 py-0.5 rounded-md ${blogOpen || location.pathname.startsWith("/blog") ? "text-primary bg-primary/10" : "text-muted-foreground"}`}
                onClick={() => setBlogOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={blogOpen}
              >
                Blog
              </button>
              {blogOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-border rounded shadow-lg z-50">
                  <Link
                    to="/blogs"
                    className={`block px-4 py-2 text-sm hover:bg-primary/10 ${location.pathname === "/blogs" ? "text-primary font-semibold" : "text-muted-foreground"}`}
                  >
                    All Blogs
                  </Link>
                  {[...Array(10)].map((_, i) => (
                    <Link
                      key={`blog${i + 1}`}
                      to={`/blog${i + 1}`}
                      className={`block px-4 py-2 text-sm hover:bg-primary/10 ${location.pathname === `/blog${i + 1}` ? "text-primary font-semibold" : "text-muted-foreground"}`}
                    >
                      Blog {i + 1}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : item.path ? (
            <Link
              to={item.path}
              className={`text-[10px] sm:text-xs font-medium transition-colors hover:text-primary px-1 py-0.5 rounded-md ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              }`}
              style={{ minWidth: 0, maxWidth: "100%", whiteSpace: "nowrap" }}
              onClick={(e) => {
                if (location.pathname === item.path) {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  e.preventDefault();
                }
              }}
            >
              {item.label}
            </Link>
          ) : (
            <button
              onClick={item.action}
              className="text-[10px] sm:text-xs font-medium transition-colors hover:text-primary text-muted-foreground px-1 py-0.5 rounded-md"
              style={{ minWidth: 0, maxWidth: "100%", whiteSpace: "nowrap" }}
            >
              {item.label}
            </button>
          )}
        </motion.div>
      ))}
      {/* Dark Mode Toggle */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-muted-foreground hover:text-primary p-1 rounded-full"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </motion.div>
      <select
        className="ml-1 sm:ml-2 rounded border px-1 py-0.5 text-[11px] sm:text-xs bg-white dark:bg-gray-800 dark:text-gray-100"
        value={i18n.language}
        onChange={changeLanguage}
        aria-label="Select language"
        style={{ minWidth: 0 }}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
};

export default DesktopNavigation;
