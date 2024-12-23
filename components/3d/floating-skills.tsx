'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Python', 'Three.js', 'TailwindCSS', 'GraphQL'
];

export function FloatingSkills() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.001;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(state.clock.elapsedTime + i) * 0.2;

        return (
          <Text
            key={skill}
            position={[x, y, z]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}