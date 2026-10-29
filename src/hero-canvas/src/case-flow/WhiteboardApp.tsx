import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from '@xyflow/react';
import type { Node, Edge, NodeTypes, EdgeTypes } from '@xyflow/react';
import { SectionNode } from './nodes/SectionNode';
import { HeroNode } from './nodes/HeroNode';
import { CustomEdge } from './edges/CustomEdge';
import type { CaseGraphConfig } from './configs/types';

const nodeTypes: NodeTypes = {
  sectionNode: SectionNode,
  heroNode: HeroNode,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

interface WhiteboardAppProps {
  config: CaseGraphConfig;
  initialNodes: Node[];
  initialEdges: Edge[];
}

interface ChapterItem {
  id: string;
  label: string;
  index: number;
}

const WhiteboardCanvas: React.FC<WhiteboardAppProps> = ({
  config,
  initialNodes,
  initialEdges,
}) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [activeStepId, setActiveStepId] = useState<string>(
    initialNodes[0]?.id || ''
  );
  const {
    fitBounds,
    getNode,
    getNodes,
    getNodesBounds,
    zoomIn,
    zoomOut,
    setNodes,
  } = useReactFlow();

  const chapters: ChapterItem[] = [];
  if (config.heroNode) {
    chapters.push({
      id: 'hero',
      label: config.heroNode.chapterLabel || 'Overview',
      index: 0,
    });
  }
  config.nodes.forEach((node) => {
    chapters.push({
      id: node.id,
      label: node.chapterLabel,
      index: chapters.length,
    });
  });

  const handleStepClick = useCallback(
    (stepId: string) => {
      setActiveStepId(stepId);

      setNodes((prev) =>
        prev.map((n) => ({
          ...n,
          selected: n.id === stepId,
        }))
      );

      const targetNode = getNode(stepId);
      if (targetNode) {
        const x = targetNode.position.x;
        const y = targetNode.position.y;
        const nodeData = targetNode.data as { width?: number } | undefined;
        const width = targetNode.measured?.width || nodeData?.width || 760;
        const height = targetNode.measured?.height || 600;

        fitBounds(
          { x, y, width, height },
          { duration: 550, padding: 0.22 }
        );
      }
    },
    [getNode, fitBounds, setNodes]
  );

  const handleFitAll = useCallback(() => {
    setActiveStepId('');
    setNodes((prev) =>
      prev.map((n) => ({
        ...n,
        selected: false,
      }))
    );
    const allNodes = getNodes();
    if (allNodes.length) {
      const bounds = getNodesBounds(allNodes);
      fitBounds(bounds, { duration: 550, padding: 0.12 });
    }
  }, [getNodes, getNodesBounds, fitBounds, setNodes]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.18, duration: 400 }}
        minZoom={0.25}
        maxZoom={1.5}
        zoomOnScroll={false}
        panOnScroll={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.2}
          color="#d6d4cb"
        />
      </ReactFlow>

      {/* Storyboard Stepper Bar (Bottom Center) */}
      <nav
        className="case-storyboard-stepper"
        aria-label="Case Study Storyboard Navigation"
      >
        {chapters.map((chapter) => {
          const isActive = activeStepId === chapter.id;
          return (
            <button
              key={chapter.id}
              type="button"
              className={`stepper-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => handleStepClick(chapter.id)}
            >
              {chapter.label}
            </button>
          );
        })}
      </nav>

      {/* Viewport Navigation Controls (Bottom Left) */}
      <div className="case-viewport-controls" aria-label="Canvas Zoom Controls">
        <button
          type="button"
          className="control-btn"
          onClick={() => zoomIn({ duration: 250 })}
          title="Zoom In"
          aria-label="Zoom In"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </button>
        <button
          type="button"
          className="control-btn"
          onClick={() => zoomOut({ duration: 250 })}
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </button>
        <button
          type="button"
          className="control-btn"
          onClick={handleFitAll}
          title="Fit All"
          aria-label="Fit All"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const WhiteboardApp: React.FC<WhiteboardAppProps> = (props) => {
  return (
    <ReactFlowProvider>
      <WhiteboardCanvas {...props} />
    </ReactFlowProvider>
  );
};
