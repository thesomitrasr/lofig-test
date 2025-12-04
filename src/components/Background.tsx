import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
    const globeRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={globeRef} position={[0, -2, -5]} scale={[2, 2, 2]}>
            {/* Wireframe Globe */}
            <Sphere args={[1.5, 32, 32]}>
                <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.15} />
            </Sphere>

            {/* Core */}
            <Sphere args={[1.4, 32, 32]}>
                <meshBasicMaterial color="#000000" />
            </Sphere>

            {/* Satellite Orbit Ring */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[2.2, 0.01, 16, 100]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
            </mesh>

            {/* Satellite */}
            <Satellite />
        </group>
    );
}

function Satellite() {
    const satelliteRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (satelliteRef.current) {
            const t = clock.getElapsedTime() * 0.5;
            satelliteRef.current.position.x = Math.cos(t) * 2.2;
            satelliteRef.current.position.z = Math.sin(t) * 2.2;
            satelliteRef.current.position.y = Math.sin(t * 2) * 0.5; // Slight wobble
        }
    });

    return (
        <group rotation={[Math.PI / 3, 0, 0]}>
            <mesh ref={satelliteRef}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#60a5fa" />
            </mesh>
        </group>
    );
}

export default function Background({ currentSlide = 0 }: { currentSlide?: number }) {
    return (
        <div className="absolute inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <Globe />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}
