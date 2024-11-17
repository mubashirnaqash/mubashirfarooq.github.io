import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
  FaHome, FaUser, FaBriefcase, FaCode, 
  FaEnvelope, FaStar, FaHeart
} from 'react-icons/fa';
import AnalogClock from './AnalogClock';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const navItems = [
    { id: 'welcome', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'hobbies', label: 'Hobbies', icon: FaHeart },
    { id: 'reviews', label: 'Reviews', icon: FaStar },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Clock on the left */}
          <div className="flex-shrink-0">
            <AnalogClock />
          </div>

          {/* Navigation items right-aligned */}
          <ul className="flex space-x-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <Link
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onSetActive={() => setActiveSection(id)}
                  className="relative px-4 py-2 flex items-center space-x-2 cursor-pointer group"
                >
                  {/* Background Highlight */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg transition-colors duration-300
                      ${activeSection === id ? 'bg-orange-500/20' : 'group-hover:bg-orange-500/20'}`}
                    layoutId="navBackground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />

                  {/* Icon */}
                  <Icon 
                    className={`w-5 h-5 transition-colors duration-300
                      ${activeSection === id 
                        ? 'text-orange-500' 
                        : 'text-gray-400 group-hover:text-orange-400'}`}
                  />

                  {/* Label */}
                  <span 
                    className={`relative transition-colors duration-300
                      ${activeSection === id 
                        ? 'text-orange-500 font-semibold' 
                        : 'text-gray-400 group-hover:text-orange-400'}`}
                  >
                    {label}
                  </span>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                      bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur"
                    initial={false}
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
