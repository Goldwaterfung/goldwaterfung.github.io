import React, { useMemo } from 'react'
import * as THREE from 'three'
import {
  createFoundationCurve,
  createProductCurve,
  createSystemsCurve,
  createSidingCurve,
  createUnifiedCurve,
  COLOR_AMBER,
  COLOR_COBALT,
  COLOR_FOREST,
  COLOR_BLACK,
  COLOR_CASING,
} from './transitCoordinates'

export const TransitTracks3D: React.FC = () => {
  // Construct 3D curves once
  const foundationCurve = useMemo(() => createFoundationCurve(), [])
  const productCurve = useMemo(() => createProductCurve(), [])
  const systemsCurve = useMemo(() => createSystemsCurve(), [])
  const sidingCurve = useMemo(() => createSidingCurve(), [])
  const unifiedCurve = useMemo(() => createUnifiedCurve(), [])

  // Geometries for Base Casing Ribbons (slightly wider, creates physical architectural channel)
  const casingGeometries = useMemo(() => {
    return {
      foundation: new THREE.TubeGeometry(foundationCurve, 32, 0.14, 8, false),
      product: new THREE.TubeGeometry(productCurve, 128, 0.14, 8, false),
      systems: new THREE.TubeGeometry(systemsCurve, 128, 0.14, 8, false),
      siding: new THREE.TubeGeometry(sidingCurve, 96, 0.14, 8, false),
      unified: new THREE.TubeGeometry(unifiedCurve, 32, 0.14, 8, false),
    }
  }, [foundationCurve, productCurve, systemsCurve, sidingCurve, unifiedCurve])

  // Geometries for Raised Colored Rails
  const railGeometries = useMemo(() => {
    return {
      foundation: new THREE.TubeGeometry(foundationCurve, 32, 0.07, 10, false),
      product: new THREE.TubeGeometry(productCurve, 128, 0.07, 10, false),
      systems: new THREE.TubeGeometry(systemsCurve, 128, 0.07, 10, false),
      siding: new THREE.TubeGeometry(sidingCurve, 96, 0.07, 10, false),
      unified: new THREE.TubeGeometry(unifiedCurve, 32, 0.07, 10, false),
    }
  }, [foundationCurve, productCurve, systemsCurve, sidingCurve, unifiedCurve])

  return (
    <group name="transit-tracks">
      {/* 1. Base Print Separation Casing Channels */}
      <group position={[0, 0.02, 0]} scale={[1, 0.35, 1]}>
        <mesh geometry={casingGeometries.foundation}>
          <meshStandardMaterial
            color={COLOR_CASING}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
        <mesh geometry={casingGeometries.product}>
          <meshStandardMaterial
            color={COLOR_CASING}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
        <mesh geometry={casingGeometries.systems}>
          <meshStandardMaterial
            color={COLOR_CASING}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
        <mesh geometry={casingGeometries.siding}>
          <meshStandardMaterial
            color={COLOR_CASING}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
        <mesh geometry={casingGeometries.unified}>
          <meshStandardMaterial
            color={COLOR_CASING}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
      </group>

      {/* 2. Elevated Colored Rail Conduits */}
      <group position={[0, 0.065, 0]}>
        {/* Foundation Trunk: Warm Amber */}
        <mesh geometry={railGeometries.foundation} castShadow>
          <meshStandardMaterial
            color={COLOR_AMBER}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        {/* Commercial Product Line: Warm Amber */}
        <mesh geometry={railGeometries.product} castShadow>
          <meshStandardMaterial
            color={COLOR_AMBER}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        {/* Applied AI & Systems Line: Cobalt Blue */}
        <mesh geometry={railGeometries.systems} castShadow>
          <meshStandardMaterial
            color={COLOR_COBALT}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        {/* Clinical Diagnostic Siding: Forest Green */}
        <mesh geometry={railGeometries.siding} castShadow>
          <meshStandardMaterial
            color={COLOR_FOREST}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        {/* Unified Trajectory Mainline: Matte Black */}
        <mesh geometry={railGeometries.unified} castShadow>
          <meshStandardMaterial
            color={COLOR_BLACK}
            roughness={0.4}
            metalness={0.15}
          />
        </mesh>
      </group>
    </group>
  )
}
