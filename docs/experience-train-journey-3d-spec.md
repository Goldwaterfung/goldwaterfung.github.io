# Technical Specification: 3D Train Station Journey Experience Section

## 1. Summary

This specification defines the transformation of the Work Experience section (`#experience`) in `index.html` and `index_zh.html` from a traditional vertical div sequence into an interactive 3D WebGL isometric railway journey.

The system represents career trajectory as an architectural railway line. Each professional role is a dedicated station platform along a continuous 3D rail line. As the user scrolls through the pinned stage or selects a station, a minimalist train carriage glides along a 3D spline track, the isometric camera tracks its progress, and the corresponding bilingual station details display with smooth DOM synchronization.

Implementation integrates directly with the existing Vite TypeScript and Three.js build toolchain located in `src/hero-canvas/`.

---

## 2. Scope Boundaries

### What Changes

1. **Markup in `index.html` and `index_zh.html`:**
   - Replace the flat `.flat-timeline` div list inside `#experience` with a scroll-scrubbed railway stage container.
   - Container includes a pinned stage (`.journey-stage`), a 3D WebGL mount target (`#journey-3d-canvas`), a minimalist station progress bar with clickable station anchors, a station detail card overlay (`.journey-station-card`), and directional step controls.
   - Retain complete semantic HTML text content directly in markup for SEO, screen readers, and accessibility fallback.
   - Maintain strict factual parity between `index.html` and `index_zh.html`.

2. **Styling in `style.css`:**
   - Add layout and typography rules for `.journey-section`, `.journey-scroll-track`, `.journey-stage`, `.journey-canvas-container`, `.journey-progress-nav`, and `.journey-card`.
   - Ensure fluid responsive behavior on viewports from mobile (360px) to desktop (1920px).
   - Provide a clean fallback layout when WebGL is unavailable or when `prefers-reduced-motion: reduce` is detected.

3. **Build Pipeline in `src/hero-canvas/`:**
   - Add modular 3D journey components:
     - `src/journey/JourneyCanvas.tsx`: R3F Canvas root with render loop, WebGL context handling, and resize listeners.
     - `src/journey/RailwayScene.tsx`: Scene orchestrator managing track spline, platforms, train, lighting, and camera interpolation.
     - `src/journey/RailwayTrack.tsx`: Parametric 3D curve generator with extruded dual rails and wooden cross ties.
     - `src/journey/StationPlatform.tsx`: Procedural low-poly architectural station platforms with glowing platform edge beacons.
     - `src/journey/TrainCarriage.tsx`: Minimalist low-poly passenger car with directional headlight beam.
     - `src/journey/useJourneyScroll.ts`: Scroll and interaction hook mapping page scroll position and click events to curve parameter t.
   - Update `src/main.tsx` to mount the journey canvas on `#journey-3d-canvas` alongside the existing hero canvas.
   - Compile the updated production bundle into `assets/hero-3d.js` via Vite.

4. **Runtime Controller in `script.js`:**
   - Coordinate scroll spy and scroll progress tracking for the journey section, dispatching custom synchronization events between DOM elements and the WebGL canvas.

### What Stays Untouched

1. All other portfolio sections: Hero (`#hero`), Profile (`#about`), Projects and Research (`#projects`), Deployments (`#case-studies`), Education (`#education`), Hobbies (`#hobbies`), and Contact (`#contact`).
2. Global navigation bar, mobile menu, and reading progress bar.
3. Master data records in `docs/candidate_experience_source_of_truth.txt`, `docs/kim-cv-1page.xml`, and resume build scripts.

---

## 3. Station Data Sequence

The journey progresses chronologically from career departure to the current terminal stop. All roles and descriptions align strictly with `docs/candidate_experience_source_of_truth.txt`.

1. **Station 1 (Departure): Kerry Hotel Hong Kong (Shangri-La Group Pre-Opening Team)**
   - Period: Jul 2017 - Jun 2020
   - Role: Guest Experience Concierge
   - Organization: Kerry Hotel Hong Kong
   - Summary: Served on the pre-opening operations team for 3 years, drafting front office service SOPs and cross-departmental communication workflows between housekeeping, engineering, and guest services.

2. **Station 2: Courtyard by Marriott Hong Kong**
   - Period: Jul 2020 - Jul 2021
   - Role: Guest Experience Concierge
   - Organization: Courtyard by Marriott | Hong Kong
   - Summary: Delivered front-of-house VIP services, personalized experiences, and frontline crisis resolution under high-occupancy conditions, developing diagnostic sensitivity to user friction under pressure.

