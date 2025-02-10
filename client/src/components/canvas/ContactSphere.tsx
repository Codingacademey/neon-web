import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ContactSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereCount = 15; // Number of layered spheres
  const sphereGap = 0.15; // Gap between each sphere layer

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      
      {/* Generate layered spheres */}
      {Array.from({ length: sphereCount }).map((_, i) => {
        const scale = 1 + i * sphereGap;
        const opacity = 1 - (i / sphereCount) * 0.5;
        
        return (
          <mesh key={i} rotation={[0, 0, (Math.PI / sphereCount) * i]}>
            <torusGeometry args={[2 * scale, 0.02, 16, 100]} />
            <meshStandardMaterial
              color={new THREE.Color("#ffffff")}
              transparent
              opacity={opacity}
              side={THREE.DoubleSide}
              metalness={0.9}
              roughness={0.1}
              emissive={new THREE.Color("#ffffff")}
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}
