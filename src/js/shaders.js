export const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        vec3 pos = position;
        pos.z += sin(pos.x * 0.1 + uTime) * 10.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

export const fragmentShader = `
    uniform vec3 uColor;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
        vec2 uv = vUv;
        float pulse = sin(uTime + uv.x * 10.0) * 0.5 + 0.5;
        gl_FragColor = vec4(uColor * pulse, pulse * 0.5);
    }
`;