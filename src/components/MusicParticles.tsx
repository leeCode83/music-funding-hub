import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticleSystemProps {
  audioData: Uint8Array;
}

const ParticleSystem = ({ audioData }: ParticleSystemProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const time = clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Calculate average frequency for reactivity
    const avgFrequency = audioData.length > 0
      ? Array.from(audioData).reduce((a, b) => a + b, 0) / audioData.length / 255
      : 0.3;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      // Create wave motion
      const wave = Math.sin(time + i * 0.01) * 0.02;
      const musicReact = avgFrequency * 2;

      positions[i3 + 1] = y + wave * (1 + musicReact);
      
      // Pulse effect based on audio
      const distance = Math.sqrt(x * x + y * y + z * z);
      const pulse = Math.sin(time * 2 + distance * 0.5) * musicReact * 0.3;
      
      positions[i3] = x + Math.sin(time * 0.5 + i) * 0.01 + pulse;
      positions[i3 + 2] = z + Math.cos(time * 0.5 + i) * 0.01 + pulse;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d9ff"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

interface MusicParticlesProps {
  audioData: Uint8Array;
}

const MusicParticles = ({ audioData }: MusicParticlesProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#0a4d4d"]} />
        <ambientLight intensity={0.5} />
        <ParticleSystem audioData={audioData} />
      </Canvas>
    </div>
  );
};

export default MusicParticles;
