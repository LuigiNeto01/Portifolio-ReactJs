// src/components/FadeInSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
