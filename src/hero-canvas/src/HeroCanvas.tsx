import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AcousticMesh } from './AcousticMesh';

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    // Pause WebGL render loop when scrolled out of view to eliminate GPU/CPU utilization
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-canvas-wrapper">
      <Canvas
        frameloop={isVisible ? 'always' : 'never'}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        className="hero-canvas-webgl"
      >
        <AcousticMesh />
      </Canvas>
    </div>
  );
};
