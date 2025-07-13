import React, { useEffect, useRef, useState } from 'react';

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up'
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        const scrolled = window.pageYOffset;
        const elementOffset = scrolled - elementTop;
        const rate = elementOffset * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`transform transition-transform duration-100 ${className}`}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxCard; 