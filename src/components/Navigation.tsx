import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FaHome, FaUser, FaBriefcase, FaCode, 
  FaEnvelope, FaStar, FaHeart, FaSun, FaMoon, FaBars, FaTimes
} from 'react-icons/fa';
import AnalogClock from './AnalogClock';

interface NavItem {
  id: string;
  label: string;
  icon: IconType;
}

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'welcome', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'hobbies', label: 'Hobbies', icon: FaHeart },
    { id: 'reviews', label: 'Reviews', icon: FaStar },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  const renderIcon = (Icon: IconType) => {
    return <Icon />;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            {/* Analog Clock */}
            <div className="hidden md:block">
              <AnalogClock />
            </div>

            <Link
              to="welcome"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer"
            >
              MF
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-xl text-yellow-500" />
              ) : (
                <FaMoon className="text-xl text-gray-600" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Main menu"
            >
              {!isMobileMenuOpen ? (
                <FaBars className="text-xl" />
              ) : (
                <FaTimes className="text-xl" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                className={`group flex items-center space-x-2 cursor-pointer text-sm lg:text-base 
                  ${activeSection === item.id 
                    ? 'text-gradient-start font-semibold' 
                    : 'text-gray-600 dark:text-gray-300'} 
                  hover:text-gradient-start transition-all duration-300 ease-in-out
                  relative after:content-[""] after:absolute after:w-full after:h-0.5 
                  after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500 
                  after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 
                  after:transition-transform after:duration-300
                  hover:shadow-glow dark:hover:shadow-glow-dark`}
                activeClass="text-gradient-start font-semibold"
              >
                <span className="text-lg lg:text-xl">{renderIcon(item.icon)}</span>
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-xl lg:text-2xl text-yellow-500" />
              ) : (
                <FaMoon className="text-xl lg:text-2xl text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.id)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium
                    ${activeSection === item.id 
                      ? 'text-orange-500 bg-gray-900/10 dark:bg-gray-800' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-900/5 dark:hover:bg-gray-800/50'
                    }
                    transition-colors duration-300`}
                >
                  <span className="text-lg">{renderIcon(item.icon)}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const styles = `
  @keyframes glow {
    0% {
      text-shadow: 0 0 5px rgba(139, 92, 246, 0.5),
                   0 0 10px rgba(139, 92, 246, 0.3);
    }
    50% {
      text-shadow: 0 0 10px rgba(139, 92, 246, 0.8),
                   0 0 20px rgba(139, 92, 246, 0.5),
                   0 0 30px rgba(139, 92, 246, 0.3);
    }
    100% {
      text-shadow: 0 0 5px rgba(139, 92, 246, 0.5),
                   0 0 10px rgba(139, 92, 246, 0.3);
    }
  }

  .hover\\:shadow-glow:hover {
    animation: glow 2s ease-in-out infinite;
  }

  .dark .hover\\:shadow-glow-dark:hover {
    animation: glow 2s ease-in-out infinite;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Navigation;
