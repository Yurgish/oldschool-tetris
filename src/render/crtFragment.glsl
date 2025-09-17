uniform sampler2D uTexture;
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;

void main() {
    // Центруємо UV в [-1, 1]
    vec2 uv = vUv * 2.0 - 1.0;
    float r2 = uv.x * uv.x + uv.y * uv.y;
    float k = 0.1; // сила викривлення

    // Barrel distortion
    vec2 distorted = uv * (1.0 + k * r2);

    // Повертаємо в [0, 1]
    distorted = (distorted + 1.0) * 0.5;

    // Якщо виходимо за межі — чорний
    if (distorted.x < 0.0 || distorted.x > 1.0 || distorted.y < 0.0 || distorted.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
        gl_FragColor = texture2D(uTexture, distorted);
    }
}