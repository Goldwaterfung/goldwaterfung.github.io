import type { CaseGraphConfig } from './types';

export const ieeeVrConfig: CaseGraphConfig = {
  slug: 'ieee-vr',
  title: 'IEEE ICVR Spatial Audio Perception Research',
  heroNode: {
    position: { x: -900, y: 0 },
    width: 840,
    chapterLabel: 'Project Overview',
  },
  nodes: [
    {
      id: 'section-0',
      sectionIndex: 0,
      position: { x: 0, y: 0 },
      width: 820,
      chapterLabel: 'Problem Discovery',
    },
    {
      id: 'section-1',
      sectionIndex: 1,
      position: { x: 900, y: 0 },
      width: 920,
      chapterLabel: 'Experimental System',
    },
    {
      id: 'section-2',
      sectionIndex: 2,
      position: { x: 1900, y: 0 },
      width: 920,
      chapterLabel: 'Empirical Findings',
    },
    {
      id: 'section-3',
      sectionIndex: 3,
      position: { x: 2900, y: 0 },
      width: 820,
      chapterLabel: 'Engineering Takeaways',
    },
  ],
  edges: [
    { id: 'e-hero-0', source: 'hero', target: 'section-0' },
    { id: 'e-0-1', source: 'section-0', target: 'section-1' },
    { id: 'e-1-2', source: 'section-1', target: 'section-2' },
    { id: 'e-2-3', source: 'section-2', target: 'section-3' },
    { id: 'e-1-3', source: 'section-1', target: 'section-3', dashed: true },
  ],
};
