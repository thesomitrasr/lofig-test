import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

// Particle System Constants
const COUNT = 4000;
const RADIUS = 4;

// Shape Generators
const getSpherePositions = (count: number, radius: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
};

const getRandomPositions = (count: number, radius: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * radius * 4;
        positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 4;
        positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 2; // Flatter depth
    }
    return positions;
};

const getRingPositions = (count: number, radius: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const r = radius + (Math.random() - 0.5) * 0.5;
        positions[i * 3] = Math.cos(angle) * r;
        positions[i * 3 + 1] = Math.sin(angle) * r;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return positions;
};

const getGridPositions = (count: number, radius: number) => {
    const positions = new Float32Array(count * 3);
    const side = Math.ceil(Math.pow(count, 1 / 3));
    const step = (radius * 2) / side;
    let i = 0;
    for (let x = 0; x < side; x++) {
        for (let y = 0; y < side; y++) {
            for (let z = 0; z < side; z++) {
                if (i < count) {
                    positions[i * 3] = (x - side / 2) * step;
                    positions[i * 3 + 1] = (y - side / 2) * step;
                    positions[i * 3 + 2] = (z - side / 2) * step;
                    i++;
                }
            }
        }
    }
    return positions;
};

function InteractiveParticles({ currentSlide }: { currentSlide: number }) {
    const points = useRef<THREE.Points>(null);
    const { mouse, viewport } = useThree();

    // Generate positions for different shapes
    const shapes = useMemo(() => ({
        random: getRandomPositions(COUNT, RADIUS),
        sphere: getSpherePositions(COUNT, RADIUS * 0.8),
        ring: getRingPositions(COUNT, RADIUS),
        grid: getGridPositions(COUNT, RADIUS * 0.8),
    }), []);

    // Current target positions
    const targetPositions = useRef(shapes.random);

    // Determine target shape based on slide
    useEffect(() => {
        const shapeKeys = Object.keys(shapes) as (keyof typeof shapes)[];
        // Map slides to shapes: 0=Random, 1=Sphere, 2=Ring, 3=Grid, then cycle
        const shapeType = shapeKeys[currentSlide % shapeKeys.length];
        targetPositions.current = shapes[shapeType];
    }, [currentSlide, shapes]);

    // Initialize current positions
    const currentPositions = useMemo(() => new Float32Array(shapes.random), [shapes]);

    useFrame((state) => {
        if (!points.current) return;

        const positions = points.current.geometry.attributes.position.array as Float32Array;
        const target = targetPositions.current;

        // Mouse interaction
        const mouseX = (state.mouse.x * viewport.width) / 2;
        const mouseY = (state.mouse.y * viewport.height) / 2;

        for (let i = 0; i < COUNT; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            // 1. Morphing Logic: Move towards target
            // Lerp factor (speed of morphing)
            const lerpSpeed = 0.03;
            positions[ix] += (target[ix] - positions[ix]) * lerpSpeed;
            positions[iy] += (target[iy] - positions[iy]) * lerpSpeed;
            positions[iz] += (target[iz] - positions[iz]) * lerpSpeed;

            // 2. Mouse Interaction: Repulsion
            const dx = positions[ix] - mouseX;
            const dy = positions[iy] - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repulsionRadius = 2; // Radius of effect
            const force = Math.max(0, repulsionRadius - dist); // Stronger when closer

            if (force > 0) {
                const angle = Math.atan2(dy, dx);
                const push = force * 0.1; // Push strength
                positions[ix] += Math.cos(angle) * push;
                positions[iy] += Math.sin(angle) * push;
            }

            // 3. Gentle Float/Noise
            positions[ix] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
            positions[iy] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.002;
        }

        points.current.geometry.attributes.position.needsUpdate = true;

        // Rotate entire group slowly
        points.current.rotation.y += 0.001;
        points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={COUNT}
                    array={currentPositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#60a5fa" // Blue-400
                sizeAttenuation
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

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
                <InteractiveParticles currentSlide={currentSlide} />
                <Globe />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}
