import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Logo />
          </motion.div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <AnimatePresence>
                {isSearchFocused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute -inset-4 bg-white shadow-lg rounded-lg z-10"
                  />
                )}
              </AnimatePresence>
              <input
                type="text"
                placeholder="Search products..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent relative z-20"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 z-20" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-red-500"
            >
              <User className="h-6 w-6" />
            </motion.button>
            {/* <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-red-500"
            >
              <ShoppingCart className="h-6 w-6" />
            </motion.button> */}
            {/* Get the App Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#026456] text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 border-2 border-white hover:bg-opacity-90 transition-colors"
            >
              <span>Get the App</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#026456] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Login
            </motion.button>

            
          </div>
        </div>
      </div>
    </motion.header>
  );
};
