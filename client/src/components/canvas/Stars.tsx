import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Stars() {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const temp = [];
    // Reduced number of particles for better performance
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      const size = Math.random() * 0.02 + 0.005;
      temp.push({ x, y, z, size });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Simplified animation
    const time = state.clock.getElapsedTime() * 0.1;
    groupRef.current.rotation.y = time;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length}
            array={Float32Array.from(particles.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          sizeAttenuation={true}
          color="#8b5cf6"
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
}