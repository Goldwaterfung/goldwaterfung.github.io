import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group, Mesh, MeshBasicMaterial, PointLight, MathUtils } from 'three';
import { PortraitModel } from './PortraitModel';

interface LoadingGyroscopeProps {
  isLoaded: boolean;
  onExitComplete?: () => void;
}

const LoadingGyroscope: React.FC<LoadingGyroscopeProps> = ({ isLoaded, onExitComplete }) => {
  const outerRef = useRef<Group>(null);
  const ring1Ref = useRef<Mesh>(null);
  const ring2Ref = useRef<Mesh>(null);
  const ring3Ref = useRef<Mesh>(null);
  const coreRef = useRef<Mesh>(null);
  const lightRef = useRef<PointLight>(null);

  const opacityRef = useRef(0.7);
  const scaleRef = useRef(0.9);
  const [isDispersed, setIsDispersed] = useState(false);

  useFrame((state, delta) => {
    if (isDispersed) return;

    const clampedDelta = Math.min(delta, 0.1);
    const time = state.clock.getElapsedTime();

    // Outward expansion and dissolution when model has loaded
    const targetScale = isLoaded ? 1.7 : 1.0;
    const targetOpacity = isLoaded ? 0.0 : 0.7;

    scaleRef.current = MathUtils.damp(
      scaleRef.current,
      targetScale,
      isLoaded ? 5.0 : 3.0,
      clampedDelta
    );
    opacityRef.current = MathUtils.damp(
      opacityRef.current,
      targetOpacity,
      isLoaded ? 5.5 : 2.5,
      clampedDelta
    );

    if (isLoaded && opacityRef.current < 0.015) {
      setIsDispersed(true);
      onExitComplete?.();
      return;
    }

    if (outerRef.current) {
      outerRef.current.scale.setScalar(scaleRef.current);

      // Gyroscope reacts to pointer position even during initial asset loading
      const targetRotX = -state.pointer.y * 0.45;
      const targetRotY = state.pointer.x * 0.55;
      outerRef.current.rotation.x = MathUtils.damp(
        outerRef.current.rotation.x,
        targetRotX,
        4.0,
        clampedDelta
      );
      outerRef.current.rotation.y = MathUtils.damp(
        outerRef.current.rotation.y,
        targetRotY,
        4.0,
        clampedDelta
      );
    }

    const speedMult = isLoaded ? 2.5 : 1.0;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += clampedDelta * 0.8 * speedMult;
      ring1Ref.current.rotation.y += clampedDelta * 1.1 * speedMult;
      if (ring1Ref.current.material) {
        (ring1Ref.current.material as MeshBasicMaterial).opacity = opacityRef.current * 0.85;
      }
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= clampedDelta * 1.3 * speedMult;
      ring2Ref.current.rotation.z += clampedDelta * 0.9 * speedMult;
      if (ring2Ref.current.material) {
        (ring2Ref.current.material as MeshBasicMaterial).opacity = opacityRef.current * 0.7;
      }
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= clampedDelta * 1.6 * speedMult;
      ring3Ref.current.rotation.z -= clampedDelta * 1.2 * speedMult;
      if (ring3Ref.current.material) {
        (ring3Ref.current.material as MeshBasicMaterial).opacity = opacityRef.current * 0.9;
      }
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += clampedDelta * 1.4 * speedMult;
      coreRef.current.rotation.x += clampedDelta * 0.7 * speedMult;
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.12;
      coreRef.current.scale.setScalar(pulse);
      if (coreRef.current.material) {
        (coreRef.current.material as MeshBasicMaterial).opacity = opacityRef.current * 0.95;
      }
    }

    if (lightRef.current) {
      lightRef.current.intensity = (0.9 + Math.sin(time * 3.5) * 0.4) * (opacityRef.current / 0.7);
    }
  });

  if (isDispersed) {
    return null;
  }

  return (
    <group ref={outerRef} position={[0, -0.1, 0]}>
      {/* Outer copper ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[0.82, 0.012, 16, 64]} />
        <meshBasicMaterial color="#e65c00" transparent opacity={0.6} />
      </mesh>

      {/* Middle warm ambient ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[0.62, 0.011, 16, 64]} />
        <meshBasicMaterial color="#ffdca8" transparent opacity={0.5} />
      </mesh>

      {/* Inner orange ring */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[0.42, 0.01, 16, 64]} />
        <meshBasicMaterial color="#ff944d" transparent opacity={0.65} />
      </mesh>

      {/* Center glowing wireframe octahedron */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.8} />
      </mesh>

      {/* Responsive center amber point light */}
      <pointLight ref={lightRef} position={[0, 0, 0]} color="#e65c00" intensity={0.9} distance={4} />
    </group>
  );
};

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    // Pause WebGL render loop when scrolled out of view to eliminate GPU/CPU utilization
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

        {/* Multi-ring loading gyroscope rendered during loading with smooth exit dispersion */}
        <LoadingGyroscope isLoaded={isLoaded} />

        <Suspense fallback={null}>
          <PortraitModel onLoaded={handleLoaded} />
        </Suspense>
      </Canvas>
    </div>
  );
};

