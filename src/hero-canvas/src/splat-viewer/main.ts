import * as THREE from "three";
import { SparkRenderer, SplatMesh, SparkControls, isMobile } from "@sparkjsdev/spark";
import { createFurnitureEditor } from "./furniture";

const SOG_URL = "assets/3d/vintage-living-room.sog";
// Keep the camera this far inside the splat shell on every axis.
const WALL_MARGIN = 0.35;
// Walkable floor plan: 8 x 8 m centered on the room (extends past the walls
// so you can step back and see the whole shell); height still fenced by the
// room's floor and ceiling.
const AREA_HALF_EXTENT = 4;
// Floor = measured density ridge of the 1.57M splat heights (offline
// histogram of the .sog positions: dominant peak at y = -0.01).
// Fine-tune live with [ / ] (0.02 m steps) or ?floor=<offset>; the value
// prints to console on every change — report it and I'll lock it in.
const MEASURED_FLOOR_Y = -0.01;
// Fallback walk volume (world space, meta.json bounds through the
// OpenCV→OpenGL flip), used only if the runtime bounding box is empty.
const FALLBACK_WALK_BOX = new THREE.Box3(
  new THREE.Vector3(-1.68, -0.36, -1.67),
  new THREE.Vector3(1.9, 1.59, 1.68)
);

function resolveAssetUrl(path: string): string {
  if (typeof document !== "undefined" && document.baseURI) {
    return new URL(path, document.baseURI).href;
  }
  return path;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function setVeilProgress(label: string): void {
  const el = document.getElementById("splat-progress");
  if (el) el.textContent = label;
}

function dismissVeil(): void {
  const veil = document.getElementById("splat-veil");
  if (!veil) return;
  veil.classList.add("is-hidden");
  window.setTimeout(() => veil.remove(), 600);
}

function showError(message: string): void {
  dismissVeil();
  const box = document.getElementById("splat-error");
  const detail = document.getElementById("splat-error-detail");
  if (detail) detail.textContent = message;
  if (box) box.hidden = false;
}

function isMobileGpu(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (isMobile()) return true;
  } catch {
    // Fall through to the media/screen heuristic.
  }
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const smallScreen = Math.min(window.innerWidth, window.innerHeight) < 768;
  return coarsePointer || smallScreen;
}

