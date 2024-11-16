import React, { useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface PartyPopperProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  interval?: number;
  size?: 'small' | 'medium' | 'large';
}

const PartyPopper: React.FC<PartyPopperProps> = ({ 
  position, 
  interval = 3000,
  size = 'medium'
}) => {
  const fire = useCallback(() => {
    const count = size === 'small' ? 30 : size === 'medium' ? 50 : 70;
    const spread = size === 'small' ? 50 : size === 'medium' ? 70 : 90;
    const startVelocity = size === 'small' ? 15 : size === 'medium' ? 25 : 35;

    let origin = { x: 0, y: 0 };
    switch (position) {
      case 'top-left':
        origin = { x: 0, y: 0 };
        break;
      case 'top-right':
        origin = { x: 1, y: 0 };
        break;
      case 'bottom-left':
        origin = { x: 0, y: 1 };
        break;
      case 'bottom-right':
        origin = { x: 1, y: 1 };
        break;
    }

    confetti({
      particleCount: count,
      spread: spread,
      startVelocity: startVelocity,
      origin,
      colors: ['#4F46E5', '#7C3AED', '#EC4899'],
      zIndex: 1000,
    });
  }, [position, size]);

  useEffect(() => {
    const intervalId = setInterval(fire, interval);
    return () => clearInterval(intervalId);
  }, [fire, interval]);

  return null;
};

export default PartyPopper;
