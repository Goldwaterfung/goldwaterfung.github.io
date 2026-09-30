import React, { useMemo, useRef } from 'react';
import { Group, ShaderMaterial, Vector3, Color, MathUtils, IcosahedronGeometry } from 'three';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { vertexShader, fragmentShader } from './shaders';

export const AcousticMesh: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const matRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uImpulseOrigin: { value: new Vector3(0, 0, 1.25) },
      uImpulseTime: { value: 99.0 },
      uWireColor: { value: new Color('#1c1c1e') },
      uAccentColor: { value: new Color('#e65c00') },
    };
  }, []);

  // Click raycast handler
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.point && groupRef.current) {
      const localPoint = groupRef.current.worldToLocal(e.point.clone());
      uniforms.uImpulseOrigin.value.copy(localPoint);
      uniforms.uImpulseTime.value = 0.0;
    }
  };

  useFrame((state, delta) => {
    const clampedDelta = Math.min(delta, 0.1);
    uniforms.uTime.value += clampedDelta;
    if (uniforms.uImpulseTime.value < 2.0) {
      uniforms.uImpulseTime.value += clampedDelta;
    }

    if (groupRef.current) {
      // Continuous idle rotation
      groupRef.current.rotation.y += clampedDelta * 0.15;

      // Pointer proximity tilt with smooth damping
      const targetRotX = -state.pointer.y * 0.32;
      const targetRotZ = state.pointer.x * 0.32;
      groupRef.current.rotation.x = MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        3.0,
        clampedDelta
      );
      groupRef.current.rotation.z = MathUtils.damp(
        groupRef.current.rotation.z,
        targetRotZ,
        3.0,
        clampedDelta
      );
    }
  });

  // Geometry: Subdivided Icosahedron (radius 1.25, detail 4 -> ~2,560 triangles)
  const geometry = useMemo(() => new IcosahedronGeometry(1.25, 4), []);

  return (
    <group ref={groupRef} onClick={handleClick}>
      <mesh geometry={geometry}>
        <shaderMaterial
          ref={matRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          wireframe={true}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};
