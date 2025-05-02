import React, { useEffect } from 'react';

interface AnimationObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({ 
  children, 
  threshold = 0.1,
  rootMargin = '0px' 
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold,
        rootMargin
      }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin]);

  return <>{children}</>;
};

export default AnimationObserver;