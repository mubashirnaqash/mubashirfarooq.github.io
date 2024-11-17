import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaUserAstronaut, FaUser, FaBriefcase, FaCode, 
  FaComments, FaEnvelope, FaChevronUp, FaChevronDown 
} from 'react-icons/fa';

import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import IntroSection from './components/IntroSection';
import PartyPopper from './components/PartyPopper';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import Navigation from './components/Navigation';
import Hobbies from './components/Hobbies';
import CircularStarDecoration from './components/CircularStarDecoration';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentSection, setCurrentSection] = useState('welcome');
  const [showFireworks, setShowFireworks] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowFireworks(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (['welcome', 'about', 'experience', 'projects', 'hobbies', 'reviews', 'contact'].includes(sectionId || '')) {
            setCurrentSection(sectionId || '');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      id: 'welcome',
      label: 'Home',
      icon: <FaUserAstronaut className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'about',
      label: 'About',
      icon: <FaUser className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: <FaBriefcase className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FaCode className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'hobbies',
      label: 'Hobbies',
      icon: <FaComments className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: <FaComments className="text-2xl group-hover:text-gradient-start" />
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <FaEnvelope className="text-2xl group-hover:text-gradient-start" />
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-cream-50 dark:bg-gray-900 text-gray-900 dark:text-white relative">
        {/* Party Poppers */}
        <PartyPopper position="top-left" interval={2500} size="small" />
        <PartyPopper position="top-right" interval={3000} size="small" />
        <PartyPopper position="bottom-left" interval={2700} size="small" />
        <PartyPopper position="bottom-right" interval={3200} size="small" />

        {/* Fireworks */}
        {showFireworks && <div />}

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <div />
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                {/* Theme Toggle - Mobile */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 mr-2"
                >
                  {darkMode ? (
                    <div />
                  ) : (
                    <div />
                  )}
                </button>

                {/* Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMobileMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`group flex items-center space-x-2 cursor-pointer
                      ${currentSection === item.id ? 'text-gradient-start' : 'text-gray-600 dark:text-gray-300'}
                      hover:text-gradient-start transition-colors duration-300`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Theme Toggle - Desktop */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  {darkMode ? (
                    <div />
                  ) : (
                    <div />
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
                  {navigationItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium
                        ${currentSection === item.id 
                          ? 'text-gradient-start bg-gray-900/10 dark:bg-gray-800' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-900/5 dark:hover:bg-gray-800/50'
                        }
                        transition-colors duration-300`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <main className="relative">
          <StarBackground />
          <Navigation />
          {/* Welcome Section */}
          <section id="welcome" className="relative min-h-screen">
            <CircularStarDecoration />
            <WelcomeSection />
          </section>

          {/* Intro Section */}
          <section className="relative min-h-screen">
            <IntroSection />
          </section>

          {/* About Section */}
          <section id="about" className="relative min-h-screen pt-16">
            <CircularStarDecoration />
            <About />
          </section>

          {/* Experience Section */}
          <section id="experience" className="relative min-h-screen py-20">
            <CircularStarDecoration />
            <Experience />
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative min-h-screen py-20">
            <CircularStarDecoration />
            <Projects />
          </section>

          {/* Hobbies Section */}
          <section id="hobbies" className="relative min-h-screen py-20">
            <CircularStarDecoration />
            <Hobbies />
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="relative min-h-screen py-20">
            <CircularStarDecoration />
            <Reviews />
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative min-h-screen py-20">
            <CircularStarDecoration />
            <Contact />
          </section>
        </main>

        {/* Background Effects */}
        <div />
        <Footer />
      </div>
    </div>
  );
}

export default App;
