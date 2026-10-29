import type { CaseGraphConfig } from './types';

export const collaragentConfig: CaseGraphConfig = {
  slug: 'collaragent',
  title: 'CollarAgent Visual Research Studio',
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
      width: 820,
      chapterLabel: 'Problem Discovery',
    },
    {
      id: 'section-1',
      sectionIndex: 1,
      position: { x: 920, y: 0 },
      width: 880,
      chapterLabel: 'Design Exploration',
    },
    {
      id: 'section-2',
      sectionIndex: 2,
      position: { x: 920, y: 840 },
      width: 840,
      chapterLabel: 'Technical Stack',
    },
    {
      id: 'section-3',
      sectionIndex: 3,
      position: { x: 1900, y: 380 },
      width: 820,
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
