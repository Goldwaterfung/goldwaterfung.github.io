import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { StationData } from './types'

interface StationPlatformProps {
  station: StationData
  isActive: boolean
  onSelect: (index: number) => void
  index: number
}

export const StationPlatform: React.FC<StationPlatformProps> = ({
  station,
  isActive,
  onSelect,
  index,
}) => {
  const groupRef = useRef<THREE.Group>(null)

  const position = station.position || new THREE.Vector3(0, 0, 0)
  const rotationY = station.rotationY || 0
  const isTerminal = index === 4
  const isSiding = station.lineType === 'siding'

  // Line-specific accent color mapping
  const accentColor = useMemo(() => {
    switch (station.lineType) {
      case 'product':
        return '#e65c00'
      case 'systems':
        return '#0071e3'
      case 'siding':
        return '#10b981'
      default:
        return '#e65c00'
    }
  }, [station.lineType])

  // Scale platform dimensions based on scope:
  // Station 5 (MRKE): Extended terminal pavilion (5.5-year spine)
  // Station 4 (Innova): Compact siding pavilion (2-month summer clinical diagnostic sprint)
  // Stations 1, 2, 3: Standard architectural pavilions
  const platformLength = isTerminal ? 1.75 : isSiding ? 1.05 : 1.35
  const platformWidth = isTerminal ? 0.52 : isSiding ? 0.36 : 0.42
  const canopyLength = isTerminal ? 1.65 : isSiding ? 0.95 : 1.22
  const canopyWidth = isTerminal ? 0.46 : isSiding ? 0.32 : 0.36
  const colOffset = canopyLength * 0.38

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
      rotation={[0, rotationY, 0]}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(index)
      }}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default'
      }}
    >
      {/* Architectural Platform Base */}
      <mesh position={[0, 0.025, 0]} receiveShadow>
        <boxGeometry args={[platformLength, 0.05, platformWidth]} />
        <meshStandardMaterial
          color={isActive ? '#dedcd4' : '#e6e4dc'}
          roughness={0.75}
          metalness={0.05}
        />
      </mesh>

      {/* Emissive Platform Edge Beacon facing track */}
      <mesh position={[0, 0.051, -platformWidth * 0.48]}>
        <boxGeometry args={[platformLength * 0.98, 0.008, 0.02]} />
        <meshStandardMaterial
          color={isActive ? accentColor : '#8e8e93'}
          emissive={isActive ? accentColor : '#8e8e93'}
          emissiveIntensity={isActive ? 2.6 : 0.12}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Cantilevered Canopy Columns */}
      <mesh position={[-colOffset, 0.22, platformWidth * 0.28]}>
        <cylinderGeometry args={[0.008, 0.008, 0.34, 8]} />
        <meshStandardMaterial color="#222226" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[colOffset, 0.22, platformWidth * 0.28]}>
        <cylinderGeometry args={[0.008, 0.008, 0.34, 8]} />
        <meshStandardMaterial color="#222226" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Cantilevered Architectural Canopy Roof */}
      <mesh position={[0, 0.39, platformWidth * 0.08]} castShadow receiveShadow>
        <boxGeometry args={[canopyLength, 0.012, canopyWidth]} />
        <meshStandardMaterial color="#2a2a30" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Technical Station Totem Marker with Station Index Accent */}
      <mesh position={[-platformLength * 0.44, 0.12, platformWidth * 0.28]}>
        <boxGeometry args={[0.045, 0.19, 0.045]} />
        <meshStandardMaterial
          color={isActive ? '#1c1c1e' : '#48484e'}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Totem Micro Status LED */}
      <mesh position={[-platformLength * 0.44, 0.22, platformWidth * 0.28]}>
        <boxGeometry args={[0.02, 0.02, 0.02]} />
        <meshStandardMaterial
          color={isActive ? accentColor : '#71717a'}
          emissive={isActive ? accentColor : '#71717a'}
          emissiveIntensity={isActive ? 2.8 : 0.2}
          roughness={0.2}
        />
      </mesh>

      {/* Terminal Convergence Buffer Stop for Station 5 */}
      {isTerminal && (
        <group position={[platformLength * 0.46, 0.06, -0.05]}>
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.08, 0.08, 0.32]} />
            <meshStandardMaterial color="#1f1f24" roughness={0.5} metalness={0.8} />
          </mesh>
          <mesh position={[-0.04, 0.04, 0]}>
            <boxGeometry args={[0.015, 0.06, 0.28]} />
            <meshStandardMaterial
              color="#e65c00"
              emissive="#e65c00"
              emissiveIntensity={1.4}
              roughness={0.3}
            />
          </mesh>
        </group>
      )}

      {/* Siding End Buffer Stop for Station 4 (Innova Medical) */}
      {isSiding && (
        <group position={[platformLength * 0.46, 0.05, -0.02]}>
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.06, 0.06, 0.22]} />
            <meshStandardMaterial color="#1f1f24" roughness={0.5} metalness={0.8} />
          </mesh>
          <mesh position={[-0.03, 0.03, 0]}>
            <boxGeometry args={[0.012, 0.04, 0.18]} />
            <meshStandardMaterial
              color="#10b981"
              emissive="#10b981"
              emissiveIntensity={1.4}
              roughness={0.3}
            />
          </mesh>
        </group>
      )}
    </group>
  )
}

