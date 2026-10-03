import React, { useMemo, useState } from 'react'
import { TransitStation, LayoutMetrics } from './types'
import {
  TransitNetwork,
  COLOR_AMBER,
  COLOR_COBALT,
  COLOR_FOREST,
  COLOR_BLACK,
  COLOR_CASING,
  TRUNK_X,
} from './cartography'
import { defaultJourneyNetwork } from './journeyNetwork'

export * from './types'
export * from './cartography'
export * from './journeyNetwork'

export const LONDON_MAP_STATIONS: TransitStation[] = defaultJourneyNetwork.getAllStations()


export interface LondonTransitMapProps {
  activeStationIndex: number
  onSelectStation: (index: number) => void
  network?: TransitNetwork
  metrics?: LayoutMetrics
}

export const LondonTransitMap: React.FC<LondonTransitMapProps> = ({
  activeStationIndex,
  onSelectStation,
  network,
  metrics,
}) => {
  const [hoveredStationIndex, setHoveredStationIndex] = useState<number | null>(null)

  // Detect bilingual display from document context
  const isZh = useMemo(() => {
    if (typeof document === 'undefined') return false
    return (
      document.documentElement.lang === 'zh' ||
      document.documentElement.lang.startsWith('zh') ||
      window.location.pathname.includes('_zh')
    )
  }, [])

  // Resolve active network (custom or default)
  const activeNetwork = useMemo(() => network || defaultJourneyNetwork, [network])

  // Calculate or apply metrics and routes
  const effectiveMetrics = useMemo(() => {
    if (metrics) return metrics
    return activeNetwork.computeLayout([])
  }, [activeNetwork, metrics])

  const stations = useMemo(() => {
    return activeNetwork.getAllStations()
  }, [activeNetwork])

  const routes = useMemo(() => {
    return activeNetwork.generateRoutes(effectiveMetrics)
  }, [activeNetwork, effectiveMetrics])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <svg
        viewBox={`-40 0 320 ${effectiveMetrics.totalHeight}`}
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          display: 'block',
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 1. Route Border Casings (Physical Print Separation) */}
        {routes.map((route) => (
          <path
            key={`casing-${route.id}`}
            d={route.pathD}
            fill="none"
            stroke={route.casingColor}
            strokeWidth={route.casingWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* 2. Route Solid Ink Stripes */}
        {routes.map((route) => (
          <path
            key={`ink-${route.id}`}
            d={route.pathD}
            fill="none"
            stroke={route.strokeColor}
            strokeWidth={route.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* 3. Terminal Stop Bar */}
        <line
          x1={TRUNK_X - 16}
          y1={effectiveMetrics.terminalY}
          x2={TRUNK_X + 16}
          y2={effectiveMetrics.terminalY}
          stroke={COLOR_BLACK}
          strokeWidth="4"
          strokeLinecap="square"
        />

        {/* 4. Fork Junction Interchange Roundel */}
        <circle
          cx={TRUNK_X}
          cy={effectiveMetrics.forkY}
          r="8"
          fill="#ffffff"
          stroke={COLOR_BLACK}
          strokeWidth="3"
        />

        {/* 5. Convergence Junction Interchange Roundel */}
        <circle
          cx={TRUNK_X}
          cy={effectiveMetrics.convergenceY}
          r="8"
          fill="#ffffff"
          stroke={COLOR_BLACK}
          strokeWidth="3"
        />

        {/* 5. Station Waypoints, Stubs & Interchange Roundels */}
        {stations.map((station) => {
          const currentY = effectiveMetrics.stationYs[station.index]
          const isActive = station.index === activeStationIndex
          const isHovered = station.index === hoveredStationIndex
          const isInterchange = Boolean(station.isInterchange)

          const stationColor =
            station.lineType === 'product'
              ? COLOR_AMBER
              : station.lineType === 'systems'
              ? COLOR_COBALT
              : station.lineType === 'siding'
              ? COLOR_FOREST
              : COLOR_BLACK

          const isRightCard = station.side === 'right'
          const stubTargetX = isRightCard ? 280 : -40
          const currentLabelY = currentY - 4

          return (
            <g
              key={station.id}
              role="button"
              tabIndex={0}
              aria-label={
                isZh
                  ? `${station.stationNumber}. ${station.nameZh}`
                  : `${station.stationNumber}. ${station.name}`
              }
              onClick={() => onSelectStation(station.index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectStation(station.index)
                }
              }}
              onMouseEnter={() => setHoveredStationIndex(station.index)}
              onMouseLeave={() => setHoveredStationIndex(null)}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              {/* Expanded Invisible Click Target */}
              <circle cx={station.x} cy={currentY} r="28" fill="transparent" />

              {/* Station Connector Stub extending toward card */}
              <line
                x1={station.x}
                y1={currentY}
                x2={stubTargetX}
                y2={currentY}
                stroke={stationColor}
                strokeWidth={isActive ? '2.5' : '1.5'}
                strokeDasharray={isActive ? 'none' : '3 3'}
                opacity={isActive ? 0.9 : 0.45}
                style={{ transition: 'stroke-width 0.18s ease, opacity 0.18s ease' }}
              />
              <circle
                cx={stubTargetX}
                cy={currentY}
                r="3"
                fill={isActive ? stationColor : '#8e8e93'}
                opacity={isActive ? 1 : 0.6}
              />

              {/* Active Technical Reticle (Concentric Hairline & Center Pip) */}
              {isActive && (
                <g style={{ pointerEvents: 'none' }}>
                  <circle
                    cx={station.x}
                    cy={currentY}
                    r="16"
                    fill="none"
                    stroke={stationColor}
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <circle
                    cx={station.x}
                    cy={currentY}
                    r="3"
                    fill={stationColor}
                  />
                </g>
              )}

              {/* Transit Marker: Interchange Roundel vs Perpendicular Horizontal Tick & Node */}
              {isInterchange ? (
                <circle
                  cx={station.x}
                  cy={currentY}
                  r={isActive ? 10 : isHovered ? 9 : 8}
                  fill="#ffffff"
                  stroke={COLOR_BLACK}
                  strokeWidth="3"
                  style={{ transition: 'r 0.18s ease' }}
                />
              ) : (
                <g>
                  <line
                    x1={station.x - 6}
                    y1={currentY}
                    x2={station.x + 6}
                    y2={currentY}
                    stroke={stationColor}
                    strokeWidth="3.5"
                    strokeLinecap="square"
                  />
                  <circle
                    cx={station.x}
                    cy={currentY}
                    r={isActive ? 7 : isHovered ? 6 : 5}
                    fill="#ffffff"
                    stroke={stationColor}
                    strokeWidth="2.5"
                    style={{ transition: 'r 0.18s ease' }}
                  />
                </g>
              )}

              {/* Station Short Name with Cartographic Knockout Halo (Zero Number Badges) */}
              <g
                transform={`translate(${station.labelX}, ${currentLabelY})`}
                style={{ pointerEvents: 'none' }}
              >
                <text
                  x="0"
                  y="4"
                  fill={COLOR_BLACK}
                  stroke={COLOR_CASING}
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  paintOrder="stroke fill"
                  fontSize={isActive ? '11' : '10'}
                  fontWeight={isActive ? '700' : '600'}
                  fontFamily="var(--font-sans)"
                  textAnchor={station.textAnchor}
                >
                  {isZh ? station.nameZh : station.name}
                </text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
