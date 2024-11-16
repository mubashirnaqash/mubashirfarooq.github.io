import React from 'react';

type StarSize = 'sm' | 'md' | 'lg';

interface StarProps {
  size?: StarSize;
  className?: string;
}

const Star: React.FC<StarProps> = ({ size = 'sm', className = '' }) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 51 48" fill="currentColor">
        <path d="M25.5 0L31.5 16.5H49.5L35 27L40.5 44L25.5 34.5L10.5 44L16 27L1.5 16.5H19.5L25.5 0Z" />
      </svg>
    </div>
  );
};

interface BackgroundStarsProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

interface StarConfig {
  top: string;
  left: string;
  color: string;
  size: StarSize;
}

const BackgroundStars: React.FC<BackgroundStarsProps> = ({ 
  density = 'medium',
  className = ''
}) => {
  const stars = React.useMemo(() => {
    // Move constants inside useMemo
    const starCounts = {
      low: 50,
      medium: 100,
      high: 150
    };

    const starColors = [
      'text-blue-200',   // Sirius (blue-white)
      'text-yellow-200', // Sun-like
      'text-orange-300', // Betelgeuse (orange)
      'text-red-300',    // Antares (red)
      'text-indigo-200', // Rigel (blue)
      'text-white',      // White dwarf
      'text-purple-200', // Purple star
      'text-pink-200',   // Pink star
    ];

    return [...Array(starCounts[density])].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      size: (Math.random() > 0.8 ? 'lg' : Math.random() > 0.6 ? 'md' : 'sm') as StarSize
    }));
  }, [density]); // Only density as dependency

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {stars.map((star, i) => (
        <div
          key={`bg-star-${i}`}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          <Star 
            size={star.size}
            className={`${star.color} opacity-40`}
          />
        </div>
      ))}
    </div>
  );
};

const SectionStars = ({ density = 'low' }: { density?: 'low' | 'medium' | 'high' }) => (
  <BackgroundStars density={density} className="absolute inset-0 z-0" />
);

const HeadlineStars = () => (
  <BackgroundStars density="high" className="absolute inset-0 z-0" />
);

export { Star, SectionStars, HeadlineStars };
export default BackgroundStars;
