'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingLaptop(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF('/models/laptop.glb') as any;

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Laptop.geometry}
        material={materials.Laptop}
        scale={[0.5, 0.5, 0.5]}
      />
    </group>
  );
}