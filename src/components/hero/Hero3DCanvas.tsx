import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '../../gsap/utils';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768 || prefersReducedMotion()) return;

    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    
    // 2. Camera setup - Positioned for perfect sizing inside column container
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Geometry: Sized cleanly to prevent any viewport overflow
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 96, 16, 2, 3);
    
    // Material in Rich Navy Accent (#0E1E4B)
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0E1E4B'),
      roughness: 0.35,
      metalness: 0.65,
      flatShading: true,
    });

    const torusMesh = new THREE.Mesh(geometry, material);
    scene.add(torusMesh);

    // Subtle Cyber Wireframe Overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#0E9C97'),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    scene.add(wireframeMesh);

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x0e1e4b, 3.2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0e9c97, 1.4);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // 6. Interactive Mouse Physics
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation loop
    let animationFrameId: number;
    const animate = () => {
      torusMesh.rotation.x += 0.004;
      torusMesh.rotation.y += 0.006;

      wireframeMesh.rotation.x = torusMesh.rotation.x;
      wireframeMesh.rotation.y = torusMesh.rotation.y;

      torusMesh.rotation.y += (mouseX - torusMesh.rotation.y) * 0.03;
      torusMesh.rotation.x += (mouseY - torusMesh.rotation.x) * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] max-h-[420px] flex items-center justify-center relative pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default Hero3DCanvas;
