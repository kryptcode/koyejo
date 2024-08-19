"use client"
import React, { useEffect, useRef, useState } from 'react';

const ScrollMarquee = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (marqueeRef.current) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollPosition / maxScroll;
      const movement = marqueeRef.current.offsetWidth * percentage;
      marqueeRef.current.style.transform = `translateX(-${movement}px)`;
    }
  }, [scrollPosition]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="">
        {children}
      </div>
    </div>
  );
};

export default ScrollMarquee;