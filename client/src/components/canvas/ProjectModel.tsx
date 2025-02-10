import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

type ProjectModelProps = {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export function ProjectModel({ 
  modelPath, 
  scale = 1, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}: ProjectModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Add subtle floating animation
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
      />
      <Environment preset="city" />
      
      <group 
        ref={groupRef}
        position={position}
        rotation={rotation}
        scale={[scale, scale, scale]}
      >
        <primitive object={scene} />
      </group>

      {/* Add dramatic lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ffff" />
    </>
  );
}
