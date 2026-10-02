import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { DoubleSide, Mesh } from 'three';
import { PortraitModel } from './PortraitModel';

const LoadingFallback: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 1.8;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <ringGeometry args={[0.45, 0.48, 32]} />
      <meshBasicMaterial color="#e65c00" transparent opacity={0.35} side={DoubleSide} />
    </mesh>
  );
};

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
        {/* Studio lighting configured for rich PBR diffuse map illumination */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[3.5, 4.0, 3.2]} intensity={1.8} color="#fffaf2" />
        <directionalLight position={[-3.5, 1.5, 2.5]} intensity={0.9} color="#dbe6f2" />
        <directionalLight position={[1.5, 3.2, -3.0]} intensity={1.4} color="#ffdca8" />
        <pointLight position={[-1.8, -2.0, -1.2]} intensity={0.8} color="#e65c00" />

        <Suspense fallback={<LoadingFallback />}>
          <PortraitModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

