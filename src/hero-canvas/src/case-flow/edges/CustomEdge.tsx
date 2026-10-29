import React from 'react';
import { BaseEdge, getBezierPath } from '@xyflow/react';
import type { EdgeProps } from '@xyflow/react';

export const CustomEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
  data,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const isDashed = Boolean(data && data.dashed);

  const mergedStyle: React.CSSProperties = {
    ...style,
    stroke: isDashed ? '#8e8d88' : '#2c2c2e',
    strokeWidth: 2,
    strokeDasharray: isDashed ? '6 6' : undefined,
  };

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      markerEnd={markerEnd}
      style={mergedStyle}
    />
  );
};
