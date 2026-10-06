import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, BufferGeometry } from 'three';
import { parse as parseOpentype } from 'opentype.js';
import { useMotionValue, useSpring, animate, useReducedMotion } from 'framer-motion';
import { create3DTextGeometry, applyXAxisGradient } from './create3DTextGeometry';

const getFontUrl = (): string => {
  if (typeof document !== 'undefined' && document.baseURI) {
    return new URL('assets/fonts/eurostile-bold-regular.ttf', document.baseURI).href;
  }
  return 'assets/fonts/eurostile-bold-regular.ttf';
};

interface Text3DMeshProps {
  geometry: BufferGeometry;
}

const Text3DMesh: React.FC<Text3DMeshProps> = ({ geometry }) => {
  const meshRef = useRef<Mesh>(null);
  const shouldReduceMotion = useReducedMotion();

  // Entrance spring scaling smoothly from 0.95 to 1.0
  const enterScale = useSpring(0.95, { stiffness: 140, damping: 16 });

  // Spring physics for pointer tilt tracking
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 140, damping: 18, mass: 0.8 };
  const smoothRotY = useSpring(pointerX, springConfig);
  const smoothRotX = useSpring(pointerY, springConfig);

  // Interactive springs for hover lift and click recoil
  const hoverScale = useSpring(1.0, { stiffness: 220, damping: 20 });
  const hoverZ = useSpring(0, { stiffness: 220, damping: 20 });
  const nodRotX = useMotionValue(0);

  useEffect(() => {
    enterScale.set(1.0);
  }, [enterScale]);

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    // Tactile multi-phase nod recoil with physical spring
    animate(nodRotX, [0, -0.22, 0.08, -0.02, 0], {
      type: 'spring',
      stiffness: 280,
      damping: 14,
      mass: 0.6,
    });
  };

  const handlePointerOver = () => {
    if (!shouldReduceMotion) {
      hoverScale.set(1.035);
      hoverZ.set(0.14);
    }
  };

  const handlePointerOut = () => {
    hoverScale.set(1.0);
    hoverZ.set(0);
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle breathing float and idle movement
    const idleYaw = shouldReduceMotion ? 0 : Math.sin(time * 0.8) * 0.022;
    const idlePitch = shouldReduceMotion ? 0 : Math.cos(time * 0.6) * 0.014;

    if (!shouldReduceMotion) {
      pointerX.set(state.pointer.x * 0.32);
      pointerY.set(-state.pointer.y * 0.22);
    } else {
      pointerX.set(0);
      pointerY.set(0);
    }

    meshRef.current.rotation.x = smoothRotX.get() + nodRotX.get() + idlePitch;
    meshRef.current.rotation.y = smoothRotY.get() + idleYaw;
    meshRef.current.position.z = hoverZ.get();

    const scale = enterScale.get() * hoverScale.get();
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        vertexColors
        roughness={0.45}
        metalness={0.35}
      />
    </mesh>
  );
};

export const HeroTitleCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [geometry, setGeometry] = useState<BufferGeometry | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Parse font at runtime using the 5-stage computational geometry pipeline
  useEffect(() => {
    let isCancelled = false;
    let createdGeom: BufferGeometry | null = null;

    fetch(getFontUrl())
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load font: ${res.statusText}`);
        return res.arrayBuffer();
      })
      .then((buffer) => {
        if (isCancelled) return;
        const font = parseOpentype(buffer);

        createdGeom = create3DTextGeometry(font, {
          text: 'Kim Fung',
          fontSize: 36,
          depth: 3.2,
          bevelEnabled: true,
          bevelThickness: 0.65,
          bevelSize: 0.38,
          bevelSegments: 2,
          curveSegments: 6,
        });

        // Normalize vertical height to 1.3 units for a larger, optical presence
        if (createdGeom.boundingBox) {
          const height =
            createdGeom.boundingBox.max.y - createdGeom.boundingBox.min.y;
          if (height > 0) {
            const targetHeight = 1.3;
            const scale = targetHeight / height;
            createdGeom.scale(scale, scale, scale);
            createdGeom.computeBoundingBox();
            createdGeom.center();
          }
        }

        // Ember Copper Flow gradient (left → right across "Kim Fung")
        applyXAxisGradient(createdGeom, [
          { offset: 0.0, color: '#431802' },
          { offset: 0.38, color: '#9E3A00' },
          { offset: 0.68, color: '#E65C00' },
          { offset: 1.0, color: '#FFAB5E' },
        ]);

        if (!isCancelled) {
          setGeometry(createdGeom);
        } else {
          createdGeom.dispose();
        }
      })
      .catch((err) => {
        console.warn('3D title font could not be initialized:', err);
      });

    return () => {
      isCancelled = true;
      if (createdGeom) {
        createdGeom.dispose();
      }
    };
  }, []);

  // Pause render loop when scrolled offscreen to save battery and GPU cycles
  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.1);
      },
      { threshold: [0, 0.1] }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, []);

  if (!geometry) {
    return null;
  }

  return (
    <div ref={containerRef} className="hero-title-3d-wrapper">
      <Canvas
        frameloop={isVisible ? 'always' : 'never'}
        camera={{ position: [0, 0, 3.3], fov: 30 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        }}
        className="hero-title-3d-webgl"
      >
        {/* Warm amber and copper studio lighting */}
        <ambientLight intensity={1.1} color="#ffffff" />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#fff2e0" />
        <directionalLight position={[-3, 1, 2]} intensity={1.2} color="#d97724" />
        <directionalLight position={[0, -2, -3]} intensity={1.5} color="#ffdca8" />
        <Text3DMesh geometry={geometry} />
      </Canvas>
    </div>
  );
};
