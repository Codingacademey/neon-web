import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GradientTexture } from '@react-three/drei'


export function Avatar() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smooth floating animation
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;

    // Gentle rotation
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={groupRef} position={[3, 0, -2]} scale={[1.5, 1.5, 1.5]}>
      {/* Base */}
      <mesh>
        <boxGeometry args={[3, 0.1, 2]} />
        <meshStandardMaterial
          color="#444444"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Screen Frame */}
      <group position={[0, 0.8, -0.9]} rotation={[0.5, 0, 0]}>
        <mesh>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial
            color="#333333"
            metalness={0.95}
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>

        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial
            color="#000000"
            emissive={new THREE.Color("#8b5cf6")}
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
            side={THREE.DoubleSide}
          >
            <GradientTexture
              attach="emissiveMap"
              stops={[0, 1]} // Gradient stops
              colors={['#8b5cf6', '#6366f1']} // Purple to indigo gradient
            />
          </meshStandardMaterial>
        </mesh>

        {/* Screen Glow */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[2.9, 1.9]} />
          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Keyboard Area with Gradient */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[2.8, 0.02, 1.8]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.95}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Rim Light */}
      <pointLight
        position={[2, 1, 1]}
        intensity={0.5}
        color="#8b5cf6"
        distance={5}
      />
      <pointLight
        position={[-2, 1, 1]}
        intensity={0.5}
        color="#6366f1"
        distance={5}
      />
    </group>
  );
}