"use client"

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
export default function ThreeAnimate() { 
    return (
        <Canvas className='z-0' shadows gl={{antialias: false}} dpr={[1, 1.5]} camera={{position: [0, 0, 25], fov: 30, near: 1, far: 40 }}>
            <Suspense fallback={null}>
                <Geometries />
            <Environment preset='warehouse' />
            </Suspense>
        </Canvas>
    )
}

const Geometries = () => {

    const [hovered, setHovered] = useState(false);

    const updateHover = () => {
        setHovered(!hovered);
    }


    const geometries = [
        {
            position: [-4.5, 0, 0],
            r: 0.4,
            geometry: new THREE.DodecahedronGeometry( 3.9, 0),
        },
        {
            position: [0, -0.7, 0],
            r: 0.5,
            geometry: new THREE.TorusKnotGeometry( 2.5, 1.3, 90, 19 ),
        },
        {
            position: [4.5, 0, 0],
            r: 0.4,
            geometry: new THREE.IcosahedronGeometry(4),
        },
    ]

    const materials = [
        new THREE.MeshStandardMaterial({ color: 0x7c3aed }),
        new THREE.MeshStandardMaterial({ color: 0x61FFFF, roughness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0x61FFFF, metalness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x4f46e5, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x4f46e5, metalness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0x14b8a6, roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ color: 0x14b8a6, metalness: 0.3 }),
    ]

    const soundEffects = [
        new Audio("/sounds/audio1.ogg"),
        new Audio("/sounds/audio2.ogg"),
        new Audio("/sounds/audio3.ogg"),
        new Audio("/sounds/audio4.ogg"),
        new Audio("/sounds/audio5.ogg"),
        new Audio("/sounds/audio6.ogg"),
        new Audio("/sounds/audio7.ogg"),        
      ];
    return geometries.map(({position, r, geometry}) => (
        <Geometry 
         key={JSON.stringify(position)} 
         position={position.map((p) => p*2)} 
         r={r} 
         geometry={geometry} 
         materials={materials} 
         hovered={hovered}      
         updateHover={updateHover}
         audioEffects={soundEffects} 
        />
)
 )}


const Geometry = ({ geometry, materials, position, r, hovered, updateHover, audioEffects }) => {
    const meshRef = useRef();
    const [visible, setVisible] = useState(false);

    const startingMaterial = getRandomMaterial();

    function getRandomMaterial() {
        return gsap.utils.random(materials);
    }

    const handleClick = (e) => {
        const mesh = e.object;

        gsap.utils.random(audioEffects).play();

        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.3,
            ease: 'elastic.out(1, 0.3)',
            yoyo: true,
        });
        mesh.material = getRandomMaterial();
    }

    const handlePointerOver = () => {
        updateHover();
        document.body.style.cursor = 'pointer';
    }
    const handlePointerOut = () => {
        updateHover();
        document.body.style.cursor = 'default';
    }

    useEffect(() => {
      let ctx =  gsap.context(() => {
            setVisible(true);
            gsap.from(meshRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 2,
                ease: 'elastic.out(1,0.3)',
            });
        });
        return () => ctx.revert();
        }, []);

        useFrame(() => {
            if (meshRef.current && !hovered) {
              meshRef.current.rotation.x -= 0.03; // Rotate upwards
            }else {
                meshRef.current.rotation.y += 0.02; // Rotate sideways
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
             material={startingMaterial} 
             visible={visible} 
             castShadow={true}
             />
            </Float>
        </group>
    )
}

