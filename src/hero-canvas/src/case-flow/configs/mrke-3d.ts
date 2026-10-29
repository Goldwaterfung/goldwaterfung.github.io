import type { CaseGraphConfig } from './types';

export const mrke3dConfig: CaseGraphConfig = {
  slug: 'mrke-3d',
  title: 'MRKE 360 Hairstyle Viewer Application',
  heroNode: {
    position: { x: -880, y: 680 },
    width: 800,
    chapterLabel: 'Project Overview',
  },
  nodes: [
    {
      id: 'section-0',
      sectionIndex: 0,
      position: { x: 0, y: 680 },
      width: 840,
      chapterLabel: 'Problem Discovery',
    },
    {
      id: 'section-1',
      sectionIndex: 1,
      position: { x: 940, y: 0 },
      width: 840,
      chapterLabel: 'User Research',
    },
    {
      id: 'section-2',
      sectionIndex: 2,
      position: { x: 940, y: 1360 },
      width: 860,
      chapterLabel: 'Prototype Trade Offs',
    },
    {
      id: 'section-3',
      sectionIndex: 3,
      position: { x: 1880, y: 0 },
      width: 860,
      chapterLabel: 'Consultation User Flow',
    },
    {
      id: 'section-4',
      sectionIndex: 4,
      position: { x: 1880, y: 1360 },
      width: 800,
      chapterLabel: 'Usability Iteration',
    },
    {
      id: 'section-5',
      sectionIndex: 5,
      position: { x: 2800, y: 560 },
      width: 820,
      chapterLabel: 'Technical Architecture',
    },
    {
      id: 'section-6',
      sectionIndex: 6,
      position: { x: 3720, y: 680 },
      width: 780,
      chapterLabel: 'Business Impact',
    },
  ],
  edges: [
    { id: 'e-hero-0', source: 'hero', target: 'section-0' },
    { id: 'e-0-1', source: 'section-0', target: 'section-1' },
    { id: 'e-0-2', source: 'section-0', target: 'section-2' },
    { id: 'e-1-3', source: 'section-1', target: 'section-3' },
    { id: 'e-2-4', source: 'section-2', target: 'section-4' },
    { id: 'e-3-4', source: 'section-3', target: 'section-4', dashed: true },
    { id: 'e-3-5', source: 'section-3', target: 'section-5' },
    { id: 'e-4-5', source: 'section-4', target: 'section-5' },
    { id: 'e-3-6', source: 'section-3', target: 'section-6', dashed: true },
    { id: 'e-5-6', source: 'section-5', target: 'section-6' },
  ],
};
