import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Mesh,
  BufferGeometry,
  MathUtils,
} from 'three';
import { parse as parseOpentype } from 'opentype.js';
import { create3DTextGeometry } from './create3DTextGeometry';

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
  const nodOffset = useRef(0);
  const nodVelocity = useRef(0);

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    nodVelocity.current = -0.18;
  };

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const clampedDelta = Math.min(delta, 0.1);
    const time = state.clock.getElapsedTime();

    // Natural spring physics for interactive click nod
    nodVelocity.current += -nodOffset.current * 20.0 * clampedDelta;
    nodVelocity.current *= Math.exp(-clampedDelta * 8.0);
    nodOffset.current += nodVelocity.current * clampedDelta;

    // Subtle breathing float and idle movement
    const idleYaw = Math.sin(time * 0.8) * 0.025;
    const idlePitch = Math.cos(time * 0.6) * 0.015;

    // Smooth cursor tracking tilt
    const targetRotX = -state.pointer.y * 0.22 + idlePitch + nodOffset.current;
    const targetRotY = state.pointer.x * 0.32 + idleYaw;

    meshRef.current.rotation.x = MathUtils.damp(
      meshRef.current.rotation.x,
      targetRotX,
      4.0,
      clampedDelta
    );
    meshRef.current.rotation.y = MathUtils.damp(
      meshRef.current.rotation.y,
      targetRotY,
      4.0,
      clampedDelta
    );
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onClick={handleClick}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        color="#e65c00"
        roughness={0.8}
        metalness={0.2}
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
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
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
