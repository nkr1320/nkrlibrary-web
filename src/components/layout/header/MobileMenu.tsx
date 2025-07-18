import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  path?: string;
  action?: () => void;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: 280 }}
            animate={{ x: 0 }}
            exit={{ x: 280 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 h-full w-full bg-white dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <span className="text-lg font-semibold">NKR LIBRARY</span>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <ul className="py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path || item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label === "Blog" ? (
                    <div>
                      <button
                        onClick={() => setBlogOpen((open) => !open)}
                        className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between"
                        aria-haspopup="true"
                        aria-expanded={blogOpen}
                      >
                        <span>Blog</span>
                        <span className="ml-2">{blogOpen ? "▲" : "▼"}</span>
                      </button>
                      {blogOpen && (
                        <ul className="ml-4 mt-1 bg-white dark:bg-gray-900 border border-border rounded shadow-lg z-50 max-h-60 overflow-y-auto">
                          <li>
                            <Link
                              to="/blogs"
                              onClick={() => {
                                setBlogOpen(false);
                                onClose();
                              }}
                              className={`block px-4 py-2 text-sm hover:bg-primary/10 ${location.pathname === "/blogs" ? "text-primary font-semibold" : "text-muted-foreground"}`}
                            >
                              All Blogs
                            </Link>
                          </li>
                          {[...Array(10)].map((_, i) => (
                            <li key={`blog${i + 1}`}>
                              <Link
                                to={`/blog${i + 1}`}
                                onClick={() => {
                                  setBlogOpen(false);
                                  onClose();
                                }}
                                className={`block px-4 py-2 text-sm hover:bg-primary/10 ${location.pathname === `/blog${i + 1}` ? "text-primary font-semibold" : "text-muted-foreground"}`}
                              >
                                Blog {i + 1}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : item.path ? (
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        if (location.pathname === item.path) {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                          e.preventDefault();
                          onClose();
                        } else {
                          onClose();
                        }
                      }}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.action?.();
                        onClose();
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="absolute bottom-4 left-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Dark Mode
                </span>
              </label>
              <select
                className="mt-2 rounded border px-2 py-1 text-sm bg-white dark:bg-gray-800 dark:text-gray-100 w-full"
                value={i18n.language}
                onChange={changeLanguage}
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
