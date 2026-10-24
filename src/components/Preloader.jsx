
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center text-center w-full px-4"
          >
            {/* Brand Name: Larger */}
            <div className="relative text-7xl md:text-[7.5rem] font-black tracking-tighter leading-none whitespace-nowrap">
              <div className="text-red-900/30">
                {personalInfo.brandName}
              </div>

              <motion.div
                className="absolute inset-0 text-white overflow-hidden whitespace-nowrap"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{
                  duration: 1.6,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              >
                {personalInfo.brandName}
              </motion.div>
            </div>

            {/* Subtitle: Smaller and Centered Below */}
            <div className="mt-3 text-4xl md:text-6xl font-medium tracking-tight leading-tight text-red-900/30 text-center w-full">
              Quality Assurance Analyst | Manual QA
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
