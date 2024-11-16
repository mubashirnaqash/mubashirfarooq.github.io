import React from 'react';

interface StarProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const Star: React.FC<StarProps> = ({ size = 2, color = '#FFF', style }) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: '50%',
      ...style,
    }}
  />
);

interface BackgroundStarsProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const BackgroundStars: React.FC<BackgroundStarsProps> = ({ 
  density = 'medium',
  className = ''
}) => {
  const stars = React.useMemo(() => {
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
      size: Math.random() > 0.8 ? 4 : Math.random() > 0.6 ? 3 : 2
    }));
  }, [density]);

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
            style={{ opacity: 0.4 }}
            className={star.color}
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
