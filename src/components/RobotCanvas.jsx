import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Custom hook to get global mouse position in normalized device coordinates
function useGlobalMouse() {
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
}

function RobotModel() {
  const eyesGroup = useRef();
  const mouse = useGlobalMouse();

  useFrame((state, delta) => {
    if (!eyesGroup.current) return;

    // Smoothly track the mouse only with the eyes group
    // We map the mouse NDC (-1 to 1) to a small translation distance
    const targetX = mouse.current.x * 0.3;
    const targetY = mouse.current.y * 0.3;
    
    eyesGroup.current.position.x = THREE.MathUtils.lerp(eyesGroup.current.position.x, targetX, delta * 5);
    eyesGroup.current.position.y = THREE.MathUtils.lerp(eyesGroup.current.position.y, targetY + 0.5, delta * 5);
  });

  return (
    <group position={[0, 0, 0]} scale={1.5}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Main Head */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 1.8, 2]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.2} metalness={0.6} />
        </mesh>
        
        {/* Antennas */}
        <mesh position={[-1, 1.4, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        <mesh position={[-1, 1.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#e94560" />
        </mesh>

        <mesh position={[1, 1.4, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        <mesh position={[1, 1.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#e94560" />
        </mesh>

        {/* Visor Area (Screen where eyes exist) */}
        <mesh position={[0, 0.5, 1.01]}>
          <boxGeometry args={[1.6, 0.8, 0.1]} />
          <meshStandardMaterial color="#0f0f1a" roughness={0.6} />
        </mesh>

        {/* Eyes Group that moves */}
        <group ref={eyesGroup} position={[0, 0.5, 1.07]}>
          {/* Left Eye */}
          <mesh position={[-0.4, 0, 0]}>
            <capsuleGeometry args={[0.15, 0.2, 16, 16]} />
            <meshBasicMaterial color="#00ffff" />
          </mesh>
          {/* Right Eye */}
          <mesh position={[0.4, 0, 0]}>
            <capsuleGeometry args={[0.15, 0.2, 16, 16]} />
            <meshBasicMaterial color="#00ffff" />
          </mesh>
        </group>

        {/* Fixed Body (Shoulders) */}
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[2.8, 1, 1.8]} />
          <meshStandardMaterial color="#16213e" roughness={0.3} metalness={0.5} />
        </mesh>
        
        {/* Neck */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
          <meshStandardMaterial color="#111" roughness={0.8} />
        </mesh>

      </Float>
    </group>
  );
}

export default function RobotCanvas() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      pointerEvents: 'none', 
      zIndex: -1 // Push it to the background so it is behind other content
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />
        <Environment preset="city" />
        
        {/* Adjust position to be nicely framed in the background */}
        <group position={[0, -1, -5]}>
          <RobotModel />
          <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#000000" />
        </group>
      </Canvas>
    </div>
  );
}
