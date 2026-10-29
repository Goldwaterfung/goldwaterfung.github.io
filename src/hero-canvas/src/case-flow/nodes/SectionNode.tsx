import React, { useEffect, useRef } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { NodeProps } from '@xyflow/react';
import type { NodeVariant } from '../configs/types';

export interface SectionNodeData extends Record<string, unknown> {
  domElement?: HTMLElement;
  chapterLabel: string;
  chapterIndex?: number;
  width?: number;
  variant?: NodeVariant;
}

export const SectionNode: React.FC<NodeProps> = ({ data, selected }) => {
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

    // Guard all interactive elements from dragging the node card
    const interactiveSelectors = [
      'button',
      'input',
      'select',
      'textarea',
      'a',
      'video',
      'audio',
      'pre',
      'code',
      '.affordance-card',
      '.affordance-panel',
      '.case-window-frame',
      '.case-diagram-box',
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

  const cardWidth = nodeData.width ? `${nodeData.width}px` : '760px';

  return (
    <div
      className={`case-whiteboard-card ${selected ? 'is-selected' : ''}`}
      style={{ width: cardWidth }}
    >
      <Handle type="target" position={Position.Left} className="case-flow-handle" />
      <Handle
        type="target"
        position={Position.Top}
        className="case-flow-handle"
        id="top-target"
      />

      <div ref={mountRef} className="case-node-dom-content nodrag nopan" />

      <Handle type="source" position={Position.Right} className="case-flow-handle" />
      <Handle
        type="source"
        position={Position.Bottom}
        className="case-flow-handle"
        id="bottom-source"
      />
    </div>
  );
};
