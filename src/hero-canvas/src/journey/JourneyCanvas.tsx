import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { DioramaScene } from './DioramaScene'
import { LONDON_3D_STATIONS } from './transitCoordinates'
import { LondonTransitMap } from './LondonTransitMap'

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

export const JourneyCanvas: React.FC = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0)
  const [hasWebGL] = useState(() => isWebGLAvailable())
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSelectStation = useCallback((index: number) => {
    setActiveStationIndex(index)

    // Synchronize active station index with HTML station card dock
    window.dispatchEvent(
      new CustomEvent('journey-active-station-changed', {
        detail: {
          index,
          station: LONDON_3D_STATIONS[index],
        },
      })
    )
  }, [])

  // Listen to external DOM scroll scrub and button events
  useEffect(() => {
    const handleSetProgress = (e: Event) => {
      const customEvent = e as CustomEvent<{ progress: number }>
      if (typeof customEvent.detail?.progress === 'number') {
        const clampedProgress = Math.max(0, Math.min(1, customEvent.detail.progress))
        const total = LONDON_3D_STATIONS.length
        // Smoothly map 0..1 scroll progression across the 5 stations
        const targetIndex = Math.min(total - 1, Math.max(0, Math.round(clampedProgress * (total - 1))))
        setActiveStationIndex((prev) => {
          if (prev !== targetIndex) {
            window.dispatchEvent(
              new CustomEvent('journey-active-station-changed', {
                detail: {
                  index: targetIndex,
                  station: LONDON_3D_STATIONS[targetIndex],
                },
              })
            )
            return targetIndex
          }
          return prev
        })
      }
    }

    const handleSetStation = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number }>
      const idx = customEvent.detail?.index
      if (typeof idx === 'number' && LONDON_3D_STATIONS[idx]) {
        setActiveStationIndex(idx)
      }
    }

    window.addEventListener('journey-set-progress', handleSetProgress)
    window.addEventListener('journey-set-station', handleSetStation)

    return () => {
      window.removeEventListener('journey-set-progress', handleSetProgress)
      window.removeEventListener('journey-set-station', handleSetStation)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {hasWebGL ? (
        <Canvas
          camera={{
            fov: 28,
            near: 0.1,
            far: 100,
            position: [0, 8, 10],
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
          shadows
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        >
          <DioramaScene
            activeStationIndex={activeStationIndex}
            onSelectStation={handleSelectStation}
          />
        </Canvas>
      ) : (
        <LondonTransitMap
          activeStationIndex={activeStationIndex}
          onSelectStation={handleSelectStation}
        />
      )}
    </div>
  )
}
