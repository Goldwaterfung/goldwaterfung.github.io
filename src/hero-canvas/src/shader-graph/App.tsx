import { useMemo, useState } from "react";
import {
  ShaderGraphEditor,
  TopBarSelect,
  type NodeSpec,
  type PreviewGeometryPreset,
  type TopBarSelectOption,
} from "three-shader-graph";

// Custom node: "Fresnel Rim"
const customFresnelSpec: NodeSpec = {
  id: "demo_fresnel",
  label: "Fresnel Rim",
  category: "shader",
  webStatus: "native",
  inputs: [{ name: "Power", type: "FLOAT" }],
  outputs: [{ name: "Fac", type: "FLOAT" }],
  defaultParams: {
    Power: 2.0,
  },
  glsl: (ctx) => {
    ctx.useChunk("tsg_fresnel_rim");
    const power = ctx.resolveInput("Power") || `${Number(ctx.param("Power")).toFixed(4)}`;
    const outVar = ctx.outVar("Fac");
    return `float ${outVar} = pow(1.0 - max(dot(normalize(vNormal), normalize(-vViewPosition)), 0.0), ${power});\n`;
  },
};

const customFresnelChunk = {
  name: "tsg_fresnel_rim",
  glsl: "// custom fresnel chunk",
};

type BackdropMode = "hdr" | "color" | "none";

const GEOMETRY_OPTIONS: ReadonlyArray<TopBarSelectOption<PreviewGeometryPreset>> = [
  { value: "sphere", label: "Sphere" },
  { value: "cube", label: "Cube" },
  { value: "torusKnot", label: "Torus Knot" },
  { value: "cylinder", label: "Cylinder" },
  { value: "plane", label: "Plane" },
];

const BACKDROP_OPTIONS: ReadonlyArray<TopBarSelectOption<BackdropMode>> = [
  { value: "hdr", label: "HDR Panorama" },
  { value: "color", label: "Solid Grey" },
  { value: "none", label: "Transparent" },
];

export function App() {
  const [geometry, setGeometry] = useState<PreviewGeometryPreset>("sphere");
  const [bgMode, setBgMode] = useState<BackdropMode>("hdr");

  const customNodes = useMemo(
    () => [{ spec: customFresnelSpec, chunks: [customFresnelChunk] }],
    [],
  );

  const topBarExtras = (
    <>
      <TopBarSelect
        label="Preview geometry"
        icon="shape"
        value={geometry}
        options={GEOMETRY_OPTIONS}
        onChange={setGeometry}
      />
      <TopBarSelect
        label="Preview backdrop"
        icon="backdrop"
        value={bgMode}
        options={BACKDROP_OPTIONS}
        onChange={setBgMode}
      />
    </>
  );

  return (
    <ShaderGraphEditor
      customNodes={customNodes}
      topBarExtras={topBarExtras}
      previewProps={{
        geometry,
        environment: {
          backgroundMode: bgMode,
          backgroundColor: "#18181b",
          hdrUrl: "/hdr/overcast_soil_puresky_2k.hdr",
        },
      }}
    />
  );
}

export default App;
