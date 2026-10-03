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
    nameZh: '營運基礎與技術實踐',
    color: COLOR_BLACK,
    x: TRUNK_X,
    branchType: 'trunk',
    casingColor: COLOR_CASING,
    strokeWidth: 6.5,
    casingWidth: 12,
  })

  // Station 1: Kerry Hotel Hong Kong
  trunk.addPoint({
    id: 'station-1',
    date: '2017-07',
    name: 'Kerry Hotel Hong Kong',
    nameZh: '香港嘉里酒店',
    period: 'Jul 2017 - Jun 2020',
    periodZh: '2017 年 7 月 - 2020 年 6 月',
    role: 'Guest Experience Concierge',
    roleZh: '前廳禮賓接待 (開幕籌備團隊)',
    org: 'Kerry Hotel Hong Kong (Shangri-La Group)',
    orgZh: '香格里拉集團開幕籌備團隊',
    side: 'right',
    lineType: 'product',
  })

  // Station 2: Self-Taught Unity C# & Blender
  trunk.addPoint({
    id: 'station-2',
    date: '2019-01',
    name: 'Unity C# & Blender',
    nameZh: '自學 Unity C# 與 Blender',
    period: '2019',
    periodZh: '2019 年',
    role: 'Self-Taught Systems & 3D',
    roleZh: '自主研習 3D 運算與物件導向程式',
    org: 'Independent Study & Technical Foundations',
    orgZh: '獨立技術實踐與系統原型開發',
    side: 'left',
    lineType: 'systems',
  })

  // Station 3: Courtyard by Marriott (Interchange pivot before bifurcation)
  trunk.addPoint({
    id: 'station-3',
    date: '2020-07',
    name: 'Courtyard by Marriott',
    nameZh: '香港萬怡酒店',
    period: 'Jul 2020 - Jul 2021',
    periodZh: '2020 年 7 月 - 2021 年 7 月',
    role: 'Guest Experience Concierge',
    roleZh: '前廳貴賓接待與危機處理',
    org: 'Courtyard by Marriott Hong Kong',
    orgZh: '萬豪國際集團香港萬怡酒店',
    side: 'right',
    lineType: 'product',
    isInterchange: true,
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

  // Station 4: MRKE Ltd. (Retail Enterprise)
  productLine.addPoint({
    id: 'station-4',
    date: '2020-12',
    name: 'MRKE Ltd. (Retail Enterprise)',
    nameZh: 'MRKE Ltd. (門市商業營運)',
    period: 'Dec 2020 - Jun 2026',
    periodZh: '2020 年 12 月 - 2026 年 6 月',
    role: 'Co-Founder & Retail Business Operator',
    roleZh: '共同創辦人暨門市商業營運',
    org: 'MRKE Ltd. | Fast-Turnaround Haircut Business',
    orgZh: 'MRKE Ltd. | 快速剪髮實體商業營運',
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

  // Station 5: TNNUA Systems Integration Engineer
  systemsLine.addPoint({
    id: 'station-5',
    date: '2023-09',
    name: 'Systems Integration Engineer',
    nameZh: '系統整合工程師',
    period: 'Sep 2023 - Mar 2025',
    periodZh: '2023 年 9 月 - 2025 年 3 月',
    role: 'Systems Integration Engineer',
    roleZh: '系統整合工程師',
    org: 'National Tainan University of the Arts (TNNUA)',
    orgZh: '國立臺南藝術大學 (TNNUA)',
    side: 'left',
    lineType: 'systems',
  })

  // Station 6: MRKE 3D Software (Tablet deployment period, aligned to Card 5 in DOM)
  productLine.addPoint({
    id: 'station-6',
    date: '2024-01',
    name: 'MRKE 3D Software',
    nameZh: 'MRKE 3D 髮型預覽軟體',
    period: '2022 - Jun 2026',
    periodZh: '2022 年 - 2026 年 6 月',
    role: 'Product Engineer & Software Builder',
    roleZh: '產品工程師暨軟體開發者',
    org: 'MRKE Ltd. | In-House Interactive 3D Tooling',
    orgZh: 'MRKE Ltd. | 店內專用 3D 互動軟體研發',
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

  // Station 7: Innova Medical Technology
  sidingLine.addPoint({
    id: 'station-7',
    date: '2024-07',
    name: 'Innova Medical Technology',
    nameZh: '醫諾華醫學科技',
    period: 'Jul 2024 - Aug 2024',
    periodZh: '2024 年 7 月 - 2024 年 8 月',
    role: 'UX Designer (Intern)',
    roleZh: '使用者體驗設計師 (實習)',
    org: 'Innova Medical Technology Co., Ltd.',
    orgZh: '醫諾華醫學科技股份有限公司',
    side: 'left',
    lineType: 'siding',
  })

  // 5. Unified Trajectory Line (Terminal line)
  const terminalLine = network.createLine({
    id: 'unified',
    name: 'Unified Trajectory Line',
    nameZh: '統一軌跡與未來樞紐',
    color: COLOR_BLACK,
    x: TRUNK_X,
    branchType: 'terminal',
    strokeWidth: 6.5,
    casingWidth: 12,
    casingColor: COLOR_CASING,
  })

  // Station 8: Next Destination
  terminalLine.addPoint({
    id: 'station-8',
    date: '2026-01',
    name: 'Next Destination',
    nameZh: '下一站',
    period: '2026+',
    periodZh: '2026 年起',
    role: 'Next Destination',
    roleZh: '下一站',
    org: 'Integrating Business, Creativity, and Engineering',
    orgZh: '探索多元跨領域發展機會',
    side: 'right',
    lineType: 'interchange',
    isInterchange: true,
  })

  return network
}

export const defaultJourneyNetwork: TransitNetwork = createDefaultJourneyNetwork()
