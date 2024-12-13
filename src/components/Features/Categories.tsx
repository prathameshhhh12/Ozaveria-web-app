import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    image: '/src/components/Features/earrnings.jpg',
    name: 'Earrings',
    subtitle: 'For the most awaited moment!'
  },
  {
    image: '/src/components/Features/pendants.jpg',
    name: 'Pendants',
    subtitle: 'Timeless beauty for love!'
  },
  {
    image: '/src/components/Features/bangels.jpg',
    name: 'Bangels',
    subtitle: 'For elegance & grace!'
  },
  {
    image: '/src/components/Features/bracelets.jpg',
    name: 'Bracelets',
    subtitle: 'For your stylish touch!'
  },
  {
    image: '/src/components/Features/bracelets.jpg',
    name: 'Neclace',
    subtitle: 'Brilliance in every cut!'
  },
  {
    image: '/src/components/Features/mangalsutra.png',
    name: 'Mangalsutra',
    subtitle: 'Everyday elegance!'
  },
  {
    image: '/src/components/Features/nosepin.jpg',
    name: 'NosePin',
    subtitle: 'For timeless precision!'
  },
  {
    image: '/src/components/Features/solitare.jpg',
    name: 'Solitare',
    subtitle: 'Royal elegance!'
  }
];

export const Categories: React.FC = () => {
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
          className="text-4xl font-bold text-center text-[#026456] mb-16 font-playfair"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#026456] font-poppins">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{category.subtitle}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-4 py-2 text-sm font-medium border border-[#026456] text-[#026456] rounded-full hover:bg-[#026456] hover:text-white transition-colors"
              >
                Discover More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
