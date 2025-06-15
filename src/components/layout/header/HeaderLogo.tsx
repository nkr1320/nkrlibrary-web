import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderLogo: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0"
    >
      <Link to="/" className="flex items-center text-lg sm:text-xl md:text-2xl font-bold text-primary no-underline">
        <span>NKR LIBRARY</span>
      </Link>
    </motion.div>
  );
};

export default HeaderLogo;