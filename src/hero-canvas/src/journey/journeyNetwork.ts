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
    role: 'Unity C# & Blender',
    org: 'Independent Technical Foundations',
    actionHeadline: 'I taught myself C# and 3D modeling in Unity and Blender, establishing core real-time application skills.',
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
    role: 'MRKE Fast-Turnaround Salon',
    org: 'MRKE Ltd. | Co-Founder & Design Engineer',
    actionHeadline: 'I co-founded a fast-turnaround haircut business, observing shop floor consultations to uncover communication bottlenecks.',
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
    role: 'Local Multimodal AI Avatar',
    org: 'National Tainan University of the Arts | Systems Integration Engineer',
    actionHeadline: 'I engineered a local GPU multimodal pipeline in Unity, solving 3 to 5 second inference latency with conversational visual states.',
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
    role: 'Live Concert Motion Capture Sync',
    org: 'National Tainan University of the Arts | Systems Integration Engineer',
    actionHeadline: 'I synchronized an interactive virtual avatar with live Erhu performances in a 1000-seat hall using a 1.5-second buffer.',
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
    role: 'MRKE In-Store 3D Preview App',
    org: 'MRKE Ltd. | In-House 360 Hairstyle Viewer',
    actionHeadline: 'I built an in-store Unity C# 3D preview app on shop tablets, cutting consultation ambiguity by 35 percent.',
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
    name: '3D Avatar & LLM Clinical Simulation',
    period: 'Jul 2024 - Aug 2024',
    role: '3D Avatar & LLM Clinical Simulation',
    org: 'Innova Medical Technology | 3D UX Designer (Contract)',
    actionHeadline: 'I audited 50 clinical simulation cases, optimizing 3D avatar appearance, blendshapes, and rigging with LLM dialogue to eliminate diagnostic errors.',
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
    role: 'CollarAgent Visual Research Studio',
    org: 'CollarAgent | Creator',
    actionHeadline: 'I orchestrated multi-agents to build a full-stack local-first research studio pairing LangGraph workflows with an infinite canvas.',
    caseUrl: 'cases/collaragent.html',
    side: 'right',
    lineType: 'product',
  })

  // Station 8: Human-Computer Interaction and Virtual Reality Research
  systemsLine.addPoint({
    id: 'station-8',
    date: '2025-08',
    name: 'HCI & VR Perception Study',
    period: '2025 - 2026',
    role: 'HCI & VR Perception Study',
    org: 'IEEE ICVR 2026 Cardiff | First Author',
    actionHeadline: 'I authored peer-reviewed Virtual Reality research proving that desynchronized sensory feedback inflates human reaction times by 1.6 seconds.',
    caseUrl: 'cases/ieee-vr-conflict.html',
    side: 'left',
    lineType: 'systems',
  })

  // Station 9: Stratawright Agentic DAW
  productLine.addPoint({
    id: 'station-9',
    date: '2026-01',
    name: 'Stratawright Agentic DAW',
    period: '2026',
    role: 'Stratawright Agentic DAW',
    org: 'Stratawright | Creator',
    actionHeadline: 'I orchestrated hundreds of coding agents to build a production-ready DAW in one week, translating DSP telemetry into deterministic CLI protocols.',
    caseUrl: 'cases/stratawright.html',
    side: 'right',
    lineType: 'product',
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
    role: 'Next Destination',
    org: 'Future Destination | Design Engineering',
    actionHeadline: 'I connect commercial operations, creative audio computing, and real-time software systems to build resilient interactive products.',
    side: 'right',
    lineType: 'interchange',
    isInterchange: true,
  })

  return network
}

export const defaultJourneyNetwork: TransitNetwork = createDefaultJourneyNetwork()
