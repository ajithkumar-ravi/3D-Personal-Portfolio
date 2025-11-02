
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

const TechIcon: React.FC<{ position: [number, number, number], text: string }> = ({ position, text }) => {
    return (
        <Html position={position} center>
            <div className="bg-background/80 text-accent text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm select-none">
                {text}
            </div>
        </Html>
    );
};


const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if(globeRef.current) {
        globeRef.current.rotation.y += delta * 0.1;
    }
    if(particlesRef.current) {
        particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  const techIcons = [
    { text: 'React', position: new THREE.Vector3(0, 3, 0) },
    { text: 'Node.js', position: new THREE.Vector3(3, 0, 0) },
    { text: 'JS', position: new THREE.Vector3(-2.1, -2.1, 0) },
    { text: 'Python', position: new THREE.Vector3(0, 0, 3) },
    { text: 'Mongo', position: new THREE.Vector3(2.1, 2.1, 0) },
    { text: 'AWS', position: new THREE.Vector3(-3, 0, 0) },
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <points ref={particlesRef}>
        <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#3b82f6" />
      </points>

      <group ref={globeRef}>
        <Sphere args={[2.5, 32, 32]}>
          <meshStandardMaterial wireframe color="#3b82f6" />
        </Sphere>
        {techIcons.map(icon => (
          <TechIcon key={icon.text} position={[icon.position.x, icon.position.y, icon.position.z]} text={icon.text} />
        ))}
      </group>
    </>
  );
};

export default Globe;
