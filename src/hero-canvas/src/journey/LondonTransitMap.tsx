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
    x: 120,
    y: 200,
    lineType: 'product',
    labelX: 120,
    labelY: 145,
    textAnchor: 'middle',
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
    x: 250,
    y: 200,
    lineType: 'interchange',
    labelX: 250,
    labelY: 145,
    textAnchor: 'middle',
    isInterchange: true,
  },
  {
    id: 'station-3',
    stationNumber: 3,
    index: 2,
    name: 'Systems Engineer',
    nameZh: '系統工程師 (TNNUA)',
    period: 'Sep 2023 - Mar 2025',
    periodZh: '2023 年 9 月 - 2025 年 3 月',
    role: 'Systems Integration Engineer',
    roleZh: '多模態 AI 管道與影音同步工程師',
    org: 'National Tainan University of the Arts',
    orgZh: '國立臺南藝術大學',
    x: 480,
    y: 140,
    lineType: 'systems',
    labelX: 480,
    labelY: 85,
    textAnchor: 'middle',
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
    x: 650,
    y: 80,
    lineType: 'siding',
    labelX: 650,
    labelY: 35,
    textAnchor: 'middle',
  },
  {
    id: 'station-5',
    stationNumber: 5,
    index: 4,
    name: 'MRKE Ltd.',
    nameZh: 'MRKE Ltd. 平行營運核心',
    period: 'Dec 2020 - Jun 2026',
    periodZh: '2020 年 12 月 - 2026 年 6 月',
    role: 'Co-Founder & Product Engineer',
    roleZh: '共同創辦人暨產品工程師',
    org: 'MRKE Ltd. | 3D Interactive Software',
    orgZh: 'MRKE Ltd. 5.5 年持續商業營運',
    x: 520,
    y: 260,
    lineType: 'product',
    labelX: 520,
    labelY: 205,
    textAnchor: 'middle',
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

  // Harry Beck Transit Cartography Geometry:
  // 1. Shared Foundation Trunk (Kerry Hotel to Marriott Pivot):
  // Horizontally from (40, 200) through Kerry Hotel (120, 200) to Marriott (250, 200) and fork at (270, 200)
  const pathFoundation = 'M 40 200 L 270 200'

  // 2. Commercial Product Line (Warm Amber #e65c00):
  // Smooth 45-degree fillet from (270, 200) to (360, 260), horizontally through MRKE (520, 260) to (755, 260),
  // then curves 45 degrees up into the convergence junction at (830, 200)
  const pathProduct =
    'M 270 200 Q 285 200, 296 211 L 334 249 Q 345 260, 360 260 L 755 260 Q 769 260, 780 249 L 818 211 Q 829 200, 830 200'

  // 3. Applied AI and Systems Line (Cobalt Blue #1d4ed8):
  // Smooth 45-degree fillet from (270, 200) to (360, 140), horizontally through TNNUA (480, 140) to (755, 140),
  // then curves 45 degrees down into the convergence junction at (830, 200)
  const pathSystems =
    'M 270 200 Q 285 200, 296 189 L 334 151 Q 345 140, 360 140 L 755 140 Q 769 140, 780 151 L 818 189 Q 829 200, 830 200'

  // 4. Clinical Diagnostic Siding (Forest Green #2e7d32):
  // Branches 45 degrees up from Systems Line at (530, 140), levels horizontally at y=80 through Innova (650, 80) to (672, 80),
  // then curves 45 degrees down to rejoin Systems Line at (754, 140)
  const pathSiding =
    'M 530 140 Q 544 140, 555 129 L 593 91 Q 604 80, 618 80 L 672 80 Q 683 80, 694 91 L 732 129 Q 743 140, 754 140'

  // 5. Unified Trajectory Line (Matte Black #1c1c1e):
  // Single solid mainline from convergence junction (830, 200) to terminal stop (950, 200)
  const pathUnified = 'M 830 200 L 950 200'

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
        viewBox="0 0 1000 350"
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          display: 'block',
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Warm Gray Technical Drafting Grid */}
          <pattern
            id="transit-drafting-grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 25 0 L 0 0 0 25"
              fill="none"
              stroke="rgba(28, 28, 30, 0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* 1. Technical Drafting Grid Background */}
        <rect width="1000" height="350" fill="url(#transit-drafting-grid)" />

        {/* 2. Route Border Casings (Physical Print Separation) */}
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

        {/* 3. Solid Ink Route Stripes (Harry Beck Cartography) */}
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

        {/* Terminal Stop Bar at (950, 200) */}
        <line
          x1="950"
          y1="192"
          x2="950"
          y2="208"
          stroke={COLOR_BLACK}
          strokeWidth="4"
          strokeLinecap="square"
        />

        {/* Convergence Junction Interchange Roundel at (830, 200) */}
        <circle
          cx="830"
          cy="200"
          r="8"
          fill="#ffffff"
          stroke={COLOR_BLACK}
          strokeWidth="3"
        />

        {/* Track Line Labels */}
        <text
          x="360"
          y="126"
          fill={COLOR_COBALT}
          fontSize="8"
          fontFamily="var(--font-mono)"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          {isZh ? '應用 AI 與系統線' : 'APPLIED AI & SYSTEMS LINE'}
        </text>

        <text
          x="360"
          y="276"
          fill={COLOR_AMBER}
          fontSize="8"
          fontFamily="var(--font-mono)"
          fontWeight="600"
          letterSpacing="0.1em"
        >
          {isZh ? '商業產品線' : 'COMMERCIAL PRODUCT LINE'}
        </text>

        <text
          x="615"
          y="68"
          fill={COLOR_FOREST}
          fontSize="7.5"
          fontFamily="var(--font-mono)"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          {isZh ? '臨床研發支線' : 'CLINICAL SIDING'}
        </text>

        <text
          x="846"
          y="188"
          fill={COLOR_BLACK}
          fontSize="7.5"
          fontFamily="var(--font-mono)"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          {isZh ? 'AGENTIC AI 整合主線' : 'UNIFIED TRAJECTORY'}
        </text>

        {/* 4. Station Waypoints & Interchange Roundels */}
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

              {/* Transit Marker: Interchange Roundel vs Perpendicular Tick & Node */}
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
                // Regular Station Waypoint: Perpendicular tick stub & crisp circular disc
                <g>
                  <line
                    x1={station.x}
                    y1={station.y - 6}
                    x2={station.x}
                    y2={station.y + 6}
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

              {/* Station Label & Metadata */}
              <g
                transform={`translate(${station.labelX}, ${station.labelY})`}
                style={{ pointerEvents: 'none' }}
              >
                {/* Station Badge Number */}
                <rect
                  x="-10"
                  y="-28"
                  width="20"
                  height="14"
                  rx="2"
                  fill={isActive ? stationColor : 'rgba(28, 28, 30, 0.08)'}
                  style={{ transition: 'fill 0.18s ease' }}
                />
                <text
                  x="0"
                  y="-20.5"
                  fill={isActive ? '#ffffff' : '#3e3e42'}
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {station.stationNumber}
                </text>

                {/* Station Name */}
                <text
                  x="0"
                  y="-2"
                  fill={COLOR_BLACK}
                  fontSize={isActive ? '13' : '12'}
                  fontWeight={isActive ? '700' : '600'}
                  fontFamily="var(--font-sans)"
                  textAnchor="middle"
                >
                  {isZh ? station.nameZh : station.name}
                </text>

                {/* Station Period Tag */}
                <text
                  x="0"
                  y="13"
                  fill={isActive ? stationColor : '#8e8e93'}
                  fontSize="9.5"
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  textAnchor="middle"
                  style={{ transition: 'fill 0.18s ease' }}
                >
                  {isZh ? station.periodZh : station.period}
                </text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
