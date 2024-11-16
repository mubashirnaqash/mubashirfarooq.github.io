import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineComputerDesktop, HiOutlineDevicePhoneMobile, HiOutlineDeviceTablet } from 'react-icons/hi2';
import { PiLaptopThin } from 'react-icons/pi';
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

      {/* Main Content */}
      <div className="relative z-10 text-center p-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ProfilePhoto />
          </motion.div>

          {/* Welcome Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
                type: "spring",
                stiffness: 200
              }}
              className="text-blue-500 transform hover:scale-110 transition-transform"
            >
              <HiOutlineComputerDesktop className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="text-purple-500 transform hover:scale-110 transition-transform"
            >
              <HiOutlineDevicePhoneMobile className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              className="text-pink-500 transform hover:scale-110 transition-transform"
            >
              <PiLaptopThin className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              className="text-indigo-500 transform hover:scale-110 transition-transform"
            >
              <HiOutlineDeviceTablet className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-8"
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
              >
                <FaChevronDown className="text-white text-3xl" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
