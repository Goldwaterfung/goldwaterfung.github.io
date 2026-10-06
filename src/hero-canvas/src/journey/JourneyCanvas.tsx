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

  const lastHeightsRef = useRef<number[] | null>(null)
  // While the user is actively scrolling, geometry writes are deferred so the
  // document height never shifts under the live scroll offset (scroll jitter).
  const isScrollingRef = useRef(false)
  const scrollIdleTimerRef = useRef<number | null>(null)
  const pendingLayoutRef = useRef(false)
  // Sub-pixel/noise threshold: ignore tiny height wobble to keep geometry stable.
  const HEIGHT_CHANGE_THRESHOLD = 4
  const SCROLL_IDLE_MS = 150

  // Algorithmic Auto-Layout: Measures rendered card heights and assigns guaranteed non-overlapping positions
  // NOTE: must only run when scroll is idle (see scheduleLayout below).
  const updateLayout = useCallback(
    (options?: { force?: boolean }) => {
      if (typeof window === 'undefined') return
      if (window.innerWidth <= 900) {
        // In mobile mode, cards are in responsive vertical flow managed by CSS.
        // Clear any stale desktop inline geometry so it can't fight the CSS flow.
        if (options?.force) {
          const cards = document.querySelectorAll<HTMLElement>('.journey-card')
          cards.forEach((card) => {
            card.style.removeProperty('top')
          })
          const grid = document.querySelector<HTMLElement>('.journey-grid')
          if (grid) grid.style.removeProperty('min-height')
          const viewport = document.querySelector<HTMLElement>('.journey-spine-viewport')
          if (viewport) viewport.style.removeProperty('height')
          lastHeightsRef.current = null
        }
        return
      }

      const cards = document.querySelectorAll<HTMLElement>('.journey-card')
      if (cards.length === 0) return

      const heights = Array.from(cards).map((c) => c.offsetHeight || 220)
      const last = lastHeightsRef.current
      const hasChanged =
        options?.force ||
        !last ||
        last.length !== heights.length ||
        heights.some((h, i) => Math.abs(h - last[i]) > HEIGHT_CHANGE_THRESHOLD)

      if (!hasChanged) return
      lastHeightsRef.current = heights

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

      // Broadcast layout update so outside controllers (e.g. scroll spy in script.js) remain synchronized
      window.dispatchEvent(
        new CustomEvent('journey-layout-updated', {
          detail: { totalHeight: result.totalHeight },
        })
      )
    },
    [network]
  )

  // Runs updateLayout immediately when scroll is idle, otherwise defers it
  // until scrolling settles so geometry never shifts mid-scroll.
  const scheduleLayout = useCallback(
    (options?: { force?: boolean }) => {
      if (isScrollingRef.current && !options?.force) {
        pendingLayoutRef.current = true
        return
      }
      pendingLayoutRef.current = false
      updateLayout(options)
    },
    [updateLayout]
  )

  useEffect(() => {
    let observer: ResizeObserver | null = null
    let rafId: number | null = null
    let resizeTimer: number | null = null

    const requestLayoutFrame = (options?: { force?: boolean }) => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        rafId = null
        scheduleLayout(options)
      })
    }

    // Scroll gate: defer geometry writes while the user is scrolling and flush
    // one clean pass once scrolling settles.
    const handleScroll = () => {
      isScrollingRef.current = true
      if (scrollIdleTimerRef.current !== null) {
        window.clearTimeout(scrollIdleTimerRef.current)
      }
      scrollIdleTimerRef.current = window.setTimeout(() => {
        isScrollingRef.current = false
        scrollIdleTimerRef.current = null
        if (pendingLayoutRef.current) {
          requestLayoutFrame()
        }
      }, SCROLL_IDLE_MS)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial layout execution, deferred past font loading so the first
    // measurement already reflects final text wrapping (no mid-scroll shift).
    requestLayoutFrame({ force: true })
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        requestLayoutFrame({ force: true })
      })
    }

    // Observe changes to card sizes and text wrapping (do NOT observe grid to prevent self-triggering feedback loop)
    const cards = document.querySelectorAll<HTMLElement>('.journey-card')

    if (typeof ResizeObserver !== 'undefined' && cards.length > 0) {
      observer = new ResizeObserver(() => {
        requestLayoutFrame()
      })
      cards.forEach((card) => observer?.observe(card))
    }

    const handleResize = () => {
      if (resizeTimer !== null) window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        lastHeightsRef.current = null
        requestLayoutFrame({ force: true })
      }, 200)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (resizeTimer !== null) {
        window.clearTimeout(resizeTimer)
      }
      if (scrollIdleTimerRef.current !== null) {
        window.clearTimeout(scrollIdleTimerRef.current)
        scrollIdleTimerRef.current = null
      }
      if (observer) {
        observer.disconnect()
      }
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [scheduleLayout])

  const handleSelectStation = useCallback(
    (index: number) => {
      setActiveStationIndex(index)

      // Dispatch active station event to DOM (synchronizes station cards and header buttons).
      // Tagged as an explicit user selection so the DOM controller knows it
      // may center the card; scroll-driven syncs must never trigger scrolling.
      window.dispatchEvent(
        new CustomEvent('journey-active-station-changed', {
          detail: {
            index,
            station: stations[index],
            source: 'svg-click',
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
                  source: 'scroll-scrub',
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
