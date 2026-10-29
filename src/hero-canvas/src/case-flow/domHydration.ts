import type { Node, Edge } from '@xyflow/react';
import type { CaseGraphConfig } from './configs/types';

interface TrackedElement {
  element: HTMLElement;
  placeholder: Comment;
}

export class DOMHydrationManager {
  private trackedElements: TrackedElement[] = [];
  private currentMode: 'whiteboard' | 'reading' = 'whiteboard';
  private toggleButton: HTMLButtonElement | null = null;
  private config: CaseGraphConfig;

  constructor(config: CaseGraphConfig) {
    this.config = config;
  }

  public prepareNodesAndEdges(): { nodes: Node[]; edges: Edge[] } {
    const rawSections = Array.from(
      document.querySelectorAll<HTMLElement>('.case-section')
    );
    const heroEl = document.querySelector<HTMLElement>('.case-hero');

    const nodes: Node[] = [];

    // Track and mount Hero node if present in config & DOM
    if (this.config.heroNode && heroEl) {
      const placeholder = document.createComment('placeholder-hero');
      heroEl.parentNode?.insertBefore(placeholder, heroEl);
      this.trackedElements.push({ element: heroEl, placeholder });

      nodes.push({
        id: 'hero',
        type: 'heroNode',
        position: this.config.heroNode.position,
        data: {
          domElement: heroEl,
          chapterLabel: this.config.heroNode.chapterLabel || 'Overview',
          width: this.config.heroNode.width || 760,
        },
      });
    }

    // Track and mount narrative sections
    this.config.nodes.forEach((nodeConfig, index) => {
      const sectionEl = rawSections[nodeConfig.sectionIndex];
      if (!sectionEl) return;

      const placeholder = document.createComment(
        `placeholder-section-${nodeConfig.sectionIndex}`
      );
      sectionEl.parentNode?.insertBefore(placeholder, sectionEl);
      this.trackedElements.push({ element: sectionEl, placeholder });

      nodes.push({
        id: nodeConfig.id,
        type: nodeConfig.type || 'sectionNode',
        position: nodeConfig.position,
        data: {
          domElement: sectionEl,
          chapterLabel: nodeConfig.chapterLabel,
          chapterIndex: index,
          width: nodeConfig.width || 760,
          variant: nodeConfig.variant || 'default',
        },
      });
    });

    const edges: Edge[] = this.config.edges.map((edgeConfig) => ({
      id: edgeConfig.id,
      source: edgeConfig.source,
      target: edgeConfig.target,
      sourceHandle: edgeConfig.sourceHandle,
      targetHandle: edgeConfig.targetHandle,
      type: 'custom',
      animated: edgeConfig.animated ?? false,
      data: {
        dashed: edgeConfig.dashed ?? false,
      },
    }));

    return { nodes, edges };
  }

  public attachNavigationToggle(): void {
    const navLinks = document.querySelector('.case-nav-links');
    if (!navLinks) return;

    // Check if toggle button already exists
    let btn = document.getElementById(
      'case-view-toggle'
    ) as HTMLButtonElement | null;
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'case-view-toggle';
      btn.type = 'button';
      btn.className = 'case-view-mode-toggle';
      navLinks.prepend(btn);
    }

    this.toggleButton = btn;
    this.updateToggleButton();

    btn.addEventListener('click', () => {
      const nextMode =
        this.currentMode === 'whiteboard' ? 'reading' : 'whiteboard';
      this.setMode(nextMode);
    });
  }

  public setMode(mode: 'whiteboard' | 'reading'): void {
    this.currentMode = mode;
    try {
      localStorage.setItem('case_view_preference', mode);
    } catch {
      // Ignore local storage security sandbox errors
    }

    if (mode === 'reading') {
      document.body.classList.remove('is-whiteboard-active');
      // Reparent all elements back to their original semantic DOM positions
      this.restoreElementsToReading();
    } else {
      document.body.classList.add('is-whiteboard-active');
      // Reparent elements back to their whiteboard node containers
      this.moveElementsToWhiteboard();
    }

    this.updateToggleButton();
  }

  private restoreElementsToReading(): void {
    this.trackedElements.forEach(({ element, placeholder }) => {
      if (placeholder.parentNode) {
        placeholder.parentNode.insertBefore(element, placeholder);
      }
    });
  }

  private moveElementsToWhiteboard(): void {
    // When returning to whiteboard, re-trigger appending into the nodes
    // The SectionNode components will reparent from this.trackedElements automatically
    // But in case they're already in DOM, dispatch a custom sync event
    window.dispatchEvent(new CustomEvent('caseflow:sync-nodes'));
  }

  private updateToggleButton(): void {
    if (!this.toggleButton) return;
    this.toggleButton.textContent =
      this.currentMode === 'whiteboard' ? 'Reading View' : 'Whiteboard View';
    this.toggleButton.setAttribute(
      'aria-label',
      this.currentMode === 'whiteboard'
        ? 'Switch to linear reading layout'
        : 'Switch to interactive spatial whiteboard'
    );
  }

  public getInitialMode(): 'whiteboard' | 'reading' {
    // Decision 3: default mobile screens (< 768px) to linear reading flow
    if (window.innerWidth < 768) {
      return 'reading';
    }

    try {
      const saved = localStorage.getItem('case_view_preference');
      if (saved === 'reading' || saved === 'whiteboard') {
        return saved;
      }
    } catch {
      // Fallback
    }

    return 'whiteboard';
  }
}
