import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

interface SkillItem {
  name: string;
  color: string;
  accent: string;
  drawIcon: (ctx: CanvasRenderingContext2D, size: number) => void;
}

const SKILLS: SkillItem[] = [
  {
    name: 'Unity',
    color: '#FFFFFF',
    accent: '#222C37',
    drawIcon: (ctx, s) => {
      // Classic Unity 3D faceted cube
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.fillStyle = '#FFFFFF';
      const p = new Path2D(
        'M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 2.5l6.8 3.9L12 12.3 5.2 8.4 12 4.5zM4.8 9.7l6.2 3.6v7.3l-6.2-3.6V9.7zm8.4 10.9v-7.3l6.2-3.6v7.3l-6.2 3.6z'
      );
      ctx.fill(p);
      ctx.restore();
    },
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    accent: '#1E3E67',
    drawIcon: (ctx, s) => {
      ctx.save();
      ctx.fillStyle = '#3178C6';
      ctx.beginPath();
      ctx.roundRect(2, 2, s - 4, s - 4, s * 0.18);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.round(s * 0.52)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TS', s * 0.5, s * 0.54);
      ctx.restore();
    },
  },
  {
    name: 'Three.js',
    color: '#FFFFFF',
    accent: '#111111',
    drawIcon: (ctx, s) => {
      // Three.js faceted pyramid
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.4;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      // Triangle base
      ctx.moveTo(12, 3);
      ctx.lineTo(3, 20);
      ctx.lineTo(21, 20);
      ctx.closePath();
      // Facet lines
      ctx.moveTo(12, 3);
      ctx.lineTo(12, 14);
      ctx.lineTo(3, 20);
      ctx.moveTo(12, 14);
      ctx.lineTo(21, 20);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    name: 'Python',
    color: '#387EB8',
    accent: '#FFE052',
    drawIcon: (ctx, s) => {
      // Dual python snakes
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.fillStyle = '#387EB8';
      const blueSnake = new Path2D(
        'M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v2.7h5.9v.9H6.4S4 6.6 4 9.8c0 3.1 2.1 3 2.1 3h1.3v-1.8s-.1-2.1 2.1-2.1h5.9s2 0 2-2V4.9s.3-2.9-5.5-2.9zm-1.7 1.8c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z'
      );
      ctx.fill(blueSnake);
      ctx.fillStyle = '#FFE052';
      const yellowSnake = new Path2D(
        'M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-2.7H9.1v-.9h8.5s2.4.3 2.4-2.9c0-3.1-2.1-3-2.1-3h-1.3v1.8s.1 2.1-2.1 2.1H8.6s-2 0-2 2v2.8s-.3 2.9 5.5 2.9zm1.7-1.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z'
      );
      ctx.fill(yellowSnake);
      ctx.restore();
    },
  },
  {
    name: 'C#',
    color: '#9B4993',
    accent: '#5C2D6E',
    drawIcon: (ctx, s) => {
      ctx.save();
      ctx.fillStyle = '#9B4993';
      ctx.beginPath();
      // Hexagon
      const r = s * 0.46;
      const cx = s * 0.5;
      const cy = s * 0.5;
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.round(s * 0.44)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('C#', s * 0.5, s * 0.54);
      ctx.restore();
    },
  },
  {
    name: 'React',
    color: '#61DAFB',
    accent: '#1C3E48',
    drawIcon: (ctx, s) => {
      ctx.save();
      ctx.strokeStyle = '#61DAFB';
      ctx.lineWidth = 1.6;
      const cx = s * 0.5;
      const cy = s * 0.5;
      const rx = s * 0.42;
      const ry = s * 0.16;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, (Math.PI / 3) * i, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#61DAFB';
      ctx.beginPath();
      ctx.arc(cx, cy, s * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    name: 'WebGL',
    color: '#990000',
    accent: '#E03030',
    drawIcon: (ctx, s) => {
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#E03030';
      ctx.lineWidth = 1.6;
      ctx.fillStyle = '#990000';
      ctx.beginPath();
      ctx.arc(12, 12, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 8px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('3D', 12, 12.5);
      ctx.restore();
    },
  },
  {
    name: 'Local LLM',
    color: '#A855F7',
    accent: '#6B21A8',
    drawIcon: (ctx, s) => {
      // Neural network node cluster
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      // Connections
      ctx.moveTo(5, 7);
      ctx.lineTo(12, 12);
      ctx.moveTo(5, 17);
      ctx.lineTo(12, 12);
      ctx.moveTo(12, 12);
      ctx.lineTo(19, 7);
      ctx.moveTo(12, 12);
      ctx.lineTo(19, 17);
      ctx.stroke();
      // Nodes
      ctx.fillStyle = '#C084FC';
      const nodes = [
        [5, 7],
        [5, 17],
        [12, 12],
        [19, 7],
        [19, 17],
      ];
      nodes.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    },
  },
  {
    name: 'Whisper STT',
    color: '#10B981',
    accent: '#065F46',
    drawIcon: (ctx, s) => {
      // Audio speech waveform bars
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.fillStyle = '#10B981';
      const bars = [
        [4, 8, 3, 8],
        [9, 4, 3, 16],
        [14, 6, 3, 12],
        [19, 9, 3, 6],
      ];
      bars.forEach(([x, y, w, h]) => {
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 1.5);
        ctx.fill();
      });
      ctx.restore();
    },
  },
  {
    name: 'Spatial Audio',
    color: '#F59E0B',
    accent: '#92400E',
    drawIcon: (ctx, s) => {
      // Concentric 3D sound waves
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(8, 12, 2.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(8, 12, 6, -Math.PI * 0.35, Math.PI * 0.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(8, 12, 10, -Math.PI * 0.35, Math.PI * 0.35);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    name: 'LangGraph',
    color: '#EC4899',
    accent: '#9D174D',
    drawIcon: (ctx, s) => {
      // Agent workflow branching graph
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#EC4899';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(6, 12);
      ctx.lineTo(12, 6);
      ctx.lineTo(18, 12);
      ctx.moveTo(12, 6);
      ctx.lineTo(12, 18);
      ctx.stroke();
      ctx.fillStyle = '#F472B6';
      [
        [6, 12],
        [12, 6],
        [18, 12],
        [12, 18],
      ].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    },
  },
  {
    name: 'Android',
    color: '#3DDC84',
    accent: '#1B6A3B',
    drawIcon: (ctx, s) => {
      // Android robot head
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.fillStyle = '#3DDC84';
      ctx.beginPath();
      // Dome head
      ctx.arc(12, 15, 7, Math.PI, 0);
      ctx.fill();
      // Eyes
      ctx.fillStyle = '#1A1A1A';
      ctx.beginPath();
      ctx.arc(9.5, 11.5, 0.9, 0, Math.PI * 2);
      ctx.arc(14.5, 11.5, 0.9, 0, Math.PI * 2);
      ctx.fill();
      // Antennae
      ctx.strokeStyle = '#3DDC84';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(8.5, 8.5);
      ctx.lineTo(6.5, 5.5);
      ctx.moveTo(15.5, 8.5);
      ctx.lineTo(17.5, 5.5);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    name: 'Google Cloud',
    color: '#4285F4',
    accent: '#174EA6',
    drawIcon: (ctx, s) => {
      // Cloud silhouette
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.fillStyle = '#4285F4';
      const p = new Path2D(
        'M18.5 10c-.3-3.4-3.1-6-6.5-6-2.8 0-5.2 1.8-6.1 4.4C3.2 8.9 1 11.2 1 14c0 3.3 2.7 6 6 6h11c2.8 0 5-2.2 5-5 0-2.6-2-4.7-4.5-5z'
      );
      ctx.fill(p);
      ctx.restore();
    },
  },
  {
    name: 'WebSocket',
    color: '#06B6D4',
    accent: '#0E7490',
    drawIcon: (ctx, s) => {
      // Bidirectional streaming network arrows
      const scale = s / 24;
      ctx.save();
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#06B6D4';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      // Right arrow
      ctx.moveTo(5, 8);
      ctx.lineTo(17, 8);
      ctx.lineTo(14, 5);
      // Left arrow
      ctx.moveTo(19, 16);
      ctx.lineTo(7, 16);
      ctx.lineTo(10, 19);
      ctx.stroke();
      ctx.restore();
    },
  },
];

// Helper to create texture for a skill
function createSkillTexture(skill: SkillItem): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Smooth rendering
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // 1. Dark frosted circular disc
  const cx = size * 0.5;
  const cy = size * 0.44;
  const radius = size * 0.32;

  // Outer glow / shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 6;

  // Disc background
  const grad = ctx.createRadialGradient(cx, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
  grad.addColorStop(0, 'rgba(38, 40, 48, 0.94)');
  grad.addColorStop(1, 'rgba(18, 19, 24, 0.96)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Subtle border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  // 2. Skill Icon
  const iconSize = Math.round(size * 0.34);
  ctx.save();
  ctx.translate(cx - iconSize / 2, cy - iconSize / 2);
  skill.drawIcon(ctx, iconSize);
  ctx.restore();

  // 3. Label Text
  ctx.font = '600 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  // Text shadow for crisp legibility
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 8;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(skill.name, cx, cy + radius + 14);

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

// Fibonacci sphere distribution for N items at radius R
function getFibonacciSpherePoints(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    // y goes from 1 to -1
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenRatio * Math.PI * 2 * i;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
}

const SPHERE_RADIUS = 2.45;

interface SphereSceneProps {
  isDraggingRef: React.MutableRefObject<boolean>;
  rotationRef: React.MutableRefObject<{ x: number; y: number }>;
  velocityRef: React.MutableRefObject<{ x: number; y: number }>;
  shouldReduceMotion: boolean;
}

const SphereScene: React.FC<SphereSceneProps> = ({
  isDraggingRef,
  rotationRef,
  velocityRef,
  shouldReduceMotion,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const spritesRef = useRef<THREE.Sprite[]>([]);

  // Pre-generate textures and positions once
  const { textures, positions } = useMemo(() => {
    const texs = SKILLS.map(createSkillTexture);
    const pts = getFibonacciSpherePoints(SKILLS.length, SPHERE_RADIUS);
    return { textures: texs, positions: pts };
  }, []);

  // Cleanup textures on unmount
  useEffect(() => {
    return () => {
      textures.forEach((t) => t.dispose());
    };
  }, [textures]);

  useFrame(() => {
    if (!groupRef.current) return;

    if (!isDraggingRef.current) {
      // Smooth decay of manual velocity
      velocityRef.current.x *= 0.94;
      const idleSpeed = shouldReduceMotion ? 0 : 0.0035;
      velocityRef.current.y = velocityRef.current.y * 0.94 + idleSpeed * 0.06;

      rotationRef.current.x += velocityRef.current.x;
      rotationRef.current.y += velocityRef.current.y;
    }

    // Clamp vertical tilt so the sphere doesn't flip upside down
    rotationRef.current.x = Math.max(-0.9, Math.min(0.9, rotationRef.current.x));

    groupRef.current.rotation.x = rotationRef.current.x;
    groupRef.current.rotation.y = rotationRef.current.y;

    // Depth sorting and scale attenuation for 3D stereoscopic feel
    const euler = new THREE.Euler(rotationRef.current.x, rotationRef.current.y, 0, 'XYZ');
    const tempVec = new THREE.Vector3();

    spritesRef.current.forEach((sprite, idx) => {
      if (!sprite) return;
      const basePos = positions[idx];
      tempVec.copy(basePos).applyEuler(euler);

      // z is relative to center: front is +SPHERE_RADIUS, back is -SPHERE_RADIUS
      const normalizedZ = tempVec.z / SPHERE_RADIUS; // -1 to 1
      const depthFactor = (normalizedZ + 1) * 0.5; // 0 (far) to 1 (near)

      // Near: scale 1.15, opacity 1.0; Far: scale 0.72, opacity 0.32
      const scale = 0.72 + depthFactor * 0.43;
      sprite.scale.set(scale, scale, 1);
      (sprite.material as THREE.SpriteMaterial).opacity = 0.3 + depthFactor * 0.7;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Subtle core geodesic wireframe cage */}
      <mesh>
        <icosahedronGeometry args={[SPHERE_RADIUS * 0.96, 2]} />
        <meshBasicMaterial
          color="#A0A5B0"
          wireframe
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>

      {/* Latitudinal / orbital guide ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[SPHERE_RADIUS * 0.99, SPHERE_RADIUS * 1.01, 64]} />
        <meshBasicMaterial
          color="#E65C00"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Skill Sprites */}
      {positions.map((pos, idx) => (
        <sprite
          key={SKILLS[idx].name}
          ref={(el) => {
            if (el) spritesRef.current[idx] = el;
          }}
          position={pos}
        >
          <spriteMaterial
            map={textures[idx]}
            transparent
            depthTest={false}
            opacity={0.9}
          />
        </sprite>
      ))}
    </group>
  );
};

export const SkillsSphereCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const isDraggingRef = useRef(false);
  const rotationRef = useRef({ x: 0.15, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0.0035 });
  const lastPointerRef = useRef({ x: 0, y: 0 });

  // IntersectionObserver to pause frameloop when scrolled out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pointer drag event handlers on the container
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    const sensitivity = 0.006;
    velocityRef.current = { x: dy * sensitivity, y: dx * sensitivity };
    rotationRef.current.x += dy * sensitivity;
    rotationRef.current.y += dx * sensitivity;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture was already released
    }
  };

  return (
    <div
      ref={containerRef}
      className="hero-skills-wrapper"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'grab',
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Canvas
        frameloop={isVisible ? 'always' : 'demand'}
        camera={{ position: [0, 0, 5.4], fov: 46 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <SphereScene
          isDraggingRef={isDraggingRef}
          rotationRef={rotationRef}
          velocityRef={velocityRef}
          shouldReduceMotion={shouldReduceMotion}
        />
      </Canvas>
    </div>
  );
};
