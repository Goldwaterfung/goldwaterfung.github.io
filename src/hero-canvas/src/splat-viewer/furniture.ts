import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";

export interface FurnitureItem {
  id: string;
  name: string;
  modelUrl: string;
  thumbUrl: string;
  /** Real-world height in meters; models normalize to this (unknown unit scale). */
  targetHeight: number;
}

// Dynamic catalog: adding a row here adds a card to the right-side list.
export const FURNITURE: FurnitureItem[] = [
  {
    id: "royal-rose-divan",
    name: "Royal Rose Divan",
    modelUrl: "assets/3d/furniture/Royal_Rose_Divan.glb",
    thumbUrl: "assets/3d/furniture/royal_rose_divan.png",
    targetHeight: 0.8,
  },
  {
    id: "rustic-wooden-armchair",
    name: "Rustic Wooden Armchair",
    modelUrl: "assets/3d/furniture/Rustic_Wooden_Armchai.glb",
    thumbUrl: "assets/3d/furniture/rustic_wooden_armchai.png",
    targetHeight: 0.95,
  },
  {
    id: "walnut-wardrobe",
    name: "Walnut Wardrobe",
    modelUrl: "assets/3d/furniture/Walnut_Wardrobe.glb",
    thumbUrl: "assets/3d/furniture/walnut_wardrobe.png",
    targetHeight: 2.0,
  },
];

function resolveAssetUrl(path: string): string {
  if (typeof document !== "undefined" && document.baseURI) {
    return new URL(path, document.baseURI).href;
  }
  return path;
}

const gltfLoader = new GLTFLoader();
const templateCache = new Map<string, Promise<THREE.Group>>();

/** Shadeless conversion: MeshBasicMaterial shows map + color with no lights. */
function toUnlit(mesh: THREE.Mesh): void {
  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  const unlit = materials.map((mat) => {
    const std = mat as THREE.MeshStandardMaterial;
    return new THREE.MeshBasicMaterial({
      map: std.map ?? null,
      color: std.color ? std.color.clone() : new THREE.Color("#ffffff"),
      side: mat.side,
    });
  });
  mesh.material = Array.isArray(mesh.material) ? unlit : unlit[0];
}

/** Load once per item; normalize scale (target height) and ground the base at y=0. */
function loadTemplate(item: FurnitureItem): Promise<THREE.Group> {
  const cached = templateCache.get(item.id);
  if (cached) return cached;

  const promise = gltfLoader.loadAsync(resolveAssetUrl(item.modelUrl)).then((gltf) => {
    const inner = gltf.scene;
    inner.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) toUnlit(child as THREE.Mesh);
    });
    const box = new THREE.Box3().setFromObject(inner);
    const size = box.getSize(new THREE.Vector3());
    if (size.y > 0) inner.scale.setScalar(item.targetHeight / size.y);

    const grounded = new THREE.Box3().setFromObject(inner);
    inner.position.x -= (grounded.min.x + grounded.max.x) / 2;
    inner.position.z -= (grounded.min.z + grounded.max.z) / 2;
    inner.position.y -= grounded.min.y;

    const template = new THREE.Group();
    template.add(inner);
    return template;
  });
  templateCache.set(item.id, promise);
  return promise;
}

/** Prefetch a model so the ghost appears instantly on drag. */
export function prefetchFurniture(item: FurnitureItem): void {
  void loadTemplate(item).catch(() => {
    templateCache.delete(item.id);
  });
}

function makeGhost(template: THREE.Group): THREE.Group {
  const ghost = template.clone(true);
  ghost.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.isMesh) {
      const mat = (mesh.material as THREE.Material).clone();
      mat.transparent = true;
      mat.opacity = 0.55;
      mat.depthWrite = false;
      mesh.material = mat;
    }
  });
  ghost.visible = false;
  return ghost;
}

