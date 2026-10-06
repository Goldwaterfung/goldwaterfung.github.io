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
    nameZh: '技術實踐與系統基礎',
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
    nameZh: '自學 Unity C# 與 Blender',
    period: '2019',
    periodZh: '2019 年',
    role: 'Mastered programming in Unity C# and 3D modeling',
    roleZh: '自主研習 Unity C# 程式設計與 3D 建模',
    org: 'Independent Technical Foundations',
    orgZh: '獨立技術實踐與系統基礎',
    actionHeadline: 'Mastered self-taught programming in Unity C# and 3D modeling',
    side: 'left',
    lineType: 'systems',
  })

  // 2. Commercial Product Line (Branch line on trunk)
  const productLine = trunk.addLine({
    id: 'product',
    name: 'Commercial Product Line',
    nameZh: '商業產品與互動軟體',
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
    nameZh: 'MRKE 門市商業營運',
    period: 'Dec 2020 - Jun 2026',
    periodZh: '2020 年 12 月 - 2026 年 6 月',
    role: 'Founded fast-turnaround salon and mapped consultation bottlenecks',
    roleZh: '創辦快速剪髮門市並梳理溝通痛點',
    org: 'MRKE Ltd. | Fast-Turnaround Haircut Business',
    orgZh: 'MRKE Ltd. | 快速剪髮實體商業營運',
    actionHeadline: 'Founded fast-turnaround haircut business and mapped consultation bottlenecks',
    side: 'right',
    lineType: 'product',
  })

  // 3. Applied AI and Systems Line (Branch line on trunk)
  const systemsLine = trunk.addLine({
    id: 'systems',
    name: 'Applied AI and Systems Line',
    nameZh: '應用 AI 與系統工程',
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
    nameZh: '本地多模態 AI 虛擬校長',
    period: 'Sep 2023 - Jun 2024',
    periodZh: '2023 年 9 月 - 2024 年 6 月',
    role: 'Engineered local GPU multimodal pipeline with real-time feedback',
    roleZh: '建構本地 GPU 多模態管線與即時反饋',
    org: 'National Tainan University of the Arts',
    orgZh: '國立臺南藝術大學',
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
    nameZh: '二胡音樂會動捕即時同步',
    period: 'Nov 2023 - Dec 2024',
    periodZh: '2023 年 11 月 - 2024 年 12 月',
    role: 'Synchronized virtual avatar with live Erhu using 1.5s buffer',
    roleZh: '運用 1.5 秒緩衝同步虛擬化身與現場演出',
    org: 'National Tainan University of the Arts',
    orgZh: '國立臺南藝術大學',
    actionHeadline: 'Synchronized virtual avatar with live Erhu performance using 1.5-second buffer',
    caseUrl: 'cases/live-concert-sync.html',
    side: 'left',
    lineType: 'systems',
  })

  // Station 5: MRKE 3D Hairstyle App
  productLine.addPoint({
    id: 'station-5',
    date: '2024-01',
    name: 'MRKE In-Store 3D Preview App',
    nameZh: 'MRKE 3D 髮型預覽軟體',
    period: '2022 - Jun 2026',
    periodZh: '2022 年 - 2026 年 6 月',
    role: 'Shipped in-store 3D preview app cutting consultation ambiguity 35%',
    roleZh: '研發 3D 預覽軟體降低 35% 諮詢溝通誤差',
    org: 'MRKE Ltd. | In-House Interactive 3D Tooling',
    orgZh: 'MRKE Ltd. | 店內專用 3D 互動軟體研發',
    actionHeadline: 'Shipped in-store 3D preview app cutting consultation ambiguity by 35 percent',
    caseUrl: 'cases/mrke-3d.html',
    side: 'right',
    lineType: 'product',
  })

  // 4. Clinical Diagnostic Siding (Line on a line: siding branched off systemsLine)
  const sidingLine = systemsLine.addLine({
    id: 'siding',
    name: 'Clinical Diagnostic Siding',
    nameZh: '臨床診療數位驗證支線',
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
    nameZh: '醫諾華臨床模擬體驗診斷',
    period: 'Jul 2024 - Aug 2024',
    periodZh: '2024 年 7 月 - 2024 年 8 月',
    role: 'Audited 50 clinical simulation cases to align schemas',
    roleZh: '診斷 50 例虛擬病人對齊醫學數據綱要',
    org: 'Innova Medical Technology Co., Ltd.',
    orgZh: '醫諾華醫學科技股份有限公司',
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
    nameZh: 'CollarAgent 視覺化研究工作台',
    period: '2025',
    periodZh: '2025 年',
    role: 'Built local-first visual studio pairing LangGraph with canvas',
    roleZh: '打造結合 LangGraph 與無限畫布的視覺化工作台',
    org: 'CollarAgent | Visual Research Studio',
    orgZh: 'CollarAgent | 視覺化研究工作台',
    actionHeadline: 'Built local-first visual research studio pairing LangGraph with infinite canvas',
    caseUrl: 'cases/collaragent.html',
    side: 'right',
    lineType: 'product',
  })

  // Station 8: IEEE ICVR 2026 Research
  systemsLine.addPoint({
    id: 'station-8',
    date: '2025-08',
    name: 'IEEE ICVR 2026 Ambisonics Study',
    nameZh: 'IEEE ICVR 2026 國際研究發表',
    period: '2025 - 2026',
    periodZh: '2025 年 - 2026 年',
    role: 'Quantified visual capture and sensory conflict in VR',
    roleZh: '量化 VR 視聽衝突與空間音訊感知邊界',
    org: 'IEEE ICVR 2026 | Cardiff, UK',
    orgZh: 'IEEE ICVR 2026 虛擬實境國際研討會',
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
    nameZh: 'Stratawright 智慧代理音訊工作站',
    period: '2026',
    periodZh: '2026 年',
    role: 'Architected digital audio workstation for agent CLI protocols',
    roleZh: '架構支援 Agent CLI 協議的專業音訊工作站',
    org: 'Stratawright | Agentic Audio Workstation',
    orgZh: 'Stratawright | 智慧代理音訊工作站',
    actionHeadline: 'Architected digital audio workstation controlled by agent CLI protocols',
    caseUrl: 'cases/stratawright.html',
    side: 'left',
    lineType: 'systems',
  })

  // 5. Unified Trajectory Line (Terminal line)
  const terminalLine = network.createLine({
    id: 'unified',
    name: 'Unified Trajectory Line',
    nameZh: '未來願景與發展樞紐',
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
    nameZh: '下一站',
    period: '2026+',
    periodZh: '2026 年起',
    role: 'Connecting business, creative arts, and software engineering',
    roleZh: '融合商業營運、創意藝術與軟體工程',
    org: 'Future Destination | Design Engineering',
    orgZh: '探索多元跨領域發展機會',
    actionHeadline: 'Connecting commercial operations, creative arts, and software engineering',
    side: 'right',
    lineType: 'interchange',
    isInterchange: true,
  })

  return network
}

export const defaultJourneyNetwork: TransitNetwork = createDefaultJourneyNetwork()
