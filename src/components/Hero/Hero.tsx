import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-[#026456] to-[#DCA818] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-[#FAF7C8] bg-opacity-20"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-[#FAF7C8] w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Unlock the Potential of Your Dead Stock
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCA818] to-[#FAF7C8]"
            >
              with India's Premier Jewelry Marketplace
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl mb-12 text-[#FAF7C8]"
          >
            List, Sell, and Turn Your Unsold Stock Into Profits – Explore 5 Lakh+ Designs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-[#FAF7C8] text-[#026456] px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-colors mr-4"
          >
            Start Selling Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-transparent border-2 border-[#FAF7C8] text-[#FAF7C8] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#DCA818] hover:text-[#026456] transition-colors"
          >
            Browse Designs
          </motion.button>
        </div>
      </div>
    </div>
  );
};