3. **Station 3: MRKE Ltd.**
   - Period: Dec 2020 - Jun 2026
   - Role: Product Engineer and Co-Founder
   - Organization: MRKE Ltd. | 3D Interactive Software and Salon Experience
   - Summary: Built an interactive 3D hairstyle preview application from scratch in Unity C# with CI/CD release automation and Google Cloud Storage asset streaming, deploying on dedicated Android tablets across salon stations.

4. **Station 4: Innova Medical Technology Co., Ltd.**
   - Period: Jul 2024 - Aug 2024
   - Role: User Experience Designer (Intern)
   - Organization: Innova Medical Technology Co., Ltd. | Kaohsiung, Taiwan
   - Summary: Conducted UX diagnostics and database cross-validation across 50 clinical training cases, identifying root causes of student misdiagnoses in audiovisual desynchronization and missing symptom cues to realign engineering priorities.

5. **Station 5 (Terminus): National Tainan University of the Arts**
   - Period: Sep 2023 - Mar 2025
   - Role: Systems Integration Engineer
   - Organization: National Tainan University of the Arts
   - Summary: Integrated end-to-end multimodal AI pipelines (Speech-to-Text, LLM with RAG, Text-to-Speech) for local GPU inference deployment, implementing real-time audiovisual synchronization in Unity. Engineered 1.5s deterministic streaming buffers to stabilize AI pose tracking and audio streams during live concert hall performances.

---

## 4. 3D Architectural Scene Specification

### Camera and Isometric Perspective
- Projection: Perspective camera with a narrow field of view (30 degrees) to simulate an isometric telephoto diorama without clipping planes.
- Camera Position: Angled at 45 degrees azimuth and 35.264 degrees elevation relative to the ground plane.
- Camera Tracking: Camera position and look-at target smoothly interpolate along a smoothed offset vector behind the train, keeping the active station and train centered in the viewport.
- Damping: Smooth position damping using `MathUtils.damp` with a factor of 4.0 for fluid camera motion without jitter.

### Parametric Railway Track
- Spline Geometry: Built with `CatmullRomCurve3` passing through 5 spatial waypoints, creating an organic S-curved rail route with continuous curvature (centripetal curve type).
- Dual Rails: Two parallel tubular geometries spaced 0.3 units apart, radius 0.02 units, rendered in brushed steel metallic finish (roughness 0.35, metalness 0.85).
- Sleepers (Ties): Extruded cuboids placed perpendicular to the curve tangent at fixed intervals of 0.25 units along the track length, rendered in dark charcoal matte finish.
- Ballast Base: Ground strip directly below the track rendered in subtle low-contrast gray.

### Station Platforms
- Base Slab: Elevated rectangular architectural concrete platform (width 1.8, depth 0.8, height 0.15) with chamfered edges, rendered in architectural matte clay (`#eae9e4`).
- Platform Canopy: Minimalist cantilevered roof structure supported by two thin steel columns.
- Station Edge Beacon: An emissive rectangular strip along the platform curb. Emits low-intensity neutral white light when idle, and brightens with an amber accent glow (`#e65c00`) when the train is docked at that station.
- Station Number Marker: Discrete architectural station numeral (1 to 5) embossed on the platform face.

### Train Carriage
- Body: Streamlined low-poly rail carriage (length 1.2, width 0.45, height 0.4) matching the minimalist editorial design language.
- Wheels and Bogies: Low-profile geometric bogies attached to the chassis, aligned to track pitch and yaw.
- Headlight: Forward-facing spotlight casting a soft illumination cone onto the track ahead, plus a warm interior cabin glow through passenger window slits.
- Dynamic Motion: Train position is evaluated at `curve.getPointAt(t)`. Train orientation is calculated from `curve.getTangentAt(t)` to orient the chassis along the track heading. Subtle vertical oscillation (frequency 8 Hz, amplitude 0.005 units) simulates mechanical rail travel when moving.

