import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { skillsData } from '../../data';

const Word: React.FC<{ children: string; position: [number, number, number] }> = ({ children, ...props }) => {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    // FIX: Provide `null` as an initial value to `useRef` to resolve the "Expected 1 arguments, but got 0" error.
    const ref = useRef<any>(null);
    const [hovered, setHovered] = React.useState(false);
    // FIX: Rewrote the arrow function with a comma operator to a block statement to resolve the error.
    const over = (e: any) => {
        e.stopPropagation();
        setHovered(true);
    };
    const out = () => setHovered(false);
    
    useFrame(({ camera }) => {
        if (ref.current) {
            ref.current.quaternion.copy(camera.quaternion);
            ref.current.material.color.lerp(color.set(hovered ? '#3b82f6' : 'white'), 0.1);
        }
    });

    return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />;
}


const SkillCloud: React.FC = () => {
    const count = skillsData.flatMap(c => c.skills).length;
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        const allSkills = skillsData.flatMap(c => c.skills);
        for (let i = 0; i < allSkills.length; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const word = allSkills[i];
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(10, phi, theta)), word]);
        }
        return temp as [THREE.Vector3, string][];
    }, [count]);
    
    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {words.map(([pos, word], index) => <Word key={index} position={[pos.x, pos.y, pos.z]} children={word} />)}
        </group>
    );
};

export default SkillCloud;