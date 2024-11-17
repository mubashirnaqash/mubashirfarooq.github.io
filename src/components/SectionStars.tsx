import React from 'react';
import { motion } from 'framer-motion';

const StarSVG = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M12 1l3.22 6.636 7.78.946-5.72 5.492 1.5 7.926L12 18.678 5.22 22l1.5-7.926-5.72-5.492 7.78-.946z"
    />
  </svg>
);

const SectionStars = () => {
  // Generate scattered stars for section
  const stars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 98 + 1,
    y: Math.random() * 98 + 1,
    size: 6 + Math.random() * 12,
    opacity: 0.15 + Math.random() * 0.25,
    animationDelay: Math.random() * 5,
    rotationSpeed: 15 + Math.random() * 25,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: star.rotationSpeed,
            repeat: Infinity,
            delay: star.animationDelay,
          }}
        >
          <StarSVG 
            size={star.size} 
            className="text-purple-300/20 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.25)]" 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionStars;
