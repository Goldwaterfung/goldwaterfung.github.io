import * as THREE from 'three'

export type LineType = 'foundation' | 'product' | 'systems' | 'siding' | 'unified'

export interface London3DStation {
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
  position: THREE.Vector3
  lineType: LineType
  isInterchange?: boolean
  accentColor: string
}

export interface JourneyActiveDetail {
  index: number
  station: London3DStation
}

export interface StationData {
  id: string
  stationNumber: number
  index: number
  name: string
  organization: string
  period: string
  role: string
  position: THREE.Vector3
  trackPoint: THREE.Vector3
  rotationY: number
  lineType: string
  t: number
}

export interface JourneyState {
  progress: number
  targetProgress: number
  activeStationIndex: number
  isMoving: boolean
  stations: StationData[]
}