/** Flat footprint marker: translucent disc + crisp ring, sized to the item. */
function makeFloorMarker(radius: number): THREE.Group {
  const marker = new THREE.Group();
  // depthTest off + top render order: the marker must read through the
  // floor splats even when the estimated floor sits slightly low.
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 48),
    new THREE.MeshBasicMaterial({ color: 0xe65c00, transparent: true, opacity: 0.22, depthWrite: false, depthTest: false })
  );
  disc.rotation.x = -Math.PI / 2;
  disc.renderOrder = 999;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.93, radius, 48),
    new THREE.MeshBasicMaterial({ color: 0xe65c00, transparent: true, opacity: 0.85, depthWrite: false, depthTest: false, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.renderOrder = 999;
  marker.add(disc, ring);
  marker.visible = false;
  return marker;
}

/** Horizontal footprint radius of a grounded template (covers its XZ extent). */
function footprintRadius(template: THREE.Group): number {
  const box = new THREE.Box3().setFromObject(template);
  const size = box.getSize(new THREE.Vector3());
  return Math.max(size.x, size.z) / 2;
}

export interface FurnitureEditorContext {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  /** World-space floor height (room shell min.y). */
  floorY: number;
  /** XZ-clamped placement volume (room shell inset). */
  roomBox: THREE.Box3;
}

export interface FurnitureEditor {
  /** True while a gizmo drag is active — caller should skip camera updates. */
  isGizmoActive: () => boolean;
}

export function createFurnitureEditor(ctx: FurnitureEditorContext): FurnitureEditor {
  const list = document.getElementById("furn-panel-list");
  if (!list) return { isGizmoActive: () => false };

  for (const item of FURNITURE) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "furn-card";
    card.dataset.itemId = item.id;

    const thumb = document.createElement("img");
    thumb.src = resolveAssetUrl(item.thumbUrl);
    thumb.alt = item.name;
    thumb.draggable = false;
    card.appendChild(thumb);

    const label = document.createElement("span");
    label.className = "furn-name";
    label.textContent = item.name;
    card.appendChild(label);

    card.addEventListener("pointerenter", () => prefetchFurniture(item));
    card.addEventListener("pointerdown", (e) => startDrag(e, item, card));
    list.appendChild(card);
  }

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -ctx.floorY);
  const hitPoint = new THREE.Vector3();

  function startDrag(startEvent: PointerEvent, item: FurnitureItem, card: HTMLElement): void {
    startEvent.preventDefault();
    card.classList.add("is-armed");

    let template: THREE.Group | null = null;
    let ghost: THREE.Group | null = null;
    let marker: THREE.Group | null = null;
    let dragging = false;
    const startX = startEvent.clientX;
    const startY = startEvent.clientY;

    void loadTemplate(item)
      .then((t) => {
        template = t;
      })
      .catch(() => {
        templateCache.delete(item.id);
      });

    const onMove = (e: PointerEvent) => {
      if (!dragging && Math.hypot(e.clientX - startX, e.clientY - startY) > 6) {
        dragging = true;
      }
      if (!dragging) return;

      // Only snap while hovering the 3D canvas (not the panel or chrome).
      const hovered = document.elementFromPoint(e.clientX, e.clientY);
      const overCanvas = hovered === ctx.renderer.domElement;
      if (!overCanvas || !template) {
        if (ghost) ghost.visible = false;
        if (marker) marker.visible = false;
        return;
      }

      if (!ghost) {
        ghost = makeGhost(template);
        ctx.scene.add(ghost);
      }
      if (!marker) {
        marker = makeFloorMarker(footprintRadius(template));
        ctx.scene.add(marker);
      }

      // Raycast the pointer onto the floor plane, then snap inside the room box.
      ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
      raycaster.setFromCamera(ndc, ctx.camera);
      if (raycaster.ray.intersectPlane(floorPlane, hitPoint)) {
        hitPoint.x = THREE.MathUtils.clamp(hitPoint.x, ctx.roomBox.min.x, ctx.roomBox.max.x);
        hitPoint.z = THREE.MathUtils.clamp(hitPoint.z, ctx.roomBox.min.z, ctx.roomBox.max.z);
        ghost.position.set(hitPoint.x, ctx.floorY, hitPoint.z);
        ghost.visible = true;
        marker.position.set(hitPoint.x, ctx.floorY + 0.02, hitPoint.z);
        marker.visible = true;
      } else {
        ghost.visible = false;
        marker.visible = false;
      }
    };

    const endDrag = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      card.classList.remove("is-armed");

      // Drop: commit the ghost position as a real mesh.
      if (dragging && ghost && ghost.visible && template) {
        const placed = template.clone(true);
        placed.position.copy(ghost.position);
        ctx.scene.add(placed);
        placedItems.push(placed);
        select(placed);
        pushHistory({ kind: "add", obj: placed });
      }
      if (ghost) {
        ctx.scene.remove(ghost);
        ghost = null;
      }
      if (marker) {
        ctx.scene.remove(marker);
        marker = null;
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
  }

  // ---- Unity/Blender-style editing: select + translate/rotate gizmo ----
  const placedItems: THREE.Group[] = [];
  let selected: THREE.Group | null = null;

  // ---- Command history (add / delete / transform) ----
  interface TransformSnapshot {
    pos: THREE.Vector3;
    quat: THREE.Quaternion;
    scale: THREE.Vector3;
  }
  type HistoryEntry =
    | { kind: "add"; obj: THREE.Group }
    | { kind: "delete"; obj: THREE.Group; index: number }
    | { kind: "transform"; obj: THREE.Group; before: TransformSnapshot; after: TransformSnapshot };
  const undoStack: HistoryEntry[] = [];
  const redoStack: HistoryEntry[] = [];
  const MAX_HISTORY = 50;

  function snapshotOf(obj: THREE.Group): TransformSnapshot {
    return { pos: obj.position.clone(), quat: obj.quaternion.clone(), scale: obj.scale.clone() };
  }
  function applySnapshot(obj: THREE.Group, snap: TransformSnapshot): void {
    obj.position.copy(snap.pos);
    obj.quaternion.copy(snap.quat);
    obj.scale.copy(snap.scale);
  }
  function snapshotsEqual(a: TransformSnapshot, b: TransformSnapshot): boolean {
    const eps = 1e-5;
    return (
      a.pos.distanceToSquared(b.pos) < eps &&
      a.scale.distanceToSquared(b.scale) < eps &&
      1 - Math.abs(a.quat.dot(b.quat)) < eps
    );
  }

  function updateHistoryButtons(): void {
    const undoBtn = document.getElementById("btn-undo") as HTMLButtonElement | null;
    const redoBtn = document.getElementById("btn-redo") as HTMLButtonElement | null;
    const delBtn = document.getElementById("btn-delete") as HTMLButtonElement | null;
    const dupBtn = document.getElementById("btn-duplicate") as HTMLButtonElement | null;
    if (undoBtn) undoBtn.disabled = undoStack.length === 0;
    if (redoBtn) redoBtn.disabled = redoStack.length === 0;
    if (delBtn) delBtn.disabled = selected === null;
    if (dupBtn) dupBtn.disabled = selected === null;
  }

  function pushHistory(entry: HistoryEntry): void {
    undoStack.push(entry);
    if (undoStack.length > MAX_HISTORY) undoStack.shift();
    redoStack.length = 0;
    updateHistoryButtons();
  }

  function removeObject(obj: THREE.Group): void {
    const idx = placedItems.indexOf(obj);
    if (idx >= 0) placedItems.splice(idx, 1);
    ctx.scene.remove(obj);
  }

  function undo(): void {
    const entry = undoStack.pop();
    if (!entry) return;
    if (entry.kind === "add") {
      if (selected === entry.obj) select(null);
      removeObject(entry.obj);
      redoStack.push(entry);
    } else if (entry.kind === "delete") {
      placedItems.splice(Math.min(entry.index, placedItems.length), 0, entry.obj);
      ctx.scene.add(entry.obj);
      select(entry.obj);
      redoStack.push(entry);
    } else {
      applySnapshot(entry.obj, entry.before);
      entry.obj.position.x = THREE.MathUtils.clamp(entry.obj.position.x, ctx.roomBox.min.x, ctx.roomBox.max.x);
      entry.obj.position.z = THREE.MathUtils.clamp(entry.obj.position.z, ctx.roomBox.min.z, ctx.roomBox.max.z);
      entry.obj.position.y = ctx.floorY;
      select(entry.obj);
      redoStack.push(entry);
    }
    updateHistoryButtons();
  }

  function redo(): void {
    const entry = redoStack.pop();
    if (!entry) return;
    if (entry.kind === "add") {
      placedItems.push(entry.obj);
      ctx.scene.add(entry.obj);
      select(entry.obj);
      undoStack.push(entry);
    } else if (entry.kind === "delete") {
      if (selected === entry.obj) select(null);
      removeObject(entry.obj);
      undoStack.push(entry);
    } else {
      applySnapshot(entry.obj, entry.after);
      entry.obj.position.x = THREE.MathUtils.clamp(entry.obj.position.x, ctx.roomBox.min.x, ctx.roomBox.max.x);
      entry.obj.position.z = THREE.MathUtils.clamp(entry.obj.position.z, ctx.roomBox.min.z, ctx.roomBox.max.z);
      entry.obj.position.y = ctx.floorY;
      select(entry.obj);
      undoStack.push(entry);
    }
    updateHistoryButtons();
  }

  function deleteSelected(): void {
    if (!selected || gizmo.dragging) return;
    const obj = selected;
    const index = placedItems.indexOf(obj);
    select(null);
    removeObject(obj);
    pushHistory({ kind: "delete", obj, index: Math.max(0, index) });
  }

  function duplicateSelected(): void {
    if (!selected || gizmo.dragging) return;
    const copy = selected.clone(true);
    copy.position.x = THREE.MathUtils.clamp(copy.position.x + 0.3, ctx.roomBox.min.x, ctx.roomBox.max.x);
    copy.position.z = THREE.MathUtils.clamp(copy.position.z + 0.3, ctx.roomBox.min.z, ctx.roomBox.max.z);
    copy.position.y = ctx.floorY;
    ctx.scene.add(copy);
    placedItems.push(copy);
    select(copy);
    pushHistory({ kind: "add", obj: copy });
  }

  const gizmo = new TransformControls(ctx.camera, ctx.renderer.domElement);
  gizmo.setSize(0.8);
  gizmo.setMode("translate");
  gizmo.showY = false; // pieces stay grounded; no vertical handle
  ctx.scene.add(gizmo.getHelper());

  // Snapshot the transform on grab so a full drag compresses to one undo step.
  let dragSnapshot: { obj: THREE.Group; before: TransformSnapshot } | null = null;
  gizmo.addEventListener("mouseDown", () => {
    if (selected) dragSnapshot = { obj: selected, before: snapshotOf(selected) };
  });
  gizmo.addEventListener("mouseUp", () => {
    if (dragSnapshot && dragSnapshot.obj === selected && selected) {
      const after = snapshotOf(selected);
      if (!snapshotsEqual(dragSnapshot.before, after)) {
        pushHistory({ kind: "transform", obj: selected, before: dragSnapshot.before, after });
      }
    }
    dragSnapshot = null;
  });

  // Persistent selection ring (white) under the selected piece.
  const selectRing = new THREE.Mesh(
    new THREE.RingGeometry(0.9, 1.0, 48),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false, side: THREE.DoubleSide })
  );
  selectRing.rotation.x = -Math.PI / 2;
  selectRing.renderOrder = 998;
  selectRing.visible = false;
  ctx.scene.add(selectRing);

  function updateSelectRing(): void {
    if (!selected) return;
    const box = new THREE.Box3().setFromObject(selected);
    const size = box.getSize(new THREE.Vector3());
    const r = Math.max(size.x, size.z) / 2 + 0.08;
    selectRing.scale.set(r, r, 1);
    selectRing.position.set(selected.position.x, ctx.floorY + 0.02, selected.position.z);
  }

  function select(obj: THREE.Group | null): void {
    selected = obj;
    if (obj) {
      gizmo.attach(obj);
      updateSelectRing();
      selectRing.visible = true;
    } else {
      gizmo.detach();
      selectRing.visible = false;
    }
    updateHistoryButtons();
  }

  // Keep edits inside the room box; pieces stay on the floor; scale stays sane.
  const MIN_SCALE = 0.3;
  const MAX_SCALE = 3;
  gizmo.addEventListener("objectChange", () => {
    if (!selected) return;
    selected.position.x = THREE.MathUtils.clamp(selected.position.x, ctx.roomBox.min.x, ctx.roomBox.max.x);
    selected.position.z = THREE.MathUtils.clamp(selected.position.z, ctx.roomBox.min.z, ctx.roomBox.max.z);
    selected.position.y = ctx.floorY;
    selected.scale.x = THREE.MathUtils.clamp(selected.scale.x, MIN_SCALE, MAX_SCALE);
    selected.scale.y = THREE.MathUtils.clamp(selected.scale.y, MIN_SCALE, MAX_SCALE);
    selected.scale.z = THREE.MathUtils.clamp(selected.scale.z, MIN_SCALE, MAX_SCALE);
    updateSelectRing();
  });

  type GizmoMode = "translate" | "rotate" | "scale";
  function setMode(mode: GizmoMode): void {
    gizmo.setMode(mode);
    gizmo.showY = mode !== "translate";
    document.querySelectorAll<HTMLButtonElement>("#gizmo-bar button[data-mode]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.mode === mode);
    });
  }

  document.querySelectorAll<HTMLButtonElement>("#gizmo-bar button[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode as GizmoMode));
  });
  document.getElementById("btn-duplicate")?.addEventListener("click", duplicateSelected);
  document.getElementById("btn-delete")?.addEventListener("click", deleteSelected);
  document.getElementById("btn-undo")?.addEventListener("click", undo);
  document.getElementById("btn-redo")?.addEventListener("click", redo);
  window.addEventListener("keydown", (e) => {
    const mod = e.ctrlKey || e.metaKey;
    const key = e.key.toLowerCase();
    if (mod && key === "z" && !e.shiftKey) {
      e.preventDefault();
      undo();
      return;
    }
    if ((mod && key === "y") || (mod && key === "z" && e.shiftKey)) {
      e.preventDefault();
      redo();
      return;
    }
    if (mod && key === "d") {
      e.preventDefault();
      duplicateSelected();
      return;
    }
    if (mod) return; // don't hijack browser shortcuts (e.g. Cmd+R)
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      deleteSelected();
    } else if (e.key === "w" || e.key === "W") setMode("translate");
    else if (e.key === "e" || e.key === "E") setMode("rotate");
    else if (e.key === "r" || e.key === "R") setMode("scale");
    else if (e.key === "Escape") select(null);
  });
  updateHistoryButtons();

  // Click (no drag) on canvas: select topmost piece, or deselect on empty.
  // Ignored while hovering the gizmo itself so orbiting handles can't drop selection.
  const downPos = new THREE.Vector2();
  ctx.renderer.domElement.addEventListener("pointerdown", (e: PointerEvent) => {
    downPos.set(e.clientX, e.clientY);
  });
  ctx.renderer.domElement.addEventListener("pointerup", (e: PointerEvent) => {
    if (Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) > 6) return;
    if (gizmo.dragging || gizmo.axis != null) return;
    ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, ctx.camera);
    const hits = raycaster.intersectObjects(placedItems, true);
    if (hits.length > 0) {
      let root: THREE.Object3D | null = hits[0].object;
      while (root && !placedItems.includes(root as THREE.Group)) root = root.parent;
      select((root as THREE.Group) ?? null);
    } else {
      select(null);
    }
  });

  return { isGizmoActive: () => gizmo.dragging };
}
