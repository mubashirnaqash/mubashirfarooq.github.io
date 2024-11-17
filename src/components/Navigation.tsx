import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
  FaHome, FaUser, FaBriefcase, FaCode, 
  FaEnvelope, FaStar, FaHeart 
} from 'react-icons/fa';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'welcome', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'hobbies', label: 'Hobbies', icon: FaHeart },
    { id: 'reviews', label: 'Reviews', icon: FaStar },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  const getItemColor = (id: string) => {
    if (activeSection === id) return 'text-orange-500';
    if (hoveredItem === id) return 'text-purple-400';
    return 'text-gray-400';
  };

  const getBackgroundColor = (id: string) => {
    if (activeSection === id) return 'bg-orange-500/20';
    if (hoveredItem === id) return 'bg-purple-500/20';
    return '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <ul className="flex space-x-2 py-4">
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
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Background Highlight */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg ${getBackgroundColor(id)}`}
                    layoutId="navBackground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />

                  {/* Icon */}
                  <Icon 
                    className={`w-5 h-5 transition-all duration-300 ${getItemColor(id)}`}
                  />

                  {/* Label */}
                  <span 
                    className={`relative transition-all duration-300 ${getItemColor(id)}
                      ${activeSection === id ? 'font-semibold scale-105' : ''}
                      ${hoveredItem === id ? 'font-medium scale-105' : ''}`}
                  >
                    {label}
                  </span>

                  {/* Hover Glow Effect */}
                  {hoveredItem === id && (
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-75
                        bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-sm"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                        scale: [0.95, 1.05, 0.95]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
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
