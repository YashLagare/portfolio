'use client'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const Earth = () => {
  // Detect the base path dynamically at runtime
  const getModelPath = () => {
    if (typeof window === 'undefined') {
      return '/planet/scene.gltf';
    }
    
    const pathname = window.location.pathname;
    // Check if we're on GitHub Pages (contains yash-lagare-portfolio in path)
    if (pathname.includes('yash-lagare-portfolio')) {
      return '/yash-lagare-portfolio/planet/scene.gltf';
    }
    // Local development or main domain
    return '/planet/scene.gltf';
  };

  const modelPath = getModelPath();
  const earth = useGLTF(modelPath);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas className=" cursor-move"
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
