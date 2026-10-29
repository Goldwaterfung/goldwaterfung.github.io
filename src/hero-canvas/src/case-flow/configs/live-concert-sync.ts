import type { CaseGraphConfig } from './types';

export const liveConcertSyncConfig: CaseGraphConfig = {
  slug: 'live-concert-sync',
  title: 'Live Concert Telemetry & AI MoCap Sync',
  heroNode: {
    position: { x: -880, y: 460 },
    width: 800,
    chapterLabel: 'Project Overview',
  },
  nodes: [
    {
      id: 'section-0',
      sectionIndex: 0,
      position: { x: 0, y: 460 },
      width: 800,
      chapterLabel: 'Live Stage Problem',
    },
    {
      id: 'section-1',
      sectionIndex: 1,
      position: { x: 900, y: 0 },
      width: 920,
      chapterLabel: 'Telemetry Data Flow',
    },
    {
      id: 'section-2',
      sectionIndex: 2,
      position: { x: 900, y: 960 },
      width: 920,
      chapterLabel: 'Engineering Interventions',
    },
    {
      id: 'section-3',
      sectionIndex: 3,
      position: { x: 1920, y: 460 },
      width: 800,
      chapterLabel: 'Technical Stack',
    },
    {
      id: 'section-4',
      sectionIndex: 4,
      position: { x: 2820, y: 460 },
      width: 820,
      chapterLabel: 'Outcomes and Lessons',
    },
  ],
  edges: [
    { id: 'e-hero-0', source: 'hero', target: 'section-0' },
    { id: 'e-0-1', source: 'section-0', target: 'section-1' },
    { id: 'e-0-2', source: 'section-0', target: 'section-2' },
    { id: 'e-1-2', source: 'section-1', target: 'section-2', dashed: true },
    { id: 'e-1-3', source: 'section-1', target: 'section-3' },
    { id: 'e-2-3', source: 'section-2', target: 'section-3' },
    { id: 'e-1-4', source: 'section-1', target: 'section-4', dashed: true },
    { id: 'e-3-4', source: 'section-3', target: 'section-4' },
  ],
};
