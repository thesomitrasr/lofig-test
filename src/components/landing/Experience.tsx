import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Stars } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, scrollY }: { position: [number, number, number]; color: string; scrollY: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate based on time
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Add scroll influence
      const scroll = scrollY.current;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.2 + (scroll * 0.002);
      meshRef.current.rotation.z = scroll * 0.001;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingShape position={[-2, 0, 0]} color="#a855f7" scrollY={scrollY} />
      <FloatingShape position={[2, 1, -2]} color="#3b82f6" scrollY={scrollY} />
      <FloatingShape position={[0, -2, -1]} color="#ec4899" scrollY={scrollY} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="city" />
    </>
  );
}

export default function Experience() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
