import {
  BranchType,
  LayoutMetrics,
  LineOptions,
  LineType,
  StationInput,
  StationSide,
  TextAnchor,
  TransitRoute,
  TransitStation,
} from './types'

// Authentic Transit Cartography Color System (Matching Site Design Tokens)
export const COLOR_AMBER = '#e65c00' // var(--accent-amber): Commercial Product Line & Foundation
export const COLOR_COBALT = '#1d4ed8' // Applied AI & Systems Line
export const COLOR_FOREST = '#2e7d32' // var(--accent-green): Clinical Diagnostic Siding
export const COLOR_BLACK = '#1c1c1e' // var(--text-primary): Unified Trajectory Line
export const COLOR_CASING = '#f7f5f0' // var(--bg-body): Physical Print Separation Casing

export const TRUNK_X = 140
export const SYSTEMS_X = 85
export const PRODUCT_X = 195
export const SIDING_X = 55

// Auto-layout geometric spacing constraints
export const START_Y = 140
export const CARD_GAP = 54
export const MIN_CHRONO_STEP = 110
export const FILLET_HEIGHT = 85

const DEFAULT_SIDES: StationSide[] = [
  'left',
  'right',
  'left',
  'left',
  'right',
  'left',
  'right',
  'left',
  'left',
  'right',
]

/**
 * Parses diverse date inputs (ISO strings, year strings, month/year, Date objects, timestamps)
 * into a comparable numeric epoch timestamp for chronological sorting.
 */
export function parseDateInput(dateInput: string | Date | number): number {
  if (typeof dateInput === 'number') {
    return dateInput
  }
  if (dateInput instanceof Date) {
    return dateInput.getTime()
  }
  if (typeof dateInput === 'string') {
    const trimmed = dateInput.trim()
    const parsedNative = Date.parse(trimmed)
    if (!isNaN(parsedNative)) {
      return parsedNative
    }
    // Handle formats like "2020 年 12 月" or "2019-01" or "2020/12"
    const matchYearMonth = trimmed.match(/^(\d{4})[-/.年\s]+(\d{1,2})/)
    if (matchYearMonth) {
      const year = parseInt(matchYearMonth[1], 10)
      const month = parseInt(matchYearMonth[2], 10) - 1
      return new Date(year, month, 1).getTime()
    }
    // Handle bare year like "2019" or "2026+"
    const matchYear = trimmed.match(/(\d{4})/)
    if (matchYear) {
      const year = parseInt(matchYear[1], 10)
      return new Date(year, 0, 1).getTime()
    }
  }
  return 0
}

/**
 * Computes default label position and text anchor to guarantee that track labels
 * render into open central corridors rather than colliding with outer journey cards.
 */
function computeDefaultStationLabel(
  x: number,
  side: StationSide
): { labelX: number; textAnchor: TextAnchor } {
  if (x === PRODUCT_X) {
    // Product track: label points inward to central corridor
    return { labelX: x - 8, textAnchor: 'end' }
  } else if (x === SYSTEMS_X) {
    // Systems track: label points inward to central corridor
    return { labelX: x + 8, textAnchor: 'start' }
  } else if (x === SIDING_X) {
    // Siding track: label points inward toward systems track
    return { labelX: x + 7, textAnchor: 'start' }
  } else {
    // Trunk line at 140: label points outward toward card side
    if (side === 'right') {
      return { labelX: x + 16, textAnchor: 'start' }
    } else {
      return { labelX: x - 16, textAnchor: 'end' }
    }
  }
}

/**
 * Represents a single transit line in the network.
 * Provides fluent methods to add station points with dates (auto-arranged)
 * and branch child lines off this line ("add line on a line").
 */
export class TransitLine {
  public readonly id: string
  public readonly name: string
  public readonly color: string
  public readonly x: number
  public readonly branchType: BranchType
  public readonly defaultSide: StationSide
  public readonly lineType: LineType
  public readonly casingColor: string
  public readonly casingWidth: number
  public readonly strokeWidth: number

