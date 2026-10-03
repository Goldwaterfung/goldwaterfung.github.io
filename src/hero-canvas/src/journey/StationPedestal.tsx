import React, { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { London3DStation } from './types'
import { COLOR_CASING, COLOR_GRID, COLOR_BLACK, COLOR_PLINTH } from './transitCoordinates'

interface StationPedestalProps {
  station: London3DStation
  isActive: boolean
  onSelect: (index: number) => void
}

// Generate crisp procedural roundel number texture
function buildNumberTexture(number: number, isInterchange?: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')

  if (ctx) {
    // Disc background
    ctx.fillStyle = COLOR_PLINTH
    ctx.beginPath()
    ctx.arc(128, 128, 120, 0, Math.PI * 2)
    ctx.fill()

    // Outer rim border
    ctx.lineWidth = 12
    ctx.strokeStyle = COLOR_GRID
    ctx.stroke()

    // Concentric ring for interchange station
    if (isInterchange) {
      ctx.lineWidth = 6
      ctx.strokeStyle = COLOR_BLACK
      ctx.beginPath()
      ctx.arc(128, 128, 96, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Number
    ctx.fillStyle = COLOR_BLACK
    ctx.font = 'bold 112px system-ui, -apple-system, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(String(number), 128, 134)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.needsUpdate = true
  return texture
}

export const StationPedestal: React.FC<StationPedestalProps> = ({
  station,
  isActive,
  onSelect,
}) => {
  const groupRef = useRef<THREE.Group>(null)
  const lightColumnRef = useRef<THREE.Mesh>(null)
  const ripple1Ref = useRef<THREE.Mesh>(null)
  const ripple2Ref = useRef<THREE.Mesh>(null)
  const currentY = useRef(0.06)
  const [isHovered, setIsHovered] = useState(false)

  const numberTexture = useMemo(
    () => buildNumberTexture(station.stationNumber, station.isInterchange),
    [station.stationNumber, station.isInterchange]
  )

  useEffect(() => {
    return () => {
      numberTexture.dispose()
    }
  }, [numberTexture])

  // Cylindrical geometries
  const cylinderRadius = station.isInterchange ? 0.44 : 0.36
  const baseGeom = useMemo(() => new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, 0.12, 32), [cylinderRadius])
  const topDiscGeom = useMemo(() => new THREE.CircleGeometry(cylinderRadius * 0.92, 32), [cylinderRadius])
  const lightColumnGeom = useMemo(() => new THREE.CylinderGeometry(0.24, 0.24, 1.8, 24, 1, true), [])
  const rippleGeom = useMemo(() => new THREE.RingGeometry(0.3, 0.36, 32), [])

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1)

    // Smooth vertical elevation on hover / active
    const targetY = isActive ? 0.15 : isHovered ? 0.1 : 0.06
    currentY.current = THREE.MathUtils.damp(currentY.current, targetY, 6.0, safeDelta)

    if (groupRef.current) {
      groupRef.current.position.y = currentY.current
    }

    // Active beacon pulsing and ripple expansion
    if (isActive) {
      const time = state.clock.elapsedTime

      // Breathing light column
      if (lightColumnRef.current) {
        const mat = lightColumnRef.current.material as THREE.MeshBasicMaterial
        mat.opacity = 0.28 + 0.12 * Math.sin(time * 3.0)
      }

      // Ripple 1
      if (ripple1Ref.current) {
        const r1Phase = (time * 0.8) % 1.0
        const scale1 = 1.0 + r1Phase * 2.2
        ripple1Ref.current.scale.set(scale1, scale1, 1)
        const r1Mat = ripple1Ref.current.material as THREE.MeshBasicMaterial
        r1Mat.opacity = Math.max(0, 0.6 * (1.0 - r1Phase))
      }

      // Ripple 2
      if (ripple2Ref.current) {
        const r2Phase = (time * 0.8 + 0.5) % 1.0
        const scale2 = 1.0 + r2Phase * 2.2
        ripple2Ref.current.scale.set(scale2, scale2, 1)
        const r2Mat = ripple2Ref.current.material as THREE.MeshBasicMaterial
        r2Mat.opacity = Math.max(0, 0.6 * (1.0 - r2Phase))
      }
    }
  })

  return (
    <group position={[station.position.x, 0, station.position.z]}>
      {/* Plinth Surface Ripples (stay on ground level Y = 0.005) */}
      {isActive && (
        <group position={[0, 0.006, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh ref={ripple1Ref} geometry={rippleGeom}>
            <meshBasicMaterial
              color={station.accentColor}
              transparent
              opacity={0}
              depthWrite={false}
            />
          </mesh>
          <mesh ref={ripple2Ref} geometry={rippleGeom}>
            <meshBasicMaterial
              color={station.accentColor}
              transparent
              opacity={0}
              depthWrite={false}
            />
          </mesh>
        </group>
      )}

      {/* Elevating Station Waypoint Pedestal */}
      <group
        ref={groupRef}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(station.index)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setIsHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setIsHovered(false)
          document.body.style.cursor = 'auto'
        }}
      >
        {/* Main Cylindrical Body */}
        <mesh geometry={baseGeom} castShadow receiveShadow>
          <meshStandardMaterial
            color={isActive ? COLOR_PLINTH : COLOR_CASING}
            roughness={0.65}
            metalness={0.1}
          />
        </mesh>

        {/* Top Numbered Disc Cap */}
        <mesh
          geometry={topDiscGeom}
          position={[0, 0.061, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial map={numberTexture} />
        </mesh>

        {/* Accent Rim Ring */}
        <mesh position={[0, 0.062, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[cylinderRadius * 0.92, cylinderRadius * 0.98, 32]} />
          <meshBasicMaterial
            color={isActive ? station.accentColor : COLOR_GRID}
          />
        </mesh>

        {/* Active Vertical Light Pillar Column */}
        {isActive && (
          <>
            <mesh
              ref={lightColumnRef}
              geometry={lightColumnGeom}
              position={[0, 0.9, 0]}
            >
              <meshBasicMaterial
                color={station.accentColor}
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                side={THREE.DoubleSide}
              />
            </mesh>
            <pointLight
              color={station.accentColor}
              intensity={0.85}
              distance={2.4}
              decay={2}
              position={[0, 0.4, 0]}
            />
          </>
        )}
      </group>
    </group>
  )
}
