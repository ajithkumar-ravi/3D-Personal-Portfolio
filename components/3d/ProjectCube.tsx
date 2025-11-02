
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCube: React.FC = () => {
    const cubeRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += delta * 0.1;
            cubeRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Box
                ref={cubeRef}
                args={[2.5, 2.5, 2.5]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <meshStandardMaterial color={hovered ? '#2563eb' : '#3b82f6'} wireframe />
            </Box>
        </>
    );
};

export default ProjectCube;
