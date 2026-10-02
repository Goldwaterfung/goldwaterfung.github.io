import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroCanvas } from './HeroCanvas';
import { HeroTitleCanvas } from './HeroTitleCanvas';

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function mountHeroCanvas() {
  const mountTarget = document.getElementById('hero-3d-canvas');
  if (!mountTarget) {
    return;
  }

  if (!isWebGLAvailable()) {
    return;
  }

  const root = ReactDOM.createRoot(mountTarget);
  root.render(
    <React.StrictMode>
      <HeroCanvas />
    </React.StrictMode>
  );
}

function mountTitleCanvas() {
  const mountTarget = document.getElementById('hero-title-3d');
  if (!mountTarget) {
    return;
  }

  if (!isWebGLAvailable()) {
    return;
  }

  const root = ReactDOM.createRoot(mountTarget);
  root.render(
    <React.StrictMode>
      <HeroTitleCanvas />
    </React.StrictMode>
  );
}

function init() {
  mountHeroCanvas();
  mountTitleCanvas();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

