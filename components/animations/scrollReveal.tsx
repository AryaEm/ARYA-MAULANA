'use client';

import { cn } from '@/lib/utils/cn';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  direction = 'up',
  delay = 0, 
  duration = 800,
  className,
  once = false,
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return 'translate(0, -60px) scale(0.95)';
      case 'down':
        return 'translate(0, 60px) scale(0.95)';
      case 'left':
        return 'translate(-60px, 0) scale(0.95)';
      case 'right':
        return 'translate(60px, 0) scale(0.95)';
      case 'scale':
        return 'translate(0, 0) scale(0.8)';
      default:
        return 'translate(0, 0) scale(1)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}