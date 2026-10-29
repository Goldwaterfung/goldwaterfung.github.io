import type { CaseGraphConfig } from './types';

export const virtualPrincipalConfig: CaseGraphConfig = {
  slug: 'virtual-principal',
  title: 'Local GPU Multimodal AI Virtual Principal',
  heroNode: {
    position: { x: -960, y: 0 },
    width: 880,
    chapterLabel: 'Project Overview',
  },
  nodes: [
    {
      id: 'section-0',
      sectionIndex: 0,
      position: { x: 0, y: 0 },
      width: 800,
      chapterLabel: 'Problem Discovery',
    },
    {
      id: 'section-1',
      sectionIndex: 1,
      position: { x: 880, y: 0 },
      width: 920,
      chapterLabel: 'Design Exploration',
    },
    {
      id: 'section-2',
      sectionIndex: 2,
      position: { x: 1880, y: 0 },
      width: 980,
      chapterLabel: 'On-Site Deployment',
    },
    {
      id: 'section-3',
      sectionIndex: 3,
      position: { x: 2940, y: 0 },
      width: 980,
      chapterLabel: 'Pipeline Tuning',
    },
    {
      id: 'section-4',
      sectionIndex: 4,
      position: { x: 4000, y: 0 },
      width: 920,
      chapterLabel: 'Systems Integration',
    },
    {
      id: 'section-5',
      sectionIndex: 5,
      position: { x: 5000, y: 0 },
      width: 960,
      chapterLabel: 'Technical Stack',
    },
    {
      id: 'section-6',
      sectionIndex: 6,
      position: { x: 6040, y: 0 },
      width: 840,
      chapterLabel: 'Practical Outcomes',
    },
  ],
  edges: [
    { id: 'e-hero-0', source: 'hero', target: 'section-0' },
    { id: 'e-0-1', source: 'section-0', target: 'section-1' },
    { id: 'e-1-2', source: 'section-1', target: 'section-2' },
    { id: 'e-2-3', source: 'section-2', target: 'section-3' },
    { id: 'e-3-4', source: 'section-3', target: 'section-4' },
    { id: 'e-4-5', source: 'section-4', target: 'section-5' },
    { id: 'e-5-6', source: 'section-5', target: 'section-6' },
    { id: 'e-1-4', source: 'section-1', target: 'section-4', dashed: true },
    { id: 'e-3-5', source: 'section-3', target: 'section-5', dashed: true },
  ],
};
