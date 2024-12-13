import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: '30 L+', label: 'Registered Buyers' },
  { number: '25 k+', label: 'Suppliers' },
  { number: '900+', label: 'Cities' }
];

export const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-[#FAF7C8] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#026456] mb-16"
        >
          Join India's largest eB2B platform
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-[#026456] bg-opacity-20 backdrop-blur-lg"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.2, 1],
                  transition: { 
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    scale: { duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }
                } : {}}
                className="text-5xl font-bold text-[#DCA818] mb-4"
              >
                {stat.number}
              </motion.div>
              <div className="text-xl font-medium text-[#026456]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