  public parentLine: TransitLine | null = null
  public childLines: TransitLine[] = []
  private network: TransitNetwork
  private points: TransitStation[] = []

  constructor(
    options: LineOptions,
    network: TransitNetwork,
    parentLine: TransitLine | null = null
  ) {
    this.id = options.id
    this.name = options.name
    this.color = options.color
    this.x = options.x
    this.branchType = options.branchType || 'trunk'
    this.defaultSide = options.defaultSide || 'right'
    this.lineType =
      options.lineType || (this.branchType === 'siding' ? 'siding' : 'product')
    this.casingColor = options.casingColor || COLOR_CASING
    this.casingWidth = options.casingWidth || 10
    this.strokeWidth = options.strokeWidth || 7
    this.network = network
    this.parentLine = parentLine
  }

  /**
   * Adds a point/station to this line with a date.
   * Parses the date and automatically arranges all points on this line in chronological order.
   */
  public addPoint(input: StationInput): TransitStation {
    const timestamp = parseDateInput(input.date)
    const side = input.side || this.defaultSide
    const lineType = input.lineType || this.lineType
    const defaults = computeDefaultStationLabel(this.x, side)
    const textAnchor = input.labelAnchor || defaults.textAnchor
    const labelX = input.labelX !== undefined ? input.labelX : defaults.labelX
    const labelY = input.labelY !== undefined ? input.labelY : 0

    const station: TransitStation = {
      ...input,
      timestamp,
      stationNumber: 0,
      index: 0,
      x: this.x,
      y: 0,
      side,
      lineType,
      labelX,
      labelY,
      textAnchor,
      lineId: this.id,
    }

    this.points.push(station)
    this.autoArrangePoints()
    this.network.invalidate()
    return station
  }

  /**
   * Alias for addPoint to add a station to this line.
   */
  public addStation(input: StationInput): TransitStation {
    return this.addPoint(input)
  }

  /**
   * Adds a child line branching off this line ("add line on a line").
   * Registers the parent-child relationship and attaches it to the network.
   */
  public addLine(options: LineOptions): TransitLine {
    const childLine = new TransitLine(options, this.network, this)
    this.childLines.push(childLine)
    this.network.registerLine(childLine)
    this.network.invalidate()
    return childLine
  }

  /**
   * Auto-arranges all points on this line chronologically by their parsed date timestamp.
   */
  public autoArrangePoints(): void {
    this.points.sort((a, b) => a.timestamp - b.timestamp)
  }

  public getPoints(): readonly TransitStation[] {
    return this.points
  }

  public getChildLines(): readonly TransitLine[] {
    return this.childLines
  }
}

/**
 * Top-level Transit Cartography Graph.
 * Holds lines, aggregates auto-arranged points, executes the auto-layout spacing algorithm,
 * and generates continuous SVG path routes.
 */
export class TransitNetwork {
  private lines: Map<string, TransitLine> = new Map()
  private rootLines: TransitLine[] = []
  private cachedStations: TransitStation[] | null = null

  /**
   * Creates and registers a new root line on the network.
   */
  public createLine(options: LineOptions): TransitLine {
    const line = new TransitLine(options, this, null)
    this.lines.set(line.id, line)
    this.rootLines.push(line)
    this.invalidate()
    return line
  }

  /**
   * Alias for createLine.
   */
  public addLine(options: LineOptions): TransitLine {
    return this.createLine(options)
  }

  public registerLine(line: TransitLine): void {
    this.lines.set(line.id, line)
    this.invalidate()
  }

  public getLine(id: string): TransitLine | undefined {
    return this.lines.get(id)
  }

  public getAllLines(): TransitLine[] {
    return Array.from(this.lines.values())
  }

  public invalidate(): void {
    this.cachedStations = null
  }