### Lighting Rig
- Ambient Light: Neutral white ambient light (intensity 0.55) to illuminate shadows without washout.
- Directional Sun Light: Positioned at `[8, 12, 6]` with soft directional shadow mapping (intensity 0.85, shadow map resolution 1024x1024).
- Fill Light: Cool soft bounce light from `[-6, 4, -4]` (intensity 0.3) to provide depth on opposite platform faces.
- Material Palette: Direct alignment with portfolio design tokens (`#1c1c1e` for structural charcoal, `#fbfbfa` for canvas clear background, `#dfded8` for platform concrete, `#e65c00` for active station beacon).

---

## 5. Interaction and State Synchronization Engine

### State Contract
The journey state is driven by a single normalized scalar parameter `t` ranging from 0.0 to 1.0.

```typescript
interface JourneyStation {
  id: string
  stationNumber: number
  t: number
  name: string
  organization: string
  period: string
  role: string
}

interface JourneyState {
  progress: number
  targetProgress: number
  activeStationIndex: number
  isMoving: boolean
  stations: JourneyStation[]
}
```

### Scroll Scrub Controller
- The `#experience` section uses a pinned scroll track layout:
  - Outer container height: `400vh` (providing 3 screen heights of smooth scroll distance).
  - Sticky viewport stage: `height: calc(100vh - var(--header-height))`, pinned at `top: var(--header-height)`.
- As the user scrolls through the 400vh track, scroll offset maps linearly to `targetProgress` from 0.0 to 1.0.
- When `targetProgress` enters a station threshold window (+-0.06 of station `t`), `activeStationIndex` snaps to that station.

### Station Click and Navigation Controls
- Clickable station indicator nodes sit at the top of the sticky stage, displaying station numbers 1 through 5 with corresponding role names.
- Clicking any station node sets `targetProgress` directly to that station's exact `t` value and smoothly scrolls the window to the matching scroll offset.
- Step navigation controls (Previous Station and Next Station) allow keyboard and trackpad users to advance one station at a time.

### Synchronized DOM Card Overlays
- Station text cards reside as semantic HTML elements inside `.journey-station-viewport`.
- When `activeStationIndex` changes:
  - Previous active card fades out with a slight upward translation.
  - New active card fades in with an opacity transition (250ms cubic-bezier).
  - Screen reader aria-live region announces the updated station stop.

---

## 6. Performance, Reliability, and Accessibility

### WebGL Lifecycle and Resource Management
- Off-Screen Pausing: An `IntersectionObserver` monitors `#experience`. When the section is scrolled out of view, the Three.js render loop halts completely to eliminate GPU and CPU overhead.
- Device Pixel Ratio Clamping: Canvas DPR is clamped to `Math.min(window.devicePixelRatio, 1.5)` to avoid memory saturation on 4K Retina screens.
- Shadow Optimization: Shadow maps use lightweight 1024x1024 PCF soft shadows, restricted strictly to the platform bounds.

### Responsive Behavior Across Devices
- Desktop (>= 1024px): Pinned stage with 3D canvas occupying the full background and station inspection card positioned in a clean side panel.
- Tablet (768px - 1023px): Pinned stage with station card docked along the bottom third of the viewport.
- Mobile (< 768px): Vertical stacked layout where the 3D canvas height is restricted to 260px at the top of the viewport, with station cards stepping horizontally or vertically underneath.

### Accessibility and Fallbacks
- Fallback Mode: If WebGL 2.0 is unavailable or if `prefers-reduced-motion: reduce` is detected in media queries:
  - The 3D canvas is cleanly hidden.
  - The section displays as a clean vertical transit sequence with station nodes and complete experience details.
  - All text remains readable, selectable, and indexable by search engines.
- Semantic Structure: Every station uses appropriate `<article>`, `<h3>`, and `<p>` elements.

---

## 7. Verification and Testing Plan

1. **Build Verification:**
   - Execute `npm run build` in `src/hero-canvas/` to ensure clean TypeScript compilation with zero type errors.
   - Verify that output bundle size remains within performance budgets.

2. **Visual and Animation Verification:**
   - Verify smooth 60fps train locomotion along the spline track during scroll scrub.
   - Verify camera orientation smoothly follows the train without rapid flipping at spline inflections.
   - Verify platform beacons illuminate correctly upon train arrival.

3. **Bilingual Parity Verification:**
   - Verify all 5 station cards in `index.html` and `index_zh.html` render with exact factual parity and formatting.
   - Verify language switching preserves station state and text alignment.

4. **Accessibility Verification:**
   - Verify keyboard navigation works using Tab and Enter keys on station selector buttons.
   - Verify screen reader reading order flows naturally through station content.
