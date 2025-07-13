import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  revealType?: 'slide' | 'fade' | 'zoom' | 'flip' | 'bounce';
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  revealType = 'slide',
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  distance = 50,
  once = true
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsRevealed(true);
            setHasAnimated(true);
          }, delay);
        } else if (!once && !entry.isIntersecting) {
          setIsRevealed(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, once, hasAnimated]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return `translateX(-${distance}px)`;
      case 'right':
        return `translateX(${distance}px)`;
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      default:
        return 'none';
    }
  };

  const getRevealStyles = () => {
    const baseStyle = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}ms`
    };

    switch (revealType) {
      case 'slide':
        return {
          ...baseStyle,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'none' : getInitialTransform()
        };
      case 'fade':
        return {
          ...baseStyle,
          opacity: isRevealed ? 1 : 0
        };
      case 'zoom':
        return {
          ...baseStyle,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'scale(1)' : 'scale(0.8)'
        };
      case 'flip':
        return {
          ...baseStyle,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'rotateY(0deg)' : 'rotateY(90deg)'
        };
      case 'bounce':
        return {
          ...baseStyle,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'scale(1)' : 'scale(0.3)',
          animation: isRevealed ? 'bounce 0.6s ease-out' : 'none'
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getRevealStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 