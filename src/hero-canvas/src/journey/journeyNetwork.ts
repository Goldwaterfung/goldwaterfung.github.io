import {
  COLOR_AMBER,
  COLOR_BLACK,
  COLOR_CASING,
  COLOR_COBALT,
  COLOR_FOREST,
  PRODUCT_X,
  SIDING_X,
  SYSTEMS_X,
  TRUNK_X,
  TransitNetwork,
} from './cartography'

/**
 * Creates the default journey network matching the master source of truth.
 * Encapsulates the station datasets and line hierarchy using the fluent builder API.
 */
export function createDefaultJourneyNetwork(): TransitNetwork {
  const network = new TransitNetwork()

  // 1. Foundation Trunk Line (Neutral Matte Black shared foundation)
  const trunk = network.createLine({
    id: 'foundation',
    name: 'Foundation Trunk',
    color: COLOR_BLACK,
    x: TRUNK_X,
    branchType: 'trunk',
    casingColor: COLOR_CASING,
    strokeWidth: 6.5,
    casingWidth: 12,
  })

  // Station 1: Self-Taught Unity C# & Blender
  trunk.addPoint({
    id: 'station-1',
    date: '2019-01',
    name: 'Unity C# & Blender',
    period: '2019',
    role: 'Mastered programming in Unity C# and 3D modeling',
    org: 'Independent Technical Foundations',
    actionHeadline: 'Mastered self-taught programming in Unity C# and 3D modeling',
    side: 'left',
    lineType: 'systems',
  })

  // 2. Commercial Product Line (Branch line on trunk)
  const productLine = trunk.addLine({
    id: 'product',
    name: 'Commercial Product Line',
    color: COLOR_AMBER,
    x: PRODUCT_X,
    branchType: 'fork',
    defaultSide: 'right',
    lineType: 'product',
    strokeWidth: 6.5,
    casingWidth: 12,
    casingColor: COLOR_CASING,
  })

  // Station 2: MRKE Ltd. (Retail Enterprise)
  productLine.addPoint({
    id: 'station-2',
    date: '2020-12',
    name: 'MRKE Fast-Turnaround Salon',
    period: 'Dec 2020 - Jun 2026',
    role: 'Founded fast-turnaround salon and mapped consultation bottlenecks',
    org: 'MRKE Ltd. | Fast-Turnaround Haircut Business',
    actionHeadline: 'Founded fast-turnaround haircut business and mapped consultation bottlenecks',
    side: 'right',
    lineType: 'product',
  })

  // 3. Applied AI and Systems Line (Branch line on trunk)
  const systemsLine = trunk.addLine({
    id: 'systems',
    name: 'Applied AI and Systems Line',
    color: COLOR_COBALT,
    x: SYSTEMS_X,
    branchType: 'fork',
    defaultSide: 'left',
    lineType: 'systems',
    strokeWidth: 6.5,
    casingWidth: 12,
    casingColor: COLOR_CASING,
  })

  // Station 3: TNNUA Multimodal AI Virtual Principal
  systemsLine.addPoint({
    id: 'station-3',
    date: '2023-09',
    name: 'Local Multimodal AI Avatar',
    period: 'Sep 2023 - Jun 2024',
    role: 'Engineered local GPU multimodal pipeline with real-time feedback',
    org: 'National Tainan University of the Arts',
    actionHeadline: 'Engineered local GPU multimodal AI pipeline with real-time visual feedback',
    caseUrl: 'cases/virtual-principal.html',
    side: 'left',
    lineType: 'systems',
  })

  // Station 4: TNNUA Live Erhu Concert Sync
  systemsLine.addPoint({
    id: 'station-4',
    date: '2023-11',
    name: 'Live Concert Motion Capture Sync',
    period: 'Nov 2023 - Dec 2024',
    role: 'Synchronized virtual avatar with live Erhu using 1.5s buffer',
    org: 'National Tainan University of the Arts',
    actionHeadline: 'Synchronized virtual avatar with live Erhu performance using 1.5-second buffer',
    caseUrl: 'cases/live-concert-sync.html',
    side: 'left',
    lineType: 'systems',
  })

  // Station 5: MRKE 3D Hairstyle App
  productLine.addPoint({
    id: 'station-5',
    date: '2022-01',
    name: 'MRKE In-Store 3D Preview App',
    period: '2022 - Jun 2026',
    role: 'Shipped in-store 3D preview app cutting consultation ambiguity 35%',
    org: 'MRKE Ltd. | In-House Interactive 3D Tooling',
    actionHeadline: 'Shipped in-store 3D preview app cutting consultation ambiguity by 35 percent',
    caseUrl: 'cases/mrke-3d.html',
    side: 'right',
    lineType: 'product',
  })

  // 4. Clinical Diagnostic Siding (Line on a line: siding branched off systemsLine)
  const sidingLine = systemsLine.addLine({
    id: 'siding',
    name: 'Clinical Diagnostic Siding',
    color: COLOR_FOREST,
    x: SIDING_X,
    branchType: 'siding',
    defaultSide: 'left',
    lineType: 'siding',
    strokeWidth: 4.5,
    casingWidth: 9.5,
    casingColor: COLOR_CASING,
  })

  // Station 6: Innova Medical Technology
  sidingLine.addPoint({
    id: 'station-6',
    date: '2024-07',
    name: 'Clinical AI Simulator Diagnostics',
    period: 'Jul 2024 - Aug 2024',
    role: 'Audited 50 clinical simulation cases to align schemas',
    org: 'Innova Medical Technology Co., Ltd.',
    actionHeadline: 'Audited 50 clinical simulation cases to align schemas and eliminate diagnostic errors',
    caseUrl: 'cases/innova-medical.html',
    side: 'left',
    lineType: 'siding',
  })

  // Station 7: CollarAgent Research Studio
  productLine.addPoint({
    id: 'station-7',
    date: '2025-02',
    name: 'CollarAgent Visual Research Studio',
    period: '2025',
    role: 'Built Electron research studio in React + TypeScript pairing LangGraph with canvas',
    org: 'CollarAgent | Visual Research Studio',
    actionHeadline: 'Built local-first Electron research studio in React + TypeScript pairing LangGraph with infinite canvas',
    caseUrl: 'cases/collaragent.html',
    side: 'right',
    lineType: 'product',
  })

  // Station 8: IEEE ICVR 2026 Research
  systemsLine.addPoint({
    id: 'station-8',
    date: '2025-08',
    name: 'IEEE ICVR 2026 Ambisonics Study',
    period: '2025 - 2026',
    role: 'Quantified visual capture and sensory conflict in VR',
    org: 'IEEE ICVR 2026 | Cardiff, UK',
    actionHeadline: 'Quantified visual capture and sensory conflict in VR with 16-channel Ambisonics',
    caseUrl: 'cases/ieee-vr-conflict.html',
    side: 'left',
    lineType: 'systems',
  })

  // Station 9: Stratawright Agentic DAW
  systemsLine.addPoint({
    id: 'station-9',
    date: '2026-01',
    name: 'Stratawright Agentic DAW',
    period: '2026',
    role: 'Architected digital audio workstation for agent CLI protocols',
    org: 'Stratawright | Agentic Audio Workstation',
    actionHeadline: 'Architected digital audio workstation controlled by agent CLI protocols',
    caseUrl: 'cases/stratawright.html',
    side: 'left',
    lineType: 'systems',
  })

  // 5. Unified Trajectory Line (Terminal line)
  const terminalLine = network.createLine({
    id: 'unified',
    name: 'Unified Trajectory Line',
    color: COLOR_BLACK,
    x: TRUNK_X,
    branchType: 'terminal',
    strokeWidth: 6.5,
    casingWidth: 12,
    casingColor: COLOR_CASING,
  })

  // Station 10: Next Destination
  terminalLine.addPoint({
    id: 'station-10',
    date: '2026-06',
    name: 'Next Destination',
    period: '2026+',
    role: 'Connecting business, creative arts, and software engineering',
    org: 'Future Destination | Design Engineering',
    actionHeadline: 'Connecting commercial operations, creative arts, and software engineering',
    side: 'right',
    lineType: 'interchange',
    isInterchange: true,
  })

  return network
}

export const defaultJourneyNetwork: TransitNetwork = createDefaultJourneyNetwork()
