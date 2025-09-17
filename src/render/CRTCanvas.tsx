import { useEffect, useRef } from "react";
import * as THREE from "three";

import crtFragment from "./crtFragment.glsl?raw";
import crtVertex from "./crtVertex.glsl?raw";

export function CRTCanvas({
  sourceCanvas,
  width,
  height,
}: {
  sourceCanvas: HTMLCanvasElement;
  width: number;
  height: number;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode) return;

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);

    mountNode.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const texture = new THREE.Texture(sourceCanvas);
    texture.needsUpdate = true;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
      },
      vertexShader: crtVertex,
      fragmentShader: crtFragment,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      material.uniforms.uTime.value = clock.getElapsedTime();
      texture.needsUpdate = true;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
      mountNode?.removeChild(renderer.domElement);
    };
  }, [height, sourceCanvas, width]);

  return (
    <div ref={mountRef} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
  );
}
