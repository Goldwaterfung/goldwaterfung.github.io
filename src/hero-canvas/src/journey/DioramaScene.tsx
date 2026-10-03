import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { TransitTracks3D } from './TransitTracks3D'
import { StationPedestal } from './StationPedestal'
import {
  LONDON_3D_STATIONS,
  COLOR_PLINTH,
  COLOR_GRID,
  COLOR_CASING,
} from './transitCoordinates'

interface DioramaSceneProps {
  activeStationIndex: number
  onSelectStation: (index: number) => void
}

// Procedural technical drafting grid texture for the plinth surface
function buildDraftingGridTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')

  if (ctx) {
    ctx.fillStyle = COLOR_PLINTH
    ctx.fillRect(0, 0, 256, 256)

    ctx.strokeStyle = COLOR_GRID
    ctx.lineWidth = 1.0

    // Grid interval
    const step = 32
    for (let x = 0; x <= 256; x += step) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 256)
      ctx.stroke()
    }
    for (let y = 0; y <= 256; y += step) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(256, y)
      ctx.stroke()
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(22, 9)
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.needsUpdate = true
  return texture
}

export const DioramaScene: React.FC<DioramaSceneProps> = ({
  activeStationIndex,
  onSelectStation,
}) => {
  const { camera, size } = useThree()
  const cameraTarget = useRef(new THREE.Vector3(-7.6, 0, 0.5))
  const isInitialized = useRef(false)

  // Architectural telephoto isometric camera offset (azimuth 45 deg, elevation ~36 deg)
  const isMobile = size.width < 640
  const isoDistanceScale = isMobile ? 1.45 : 1.0
  const ISO_OFFSET = useMemo(
    () => new THREE.Vector3(6.2 * isoDistanceScale, 7.8 * isoDistanceScale, 6.2 * isoDistanceScale),
    [isoDistanceScale]
  )

  const gridTexture = useMemo(() => buildDraftingGridTexture(), [])

  useEffect(() => {
    return () => {
      gridTexture.dispose()
    }
  }, [gridTexture])

  // Initialize camera position immediately on mount
  useEffect(() => {
    const initialStation = LONDON_3D_STATIONS[activeStationIndex] || LONDON_3D_STATIONS[0]
    cameraTarget.current.set(initialStation.position.x, 0, initialStation.position.z)
    camera.position.copy(cameraTarget.current).add(ISO_OFFSET)
    camera.lookAt(cameraTarget.current)
    isInitialized.current = true
  }, [camera, ISO_OFFSET, activeStationIndex])

  // Smooth camera tracking per frame
  useFrame((_, delta) => {
    const safeDelta = Math.min(delta, 0.1)
    const activeStation = LONDON_3D_STATIONS[activeStationIndex] || LONDON_3D_STATIONS[0]

    // Damp camera focal target
    cameraTarget.current.x = THREE.MathUtils.damp(
      cameraTarget.current.x,
      activeStation.position.x,
      4.0,
      safeDelta
    )
    cameraTarget.current.z = THREE.MathUtils.damp(
      cameraTarget.current.z,
      activeStation.position.z,
      4.0,
      safeDelta
    )

    camera.position.copy(cameraTarget.current).add(ISO_OFFSET)
    camera.lookAt(cameraTarget.current)
  })

  return (
    <group name="diorama-root">
      {/* 1. Studio Lighting System */}
      <ambientLight color="#ffffff" intensity={0.95} />

      {/* Warm Key Studio Spotlight casting soft architectural shadows */}
      <directionalLight
        position={[8, 14, 7]}
        intensity={1.25}
        color="#fffaf0"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={36}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0006}
      />

      {/* Cool Fill Light from opposing angle */}
      <directionalLight position={[-8, 6, -6]} intensity={0.35} color="#d8e2ea" />

      {/* Low Rim Bounce Light */}
      <directionalLight position={[0, -2, -3]} intensity={0.15} color="#ffdca8" />

      {/* 2. Architectural Model Plinth Slab */}
      <group position={[0, -0.2, 0]}>
        {/* Main Slab */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[22, 0.4, 9]} />
          <meshStandardMaterial
            map={gridTexture}
            roughness={0.85}
            metalness={0.05}
          />
        </mesh>

        {/* Plinth Perimeter Casing Trim */}
        <mesh position={[0, -0.21, 0]}>
          <boxGeometry args={[22.12, 0.05, 9.12]} />
          <meshStandardMaterial
            color={COLOR_CASING}
            roughness={0.95}
            metalness={0.02}
          />
        </mesh>
      </group>

      {/* 3. Multi-Line Procedural 3D Transit Tracks */}
      <TransitTracks3D />

      {/* 4. Station Waypoint Pedestals */}
      {LONDON_3D_STATIONS.map((station, index) => (
        <StationPedestal
          key={station.id}
          station={station}
          isActive={index === activeStationIndex}
          onSelect={onSelectStation}
        />
      ))}
    </group>
  )
}
