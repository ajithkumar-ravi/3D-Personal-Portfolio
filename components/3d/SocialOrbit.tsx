
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import { socialLinks } from '../../data';
import * as THREE from 'three';

const OrbitingIcon: React.FC<{ Icon: React.ComponentType<{ className?: string }>, index: number, total: number }> = ({ Icon, index, total }) => {
    const ref = useRef<THREE.Group>(null!);

    useFrame(({ clock }) => {
        if (ref.current) {
            const angle = clock.getElapsedTime() * 0.5 + (index / total) * Math.PI * 2;
            const x = Math.cos(angle) * 2;
            const z = Math.sin(angle) * 2;
            ref.current.position.set(x, 0, z);
        }
    });

    return (
        <group ref={ref}>
            <Html center>
                <div className="p-2 bg-primary rounded-full border border-secondary transition-colors duration-300 hover:border-accent">
                    <Icon className="w-6 h-6 text-text-secondary hover:text-accent" />
                </div>
            </Html>
        </group>
    );
}

const SocialOrbit: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.8} />
            <pointLight position={[0, 5, 5]} />
            <Sphere args={[1, 32, 32]}>
                <meshStandardMaterial color="#3b82f6" roughness={0.5} metalness={0.1} />
            </Sphere>
            {socialLinks.map((link, index) => (
                <OrbitingIcon key={link.name} Icon={link.icon} index={index} total={socialLinks.length} />
            ))}
        </>
    );
};

export default SocialOrbit;
