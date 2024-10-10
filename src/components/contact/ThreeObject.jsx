"use client"

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {  Float, Environment } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ThreeObject = () => {
    return (
      <Canvas className='z-0' shadows gl={{antialias: false}} dpr={[1, 1.5]} camera={{position: [0, 0, 25], fov: 30, near: 1, far: 40 }}>
      <Suspense fallback={null}>
          <Geometry />
      <Environment preset='studio' />
      </Suspense>
  </Canvas>
    )
  }
  
  export default ThreeObject

const Geometry = () => {
    
const ring = new THREE.TorusKnotGeometry( 4, 1, 15, 6 );
const material = new THREE.MeshStandardMaterial({ color: 0x4f46e5, roughness: 0.3, emissive: 0x14b8a6, emissiveIntensity: 0.15, metalness: 0.5 });
const soundEffect = new Audio("/sounds/audio1.ogg");

    return  (
        <Ring 
        geometry={ring} 
        material={material} 
        position={[0, 0, 0].map((p) => p*2)} 
        r={0.2} 
        soundEffect={soundEffect}
        />  
)
}

const Ring = ({ geometry, material, position, r, soundEffect }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);


    const handleClick = (e) => {
        soundEffect.play();
        const mesh = e.object;
        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.3,
            ease: 'elastic.out(1, 0.3)',
            yoyo: true,
        });
        mesh.material = material;
    }

    const handlePointerOver = () => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
    }
    const handlePointerOut = () => {
        setHovered(false);
        document.body.style.cursor = 'default';
    }

        useFrame(() => {
            if (meshRef.current && !hovered) {
            meshRef.current.rotation.x -= 0.02; // Rotate upwards
            }else {
                meshRef.current.rotation.y += 0.04; // Rotate sideways
            }

          });
    return (
        <group position={position} ref={meshRef}>
            <Float speed={15 * r} rotationIntensity={5 * r} floatIntensity={5 * r}>
            <mesh 
             geometry={geometry} 
             onClick={handleClick} 
             onPointerOver={handlePointerOver} 
             onPointerOut={handlePointerOut} 
             material={material} 
             />
            </Float>
        </group>
    )
}


