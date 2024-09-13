'use client';
import { extend } from '@react-three/fiber';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

// Extend the THREE namespace to include BoxBufferGeometry
// extend({ BoxBufferGeometry: THREE.BoxBufferGeometry });

const TreeAnimation = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <Canvas shadows className='bg-[#000]' camera={{ position: [-6, 7, 7] }}>
        <ambientLight color={'white'} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
};

export default TreeAnimation;

function Floor(props: any) {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

function LightBulb(props: any) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive='yellow' />
    </mesh>
  );
}

function Box(props: any) {
  return (
    <mesh {...props} castShadow>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
}