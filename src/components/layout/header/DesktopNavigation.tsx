import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from 'next-themes';

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

  return (
    <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
      {navItems.map((item) => (
        <motion.div
          key={item.path || item.label}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {item.path ? (
            <Link
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <button
              onClick={item.action}
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
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
    </div>
  );
};

export default DesktopNavigation;