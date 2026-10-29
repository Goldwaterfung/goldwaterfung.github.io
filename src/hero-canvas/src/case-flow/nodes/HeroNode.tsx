import React, { useEffect, useRef } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { NodeProps } from '@xyflow/react';
import type { SectionNodeData } from './SectionNode';

export const HeroNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as SectionNodeData;
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountPoint = mountRef.current;
    const el = nodeData.domElement;
    if (!mountPoint || !el) return;

    const reparent = () => {
      const isWhiteboard = document.body.classList.contains('is-whiteboard-active');
      if (isWhiteboard && mountPoint && el && !mountPoint.contains(el)) {
        mountPoint.appendChild(el);
      }
    };

    reparent();

    const interactiveSelectors = [
      'button',
      'input',
      'select',
      'textarea',
      'a',
      'video',
      'audio',
      'img',
      '.case-window-frame',
    ].join(', ');

    const interactives = el.querySelectorAll(interactiveSelectors);
    interactives.forEach((node) => {
      node.classList.add('nodrag', 'nopan');
    });

    window.addEventListener('caseflow:sync-nodes', reparent);
    return () => {
      window.removeEventListener('caseflow:sync-nodes', reparent);
    };
  }, [nodeData.domElement]);

  const cardWidth = nodeData.width ? `${nodeData.width}px` : '780px';

  return (
    <div
      className={`case-whiteboard-card ${selected ? 'is-selected' : ''}`}
      style={{ width: cardWidth }}
    >
      <div ref={mountRef} className="case-node-dom-content nodrag nopan" />

      <Handle type="source" position={Position.Right} className="case-flow-handle" />
    </div>
  );
};
