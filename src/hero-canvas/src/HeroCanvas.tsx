import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group, Mesh, MeshBasicMaterial, PointLight, BufferGeometry } from 'three';
import { parse as parseOpentype } from 'opentype.js';
import { useMotionValue, useSpring, useTransform, animate, useReducedMotion } from 'framer-motion';
import { PortraitModel } from './PortraitModel';
import { create3DTextGeometry, applyXAxisGradient } from './create3DTextGeometry';

const getFontUrl = (): string => {
  if (typeof document !== 'undefined' && document.baseURI) {
    return new URL('assets/fonts/eurostile-bold-regular.ttf', document.baseURI).href;
  }
  return 'assets/fonts/eurostile-bold-regular.ttf';
};

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
  const shouldReduceMotion = useReducedMotion();

  const [isDispersed, setIsDispersed] = useState(false);

  // Framer Motion values for deterministic exit transition
  const exitScale = useMotionValue(1.0);
  const exitOpacity = useMotionValue(0.7);

  // Pointer tracking spring for gyroscope tilt
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothRotY = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const smoothRotX = useSpring(pointerY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    if (!isLoaded) return;

    // Strong ease-out dispersion on model load completion
    const animScale = animate(exitScale, 1.7, {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    });

    const animOpacity = animate(exitOpacity, 0.0, {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
      onComplete: () => {
        setIsDispersed(true);
        onExitComplete?.();
      },
    });

    return () => {
      animScale.stop();
      animOpacity.stop();
    };
  }, [isLoaded, exitScale, exitOpacity, onExitComplete]);

  useFrame((state, delta) => {
    if (isDispersed) return;

    const clampedDelta = Math.min(delta, 0.1);
    const time = state.clock.getElapsedTime();
    const currentOpacity = exitOpacity.get();
    const currentScale = exitScale.get();

    if (!shouldReduceMotion) {
      pointerX.set(state.pointer.x * 0.55);
      pointerY.set(-state.pointer.y * 0.45);
    }

    if (outerRef.current) {
      outerRef.current.scale.setScalar(currentScale);
      outerRef.current.rotation.x = smoothRotX.get();
      outerRef.current.rotation.y = smoothRotY.get();
    }

    const speedMult = isLoaded ? 2.5 : 1.0;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += clampedDelta * 0.8 * speedMult;
      ring1Ref.current.rotation.y += clampedDelta * 1.1 * speedMult;
      if (ring1Ref.current.material) {
        (ring1Ref.current.material as MeshBasicMaterial).opacity = currentOpacity * 0.85;
      }
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= clampedDelta * 1.3 * speedMult;
      ring2Ref.current.rotation.z += clampedDelta * 0.9 * speedMult;
      if (ring2Ref.current.material) {
        (ring2Ref.current.material as MeshBasicMaterial).opacity = currentOpacity * 0.7;
      }
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= clampedDelta * 1.6 * speedMult;
      ring3Ref.current.rotation.z -= clampedDelta * 1.2 * speedMult;
      if (ring3Ref.current.material) {
        (ring3Ref.current.material as MeshBasicMaterial).opacity = currentOpacity * 0.9;
      }
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += clampedDelta * 1.4 * speedMult;
      coreRef.current.rotation.x += clampedDelta * 0.7 * speedMult;
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.12;
      coreRef.current.scale.setScalar(pulse);
      if (coreRef.current.material) {
        (coreRef.current.material as MeshBasicMaterial).opacity = currentOpacity * 0.95;
      }
    }

    if (lightRef.current) {
      lightRef.current.intensity = (0.9 + Math.sin(time * 3.5) * 0.4) * (currentOpacity / 0.7);
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

const InteractiveStudioLights: React.FC = () => {
  const accentLightRef = useRef<PointLight>(null);
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 20 });

  // Map pointer normalized coordinates to accent light offset
  const lightPosX = useTransform(smoothX, [-1, 1], [-2.3, -1.3]);
  const lightPosY = useTransform(smoothY, [-1, 1], [-1.4, -2.6]);
  const lightIntensity = useTransform(smoothY, [-1, 1], [0.65, 0.95]);

  useFrame((state) => {
    if (!shouldReduceMotion) {
      pointerX.set(state.pointer.x);
      pointerY.set(state.pointer.y);
    }
    if (accentLightRef.current) {
      accentLightRef.current.position.x = lightPosX.get();
      accentLightRef.current.position.y = lightPosY.get();
      accentLightRef.current.intensity = lightIntensity.get();
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} color="#ffffff" />
      <directionalLight position={[3.5, 4.0, 3.2]} intensity={1.8} color="#fffaf2" />
      <directionalLight position={[-3.5, 1.5, 2.5]} intensity={0.9} color="#dbe6f2" />
      <directionalLight position={[1.5, 3.2, -3.0]} intensity={1.4} color="#ffdca8" />
      <pointLight
        ref={accentLightRef}
        position={[-1.8, -2.0, -1.2]}
        intensity={0.8}
        color="#e65c00"
      />
    </>
  );
};

interface Text3DMeshProps {
  geometry: BufferGeometry;
  position?: [number, number, number];
}

const Text3DMesh: React.FC<Text3DMeshProps> = ({ geometry, position = [0, 0, 0] }) => {
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
    // Preserve base position; hover lift applies on top of base Z
    meshRef.current.position.set(position[0], position[1], position[2] + hoverZ.get());

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
      position={position}
    >
      <meshStandardMaterial
        vertexColors
        roughness={0.85}
        metalness={0.15}
      />
    </mesh>
  );
};

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleGeometry, setTitleGeometry] = useState<BufferGeometry | null>(null);

  const handleLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Parse font at runtime using the 5-stage computational geometry pipeline.
  // Normalized to ~0.55 world units so it frames as a nameplate above the
  // portrait in the shared camera (visible height ≈ 3.5 units at origin).
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

        if (createdGeom.boundingBox) {
          const height =
            createdGeom.boundingBox.max.y - createdGeom.boundingBox.min.y;
          if (height > 0) {
            const targetHeight = 0.55;
            const scale = targetHeight / height;
            createdGeom.scale(scale, scale, scale);
            createdGeom.computeBoundingBox();
            createdGeom.center();
          }
        }

        // Warm Ember gradient (low-contrast, theme-matched left → right)
        applyXAxisGradient(createdGeom, [
          { offset: 0.0, color: '#B84A0A' },
          { offset: 0.38, color: '#D65E14' },
          { offset: 0.68, color: '#E65C00' },
          { offset: 1.0, color: '#EF8B2F' },
        ]);

        if (!isCancelled) {
          setTitleGeometry(createdGeom);
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
        camera={{ position: [0, 0.15, 4.4], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        className="hero-canvas-webgl"
      >
        {/* Studio lighting configured for rich PBR diffuse map illumination.
            Single shared rig lights both the portrait and the title nameplate,
            replacing the two duplicated rigs from the split-canvas setup. */}
        <InteractiveStudioLights />

        {/* Multi-ring loading gyroscope rendered during loading with smooth exit dispersion */}
        <LoadingGyroscope isLoaded={isLoaded} />

        {/* 3D nameplate floating above the portrait — same scene, one context */}
        {titleGeometry && <Text3DMesh geometry={titleGeometry} position={[0, 1.15, 0]} />}

        <Suspense fallback={null}>
          <PortraitModel onLoaded={handleLoaded} />
        </Suspense>
      </Canvas>
    </div>
  );
};

