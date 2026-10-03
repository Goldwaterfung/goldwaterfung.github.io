# Design Specification: Procedural 3D London Transit Diorama

## 1. Executive Summary

This specification defines the architectural upgrade of the Work Experience journey section (`#experience`) in `index.html` and `index_zh.html`. The current 2D SVG schematic map is upgraded into a true 3D procedural isometric diorama built with Three.js and React Three Fiber.

The diorama preserves the iconic London Underground transit map design concept:
1. Strict adherence to Harry Beck geometric routing, incorporating 90-degree and 45-degree route segments with smooth fillet arcs.
2. Complete fidelity to the existing repository theme colors. No extra colors, no extra badges, and no extra tags.
3. Separation of spatial cartography in 3D WebGL and textual narrative in the high-contrast semantic HTML card dock.

---

## 2. Palette and Visual Invariants

The 3D diorama strictly reuses existing color variables from `style.css` and `LondonTransitMap.tsx`:

* **Plinth Base and Casing:** `--bg-body` (`#f7f5f0`) and `--bg-card` (`#ffffff`)
* **Technical Drafting Grid and Borders:** `--border-color` (`#dfded8`) and `--border-color-dark` (`#1c1c1e`)
* **Foundation Trunk and Commercial Product Line:** `--accent-amber` (`#e65c00`)
* **Applied AI and Systems Line:** Cobalt Blue (`#1d4ed8`)
* **Clinical Diagnostic Siding:** `--accent-green` (`#2e7d32`)
* **Unified Trajectory Mainline and Station Numbers:** `--text-primary` (`#1c1c1e`)

No secondary accent colors or decorative tags are introduced.

---

## 3. Spatial Coordinate Mapping and Architectural Plinth

The existing 2D coordinate system in `LondonTransitMap.tsx` spans 1000 by 350 units. This maps into a normalized 3D isometric coordinate system:

* **Horizontal Axis (X):** Maps 0 to 1000 in SVG to -10.0 to +10.0 in Three.js world space.
* **Depth Axis (Z):** Maps 0 to 350 in SVG to -3.5 to +3.5 in Three.js world space.
* **Vertical Axis (Y):** Elevation above the plinth surface. Plinth surface sits at Y = 0.
* **Architectural Plinth Geometry:**
  * Box geometry measuring 22.0 units wide, 0.4 units thick, and 9.0 units deep, centered at origin (0, -0.2, 0).
  * Chamfered bevels along the top perimeter.
  * Top surface rendered with a subtle procedural technical drafting grid pattern with 0.5-unit spacing using `--border-color` (`#dfded8`).

---

## 4. Procedural Extruded 3D Conduit Tracks

Each route is constructed as a two-layer physical extrusion:

### 4.1. Base Print Separation Casing
A flat, wide conduit channel extruded along the path with a thickness of 0.02 units and width of 0.35 units, rendered in `--bg-body` (`#f7f5f0`). This creates clear physical separation from the drafting plinth, replicating physical architectural models.

### 4.2. Raised Colored Rail Conduits
An elevated chamfered tube geometry with a radius of 0.08 units running directly over the casing channel:
1. **Foundation Trunk:** From Station 1 (Kerry Hotel) through Station 2 (Marriott) to bifurcation point (X: -4.6, Z: 0.5). Color: `--accent-amber` (`#e65c00`).
2. **Commercial Product Line:** Branches 45 degrees downward to Station 5 (MRKE Ltd. at X: 0.4, Z: 1.7) before curving up toward convergence junction (X: 6.6, Z: 0.5). Color: `--accent-amber` (`#e65c00`).
3. **Applied AI and Systems Line:** Branches 45 degrees upward to Station 3 (TNNUA Systems Engineer at X: -0.4, Z: -0.7) before curving down toward convergence junction. Color: Cobalt Blue (`#1d4ed8`).
4. **Clinical Diagnostic Siding:** Branches 45 degrees upward from the Systems Line to Station 4 (Innova Medical at X: 3.0, Z: -1.9) and rejoins the Systems Line at X: 5.1. Color: `--accent-green` (`#2e7d32`).
5. **Unified Trajectory Mainline:** Extends horizontally from convergence junction (X: 6.6, Z: 0.5) to terminal stop (X: 9.0, Z: 0.5). Color: `--text-primary` (`#1c1c1e`).

