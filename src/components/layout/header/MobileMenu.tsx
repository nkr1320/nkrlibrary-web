import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Drawer, List, ListItem, ListItemText, Switch, FormControlLabel } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from 'next-themes';

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

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: '280px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <motion.div
            initial={{ x: 280 }}
            animate={{ x: 0 }}
            exit={{ x: 280 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <span className="text-lg font-semibold">NKR LIBRARY</span>
              <IconButton
                onClick={onClose}
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </div>
            
            <List>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path || item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.path ? (
                    <ListItem
                      component={Link}
                      to={item.path}
                      onClick={onClose}
                      sx={{
                        color: location.pathname === item.path ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'hsl(var(--accent))',
                        },
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ) : (
                    <ListItem
                      onClick={() => {
                        item.action?.();
                        onClose();
                      }}
                      sx={{
                        color: 'hsl(var(--foreground))',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'hsl(var(--accent))',
                        },
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  )}
                </motion.div>
              ))}
            </List>

            <div className="absolute bottom-4 left-4">
              <FormControlLabel
                control={
                  <Switch
                    checked={theme === 'dark'}
                    onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  />
                }
                label="Dark Mode"
              />
            </div>
          </motion.div>
        </Drawer>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;