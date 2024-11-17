import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollArrows = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowTopArrow(scrollTop > clientHeight * 0.5);
      setShowBottomArrow(scrollTop < scrollHeight - clientHeight * 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const buttonClasses = "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-cream-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:text-white backdrop-blur-sm";

  return (
    <div className="fixed right-4 md:right-8 z-[100] flex flex-col gap-4">
      <AnimatePresence>
        {showTopArrow && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className={`${buttonClasses} hover:from-accent-peach hover:to-accent-mint top-20 md:top-32`}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-peach/20 to-accent-mint/20 rounded-full blur animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBottomArrow && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBottom}
            className={`${buttonClasses} hover:from-accent-mint hover:to-accent-peach bottom-4 md:bottom-8`}
            aria-label="Scroll to bottom"
          >
            <FaArrowDown className="w-4 h-4 md:w-5 md:h-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-mint/20 to-accent-peach/20 rounded-full blur animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollArrows;
