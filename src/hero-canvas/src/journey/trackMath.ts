import * as THREE from 'three'
import { StationData } from './types'

export const BIFURCATION_2020_NODE = new THREE.Vector3(-3.5, 0, -0.5)
export const TNNUA_TURNOUT_NODE = new THREE.Vector3(2.5, 0, 1.8)

export const STATION_DEFINITIONS: StationData[] = [
  {
    id: 'station-1',
    stationNumber: 1,
    index: 0,
    name: 'Kerry Hotel Hong Kong',
    organization: 'Kerry Hotel Hong Kong (Shangri-La Group Pre-Opening Team)',
    period: 'Jul 2017 - Jun 2020',
    role: 'Guest Experience Concierge',
    lineType: 'product',
    trackPoint: new THREE.Vector3(-5.5, 0, -0.5),
    position: new THREE.Vector3(-5.5, 0, -0.95),
    rotationY: 0,
    t: 0.0,
  },
  {
    id: 'station-2',
    stationNumber: 2,
    index: 1,
    name: 'Courtyard by Marriott',
    organization: 'Courtyard by Marriott | Hong Kong',
    period: 'Jul 2020 - Jul 2021',
    role: 'Guest Experience Concierge',
    lineType: 'systems',
    trackPoint: new THREE.Vector3(-1.5, 0, 1.5),
    position: new THREE.Vector3(-1.5, 0, 1.95),
    rotationY: 0,
    t: 0.25,
  },
  {
    id: 'station-3',
    stationNumber: 3,
    index: 2,
    name: 'Systems Engineer',
    organization: 'National Tainan University of the Arts (TNNUA)',
    period: 'Sep 2023 - Mar 2025',
    role: 'Systems Integration Engineer',
    lineType: 'systems',
    trackPoint: new THREE.Vector3(2.5, 0, 1.8),
    position: new THREE.Vector3(2.5, 0, 1.35),
    rotationY: Math.PI,
    t: 0.5,
  },
  {
    id: 'station-4',
    stationNumber: 4,
    index: 3,
    name: 'Innova Medical Technology',
    organization: 'Innova Medical Technology Co., Ltd. | Kaohsiung, Taiwan',
    period: 'Jul 2024 - Aug 2024',
    role: 'User Experience Designer (Intern)',
    lineType: 'siding',
    trackPoint: new THREE.Vector3(4.2, 0, 3.2),
    position: new THREE.Vector3(3.85, 0, 3.55),
    rotationY: Math.PI * 0.25,
    t: 0.75,
  },
  {
    id: 'station-5',
    stationNumber: 5,
    index: 4,
    name: 'MRKE Ltd.',
    organization: 'MRKE Ltd. | 3D Interactive Software & Salon Experience',
    period: 'Dec 2020 - Jun 2026',
    role: 'Co-Founder & Product Engineer',
    lineType: 'product',
    trackPoint: new THREE.Vector3(2.5, 0, -2.2),
    position: new THREE.Vector3(2.5, 0, -2.65),
    rotationY: 0,
    t: 1.0,
  },
]

export const MIN_TRAIN_T = 0
export const MAX_TRAIN_T = 1

/**
 * Commercial Product Line (Warm Amber #e65c00)
 * Continuous 5.5-year operational spine from Kerry Hotel through the 2020 bifurcation directly to MRKE Ltd.
 */
export function createCommercialProductCurve(): THREE.CatmullRomCurve3 {
  const points = [
    new THREE.Vector3(-7.5, 0, -0.5),
    new THREE.Vector3(-5.5, 0, -0.5), // Station 1: Kerry Hotel
    new THREE.Vector3(-3.5, 0, -0.5), // 2020 Bifurcation Node
    new THREE.Vector3(-1.5, 0, -1.8),
    new THREE.Vector3(0.5, 0, -2.2),
    new THREE.Vector3(2.5, 0, -2.2),  // Station 5: MRKE Ltd.
    new THREE.Vector3(4.8, 0, -2.2),
    new THREE.Vector3(6.5, 0, -2.2),  // Open horizon progression
  ]

  return new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5)
}

/**
 * Applied AI and Systems Line (Technical Cyan #0071e3 / #38bdf8)
 * Branches at the 2020 bifurcation into Marriott and continues to TNNUA Systems Engineer.
 */
export function createSystemsCurve(): THREE.CatmullRomCurve3 {
  const points = [
    new THREE.Vector3(-3.5, 0, -0.5), // 2020 Bifurcation Node
    new THREE.Vector3(-2.6, 0, 0.5),
    new THREE.Vector3(-1.5, 0, 1.5),  // Station 2: Courtyard by Marriott
    new THREE.Vector3(0.5, 0, 1.8),
    new THREE.Vector3(2.5, 0, 1.8),   // Station 3: TNNUA Systems Engineer
    new THREE.Vector3(3.5, 0, 1.8),   // Terminus
  ]

  return new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5)
}

/**
 * Clinical Diagnostic Siding (Emerald #10b981)
 * Dedicated lateral branch spur off TNNUA platform for the 2-month summer clinical diagnostic sprint at Innova Medical.
 */
export function createClinicalSidingCurve(): THREE.CatmullRomCurve3 {
  const points = [
    new THREE.Vector3(2.5, 0, 1.8),   // Siding turnout off Station 3
    new THREE.Vector3(3.3, 0, 2.3),
    new THREE.Vector3(4.2, 0, 3.2),   // Station 4: Innova Medical Technology
    new THREE.Vector3(4.9, 0, 3.7),   // Siding terminus
  ]

  return new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5)
}

/**
 * Backwards compatibility helper during transition
 */
export function createRailwayTrackSpline(): THREE.CatmullRomCurve3 {
  return createCommercialProductCurve()
}

/**
 * Backwards compatibility helper during transition
 */
export function createMainlineBypassCurve(): THREE.CatmullRomCurve3 {
  return createSystemsCurve()
}

export function computeStationMetadata(_curve?: THREE.CatmullRomCurve3): StationData[] {
  return STATION_DEFINITIONS
}

