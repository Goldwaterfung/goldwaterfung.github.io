import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { MIN_TRAIN_T, MAX_TRAIN_T } from './trackMath'

interface TrainCarriageProps {
  curve: THREE.CatmullRomCurve3
  currentTRef: React.RefObject<number>
}

export const TrainCarriage: React.FC<TrainCarriageProps> = ({
  curve,
  currentTRef,
}) => {
  const trainGroupRef = useRef<THREE.Group>(null)
  const currentYaw = useRef(0)
  const isInitialized = useRef(false)

  useFrame((_, delta) => {
    if (!trainGroupRef.current) return

    const t = currentTRef.current ?? MIN_TRAIN_T
    const clampedT = Math.max(MIN_TRAIN_T, Math.min(MAX_TRAIN_T, t))

    const point = curve.getPointAt(clampedT)
    const tangent = curve.getTangentAt(clampedT).normalize()

    // Smooth yaw rotation
    const targetYaw = Math.atan2(tangent.x, tangent.z)

    if (!isInitialized.current) {
      currentYaw.current = targetYaw
      isInitialized.current = true
    } else {
      let diff = targetYaw - currentYaw.current
      while (diff < -Math.PI) diff += Math.PI * 2
      while (diff > Math.PI) diff -= Math.PI * 2
      currentYaw.current += diff * Math.min(1, delta * 14.0)
    }

    trainGroupRef.current.position.set(point.x, point.y, point.z)
    trainGroupRef.current.rotation.set(0, currentYaw.current, 0)
  })

  return (
    <group ref={trainGroupRef}>
      {/* Precision CNC Anodized Aluminum Maglev Chassis */}
      <mesh position={[0, 0.042, 0]}>
        <boxGeometry args={[0.17, 0.025, 0.76]} />
        <meshStandardMaterial color="#1c1c20" roughness={0.6} metalness={0.6} />
      </mesh>

      {/* Maglev Bronze Guide Calipers (replaces toy wheels) */}
      <mesh position={[-0.075, 0.030, -0.22]}>
        <boxGeometry args={[0.016, 0.016, 0.06]} />
        <meshStandardMaterial color="#c87028" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0.075, 0.030, -0.22]}>
        <boxGeometry args={[0.016, 0.016, 0.06]} />
        <meshStandardMaterial color="#c87028" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[-0.075, 0.030, 0.22]}>
        <boxGeometry args={[0.016, 0.016, 0.06]} />
        <meshStandardMaterial color="#c87028" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0.075, 0.030, 0.22]}>
        <boxGeometry args={[0.016, 0.016, 0.06]} />
        <meshStandardMaterial color="#c87028" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Main Glider Body: CNC Bead-Blasted Warm Alabaster Aluminum */}
      <mesh position={[0, 0.11, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.18, 0.12, 0.78]} />
        <meshStandardMaterial color="#ebe8df" roughness={0.28} metalness={0.65} />
      </mesh>

      {/* Recessed Amber Telemetry Laser Inset */}
      <mesh position={[0, 0.075, 0]}>
        <boxGeometry args={[0.184, 0.012, 0.70]} />
        <meshStandardMaterial
          color="#e65c00"
          emissive="#e65c00"
          emissiveIntensity={2.2}
          roughness={0.2}
        />
      </mesh>

      {/* Panoramic Smoked Obsidian Flush Optical Glass Band */}
      <mesh position={[0, 0.125, 0]}>
        <boxGeometry args={[0.184, 0.042, 0.66]} />
        <meshStandardMaterial color="#141416" roughness={0.08} metalness={0.95} />
      </mesh>

      {/* Forward Precision Micro-Optics (Headlight Lens) */}
      <mesh position={[0, 0.095, 0.392]}>
        <boxGeometry args={[0.065, 0.018, 0.008]} />
        <meshStandardMaterial
          color="#fff6e8"
          emissive="#fff6e8"
          emissiveIntensity={2.8}
          roughness={0.15}
        />
      </mesh>

      {/* Soft Forward Beam Light Illuminating the Open Track */}
      <pointLight
        position={[0, 0.095, 0.44]}
        distance={2.5}
        intensity={0.9}
        color="#fff6e8"
      />
    </group>
  )
}
