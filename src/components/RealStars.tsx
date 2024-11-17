import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  shape: number;
  rotation: number;
  twinkleDelay: number;
}

interface ConcentratedArea {
  x: string | number;
  y: string | number;
  radius: number;
}

interface RealStarsProps {
  starCount?: number;
  concentratedArea?: ConcentratedArea;
}

const RealStars: React.FC<RealStarsProps> = ({ 
  starCount = 50, 
  concentratedArea 
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  // Different star shape paths
  const starShapes = [
    // Classic 5-point star
    "M25.5 0L31.85 18.6H51.11L35.63 30.09L41.98 48.69L25.5 37.2L9.02 48.69L15.37 30.09L0 18.6H19.13L25.5 0Z",
    // 6-point star
    "M12 0L14.8 8.2L23 11L14.8 13.8L12 22L9.2 13.8L1 11L9.2 8.2L12 0Z",
    // 4-point star
    "M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z",
    // Sparkle star
    "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
    // Thin star
    "M12 0L13 9L22 12L13 15L12 24L11 15L2 12L11 9L12 0Z",
    // Small dot star
    "M12 0A12 12 0 1 0 12 24A12 12 0 1 0 12 0",
  ];

  useEffect(() => {
    const generateStarPosition = (index: number): { x: string; y: string } => {
      if (concentratedArea) {
        if (index < starCount * 0.7) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * concentratedArea.radius;
          const centerX = typeof concentratedArea.x === 'string' 
            ? parseFloat(concentratedArea.x) 
            : concentratedArea.x;
          const centerY = typeof concentratedArea.y === 'string'
            ? parseFloat(concentratedArea.y)
            : concentratedArea.y;
          
          return {
            x: `calc(${centerX} + ${Math.cos(angle) * distance}px)`,
            y: `calc(${centerY} + ${Math.sin(angle) * distance}px)`,
          };
        }
      }
      
      return {
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
      };
    };

    const newStars = Array.from({ length: starCount }, (_, i) => {
      const position = generateStarPosition(i);
      return {
        id: i,
        ...position,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        shape: Math.floor(Math.random() * starShapes.length),
        rotation: Math.random() * 360,
        twinkleDelay: Math.random() * 5, 
      };
    });

    setStars(newStars);
  }, [starCount, concentratedArea]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute mix-blend-screen"
          style={{
            left: star.x,
            top: star.y,
            transform: `rotate(${star.rotation}deg)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [star.size, star.size * 1.2, star.size],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <div className={`
            ${Math.random() > 0.5 ? 'animate-twinkle' : 'animate-twinkle-slow'}
            transition-all duration-300
          `}>
            <svg
              width={24}
              height={24}
              viewBox="0 0 51 48"
              className={`w-3 h-3 ${
                Math.random() > 0.5 
                  ? 'text-accent-lavender/40 dark:text-accent-mint/70 filter drop-shadow-glow-purple dark:drop-shadow-glow-yellow' 
                  : 'text-accent-peach/40 dark:text-accent-mint/70 filter drop-shadow-glow-pink dark:drop-shadow-glow-blue'
              }`}
              style={{
                animationDelay: `${star.twinkleDelay}s`,
              }}
            >
              <path
                fill="currentColor"
                d={starShapes[star.shape]}
              />
            </svg>
            <div 
              className={`absolute inset-0 rounded-full bg-current filter blur-md 
                opacity-40 dark:opacity-60 ${
                  Math.random() > 0.7 ? 'animate-pulse-slow' : 'animate-pulse-slower'
                }`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RealStars;
