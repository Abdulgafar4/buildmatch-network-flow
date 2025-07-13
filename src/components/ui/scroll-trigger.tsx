import React, { useEffect, useRef, useState } from 'react';

interface ScrollTriggerProps {
  children: React.ReactNode;
  className?: string;
  triggerOn?: 'enter' | 'exit' | 'both';
  direction?: 'up' | 'down' | 'both';
  threshold?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'blur';
  intensity?: number;
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  className = '',
  triggerOn = 'enter',
  direction = 'both',
  threshold = 0.1,
  animation = 'fade',
  intensity = 1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(newDirection);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldTrigger = 
          (triggerOn === 'enter' && entry.isIntersecting) ||
          (triggerOn === 'exit' && !entry.isIntersecting) ||
          (triggerOn === 'both');

        if (shouldTrigger) {
          const shouldAnimate = 
            direction === 'both' ||
            (direction === 'up' && scrollDirection === 'up') ||
            (direction === 'down' && scrollDirection === 'down');

          if (shouldAnimate) {
            setIsVisible(true);
          }
        } else {
          setIsVisible(false);
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
  }, [triggerOn, direction, threshold, scrollDirection]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    switch (animation) {
      case 'slide':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 transform translate-y-0 translate-x-0' 
            : 'opacity-0 transform translate-y-8'
        }`;
      case 'scale':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-95'
        }`;
      case 'rotate':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 transform rotate-0' 
            : 'opacity-0 transform rotate-12'
        }`;
      case 'blur':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 blur-0' 
            : 'opacity-0 blur-sm'
        }`;
      default:
        return `${baseClasses} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transform: isVisible ? 'none' : `scale(${1 - intensity * 0.1})`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger; 