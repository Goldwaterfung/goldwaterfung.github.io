export type NodeVariant = 'default' | 'decision' | 'outcome';

export interface CaseNodeConfig {
  id: string;
  sectionIndex: number;
  position: { x: number; y: number };
  width?: number;
  chapterLabel: string;
  type?: string;
  variant?: NodeVariant;
}

export interface CaseEdgeConfig {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
  label?: string;
  animated?: boolean;
  dashed?: boolean;
}

export interface CaseHeroConfig {
  position: { x: number; y: number };
  width?: number;
  chapterLabel?: string;
}

export interface CaseGraphConfig {
  slug: string;
  title: string;
  heroNode?: CaseHeroConfig;
  nodes: CaseNodeConfig[];
  edges: CaseEdgeConfig[];
}
