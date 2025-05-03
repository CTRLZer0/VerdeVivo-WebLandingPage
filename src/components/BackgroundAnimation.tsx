import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
interface BackgroundAnimationProps {
  darkMode: boolean;
}
export function BackgroundAnimation({
  darkMode
}: BackgroundAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Group | null>(null);
  const frameId = useRef<number | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    // Create particle group
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);
    particlesRef.current = particleGroup;
    // Create organic particles (leaf-like shapes)
    const createOrganicParticles = () => {
      const count = 100;
      const color = darkMode ? 0x4ade80 : 0x10b981;
      for (let i = 0; i < count; i++) {
        // Create a small organic shape
        const shape = new THREE.Shape();
        // Create leaf-like or organic shape
        const size = 0.2 + Math.random() * 0.3;
        const curve = Math.random() * 0.2;
        shape.moveTo(0, 0);
        shape.bezierCurveTo(curve, size * 0.5, size, size * 0.8, 0, size * 2);
        shape.bezierCurveTo(-size, size * 0.8, -curve, size * 0.5, 0, 0);
        const geometry = new THREE.ShapeGeometry(shape);
        // Add some randomness to color
        const hue = (darkMode ? 0.4 : 0.45) + (Math.random() * 0.1 - 0.05);
        const saturation = 0.6 + Math.random() * 0.4;
        const lightness = (darkMode ? 0.5 : 0.4) + Math.random() * 0.2;
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(hue, saturation, lightness),
          transparent: true,
          opacity: 0.2 + Math.random() * 0.3,
          side: THREE.DoubleSide
        });
        const particle = new THREE.Mesh(geometry, material);
        // Position randomly in space
        particle.position.x = (Math.random() - 0.5) * 50;
        particle.position.y = (Math.random() - 0.5) * 50;
        particle.position.z = (Math.random() - 0.5) * 20;
        // Random rotation
        particle.rotation.x = Math.random() * Math.PI;
        particle.rotation.y = Math.random() * Math.PI;
        particle.rotation.z = Math.random() * Math.PI;
        // Store random movement data with the particle
        particle.userData = {
          speedX: (Math.random() - 0.5) * 0.02,
          speedY: (Math.random() - 0.5) * 0.02,
          speedZ: (Math.random() - 0.5) * 0.01,
          rotationSpeed: (Math.random() - 0.5) * 0.005,
          sinOffset: Math.random() * Math.PI * 2,
          sinSpeed: 0.001 + Math.random() * 0.003,
          sinAmount: 0.05 + Math.random() * 0.1
        };
        particleGroup.add(particle);
      }
      // Add some glowing dots too
      for (let i = 0; i < count / 2; i++) {
        const dotGeometry = new THREE.CircleGeometry(0.05 + Math.random() * 0.1, 16);
        const dotMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL((darkMode ? 0.4 : 0.45) + (Math.random() * 0.1 - 0.05), 0.8, 0.6 + Math.random() * 0.2),
          transparent: true,
          opacity: 0.4 + Math.random() * 0.3,
          side: THREE.DoubleSide
        });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        dot.position.x = (Math.random() - 0.5) * 50;
        dot.position.y = (Math.random() - 0.5) * 50;
        dot.position.z = (Math.random() - 0.5) * 20;
        dot.userData = {
          speedX: (Math.random() - 0.5) * 0.03,
          speedY: (Math.random() - 0.5) * 0.03,
          speedZ: (Math.random() - 0.5) * 0.01,
          pulseSpeed: 0.5 + Math.random() * 1.5,
          pulseAmount: 0.2 + Math.random() * 0.4,
          pulseOffset: Math.random() * Math.PI * 2
        };
        particleGroup.add(dot);
      }
    };
    createOrganicParticles();
    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      if (particlesRef.current) {
        // Rotate the entire particle group slightly
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0005;
        // Animate each individual particle
        particlesRef.current.children.forEach(particle => {
          // Move based on stored speeds
          particle.position.x += particle.userData.speedX;
          particle.position.y += particle.userData.speedY;
          particle.position.z += particle.userData.speedZ;
          // Add some wave motion
          if (particle.userData.sinOffset !== undefined) {
            particle.position.x += Math.sin(Date.now() * particle.userData.sinSpeed + particle.userData.sinOffset) * particle.userData.sinAmount;
          }
          // Add rotation
          if (particle.userData.rotationSpeed !== undefined) {
            particle.rotation.z += particle.userData.rotationSpeed;
          }
          // Pulse size for dots
          if (particle.userData.pulseSpeed !== undefined) {
            const pulse = Math.sin(Date.now() * 0.001 * particle.userData.pulseSpeed + particle.userData.pulseOffset) * particle.userData.pulseAmount;
            particle.scale.set(1 + pulse, 1 + pulse, 1);
          }
          // Wrap around if out of bounds
          const limit = 30;
          if (particle.position.x > limit) particle.position.x = -limit;
          if (particle.position.x < -limit) particle.position.x = limit;
          if (particle.position.y > limit) particle.position.y = -limit;
          if (particle.position.y < -limit) particle.position.y = limit;
          if (particle.position.z > 10) particle.position.z = -10;
          if (particle.position.z < -10) particle.position.z = 10;
        });
      }
      renderer.render(scene, camera);
    };
    animate();
    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [darkMode]);
  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" style={{
    opacity: 0.7
  }} />;
}