
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const Book: React.FC = () => {
    const bookRef = useRef<THREE.Group>(null!);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if(bookRef.current) {
            bookRef.current.rotation.y += delta * 0.2;
            if(hovered) {
                bookRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
            } else {
                bookRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
            }
        }
    });

    return (
        <group 
            ref={bookRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            {/* This is a placeholder for a book.glb model */}
            <Box args={[2, 3, 0.4]} position={[-0.05, 0, 0]}>
                <meshStandardMaterial color="#3b82f6" />
            </Box>
             <Box args={[0.1, 3, 0.4]} position={[-1, 0, 0]}>
                <meshStandardMaterial color="#1a1a1a" />
            </Box>
        </group>
    );
};

export default Book;
