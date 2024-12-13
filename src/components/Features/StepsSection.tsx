import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserPlus, CheckCircle, ShoppingBag } from 'lucide-react';  // CheckCircle icon for business verification step

const ozaveriaSteps = [
  {
    icon: <UserPlus className="h-16 w-16" />,
    title: 'Create Your Ozaveria Account',
    description: 'Sign up in a few simple steps and access your personalized dashboard.'
  },
  {
    icon: <CheckCircle className="h-16 w-16" />,
    title: 'Complete KYC Verification',
    description: 'Verify your business identity and unlock premium features.'
  },
  {
    icon: <ShoppingBag className="h-16 w-16" />,
    title: 'Start Selling and Buying',
    description: 'Browse products, make deals, and enjoy seamless transactions.'
  }
];

export const StepsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-24 bg-[#FAF7C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#026456] mb-16"
        >
          Your Journey with Ozaveria in 3 Simple Steps
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ozaveriaSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="flex justify-center mb-6"
              >
                <div className="p-6 rounded-full bg-[#DCA818] text-white shadow-lg hover:shadow-2xl transition duration-300">
                  {step.icon}
                </div>
              </motion.div>
              <h3 className="text-2xl font-semibold text-[#026456] mb-4">{step.title}</h3>
              <p className="text-[#026456] text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
