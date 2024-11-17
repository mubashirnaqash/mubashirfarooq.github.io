import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaUserAstronaut, FaUser, FaBriefcase, FaCode, 
  FaComments, FaEnvelope, FaChevronUp, FaChevronDown 
} from 'react-icons/fa';

import Home from './components/Home';
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
import ScrollArrows from './components/ScrollArrows';
import RealStars from './components/RealStars';

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Global background stars */}
        <RealStars starCount={50} />
        
        {/* Additional star layers */}
        <div className="absolute inset-0 z-0">
          {/* Top section stars */}
          <RealStars starCount={20} concentratedArea={{ x: '50%', y: '20%', radius: 300 }} />
          
          {/* Middle section stars */}
          <RealStars starCount={20} concentratedArea={{ x: '30%', y: '50%', radius: 250 }} />
          <RealStars starCount={20} concentratedArea={{ x: '70%', y: '50%', radius: 250 }} />
          
          {/* Bottom section stars */}
          <RealStars starCount={20} concentratedArea={{ x: '50%', y: '80%', radius: 300 }} />
        </div>

        <StarBackground />
        
        {/* Party Poppers */}
        <PartyPopper position="top-left" interval={2500} size="small" />
        <PartyPopper position="top-right" interval={3000} size="small" />
        <PartyPopper position="bottom-left" interval={2700} size="small" />
        <PartyPopper position="bottom-right" interval={3200} size="small" />

        {/* Scroll Arrows */}
        <ScrollArrows />

        {/* Navigation */}
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content */}
        <div className="relative min-h-screen">
          <main className="relative z-10">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Hobbies />
            <Reviews />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
