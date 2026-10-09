export type LineType = 'product' | 'systems' | 'siding' | 'interchange'

export type BranchType = 'trunk' | 'fork' | 'siding' | 'terminal' | 'parallel'

export type StationSide = 'left' | 'right'

export type TextAnchor = 'start' | 'middle' | 'end'

export interface Point {
  x: number
  y: number
}

/**
 * Minimal input required to place a station point on a line.
 * Calling line.addPoint(stationInput) automatically parses date,
 * orders the point chronologically on the line, and computes anchors.
 */
export interface StationInput {
  id: string
  date: string | Date | number
  name: string
  period: string
  role: string
  org: string
  actionHeadline?: string
  caseUrl?: string
  side?: StationSide
  lineType?: LineType
  isInterchange?: boolean
  labelAnchor?: TextAnchor
  labelX?: number
  labelY?: number
}

export interface TransitStation extends StationInput {
  timestamp: number
  stationNumber: number
  index: number
  x: number
  y: number
  side: StationSide
  lineType: LineType
  labelX: number
  labelY: number
  textAnchor: TextAnchor
  lineId: string
}

export interface LineOptions {
  id: string
  name: string
  color: string
  x: number
  branchType?: BranchType
  defaultSide?: StationSide
  lineType?: LineType
  casingColor?: string
  casingWidth?: number
  strokeWidth?: number
}

export interface TransitRoute {
  id: string
  lineId?: string
  name: string
  pathD: string
  strokeColor: string
  strokeWidth: number
  casingWidth: number
  casingColor: string
}

export interface LayoutMetrics {
  stationYs: number[]
  totalHeight: number
  forkY: number
  forkEndY: number
  convergenceStartY: number
  convergenceY: number
  sidingStartY: number
  sidingEndY: number
  terminalY: number
}

