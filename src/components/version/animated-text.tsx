import React, { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ children } : any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
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
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-transform duration-1000 ease-linear ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[90%] opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedText;