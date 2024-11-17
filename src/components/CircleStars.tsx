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

const CircleStars = () => {
  // Generate stars around a circle
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 150; // Adjust this value to change the circle size
    const randomOffset = Math.random() * 20 - 10; // Random offset for natural look
    
    return {
      id: i,
      x: Math.cos(angle) * (radius + randomOffset),
      y: Math.sin(angle) * (radius + randomOffset),
      size: 8 + Math.random() * 12,
      opacity: 0.2 + Math.random() * 0.3,
      animationDelay: Math.random() * 5,
      rotationSpeed: 10 + Math.random() * 20,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute left-1/2 top-1/2"
            style={{
              x: star.x,
              y: star.y,
              marginLeft: -star.size / 2,
              marginTop: -star.size / 2,
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
              className="text-purple-300/30 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.35)]" 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CircleStars;
