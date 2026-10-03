import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { LondonTransitMap } from './LondonTransitMap'
import { createDefaultJourneyNetwork } from './journeyNetwork'
import { LayoutMetrics } from './types'

export const JourneyCanvas: React.FC = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0)
  const [layout, setLayout] = useState<LayoutMetrics | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const network = useMemo(() => createDefaultJourneyNetwork(), [])
  const stations = useMemo(() => network.getAllStations(), [network])

  // Algorithmic Auto-Layout: Measures rendered card heights and assigns guaranteed non-overlapping positions
  const updateLayout = useCallback(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth <= 900) {
      // In mobile mode, cards are in responsive vertical flow managed by CSS
      return
    }

    const cards = document.querySelectorAll<HTMLElement>('.journey-card')
    if (cards.length === 0) return

    const heights = Array.from(cards).map((c) => c.offsetHeight || 220)
    const result = network.computeLayout(heights)
    setLayout(result)

    // Position each card dynamically on desktop
    cards.forEach((card, i) => {
      if (result.stationYs[i] !== undefined) {
        card.style.top = `${result.stationYs[i]}px`
      }
    })

    // Dynamically adjust grid container and spine viewport heights
    const grid = document.querySelector<HTMLElement>('.journey-grid')
    if (grid) {
      grid.style.minHeight = `${result.totalHeight}px`
    }
    const viewport = document.querySelector<HTMLElement>('.journey-spine-viewport')
    if (viewport) {
      viewport.style.height = `${result.totalHeight}px`
    }
  }, [])

  useEffect(() => {
    // Initial layout execution
    updateLayout()

    // Observe changes to card sizes, text wrapping, and window dimensions
    const grid = document.querySelector<HTMLElement>('.journey-grid')
    const cards = document.querySelectorAll<HTMLElement>('.journey-card')
    let observer: ResizeObserver | null = null

    if (typeof ResizeObserver !== 'undefined' && grid) {
      observer = new ResizeObserver(() => {
        updateLayout()
      })
      observer.observe(grid)
      cards.forEach((card) => observer?.observe(card))
    }

    const handleResize = () => {
      updateLayout()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (observer) {
        observer.disconnect()
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [updateLayout])

  const handleSelectStation = useCallback(
    (index: number) => {
      setActiveStationIndex(index)

      // Dispatch active station event to DOM (synchronizes station cards and header buttons)
      window.dispatchEvent(
        new CustomEvent('journey-active-station-changed', {
          detail: {
            index,
            station: stations[index],
          },
        })
      )
    },
    [stations]
  )

  // Listen to external DOM scroll scrub and button events
  useEffect(() => {
    const handleSetProgress = (e: Event) => {
      const customEvent = e as CustomEvent<{ progress: number }>
      if (typeof customEvent.detail?.progress === 'number') {
        const clampedProgress = Math.max(0, Math.min(1, customEvent.detail.progress))
        const total = stations.length
        // Smoothly map 0..1 scroll progression across the stations
        const targetIndex = Math.min(total - 1, Math.max(0, Math.round(clampedProgress * (total - 1))))
        setActiveStationIndex((prev) => {
          if (prev !== targetIndex) {
            window.dispatchEvent(
              new CustomEvent('journey-active-station-changed', {
                detail: {
                  index: targetIndex,
                  station: stations[targetIndex],
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
      if (typeof idx === 'number' && stations[idx]) {
        setActiveStationIndex(idx)
      }
    }

    window.addEventListener('journey-set-progress', handleSetProgress)
    window.addEventListener('journey-set-station', handleSetStation)

    return () => {
      window.removeEventListener('journey-set-progress', handleSetProgress)
      window.removeEventListener('journey-set-station', handleSetStation)
    }
  }, [stations])

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
        network={network}
        metrics={layout || undefined}
      />
    </div>
  )
}
