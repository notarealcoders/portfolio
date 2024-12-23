'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingLaptop } from './floating-laptop';
import { FloatingSkills } from './floating-skills';
import { Suspense } from 'react';

export function Scene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingLaptop position={[0, 0, 0]} />
          <FloatingSkills />
        </Suspense>
      </Canvas>
    </div>
  );
}