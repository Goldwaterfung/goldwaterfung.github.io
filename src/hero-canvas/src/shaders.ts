export const vertexShader = /* glsl */ `
uniform float uTime;
uniform vec3 uImpulseOrigin;
uniform float uImpulseTime;

varying vec3 vNormal;
varying float vImpulseIntensity;

float calculateDisplacement(vec3 pos) {
    float dist = length(pos);
    
    // Fundamental breathing wave
    float wave1 = sin(dist * 2.0 - uTime * 1.2) * 0.08;
    
    // High-frequency structural ripple
    float wave2 = sin(dist * 6.0 + uTime * 2.5) * 0.03;
    
    // Expanding click impulse wave
    float impulse = 0.0;
    if (uImpulseTime >= 0.0 && uImpulseTime < 1.5) {
        float distToClick = length(pos - uImpulseOrigin);
        float waveFront = uImpulseTime * 3.2;
        float diff = distToClick - waveFront;
        float envelope = exp(-uImpulseTime * 2.8) * exp(-diff * diff * 10.0);
        impulse = sin(diff * 16.0) * envelope * 0.20;
    }
    
    return wave1 + wave2 + impulse;
}

vec3 calculateDisplacedPosition(vec3 pos) {
    vec3 n = normalize(pos);
    float disp = calculateDisplacement(pos);
    return pos + n * disp;
}

void main() {
    vec3 p = position;
    vec3 n = normalize(position);
    
    vec3 displaced = calculateDisplacedPosition(p);
    
    // Compute normal using finite differences along tangents
    vec3 helper = abs(n.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 tangent1 = normalize(cross(n, helper));
    vec3 tangent2 = cross(n, tangent1);
    float eps = 0.015;
    vec3 p1 = calculateDisplacedPosition(p + tangent1 * eps);
    vec3 p2 = calculateDisplacedPosition(p + tangent2 * eps);
    vec3 displacedNormal = normalize(cross(p1 - displaced, p2 - displaced));
    
    vNormal = normalize(normalMatrix * displacedNormal);
    
    // Calculate impulse intensity for wireframe wave glow
    float distToClick = length(p - uImpulseOrigin);
    float waveFront = uImpulseTime * 3.2;
    float diff = distToClick - waveFront;
    vImpulseIntensity = exp(-uImpulseTime * 2.8) * exp(-diff * diff * 10.0);
    
    vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`;

export const fragmentShader = /* glsl */ `
uniform vec3 uWireColor;
uniform vec3 uAccentColor;

varying vec3 vNormal;
varying float vImpulseIntensity;

void main() {
    // Normal direction facing viewer gives 3D depth to the wireframe lines
    float facing = clamp(vNormal.z * 0.5 + 0.5, 0.2, 1.0);
    
    // Base wireframe color with depth modulation
    vec3 baseCol = mix(vec3(0.62, 0.61, 0.59), uWireColor, facing);
    
    // When click shockwave passes, highlight line with signal amber
    vec3 col = mix(baseCol, uAccentColor, clamp(vImpulseIntensity * 1.8, 0.0, 1.0));
    
    // Front lines are distinct, back lines are subtly transparent
    float alpha = mix(0.3, 0.85, facing);
    
    gl_FragColor = vec4(col, alpha);
}
`;
