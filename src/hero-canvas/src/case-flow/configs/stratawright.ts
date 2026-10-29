import type { CaseGraphConfig } from './types';

export const stratawrightConfig: CaseGraphConfig = {
  slug: 'stratawright',
  title: 'Stratawright Agentic DAW',
  heroNode: {
    position: { x: -900, y: 380 },
    width: 840,
    chapterLabel: 'Project Overview',
  },
  nodes: [
    {
      id: 'section-0',
      sectionIndex: 0,
      position: { x: 0, y: 380 },
      width: 880,
      chapterLabel: 'Problem Discovery',
    },
    {
      id: 'section-1',
      sectionIndex: 1,
      position: { x: 980, y: 0 },
      width: 920,
      chapterLabel: 'System Exploration',
    },
    {
      id: 'section-2',
      sectionIndex: 2,
      position: { x: 980, y: 960 },
      width: 860,
      chapterLabel: 'Domain Architecture',
    },
    {
      id: 'section-3',
      sectionIndex: 3,
      position: { x: 2000, y: 380 },
      width: 840,
      chapterLabel: 'Outcomes and Verification',
    },
  ],
  edges: [
    { id: 'e-hero-0', source: 'hero', target: 'section-0' },
    { id: 'e-0-1', source: 'section-0', target: 'section-1' },
    { id: 'e-0-2', source: 'section-0', target: 'section-2' },
    { id: 'e-1-2', source: 'section-1', target: 'section-2', dashed: true },
    { id: 'e-1-3', source: 'section-1', target: 'section-3' },
    { id: 'e-2-3', source: 'section-2', target: 'section-3' },
  ],
};
