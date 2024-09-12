import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // For camera control
import * as THREE from 'three'; // For loading textures
import mars from '../assets/threemars.png'; // Your Mars image

function TexturedSphere() {
  const texture = useLoader(THREE.TextureLoader, mars);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[5, 5, 5]}> {/* Adjust scale to make the sphere bigger */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <TexturedSphere />
      <OrbitControls />
    </Canvas>
  );
}
