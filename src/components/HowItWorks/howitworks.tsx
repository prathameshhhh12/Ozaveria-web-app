import React from 'react';
import { motion } from 'framer-motion';

// Import Google Font (you can also import this in your CSS or global styles)
import '@fontsource/poppins'; // Install via npm or yarn: npm install @fontsource/poppins

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white py-20" id="how-it-works" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-semibold text-[#026456] mb-8"
        >
          How It Works: Your Journey Begins Here
        </motion.h2>
        <div className="relative flex justify-center items-center">
          {/* Path Animation */}
          <div className="absolute top-0 w-full h-full z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 500"
              fill="none"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="M0 250C300 50 600 100 900 250C1200 400 1500 450 1500 500H0V250Z"
                fill="#FFEE58"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
            {/* Seller's Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-6 rounded-lg bg-[#FAF7C8] shadow-lg"
            >
              <h3 className="text-2xl font-medium text-[#026456] mb-4">For Sellers</h3>
              <p className="text-gray-700 mb-4">List your unsold stock on the platform and reach buyers interested in great deals.</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>List your jewelry</li>
                <li>Reach a broad audience</li>
                <li>Turn stock into profit</li>
              </ol>
            </motion.div>

            {/* Buyer's Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="p-6 rounded-lg bg-[#FAF7C8] shadow-lg"
            >
              <h3 className="text-2xl font-medium text-[#026456] mb-4">For Buyers</h3>
              <p className="text-gray-700 mb-4">Explore exclusive listings from sellers clearing their inventory and find great deals.</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Explore listings</li>
                <li>Find great deals on pre-owned jewelry</li>
                <li>Buy with confidence</li>
              </ol>
            </motion.div>

            {/* Interactive Flow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-lg bg-[#026456] text-white flex items-center justify-center shadow-lg"
            >
              <div className="text-center">
                <h3 className="text-xl font-medium mb-4">Your Journey Begins</h3>
                <p className="text-sm">Follow the steps to get started with listing your jewelry, finding buyers, and making sales!</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 p-2 bg-[#FFEE58] rounded-full text-[#026456] font-semibold cursor-pointer"
                >
                  Get Started
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
