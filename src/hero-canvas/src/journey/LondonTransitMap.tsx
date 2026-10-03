import React, { useMemo, useState } from 'react'

export type LineType = 'product' | 'systems' | 'siding' | 'interchange'

export interface LondonMapStation {
  id: string
  stationNumber: number
  index: number
  name: string
  nameZh: string
  period: string
  periodZh: string
  role: string
  roleZh: string
  org: string
  orgZh: string
  x: number
  y: number
  lineType: LineType
  labelX: number
  labelY: number
  textAnchor: 'start' | 'middle' | 'end'
  isInterchange?: boolean
}

export const LONDON_MAP_STATIONS: LondonMapStation[] = [
  {
    id: 'station-1',
    stationNumber: 1,
    index: 0,
    name: 'Kerry Hotel Hong Kong',
    nameZh: '香港嘉里酒店',
    period: 'Jul 2017 - Jun 2020',
    periodZh: '2017 年 7 月 - 2020 年 6 月',
    role: 'Guest Experience Concierge',
    roleZh: '前廳禮賓接待 (開幕籌備團隊)',
    org: 'Kerry Hotel Hong Kong (Shangri-La Group)',
    orgZh: '香格里拉集團開幕籌備團隊',
    x: 140,
    y: 170,
    lineType: 'product',
    labelX: 156,
    labelY: 154,
    textAnchor: 'start',
  },
  {
    id: 'station-2',
    stationNumber: 2,
    index: 1,
    name: 'Courtyard by Marriott',
    nameZh: '香港萬怡酒店',
    period: 'Jul 2020 - Jul 2021',
    periodZh: '2020 年 7 月 - 2021 年 7 月',
    role: 'Guest Experience Concierge',
    roleZh: '前廳貴賓接待與危機處理',
    org: 'Courtyard by Marriott | Hong Kong',
    orgZh: '香港萬怡酒店 (MRKE 共同創辦源起)',
    x: 140,
    y: 470,
    lineType: 'interchange',
    labelX: 158,
    labelY: 454,
    textAnchor: 'start',
    isInterchange: true,
  },
  {
    id: 'station-3',
    stationNumber: 3,
    index: 2,
    name: 'Systems Engineer',
    nameZh: '系統工程師',
    period: 'Sep 2023 - Mar 2025',
    periodZh: '2023 年 9 月 - 2025 年 3 月',
    role: 'Systems Integration Engineer',
    roleZh: '多模態 AI 管道與影音同步工程師',
    org: 'National Tainan University of the Arts',
    orgZh: '國立臺南藝術大學',
    x: 85,
    y: 740,
    lineType: 'systems',
    labelX: 70,
    labelY: 724,
    textAnchor: 'end',
  },
  {
    id: 'station-4',
    stationNumber: 4,
    index: 3,
    name: 'Innova Medical',
    nameZh: '醫諾華醫學科技',
    period: 'Jul 2024 - Aug 2024',
    periodZh: '2024 年 7 月 - 2024 年 8 月',
    role: 'UX Designer (Intern)',
    roleZh: '使用者體驗設計實習生',
    org: 'Innova Medical Technology Co., Ltd.',
    orgZh: '醫諾華醫學科技 (夏季實習)',
    x: 55,
    y: 1110,
    lineType: 'siding',
    labelX: 42,
    labelY: 1094,
    textAnchor: 'end',
  },
  {
    id: 'station-5',
    stationNumber: 5,
    index: 4,
    name: 'MRKE Ltd.',
    nameZh: 'MRKE Ltd.',
    period: 'Dec 2020 - Jun 2026',
    periodZh: '2020 年 12 月 - 2026 年 6 月',
    role: 'Co-Founder & Product Engineer',
    roleZh: '共同創辦人暨產品工程師',
    org: 'MRKE Ltd. | 3D Interactive Software & Haircut Business',
    orgZh: 'MRKE Ltd. 5.5 年剪髮事業持續營運',
    x: 195,
    y: 820,
    lineType: 'product',
    labelX: 211,
    labelY: 804,
    textAnchor: 'start',
  },
]

