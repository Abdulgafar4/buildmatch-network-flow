import React, { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animation?: 'fadeIn' | 'slideUp' | 'scale' | 'typing';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  animation = 'fadeIn'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.split-char');
    
    chars.forEach((char, index) => {
      const element = char as HTMLElement;
      element.style.animationDelay = `${delay + index * stagger}s`;
    });
  }, [text, delay, stagger]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'slideUp':
        return 'animate-slide-up';
      case 'scale':
        return 'animate-scale-in';
      case 'typing':
        return 'animate-typing';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`split-char inline-block opacity-0 ${getAnimationClass()}`}
          style={{ animationFillMode: 'forwards' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default SplitText; 