import React, { useState, useEffect, useCallback, useRef } from 'react'
import { LondonTransitMap, LONDON_MAP_STATIONS } from './LondonTransitMap'

export const JourneyCanvas: React.FC = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSelectStation = useCallback((index: number) => {
    setActiveStationIndex(index)

    // Dispatch active station event to DOM (synchronizes station cards and header buttons)
    window.dispatchEvent(
      new CustomEvent('journey-active-station-changed', {
        detail: {
          index,
          station: LONDON_MAP_STATIONS[index],
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
        const total = LONDON_MAP_STATIONS.length
        // Smoothly map 0..1 scroll progression across the stations
        const targetIndex = Math.min(total - 1, Math.max(0, Math.round(clampedProgress * (total - 1))))
        setActiveStationIndex((prev) => {
          if (prev !== targetIndex) {
            window.dispatchEvent(
              new CustomEvent('journey-active-station-changed', {
                detail: {
                  index: targetIndex,
                  station: LONDON_MAP_STATIONS[targetIndex],
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
      if (typeof idx === 'number' && LONDON_MAP_STATIONS[idx]) {
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
      }}
    >
      <LondonTransitMap
        activeStationIndex={activeStationIndex}
        onSelectStation={handleSelectStation}
      />
    </div>
  )
}