function showFpsMeter(): void {
  const params = new URLSearchParams(window.location.search);
  if (params.get("fps") !== "1") return;
  const el = document.getElementById("splat-fps");
  if (!el) return;
  el.hidden = false;
  let frames = 0;
  let last = performance.now();
  const tick = () => {
    frames += 1;
    const now = performance.now();
    const elapsed = now - last;
    if (elapsed >= 500) {
      el.textContent = `${Math.round((frames * 1000) / elapsed)} fps`;
      frames = 0;
      last = now;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function isWebGL2Available(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

async function init(): Promise<void> {
  if (!isWebGL2Available()) {
    showError("WebGL2 is not available in this browser, and Spark needs it to render splats.");
    return;
  }

  const container = document.getElementById("splat-stage");
  if (!container) {
    showError("Viewer mount point #splat-stage is missing.");
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: false });
  // High DPR multiplies fill/blend cost on mostly-splat scenes (performance.md),
  // so mobile renders at 1x while desktop keeps up to 2x sharpness.
  const mobile = isMobileGpu();
  renderer.setPixelRatio(mobile ? 1 : Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.classList.add("splat-canvas");
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#000000");

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 1.6, 3.5);
  camera.lookAt(0, 1.2, 0);

  // sqrt(5) falloff is perceptually ~identical to the sqrt(8) default
  // with much less transparent overdraw (performance.md).
  const spark = new SparkRenderer({ renderer, maxStdDev: Math.sqrt(5) });
  scene.add(spark);

  const room = new SplatMesh({
    url: resolveAssetUrl(SOG_URL),
    // Quick LoD builds a downsampled tree in a background worker and
    // auto-fits the platform budget (1M Android / 1.5M iOS / 2.5M desktop).
    lod: true,
    onProgress: (event: ProgressEvent) => {
      if (event.lengthComputable && event.total > 0) {
        const pct = ((event.loaded / event.total) * 100).toFixed(0);
        setVeilProgress(`Loading room — ${pct}% (${formatBytes(event.loaded)} / ${formatBytes(event.total)})`);
      } else {
        setVeilProgress(`Loading room — ${formatBytes(event.loaded)}`);
      }
    },
  });
  // Re-orient from OpenCV to OpenGL coordinates (Spark quick-start convention).
  room.quaternion.set(1, 0, 0, 0);
  scene.add(room);

  const controls = new SparkControls({ canvas: renderer.domElement });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  try {
    await room.initialized;
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    showError(`Could not load the room splat (${reason}).`);
    return;
  }

  setVeilProgress(`Room ready — ${room.numSplats.toLocaleString()} splats`);
  dismissVeil();
  showFpsMeter();

  // Walkable volume: floor measured from splat density (not the bbox bottom),
  // ceiling fenced by the shell, floor plan opened to 8 x 8 m.
  room.updateMatrixWorld(true);
  const shellBox = room.getBoundingBox().applyMatrix4(room.matrixWorld);
  const shell = shellBox.isEmpty() ? FALLBACK_WALK_BOX.clone() : shellBox.clone();
  const shellCenter = shell.getCenter(new THREE.Vector3());
  const queryFloor = Number.parseFloat(new URLSearchParams(window.location.search).get("floor") ?? "");
  // Clamp debug override so a crafted ?floor= can't push the camera volume out of the room.
  const floorOverride = Number.isFinite(queryFloor)
    ? Math.max(-0.3, Math.min(0.3, queryFloor))
    : 0;
  const initialFloorY = MEASURED_FLOOR_Y + 0.01 + floorOverride;
  const walkBox = new THREE.Box3(
    new THREE.Vector3(
      shellCenter.x - AREA_HALF_EXTENT,
      initialFloorY + 0.15,
      shellCenter.z - AREA_HALF_EXTENT
    ),
    new THREE.Vector3(
      shellCenter.x + AREA_HALF_EXTENT,
      shell.max.y - WALL_MARGIN,
      shellCenter.z + AREA_HALF_EXTENT
    )
  );
  if (walkBox.isEmpty()) walkBox.copy(FALLBACK_WALK_BOX);
  // Shared mutable floor: [ / ] keys nudge it live; editor reads it per event.
  const furnCtx = { scene, camera, renderer, floorY: initialFloorY, roomBox: walkBox };
  window.addEventListener("keydown", (e) => {
    if (e.key !== "[" && e.key !== "]") return;
    furnCtx.floorY = +(furnCtx.floorY + (e.key === "]" ? 0.02 : -0.02)).toFixed(3);
    const chip = document.getElementById("splat-fps");
    if (chip && !chip.hidden) chip.textContent = `floor ${furnCtx.floorY.toFixed(2)} m`;
  });

  // Start inside the room at standing eye height, facing its center.
  // (The 8 x 8 area is for roaming; first impression stays interior.)
  const walkCenter = walkBox.getCenter(new THREE.Vector3());
  const eyeY = Math.min(furnCtx.floorY + 1.5, walkBox.max.y - 0.2);
  const startZ = Math.min(shell.max.z - 0.8, walkBox.max.z);
  camera.position.set(walkCenter.x, eyeY, startZ);
  camera.position.clamp(walkBox.min, walkBox.max);
  camera.lookAt(walkCenter.x, furnCtx.floorY + 1.3, walkBox.min.z);

  // Furniture shares the navigation boundary: same 8x8 XZ area and floor.
  const furnitureEditor = createFurnitureEditor(furnCtx);

  renderer.setAnimationLoop(() => {
    // Gated while a gizmo drag owns the pointer so both controls never fight.
    if (!furnitureEditor.isGizmoActive()) controls.update(camera);
    // Authoritative clamp: covers WASD, drag, wheel and touch inertia.
    camera.position.clamp(walkBox.min, walkBox.max);
    renderer.render(scene, camera);
  });
}

void init();
