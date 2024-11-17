import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { HeadlineStars } from './BackgroundStars';
import ProfilePhoto from './ProfilePhoto';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      {/* Stars Background */}
      <HeadlineStars />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left Side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/3 relative"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy blur"></div>
            
            {/* Photo Container */}
            <div className="relative rounded-full overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
              <ProfilePhoto />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div 
          className="w-2/3 pl-12 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Welcome Text with Gradient and Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-fancy"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent
              animate-gradient-x filter drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              Welcome to World of AI
            </span>
          </motion.h1>

          {/* Name with Slide Effect */}
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white font-fancy
              filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            I'm Mubashir Farooq
          </motion.h2>

          {/* Tagline with Fade and Glow */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-4xl text-gray-300 font-fancy
              bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent
              transform hover:scale-105 transition-transform duration-300"
          >
            Transforming Ideas into Intelligent Solutions
          </motion.h3>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            <FaChevronDown className="text-3xl" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
