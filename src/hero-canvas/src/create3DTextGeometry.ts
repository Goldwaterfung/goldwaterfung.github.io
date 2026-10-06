import { ShapePath, ExtrudeGeometry, BufferGeometry, BufferAttribute, Color } from 'three';
import type { Font } from 'opentype.js';

export interface GradientStop {
  offset: number;
  color: string;
}

/**
 * Bakes an X-axis (left → right) multi-stop gradient into vertex colors.
 * Must be called AFTER final scale/center so the 0..1 range matches the
 * on-screen reading direction. Mutates and returns the same geometry.
 */
export function applyXAxisGradient(
  geometry: BufferGeometry,
  stops: GradientStop[]
): BufferGeometry {
  const sorted = [...stops].sort((a, b) => a.offset - b.offset);
  const colors = sorted.map((s) => new Color(s.color));

  geometry.computeBoundingBox();
  const bbox = geometry.boundingBox;
  if (!bbox) return geometry;

  const minX = bbox.min.x;
  const rangeX = bbox.max.x - minX || 1;

  const pos = geometry.getAttribute('position');
  const count = pos.count;
  const colorArray = new Float32Array(count * 3);
  const tmp = new Color();

  for (let i = 0; i < count; i++) {
    const t = Math.min(1, Math.max(0, (pos.getX(i) - minX) / rangeX));

    let seg = 0;
    while (seg < sorted.length - 2 && t > sorted[seg + 1].offset) {
      seg++;
    }

    const start = sorted[seg];
    const end = sorted[seg + 1];
    const span = end.offset - start.offset || 1;
    const localT = Math.min(1, Math.max(0, (t - start.offset) / span));

    tmp.copy(colors[seg]).lerp(colors[seg + 1], localT);
    colorArray[i * 3] = tmp.r;
    colorArray[i * 3 + 1] = tmp.g;
    colorArray[i * 3 + 2] = tmp.b;
  }

  geometry.setAttribute('color', new BufferAttribute(colorArray, 3));
  return geometry;
}

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

export interface Glyph3DItem {
  id: string;
  char: string;
  geometry: BufferGeometry;
  xOffset: number;
  width: number;
}

/**
 * Computational Geometry Pipeline for Individual Characters:
 * Extracts individual vector glyphs with kerning offsets and extrudes them into independent geometries.
 * Enables per-character Framer Motion spring physics, staggered entrances, and interactive wave hover ripples.
 */
export function createGlyph3DGeometries(
  font: Font,
  options: Text3DOptions
): Glyph3DItem[] {
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

  const items: Glyph3DItem[] = [];
  let index = 0;

  const totalWidth = font.forEachGlyph(
    text,
    0,
    0,
    fontSize,
    { kerning: true },
    (glyph, x, _y, size) => {
      if (!glyph.unicode || glyph.name === 'space') return;

      const path = glyph.getPath(0, 0, size);
      const shapePath = new ShapePath();

      for (const cmd of path.commands) {
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

      const shapes = shapePath.toShapes(false);
      if (shapes.length === 0) return;

      const geometry = new ExtrudeGeometry(shapes, {
        depth,
        bevelEnabled,
        bevelThickness,
        bevelSize,
        bevelSegments,
        curveSegments,
      });

      geometry.computeBoundingBox();
      geometry.center();
      geometry.computeVertexNormals();

      const fontScale = (1 / font.unitsPerEm) * size;
      const glyphWidth = (glyph.advanceWidth || 0) * fontScale;

      items.push({
        id: `${glyph.unicode}-${index++}`,
        char: String.fromCharCode(glyph.unicode),
        geometry,
        xOffset: x + glyphWidth * 0.5,
        width: glyphWidth,
      });
    }
  );

  // Center all glyph offsets around origin (0, 0, 0)
  const halfWidth = totalWidth * 0.5;
  return items.map((item) => ({
    ...item,
    xOffset: item.xOffset - halfWidth,
  }));
}

