import { ShapePath, ExtrudeGeometry, BufferGeometry } from 'three';
import type { Font } from 'opentype.js';

export interface Text3DOptions {
  text: string;
  fontSize?: number;
  depth?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  bevelSegments?: number;
  curveSegments?: number;
}

/**
 * 5-Stage Computational Geometry:
 * Converts opentype.js vector font contours into extruded, beveled 3D BufferGeometry
 */
export function create3DTextGeometry(
  font: Font,
  options: Text3DOptions
): BufferGeometry {
  const {
    text,
    fontSize = 36,
    depth = 2.4,
    bevelEnabled = true,
    bevelThickness = 0.6,
    bevelSize = 0.35,
    bevelSegments = 2,
    curveSegments = 6,
  } = options;

  // Stage 1: Extract 2D glyph paths and command sequences
  const fontPath = font.getPath(text, 0, 0, fontSize);

  // Stage 2: Convert opentype commands to Three.js ShapePath (inverting Y for 3D world space)
  const shapePath = new ShapePath();

  for (const cmd of fontPath.commands) {
    switch (cmd.type) {
      case 'M':
        shapePath.moveTo(cmd.x, -cmd.y);
        break;
      case 'L':
        shapePath.lineTo(cmd.x, -cmd.y);
        break;
      case 'Q':
        shapePath.quadraticCurveTo(cmd.x1, -cmd.y1, cmd.x, -cmd.y);
        break;
      case 'C':
        shapePath.bezierCurveTo(
          cmd.x1,
          -cmd.y1,
          cmd.x2,
          -cmd.y2,
          cmd.x,
          -cmd.y
        );
        break;
      case 'Z':
        break;
    }
  }

  // Stage 3: Triangulate planar contours and resolve interior holes with earcut (isCCW = false)
  const shapes = shapePath.toShapes(false);

  // Stage 4: Extrude 2D shapes along Z axis with beveled chamfer edges
  const geometry = new ExtrudeGeometry(shapes, {
    depth,
    bevelEnabled,
    bevelThickness,
    bevelSize,
    bevelSegments,
    curveSegments,
  });

  // Center bounding box around (0, 0, 0)
  geometry.computeBoundingBox();
  geometry.center();
  geometry.computeVertexNormals();

  return geometry;
}
