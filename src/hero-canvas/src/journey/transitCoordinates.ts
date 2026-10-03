import * as THREE from 'three'
import { London3DStation } from './types'

// Map 2D SVG canvas (1000 x 350) to 3D world space (X: -10..+10, Z: -3.5..+3.5, Y=0)
export function svgToWorld(svgX: number, svgY: number, elevation: number = 0): THREE.Vector3 {
  return new THREE.Vector3(
    (svgX - 500) * 0.02,
    elevation,
    (svgY - 175) * 0.02
  )
}

// Approved theme colors from codebase (style.css & LondonTransitMap.tsx)
export const COLOR_AMBER = '#e65c00' // var(--accent-amber): Commercial Product Line & Foundation
export const COLOR_COBALT = '#1d4ed8' // Applied AI & Systems Line
export const COLOR_FOREST = '#2e7d32' // var(--accent-green): Clinical Diagnostic Siding
export const COLOR_BLACK = '#1c1c1e' // var(--text-primary): Unified Trajectory Line
export const COLOR_CASING = '#f7f5f0' // var(--bg-body): Physical Print Separation Casing
export const COLOR_PLINTH = '#fbfbfa' // var(--bg-panel): Architectural Model Plinth
export const COLOR_GRID = '#dfded8' // var(--border-color): Technical Drafting Grid

// Five verified station waypoints in strict chronological alignment
export const LONDON_3D_STATIONS: London3DStation[] = [
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
    position: svgToWorld(120, 200, 0.08),
    lineType: 'foundation',
    accentColor: COLOR_AMBER,
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
    position: svgToWorld(250, 200, 0.08),
    lineType: 'foundation',
    isInterchange: true,
    accentColor: COLOR_AMBER,
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
    position: svgToWorld(480, 140, 0.08),
    lineType: 'systems',
    accentColor: COLOR_COBALT,
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
    position: svgToWorld(650, 80, 0.08),
    lineType: 'siding',
    accentColor: COLOR_FOREST,
  },
  {
    id: 'station-5',
    stationNumber: 5,
    index: 4,
    name: 'MRKE Ltd.',
    nameZh: 'MRKE 創辦與產品工程',
    period: 'Dec 2020 - Jun 2026',
    periodZh: '2020 年 12 月 - 2026 年 6 月',
    role: 'Co-Founder & Product Engineer',
    roleZh: '共同創辦人暨產品工程師',
    org: 'MRKE Ltd. (In-House 3D Tablet System)',
    orgZh: 'MRKE Ltd. (自研沙龍 3D 髮型預覽系統)',
    position: svgToWorld(520, 260, 0.08),
    lineType: 'product',
    accentColor: COLOR_AMBER,
  },
]

// 1. Foundation Trunk: from (40, 200) to bifurcation at (270, 200)
export function createFoundationCurve(): THREE.CurvePath<THREE.Vector3> {
  const path = new THREE.CurvePath<THREE.Vector3>()
  path.add(new THREE.LineCurve3(svgToWorld(40, 200), svgToWorld(270, 200)))
  return path
}

// 2. Commercial Product Line (Warm Amber #e65c00):
// Fillet to 45 deg, downward to MRKE at (520, 260), then upward to convergence junction (830, 200)
export function createProductCurve(): THREE.CurvePath<THREE.Vector3> {
  const path = new THREE.CurvePath<THREE.Vector3>()
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(270, 200),
      svgToWorld(285, 200),
      svgToWorld(296, 211)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(296, 211), svgToWorld(334, 249)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(334, 249),
      svgToWorld(345, 260),
      svgToWorld(360, 260)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(360, 260), svgToWorld(755, 260)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(755, 260),
      svgToWorld(769, 260),
      svgToWorld(780, 249)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(780, 249), svgToWorld(818, 211)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(818, 211),
      svgToWorld(829, 200),
      svgToWorld(830, 200)
    )
  )
  return path
}

// 3. Applied AI and Systems Line (Cobalt Blue #1d4ed8):
// Fillet to 45 deg, upward to TNNUA at (480, 140), then downward to convergence junction (830, 200)
export function createSystemsCurve(): THREE.CurvePath<THREE.Vector3> {
  const path = new THREE.CurvePath<THREE.Vector3>()
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(270, 200),
      svgToWorld(285, 200),
      svgToWorld(296, 189)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(296, 189), svgToWorld(334, 151)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(334, 151),
      svgToWorld(345, 140),
      svgToWorld(360, 140)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(360, 140), svgToWorld(755, 140)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(755, 140),
      svgToWorld(769, 140),
      svgToWorld(780, 151)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(780, 151), svgToWorld(818, 189)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(818, 189),
      svgToWorld(829, 200),
      svgToWorld(830, 200)
    )
  )
  return path
}

// 4. Clinical Diagnostic Siding (Forest Green #2e7d32):
// Branches 45 deg up from Systems Line at (530, 140), levels horizontally at y=80 through Innova (650, 80), rejoins at (754, 140)
export function createSidingCurve(): THREE.CurvePath<THREE.Vector3> {
  const path = new THREE.CurvePath<THREE.Vector3>()
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(530, 140),
      svgToWorld(544, 140),
      svgToWorld(555, 129)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(555, 129), svgToWorld(593, 91)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(593, 91),
      svgToWorld(604, 80),
      svgToWorld(618, 80)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(618, 80), svgToWorld(672, 80)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(672, 80),
      svgToWorld(683, 80),
      svgToWorld(694, 91)
    )
  )
  path.add(new THREE.LineCurve3(svgToWorld(694, 91), svgToWorld(732, 129)))
  path.add(
    new THREE.QuadraticBezierCurve3(
      svgToWorld(732, 129),
      svgToWorld(743, 140),
      svgToWorld(754, 140)
    )
  )
  return path
}

// 5. Unified Mainline (Matte Black #1c1c1e):
// Horizontal from convergence junction (830, 200) to terminus (950, 200)
export function createUnifiedCurve(): THREE.CurvePath<THREE.Vector3> {
  const path = new THREE.CurvePath<THREE.Vector3>()
  path.add(new THREE.LineCurve3(svgToWorld(830, 200), svgToWorld(950, 200)))
  return path
}
