import React, { useRef, useMemo, useEffect } from 'react';
import { Group, Mesh, MeshStandardMaterial, DoubleSide } from 'three';
import { useFrame, useLoader, ThreeEvent } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useMotionValue, useSpring, animate, useReducedMotion } from 'framer-motion';

// Resolve URL relative to document base for consistent loading across environments
const getModelUrl = (): string => {
  if (typeof document !== 'undefined' && document.baseURI) {
    return new URL('assets/3d/kim-meshy.glb', document.baseURI).href;
  }
  return 'assets/3d/kim-meshy.glb';
};

interface PortraitModelProps {
  onLoaded?: () => void;
}

export const PortraitModel: React.FC<PortraitModelProps> = ({ onLoaded }) => {
  const groupRef = useRef<Group>(null);
  const shouldReduceMotion = useReducedMotion();

  // Entrance springs: start from 0.92 to prevent scale(0) perspective distortion
  const enterScale = useSpring(0.92, { stiffness: 120, damping: 16 });
  const enterYaw = useSpring(0.45, { stiffness: 90, damping: 15 });
  const enterOffset = useSpring(0.2, { stiffness: 100, damping: 16 });
  const hasNotifiedLoaded = useRef(false);

  // Interactive springs for hover, squash-and-stretch, and nod
  const hoverZ = useSpring(0, { stiffness: 180, damping: 20 });
  const nodRotX = useMotionValue(0);
  const squashY = useSpring(1.0, { stiffness: 350, damping: 16, mass: 0.6 });
  const squashXZ = useSpring(1.0, { stiffness: 350, damping: 16, mass: 0.6 });

  // Spring physics for pointer tracking with momentum
  const pointerRotX = useMotionValue(0);
  const pointerRotY = useMotionValue(0);
  const smoothRotX = useSpring(pointerRotX, { stiffness: 130, damping: 18, mass: 1.0 });
  const smoothRotY = useSpring(pointerRotY, { stiffness: 130, damping: 18, mass: 1.0 });

  // Asynchronously load GLTF 2.0 binary asset with embedded 2K diffuse texture
  const gltf = useLoader(GLTFLoader, getModelUrl());

  useEffect(() => {
    if (!hasNotifiedLoaded.current) {
      hasNotifiedLoaded.current = true;
      onLoaded?.();
    }
    // Trigger entrance spring settling
    enterScale.set(1.3);
    enterYaw.set(0);
    enterOffset.set(0);
  }, [onLoaded, enterScale, enterYaw, enterOffset]);

  // Traverse and configure mesh materials for optimal standard PBR shading
  useMemo(() => {
    gltf.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        if (mesh.material) {
          const mat = mesh.material as MeshStandardMaterial;
          mat.roughness = 0.55;
          mat.metalness = 0.05;
          mat.side = DoubleSide;
          mat.needsUpdate = true;
        }
      }
    });
  }, [gltf]);

  // Click handler: trigger interruptible spring nod and squash feedback
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    // Natural multi-phase spring nod
    animate(nodRotX, [0, -0.2, 0.07, -0.02, 0], {
      type: 'spring',
      stiffness: 280,
      damping: 14,
      mass: 0.6,
    });

    // Tactile squash-and-stretch
    squashY.set(0.93);
    squashXZ.set(1.035);
    setTimeout(() => {
      squashY.set(1.0);
      squashXZ.set(1.0);
    }, 80);
  };

  const handlePointerOver = () => {
    if (!shouldReduceMotion) {
      hoverZ.set(0.12);
    }
  };

  const handlePointerOut = () => {
    hoverZ.set(0);
  };

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle organic idle breathing
    const idleYaw = shouldReduceMotion ? 0 : Math.sin(time * 0.7) * 0.035;
    const idlePitch = shouldReduceMotion ? 0 : Math.cos(time * 0.5) * 0.02;
    const idleRoll = shouldReduceMotion ? 0 : Math.sin(time * 0.6) * 0.012;

    // Feed cursor coordinates into motion value spring solvers
    if (!shouldReduceMotion) {
      pointerRotY.set(state.pointer.x * 0.42);
      pointerRotX.set(-state.pointer.y * 0.25);
    } else {
      pointerRotY.set(0);
      pointerRotX.set(0);
    }

    // Apply combined rotations
    groupRef.current.rotation.y = smoothRotY.get() + idleYaw + enterYaw.get();
    groupRef.current.rotation.x = smoothRotX.get() + nodRotX.get() + idlePitch;
    groupRef.current.rotation.z = -smoothRotY.get() * 0.18 + idleRoll;

    // Apply interactive scales with squash-and-stretch
    const baseScale = enterScale.get();
    const currentSquashXZ = squashXZ.get();
    const currentSquashY = squashY.get();
    groupRef.current.scale.set(
      baseScale * currentSquashXZ,
      baseScale * currentSquashY,
      baseScale * currentSquashXZ
    );

    // Apply position with breathing float and hover lean
    const floatY = shouldReduceMotion ? 0 : Math.sin(time * 1.1) * 0.018;
    groupRef.current.position.y = -0.12 - enterOffset.get() + floatY;
    groupRef.current.position.z = hoverZ.get();
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.12, 0]}
      scale={0.92}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <primitive object={gltf.scene} />
    </group>
  );
};
