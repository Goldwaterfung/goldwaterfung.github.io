import React from 'react';
import ReactDOM from 'react-dom/client';
import '@xyflow/react/dist/style.css';
import './styles/case-flow.css';
import { getCaseConfig } from './configs';
import { DOMHydrationManager } from './domHydration';
import { WhiteboardApp } from './WhiteboardApp';

function detectCaseSlug(): string | null {
  const bodySlug = document.body.dataset.caseSlug;
  if (bodySlug) return bodySlug;

  const mainSlug = document.querySelector('main')?.getAttribute('data-case-slug');
  if (mainSlug) return mainSlug;

  const path = window.location.pathname;
  const match = path.match(/\/cases\/([^/.]+)(?:\.html)?/);
  if (match && match[1]) {
    return match[1];
  }

  return null;
}

function initCaseFlow(): void {
  const slug = detectCaseSlug();
  if (!slug) return;

  const config = getCaseConfig(slug);
  if (!config) return;

  // Locate or create whiteboard mounting container
  let stageEl = document.getElementById('whiteboard-stage');
  if (!stageEl) {
    stageEl = document.createElement('div');
    stageEl.id = 'whiteboard-stage';
    stageEl.className = 'whiteboard-stage';
    const mainContent = document.getElementById('main-content');
    if (mainContent && mainContent.parentNode) {
      mainContent.parentNode.insertBefore(stageEl, mainContent);
    } else {
      document.body.appendChild(stageEl);
    }
  }

  const hydration = new DOMHydrationManager(config);
  const { nodes, edges } = hydration.prepareNodesAndEdges();

  if (!nodes.length) return;

  hydration.attachNavigationToggle();

  const initialMode = hydration.getInitialMode();
  hydration.setMode(initialMode);

  const root = ReactDOM.createRoot(stageEl);
  root.render(
    <React.StrictMode>
      <WhiteboardApp
        config={config}
        initialNodes={nodes}
        initialEdges={edges}
      />
    </React.StrictMode>
  );
}

interface ModalInstance {
  root: ReactDOM.Root;
  hydration: DOMHydrationManager;
  stageEl: HTMLElement;
  slug: string;
}

let activeModalInstance: ModalInstance | null = null;

export function mountModal(slug: string): boolean {
  unmountModal();

  const config = getCaseConfig(slug);
  if (!config) {
    return false;
  }

  const modal = document.getElementById('case-study-modal');
  const panel = modal?.querySelector<HTMLElement>('.case-modal-panel');
  const scrollEl = document.getElementById('case-modal-scroll');
  const bodyEl = document.getElementById('case-modal-body');
  const headerInner = modal?.querySelector<HTMLElement>('.case-modal-header-inner');

  if (!modal || !panel || !scrollEl || !bodyEl) {
    return false;
  }

  let stageEl = panel.querySelector<HTMLElement>('#whiteboard-stage');
  if (!stageEl) {
    stageEl = document.createElement('div');
    stageEl.id = 'whiteboard-stage';
    stageEl.className = 'whiteboard-stage';
    panel.insertBefore(stageEl, scrollEl);
  }

  const hydration = new DOMHydrationManager(config, {
    scopeElement: bodyEl,
    toggleContainer: headerInner,
    scrollElement: scrollEl,
    modalElement: modal,
  });

  const { nodes, edges } = hydration.prepareNodesAndEdges();
  if (!nodes.length) {
    return false;
  }

  hydration.attachNavigationToggle();
  const initialMode = hydration.getInitialMode();
  hydration.setMode(initialMode);

  const root = ReactDOM.createRoot(stageEl);
  root.render(
    <React.StrictMode>
      <WhiteboardApp
        config={config}
        initialNodes={nodes}
        initialEdges={edges}
      />
    </React.StrictMode>
  );

  activeModalInstance = {
    root,
    hydration,
    stageEl,
    slug,
  };

  return true;
}

export function unmountModal(): void {
  if (activeModalInstance) {
    activeModalInstance.hydration.destroy();
    activeModalInstance.root.unmount();
    activeModalInstance.stageEl.remove();
    activeModalInstance = null;
  }
}

declare global {
  interface Window {
    CaseFlow?: {
      mountModal: (slug: string) => boolean;
      unmountModal: () => void;
      initStandalone: () => void;
    };
  }
}

window.CaseFlow = {
  mountModal,
  unmountModal,
  initStandalone: initCaseFlow,
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCaseFlow);
} else {
  initCaseFlow();
}
