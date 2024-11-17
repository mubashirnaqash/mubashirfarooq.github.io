import React from 'react';
import { motion } from 'framer-motion';

const Star = ({ size = 'sm', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
    >
      <svg viewBox="0 0 51 48" fill="currentColor">
        <path d="M25.5 0L31.5 16.5H49.5L35 27L40.5 44L25.5 34.5L10.5 44L16 27L1.5 16.5H19.5L25.5 0Z" />
      </svg>
    </motion.div>
  );
};

interface StarConfig {
  angle: number;
  distance: number;
  color: string;
  size: 'sm' | 'md' | 'lg';
  delay: number;
}

const CircularStarDecoration = () => {
  const stars = React.useMemo<StarConfig[]>(() => {
    return [...Array(12)].map((_, index) => ({
      angle: (index * 30) + (Math.random() * 20 - 10), // More evenly distributed + random offset
      distance: 45 + Math.random() * 5,
      color: [
        'text-yellow-300',
        'text-orange-300',
        'text-pink-300',
        'text-purple-300',
        'text-indigo-300',
        'text-white',
      ][Math.floor(Math.random() * 6)],
      size: Math.random() > 0.5 ? 'lg' : 'md',
      delay: index * 0.2
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, index) => {
        const angleInRadians = (star.angle * Math.PI) / 180;
        const x = 50 + star.distance * Math.cos(angleInRadians);
        const y = 50 + star.distance * Math.sin(angleInRadians);

        return (
          <motion.div
            key={index}
            className={`absolute ${star.color} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          >
            <Star size={star.size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default CircularStarDecoration;
