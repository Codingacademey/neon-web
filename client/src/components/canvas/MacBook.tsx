import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function MacBook() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Floating animation
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;

    // Subtle rotation
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    groupRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef} scale={0.4} position={[2, 0, 0]}>
      {/* Base */}
      <mesh>
        <boxGeometry args={[3, 0.1, 2]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Screen */}
      <group position={[0, 0.6, -0.9]} rotation={[0.5, 0, 0]}>
        <mesh>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial
            color="#000000"
            side={THREE.DoubleSide}
            emissive={new THREE.Color("#4a148c")}
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}