interface LondonTransitMapProps {
  activeStationIndex: number
  onSelectStation: (index: number) => void
}

export const LondonTransitMap: React.FC<LondonTransitMapProps> = ({
  activeStationIndex,
  onSelectStation,
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

  // Authentic Transit Cartography Color System (Matching Site Design Tokens)
  const COLOR_AMBER = '#e65c00' // var(--accent-amber): Commercial Product Line & Foundation
  const COLOR_COBALT = '#1d4ed8' // Applied AI & Systems Line
  const COLOR_FOREST = '#2e7d32' // var(--accent-green): Clinical Diagnostic Siding
  const COLOR_BLACK = '#1c1c1e' // var(--text-primary): Unified Trajectory Line
  const COLOR_CASING = '#f7f5f0' // var(--bg-body): Physical Print Separation Casing

  // Harry Beck Transit Cartography Geometry (Vertical Top to Bottom):
  // 1. Shared Foundation Trunk (Kerry Hotel to Marriott Pivot):
  // Vertically from (140, 30) through Kerry Hotel (140, 170) to Marriott (140, 470) and fork at (140, 540)
  const pathFoundation = 'M 140 30 L 140 540'

  // 2. Commercial Product Line (Warm Amber #e65c00):
  // Smooth 45-degree fillet from (140, 540) to (195, 625), vertically through MRKE (195, 820) to (195, 1260),
  // then curves 45 degrees left into the convergence junction at (140, 1350)
  const pathProduct =
    'M 140 540 Q 140 555, 150 565 L 185 600 Q 195 610, 195 625 L 195 1260 Q 195 1275, 185 1285 L 150 1320 Q 140 1330, 140 1350'

  // 3. Applied AI and Systems Line (Cobalt Blue #1d4ed8):
  // Smooth 45-degree fillet from (140, 540) to (85, 625), vertically through TNNUA (85, 740) to (85, 1260),
  // then curves 45 degrees right into the convergence junction at (140, 1350)
  const pathSystems =
    'M 140 540 Q 140 555, 130 565 L 95 600 Q 85 610, 85 625 L 85 1260 Q 85 1275, 95 1285 L 130 1320 Q 140 1330, 140 1350'

  // 4. Clinical Diagnostic Siding (Forest Green #2e7d32):
  // Branches smoothly from Systems Line at (85, 960) to x=55 at y=1040, runs vertically through Innova (55, 1110) to (55, 1170),
  // then curves smoothly to rejoin Systems Line at (85, 1250)
  const pathSiding =
    'M 85 960 C 85 1000, 55 1000, 55 1040 L 55 1170 C 55 1210, 85 1210, 85 1250'

  // 5. Unified Trajectory Line (Matte Black #1c1c1e):
  // Mainline from convergence junction (140, 1350) to terminal stop (140, 1470)
  const pathUnified = 'M 140 1350 L 140 1470'

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
        viewBox="-40 0 320 1520"
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          display: 'block',
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 1. Route Border Casings (Physical Print Separation) */}
        <path
          d={pathFoundation}
          fill="none"
          stroke={COLOR_CASING}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathProduct}
          fill="none"
          stroke={COLOR_CASING}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathSystems}
          fill="none"
          stroke={COLOR_CASING}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathSiding}
          fill="none"
          stroke={COLOR_CASING}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathUnified}
          fill="none"
          stroke={COLOR_CASING}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 2. Solid Ink Route Stripes (Harry Beck Cartography) */}
        {/* Shared Foundation Trunk (Kerry Hotel to Marriott Pivot) */}
        <path
          d={pathFoundation}
          fill="none"
          stroke={COLOR_AMBER}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Commercial Product Line (Warm Amber) */}
        <path
          d={pathProduct}
          fill="none"
          stroke={COLOR_AMBER}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Applied AI & Systems Line (Cobalt Blue) */}
        <path
          d={pathSystems}
          fill="none"
          stroke={COLOR_COBALT}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Clinical Diagnostic Siding (Forest Green) */}
        <path
          d={pathSiding}
          fill="none"
          stroke={COLOR_FOREST}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Unified Trajectory Line (Matte Black) */}
        <path
          d={pathUnified}
          fill="none"
          stroke={COLOR_BLACK}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Terminal Stop Bar at (140, 1470) */}
        <line
          x1="124"
          y1="1470"
          x2="156"
          y2="1470"
          stroke={COLOR_BLACK}
          strokeWidth="4"
          strokeLinecap="square"
        />

        {/* Convergence Junction Interchange Roundel at (140, 1350) */}
        <circle
          cx="140"
          cy="1350"
          r="8"
          fill="#ffffff"
          stroke={COLOR_BLACK}
          strokeWidth="3"
        />


        {/* 3. Station Waypoints, Stubs & Interchange Roundels */}
        {LONDON_MAP_STATIONS.map((station) => {
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

          // Direction of horizontal connector stub toward adjacent card
          const isRightCard = station.index === 0 || station.index === 1 || station.index === 4
          const stubTargetX = isRightCard ? 280 : -40

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
              <circle cx={station.x} cy={station.y} r="28" fill="transparent" />

              {/* Station Connector Stub extending toward card */}
              <line
                x1={station.x}
                y1={station.y}
                x2={stubTargetX}
                y2={station.y}
                stroke={stationColor}
                strokeWidth={isActive ? '2.5' : '1.5'}
                strokeDasharray={isActive ? 'none' : '3 3'}
                opacity={isActive ? 0.9 : 0.45}
                style={{ transition: 'stroke-width 0.18s ease, opacity 0.18s ease' }}
              />
              <circle
                cx={stubTargetX}
                cy={station.y}
                r="3"
                fill={isActive ? stationColor : '#8e8e93'}
                opacity={isActive ? 1 : 0.6}
              />

              {/* Active Technical Reticle (Concentric Hairline & Center Pip) */}
              {isActive && (
                <g style={{ pointerEvents: 'none' }}>
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r="16"
                    fill="none"
                    stroke={stationColor}
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r="3"
                    fill={stationColor}
                  />
                </g>
              )}

              {/* Transit Marker: Interchange Roundel vs Perpendicular Horizontal Tick & Node */}
              {isInterchange ? (
                // Interchange Roundel: 10px white circular disc with bold 3px matte black rim
                <circle
                  cx={station.x}
                  cy={station.y}
                  r={isActive ? 10 : isHovered ? 9 : 8}
                  fill="#ffffff"
                  stroke={COLOR_BLACK}
                  strokeWidth="3"
                  style={{ transition: 'r 0.18s ease' }}
                />
              ) : (
                // Regular Station Waypoint: Perpendicular horizontal tick stub & crisp circular disc
                <g>
                  <line
                    x1={station.x - 6}
                    y1={station.y}
                    x2={station.x + 6}
                    y2={station.y}
                    stroke={stationColor}
                    strokeWidth="3.5"
                    strokeLinecap="square"
                  />
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r={isActive ? 7 : isHovered ? 6 : 5}
                    fill="#ffffff"
                    stroke={stationColor}
                    strokeWidth="2.5"
                    style={{ transition: 'r 0.18s ease' }}
                  />
                </g>
              )}

              {/* Station Label & Number Badge */}
              <g
                transform={`translate(${station.labelX}, ${station.labelY})`}
                style={{ pointerEvents: 'none' }}
              >
                {/* Station Badge Number */}
                <rect
                  x={station.textAnchor === 'end' ? -18 : 0}
                  y="-16"
                  width="18"
                  height="13"
                  rx="2"
                  fill={isActive ? stationColor : 'rgba(28, 28, 30, 0.08)'}
                  style={{ transition: 'fill 0.18s ease' }}
                />
                <text
                  x={station.textAnchor === 'end' ? -9 : 9}
                  y="-9.5"
                  fill={isActive ? '#ffffff' : '#3e3e42'}
                  fontSize="8.5"
                  fontWeight="700"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {station.stationNumber}
                </text>

                {/* Station Short Name with Cartographic Knockout Halo */}
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
