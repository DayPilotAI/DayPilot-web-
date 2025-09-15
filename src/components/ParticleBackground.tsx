import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedParticles = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 20;
      temp[i3 + 1] = (Math.random() - 0.5) * 20;
      temp[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, []);

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 10) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const FloatingOrbs = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime / 4) * 0.2;
      group.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
        child.rotation.x = Math.sin(state.clock.elapsedTime + i) * 0.3;
      });
    }
  });

  return (
    <group ref={group}>
      {/* Blue orb */}
      <mesh position={[-3, 2, -2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      
      {/* Purple orb */}
      <mesh position={[3, -1, -1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.5} />
      </mesh>
      
      {/* Cyan orb */}
      <mesh position={[0, 1, -3]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <AnimatedParticles />
        <FloatingOrbs />
        {/* Ambient lighting for subtle glow */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#7c3aed" />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;