  /**
   * Aggregates all points from all lines in the network,
   * sorted in chronological order across the entire network,
   * and assigns sequential 1-based station numbers and 0-based indices.
   */
  public getAllStations(): TransitStation[] {
    if (this.cachedStations) {
      return this.cachedStations
    }

    const allPoints: TransitStation[] = []
    for (const line of this.lines.values()) {
      allPoints.push(...line.getPoints())
    }

    // Chronologically sort all points across the network
    allPoints.sort((a, b) => a.timestamp - b.timestamp)

    allPoints.forEach((station, idx) => {
      station.index = idx
      station.stationNumber = idx + 1
    })

    this.cachedStations = allPoints
    return allPoints
  }

  /**
   * Algorithmic Auto-Layout Spacing Engine
   * Dynamically measures rendered card heights, applies same-side card clearances
   * and chronological advancement, and calculates mathematically bounded junction coordinates.
   */
  public computeLayout(cardHeights: number[] = []): LayoutMetrics {
    const stations = this.getAllStations()
    const sides: StationSide[] =
      stations.length > 0 ? stations.map((s) => s.side) : DEFAULT_SIDES
    const count = Math.max(cardHeights.length, sides.length)

    const stationYs: number[] = []
    let lastRightBottom = 0
    let lastLeftBottom = 0
    let prevY = 0

    for (let i = 0; i < count; i++) {
      const h = cardHeights[i] || 240
      const side = sides[i] || (i % 2 === 0 ? 'right' : 'left')
      const isRight = side === 'right'

      let ySameSide = 0
      if (isRight) {
        ySameSide =
          lastRightBottom > 0 ? lastRightBottom + CARD_GAP + h / 2 : START_Y + h / 2
      } else {
        ySameSide =
          lastLeftBottom > 0 ? lastLeftBottom + CARD_GAP + h / 2 : START_Y + h / 2
      }

      let yChrono = 0
      if (i === 0) {
        yChrono = START_Y + h / 2
      } else {
        yChrono = prevY + MIN_CHRONO_STEP
      }

      const y = Math.round(Math.max(ySameSide, yChrono))
      stationYs.push(y)

      if (stations[i]) {
        stations[i].y = y
        stations[i].labelY = y - 4
      }

      if (isRight) {
        lastRightBottom = y + h / 2
      } else {
        lastLeftBottom = y + h / 2
      }
      prevY = y
    }

    // Derive topological junction bounds dynamically
    const trunkStations = stations.filter((s) => {
      const line = this.lines.get(s.lineId)
      return line?.branchType === 'trunk'
    })
    const forkBranchStations = stations.filter((s) => {
      const line = this.lines.get(s.lineId)
      return line?.branchType === 'fork'
    })
    const sidingStations = stations.filter((s) => {
      const line = this.lines.get(s.lineId)
      return line?.branchType === 'siding'
    })
    const terminalStations = stations.filter((s) => {
      const line = this.lines.get(s.lineId)
      return line?.branchType === 'terminal'
    })

    const yLastTrunk =
      trunkStations.length > 0 ? trunkStations[trunkStations.length - 1].y : 620
    const yFirstBranch =
      forkBranchStations.length > 0
        ? Math.min(...forkBranchStations.map((s) => s.y))
        : 1040

    const forkY = Math.round(yLastTrunk + (yFirstBranch - yLastTrunk) * 0.42)
    const forkEndY = forkY + FILLET_HEIGHT

    let sidingStartY = 0
    let sidingEndY = 0
    if (sidingStations.length > 0) {
      const sidingYs = sidingStations.map((s) => s.y)
      const minSidingY = Math.min(...sidingYs)
      const maxSidingY = Math.max(...sidingYs)
      const sidingDuration = 100
      sidingStartY = Math.round(Math.max(forkEndY + 30, minSidingY - sidingDuration))
      sidingEndY = Math.round(maxSidingY + sidingDuration)
    } else {
      sidingStartY = forkEndY + 100
      sidingEndY = sidingStartY + 150
    }

    const branchMaxY =
      forkBranchStations.length > 0
        ? Math.max(...forkBranchStations.map((s) => s.y))
        : 1480

    // Strict topological inequality: convergence starts after branches and siding reconnects
    const convergenceStartY = Math.round(Math.max(branchMaxY + 60, sidingEndY + 45))
    const convergenceY = convergenceStartY + FILLET_HEIGHT

    let lastStationY = convergenceY + 60
    if (terminalStations.length > 0) {
      terminalStations.forEach((st) => {
        if (st.y < convergenceY + 60) {
          st.y = convergenceY + 60
          stationYs[st.index] = st.y
          st.labelY = st.y - 4
        }
        lastStationY = Math.max(lastStationY, st.y)
      })
    }

    const terminalY = lastStationY + 80
    const totalHeight = terminalY + 50

    return {
      stationYs,
      totalHeight,
      forkY,
      forkEndY,
      convergenceStartY,
      convergenceY,
      sidingStartY,
      sidingEndY,
      terminalY,
    }
  }

