uniform sampler2D uTexture;
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float r2 = uv.x * uv.x + uv.y * uv.y;
    float k = 0.1;
    vec2 distorted = uv * (1.0 + k * r2);
    distorted = (distorted + 1.0) * 0.5;

    if (distorted.x < 0.0 || distorted.x > 1.0 || distorted.y < 0.0 || distorted.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float scanline = 0.9 + 0.6 * sin(distorted.y * uResolution.y * 2.0);

    vec4 color = texture2D(uTexture, distorted) * scanline;

    color.g *= 1.2;

    float noise = fract(sin(dot(distorted.xy, vec2(12.9898,78.233))) * 43758.5453 + uTime) * 0.04;
    color.rgb += noise;

    float vignette = 1.0 - 0.2 * r2;
    color.rgb *= vignette;

    float lineNoise = fract(sin(distorted.y * 1234.0 + uTime * 10.0) * 43758.0) * 0.02;
    color.rgb += lineNoise;

    gl_FragColor = color;
}