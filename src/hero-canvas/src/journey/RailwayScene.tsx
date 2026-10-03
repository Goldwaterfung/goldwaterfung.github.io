import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { RailwayTrack } from './RailwayTrack'
import { StationPlatform } from './StationPlatform'
import {
  createCommercialProductCurve,
  createSystemsCurve,
  createClinicalSidingCurve,
  computeStationMetadata,
} from './trackMath'

interface RailwaySceneProps {
  targetPositionRef: React.RefObject<THREE.Vector3>
  activeStationIndex: number
  onStationSelect: (index: number) => void
}

export const RailwayScene: React.FC<RailwaySceneProps> = ({
  targetPositionRef,
  activeStationIndex,
  onStationSelect,
}) => {
  const { camera } = useThree()
  const productCurve = useMemo(() => createCommercialProductCurve(), [])
  const systemsCurve = useMemo(() => createSystemsCurve(), [])
  const clinicalSidingCurve = useMemo(() => createClinicalSidingCurve(), [])
  const stations = useMemo(() => computeStationMetadata(), [])

  const cameraTarget = useRef(new THREE.Vector3())
  const hasInitialized = useRef(false)

  // Isometric telephoto diorama camera offset (azimuth 45 deg, elevation ~35 deg)
  const ISO_OFFSET = useMemo(() => new THREE.Vector3(5.5, 5.5, 5.5), [])

  // Initialize camera position ONCE on mount
  useEffect(() => {
    if (!hasInitialized.current && targetPositionRef.current) {
      cameraTarget.current.copy(targetPositionRef.current)
      camera.position.copy(targetPositionRef.current).add(ISO_OFFSET)
      camera.lookAt(targetPositionRef.current)
      hasInitialized.current = true
    }
  }, [camera, ISO_OFFSET, targetPositionRef])

  useFrame((_, delta) => {
    const safeDelta = Math.min(delta, 0.1)
    const target = targetPositionRef.current

    if (target) {
      cameraTarget.current.x = THREE.MathUtils.damp(
        cameraTarget.current.x,
        target.x,
        4.5,
        safeDelta
      )
      cameraTarget.current.y = THREE.MathUtils.damp(
        cameraTarget.current.y,
        target.y,
        4.5,
        safeDelta
      )
      cameraTarget.current.z = THREE.MathUtils.damp(
        cameraTarget.current.z,
        target.z,
        4.5,
        safeDelta
      )
    }

    camera.position.copy(cameraTarget.current).add(ISO_OFFSET)
    camera.lookAt(cameraTarget.current)
  })

  return (
    <group>
      {/* Studio Lighting configured for Apple and Teenage Engineering hardware finishes */}
      <ambientLight intensity={1.1} color="#ffffff" />
      <directionalLight
        position={[6, 12, 5]}
        intensity={1.25}
        color="#fffaf0"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={1}
        shadow-camera-far={32}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0008}
      />
      <directionalLight position={[-6, 4, -4]} intensity={0.4} color="#d8e2ea" />
      <directionalLight position={[0, -2, -2]} intensity={0.25} color="#ffdca8" />

      {/* Multi-Line Architectural Transit Conduits */}
      <RailwayTrack
        productCurve={productCurve}
        systemsCurve={systemsCurve}
        clinicalSidingCurve={clinicalSidingCurve}
      />

      {/* Station Waypoint Pavilions */}
      {stations.map((station, index) => (
        <StationPlatform
          key={station.id}
          station={station}
          index={index}
          isActive={index === activeStationIndex}
          onSelect={onStationSelect}
        />
      ))}
    </group>
  )
}

