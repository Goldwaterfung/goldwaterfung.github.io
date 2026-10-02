import React, { useRef, useMemo } from 'react';
import { Group, Mesh, MeshStandardMaterial, DoubleSide, MathUtils } from 'three';
import { useFrame, useLoader, ThreeEvent } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Resolve URL relative to document base for consistent loading across environments
const getModelUrl = (): string => {
  if (typeof document !== 'undefined' && document.baseURI) {
    return new URL('assets/3d/kim-meshy.glb', document.baseURI).href;
  }
  return 'assets/3d/kim-meshy.glb';
};

export const PortraitModel: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const nodOffset = useRef(0);
  const nodVelocity = useRef(0);

  // Asynchronously load GLTF 2.0 binary asset with embedded 2K diffuse texture
  const gltf = useLoader(GLTFLoader, getModelUrl());

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

  // Click handler: trigger a responsive greeting nod
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    nodVelocity.current = -0.16;
  };

  useFrame((state, delta) => {
    const clampedDelta = Math.min(delta, 0.1);
    const time = state.clock.getElapsedTime();

    // Natural nod spring physics decay
    nodVelocity.current += -nodOffset.current * 18.0 * clampedDelta;
    nodVelocity.current *= Math.exp(-clampedDelta * 7.0);
    nodOffset.current += nodVelocity.current * clampedDelta;

    if (groupRef.current) {
      // Subtle organic breathing oscillation
      const idleYaw = Math.sin(time * 0.7) * 0.04;
      const idlePitch = Math.cos(time * 0.5) * 0.025;
      const idleRoll = Math.sin(time * 0.6) * 0.015;

      // Cursor tracking with smooth damping (looking naturally toward pointer)
      const targetRotY = state.pointer.x * 0.42 + idleYaw;
      const targetRotX = -state.pointer.y * 0.25 + idlePitch + nodOffset.current;
      const targetRotZ = -state.pointer.x * 0.08 + idleRoll;

      groupRef.current.rotation.y = MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        3.5,
        clampedDelta
      );
      groupRef.current.rotation.x = MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        3.5,
        clampedDelta
      );
      groupRef.current.rotation.z = MathUtils.damp(
        groupRef.current.rotation.z,
        targetRotZ,
        3.5,
        clampedDelta
      );

      // Subtle breathing vertical float
      const targetPosY = -0.12 + Math.sin(time * 1.1) * 0.02;
      groupRef.current.position.y = MathUtils.damp(
        groupRef.current.position.y,
        targetPosY,
        2.5,
        clampedDelta
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.12, 0]}
      scale={1.3}
      onClick={handleClick}
    >
      <primitive object={gltf.scene} />
    </group>
  );
};
