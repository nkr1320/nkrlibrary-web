import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Home as HomeIcon, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-8xl md:text-9xl font-bold text-primary/20"
          >
            404
          </motion.div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Oops. This might be a fake job link 😅
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Just kidding! The page you're looking for doesn't exist. 
            But hey, while you're here, want to learn how to spot fake job links?
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to="/"
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  background: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'hsl(var(--primary))',
                    filter: 'brightness(0.9)',
                  },
                }}
              >
                Back to Home
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to="/tutorials"
                variant="outlined"
                size="large"
                startIcon={<ArrowBack />}
                sx={{
                  borderColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary))',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'hsl(var(--primary))',
                    background: 'hsl(var(--primary) / 0.1)',
                  },
                }}
              >
                Learn About Scams
              </Button>
            </motion.div>
          </motion.div>

          {/* Fun Animation */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl mt-8"
          >
            🤔
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;