  /**
   * Generates continuous SVG path routes for all registered lines.
   */
  public generateRoutes(metrics: LayoutMetrics): TransitRoute[] {
    const routes: TransitRoute[] = []
    const {
      forkY,
      convergenceStartY,
      convergenceY,
      sidingStartY,
      sidingEndY,
      terminalY,
    } = metrics

    for (const line of this.lines.values()) {
      let pathD = ''
      const parentX = line.parentLine ? line.parentLine.x : TRUNK_X

      if (line.branchType === 'trunk') {
        pathD = `M ${line.x} 30 L ${line.x} ${forkY}`
      } else if (line.branchType === 'fork') {
        const sign = line.x > parentX ? 1 : -1
        const x1 = parentX + 10 * sign
        const y1 = forkY + 25
        const x2 = parentX + 45 * sign
        const y2 = forkY + 60
        const x3 = line.x
        const y3 = forkY + FILLET_HEIGHT

        const cy1 = convergenceStartY + 25
        const cx1 = line.x - 10 * sign
        const cy2 = convergenceStartY + 60
        const cx2 = parentX + 10 * sign
        const cy3 = convergenceStartY + FILLET_HEIGHT

        pathD = [
          `M ${parentX} ${forkY}`,
          `Q ${parentX} ${forkY + 15}, ${x1} ${y1}`,
          `L ${x2} ${y2}`,
          `Q ${x3} ${forkY + 70}, ${x3} ${y3}`,
          `L ${line.x} ${convergenceStartY}`,
          `Q ${line.x} ${convergenceStartY + 15}, ${cx1} ${cy1}`,
          `L ${cx2} ${cy2}`,
          `Q ${parentX} ${convergenceStartY + 70}, ${parentX} ${cy3}`,
        ].join(' ')
      } else if (line.branchType === 'siding') {
        pathD = [
          `M ${parentX} ${sidingStartY}`,
          `C ${parentX} ${sidingStartY + 40}, ${line.x} ${sidingStartY + 40}, ${line.x} ${sidingStartY + 65}`,
          `L ${line.x} ${sidingEndY - 65}`,
          `C ${line.x} ${sidingEndY - 40}, ${parentX} ${sidingEndY - 40}, ${parentX} ${sidingEndY}`,
        ].join(' ')
      } else if (line.branchType === 'terminal') {
        pathD = `M ${line.x} ${convergenceY} L ${line.x} ${terminalY}`
      } else {
        pathD = `M ${line.x} 30 L ${line.x} ${terminalY}`
      }

      routes.push({
        id: `route-${line.id}`,
        lineId: line.id,
        name: line.name,
        pathD,
        strokeColor: line.color,
        strokeWidth: line.strokeWidth,
        casingWidth: line.casingWidth,
        casingColor: line.casingColor,
      })
    }

    return routes
  }
}