All transitions between angles utilize smooth circular fillet arcs generated via `THREE.CurvePath`.

---

## 5. Station Waypoints and Active Beacon Dynamics

### 5.1. Cylindrical Station Pedestals
At each of the five verified station coordinates, a cylindrical pedestal is positioned:
* **Dimensions:** Radius 0.35 units, height 0.12 units.
* **Top Face:** Features an embossed numeric station identifier (1, 2, 3, 4, or 5) rendered in `--text-primary` (`#1c1c1e`).
* **Interchange Distinction:** Station 2 (Marriott Pivot) features a double-ring concentric cylinder signifying the interchange junction between Hospitality and Technology.

### 5.2. Active State Feedback
When a station becomes active:
1. The pedestal smoothly elevates by 0.06 units on the Y axis.
2. A vertical architectural light column illuminates above the pedestal. The column is a semi-transparent cylinder (radius 0.25 units, height 1.8 units) with soft vertical gradient falloff and additive blending, tinted with the line's accent color.
3. Concentric ripple rings expand outward on the plinth surface around the base of the pedestal.
4. A subtle local point light illuminates the station area with controlled radius and falloff.

### 5.3. Inactive State
Inactive pedestals remain flush on the plinth with clean matte materials and clear numeric markings.

---

## 6. Camera Architecture and Tracking

* **Camera Type:** Perspective camera with narrow field of view (FOV 28 degrees) to emulate isometric architectural photography, eliminating wide-angle lens distortion.
* **Camera Orientation:** Angled at 45-degree azimuth and 35-degree elevation relative to the plinth.
* **Damped Tracking:**
  * The camera target coordinates track the active station position using `THREE.MathUtils.damp`.
  * As the user scrolls the page or clicks previous and next station buttons, the camera smoothly glides to frame the active station in the focal zone while keeping neighboring track geometry visible for context.

---

## 7. Event Architecture and DOM Synchronization

The 3D WebGL scene communicates with the existing HTML document through custom window events:

```
[Browser Scroll Scrub / Next Prev Buttons]
                     │
                     ▼ (journey-set-station / journey-set-progress)
        ┌─────────────────────────┐
        │   Three.js 3D Diorama   │
        └─────────────────────────┘
                     │
                     ▼ (journey-active-station-changed on pedestal click)
        ┌─────────────────────────┐
        │  HTML Station Card Dock │
        │     in #experience      │
        └─────────────────────────┘
```

1. **Inbound Synchronization:**
   * `journey-set-station`: Triggers camera damping to the requested station index.
   * `journey-set-progress`: Maps normalized scroll progress (0.0 to 1.0) across station waypoints.
2. **Outbound Synchronization:**
   * Clicking a 3D station pedestal dispatches `journey-active-station-changed` with index and station metadata, activating the corresponding `.journey-card` in the HTML viewport and updating the step counter.
3. **Accessibility:**
   * All textual information (dates, roles, organizations, and project narratives) lives in the DOM for SEO, screen readers, and direct keyboard navigation.

---

## 8. Component Structure and File Layout

The implementation replaces the SVG renderer in `src/hero-canvas/src/journey/`:

```
src/hero-canvas/src/journey/
├── JourneyCanvas.tsx       # R3F Canvas root, WebGL capability check, and event listeners
├── DioramaScene.tsx        # Scene orchestrator (camera damping, studio lights, plinth)
├── TransitTracks3D.tsx     # Procedural extruded track geometry and casing channels
├── StationPedestal.tsx     # Tactile station cylinder with number, beacon column, and ripples
├── transitCoordinates.ts   # Mathematical definitions for station nodes and fillet curves
└── types.ts                # TypeScript data interfaces
```

---

## 9. Verification and Quality Gates

1. **Build Gate:** `npm run --prefix src/hero-canvas build` must complete with zero TypeScript or Vite errors.
2. **Visual Parity:** Station positions, line forkings, and route sequence must match the master experience records in `docs/candidate_experience_source_of_truth.txt`.
3. **Color Invariant:** Strict usage of `--bg-body`, `--bg-dark`, `--accent-amber`, Cobalt Blue, and `--accent-green`. Zero extra colors or badges.
4. **Performance Gate:** Maintain consistent 60 FPS rendering with low draw calls via shared materials and instancing.
5. **Fallback:** If WebGL is unavailable or fails context creation, a clean fallback layout is maintained.
