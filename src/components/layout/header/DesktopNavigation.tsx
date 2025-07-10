import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

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
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center flex-wrap gap-1 sm:gap-2 px-1 sm:px-0">
      {navItems.map((item) => (
        <motion.div
          key={item.path || item.label}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {item.path ? (
            <Link
              to={item.path}
              className={`text-[11px] sm:text-xs font-medium transition-colors hover:text-primary px-1.5 py-0.5 rounded-md ${
                location.pathname === item.path
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground'
              }`}
              style={{ minWidth: 0, maxWidth: '100%', whiteSpace: 'nowrap' }}
            >
              {item.label}
            </Link>
          ) : (
            <button
              onClick={item.action}
              className="text-[11px] sm:text-xs font-medium transition-colors hover:text-primary text-muted-foreground px-1.5 py-0.5 rounded-md"
              style={{ minWidth: 0, maxWidth: '100%', whiteSpace: 'nowrap' }}
            >
              {item.label}
            </button>
          )}
        </motion.div>
      ))}
      {/* Dark Mode Toggle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          size="small"
          className="text-muted-foreground hover:text-primary"
        >
          {theme === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
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