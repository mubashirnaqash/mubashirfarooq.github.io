import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = () => {
  const profilePhotoUrl = process.env.NODE_ENV === 'development'
    ? '/mubashir-photo.jpg'
    : `${process.env.PUBLIC_URL}/mubashir-photo.jpg`;

  return (
    <div className="relative group">
      {/* Outer Glow Ring */}
      <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full 
        opacity-75 group-hover:opacity-100 blur-lg transition-all duration-1000 group-hover:duration-200 
        animate-spin-slow"></div>

      {/* Inner Glow Ring */}
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full 
        opacity-50 group-hover:opacity-75 blur-md transition-all duration-1000 
        animate-spin-reverse-slow"></div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Photo Container */}
      <motion.div
        className="relative w-[300px] h-[350px] rounded-full overflow-hidden border-4 border-purple-500/30
          transform group-hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-pink-900/50 mix-blend-overlay"></div>
        
        {/* Photo */}
        <img
          src={profilePhotoUrl}
          alt="Mubashir Naqash"
          className="w-full h-full object-cover object-center transform scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>

      {/* Particle Effects */}
      <div className="absolute -inset-8 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePhoto;
