import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Environment, PerspectiveCamera } from "@react-three/drei";
import { Stars } from "./Stars";
import { Avatar } from "./Avatar";

export function Experience() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          background: 'transparent'
        }}
        dpr={[1, 1.5]} // Reduce max pixel ratio
        performance={{ min: 0.1 }} // Allow more aggressive frame drops
        frameloop="demand" // Only render when needed
      >
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
        <Suspense fallback={<Loader />}>
          <Environment preset="night" />
          <Stars />
          <Avatar />
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#ff00ff" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ffff" />
        </Suspense>
      </Canvas>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Loader />
        </div>
      </div>
    </>
  );
}