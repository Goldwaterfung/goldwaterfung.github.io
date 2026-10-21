import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroTitleCanvas } from './HeroTitleCanvas';
import { SkillsSphereCanvas } from './SkillsSphereCanvas';

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

function mountSkillsSphere() {
  const mountTarget = document.getElementById('hero-skills-sphere');
  if (!mountTarget) {
    return;
  }

  if (!isWebGLAvailable()) {
    return;
  }

  const root = ReactDOM.createRoot(mountTarget);
  root.render(
    <React.StrictMode>
      <SkillsSphereCanvas />
    </React.StrictMode>
  );
}

function init() {
  mountTitleCanvas();
  mountSkillsSphere();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

