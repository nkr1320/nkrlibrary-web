import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../header/logonewcircle.ico';

const HeaderLogo: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0"
    >
      <Link to="/" className="flex items-center text-lg sm:text-xl md:text-2xl font-bold text-primary no-underline">
         <img src={logo} alt="NKR Logo" className="h-8 w-auto mr-2" /> <span>NKR LIBRARY</span>
      </Link>
    </motion.div>
  );
};

export default HeaderLogo;