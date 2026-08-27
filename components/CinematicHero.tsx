"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function CoffeeBean({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; scale?: number }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh castShadow scale={[0.72, 1.15, 0.5]}>
        <sphereGeometry args={[1, 40, 40]} />
        <meshStandardMaterial color="#4a2112" roughness={0.58} metalness={0.06} />
      </mesh>
      <mesh position={[0, 0, 0.48]} rotation={[0, 0, 0.08]} scale={[0.08, 0.85, 0.04]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#160b08" roughness={1} />
      </mesh>
    </group>
  );
}

function CoffeeCup() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });
  return (
    <group ref={ref} position={[1.7, -0.2, 0]} rotation={[0.08, -0.35, -0.06]}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.42, 1.1, 2.25, 64, 1, false]} />
        <meshPhysicalMaterial color="#f2e7d2" roughness={0.2} clearcoat={0.35} />
      </mesh>
      <mesh position={[0, 1.13, 0]}>
        <cylinderGeometry args={[1.37, 1.37, 0.08, 64]} />
        <meshStandardMaterial color="#2a130c" roughness={0.35} />
      </mesh>
      <mesh position={[1.42, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.18, 22, 60]} />
        <meshPhysicalMaterial color="#eee1ca" roughness={0.25} clearcoat={0.3} />
      </mesh>
      <mesh position={[0, -1.19, 0]} receiveShadow>
        <cylinderGeometry args={[1.68, 1.68, 0.12, 64]} />
        <meshStandardMaterial color="#d2b17a" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Dunes() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(24, 14, 70, 45);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = Math.sin(x * 0.48) * 0.44 + Math.cos(y * 0.62) * 0.38 + Math.sin((x + y) * 0.25) * 0.5;
      positions.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);
  return (
    <mesh geometry={geometry} position={[0, -4.2, -5]} rotation={[-1.17, 0, 0]} receiveShadow>
      <meshStandardMaterial color="#cfaa70" roughness={0.92} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.25, 0.025);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.14, 0.025);
  });
  return (
    <>
      <color attach="background" args={["#efe4cf"]} />
      <fog attach="fog" args={["#efe4cf", 8, 21]} />
      <ambientLight intensity={1.4} />
      <directionalLight castShadow position={[-4, 7, 5]} intensity={4.5} color="#fff2d4" />
      <pointLight position={[5, 2, 4]} intensity={26} color="#d47b3d" distance={12} />
      <group ref={group}>
        <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.28}><CoffeeCup /></Float>
        <CoffeeBean position={[-2.1, 1.5, 0.2]} rotation={[0.3, 0.4, -0.65]} scale={0.48} />
        <CoffeeBean position={[4.15, 1.7, -1.2]} rotation={[-0.2, 0.6, 0.75]} scale={0.36} />
        <CoffeeBean position={[-3.7, -1.1, -0.9]} rotation={[0.5, -0.5, 0.3]} scale={0.3} />
        <Sparkles count={34} scale={[10, 6, 5]} size={2.2} speed={0.32} color="#8a512d" opacity={0.35} />
      </group>
      <Dunes />
      <Environment preset="studio" environmentIntensity={0.65} />
    </>
  );
}

export default function CinematicHero() {
  return (
    <section className="cinematic-hero">
      <div className="hero-canvas" aria-hidden="true">
        <Canvas shadows dpr={[1, 1.6]} camera={{ position: [0, 0.35, 9], fov: 42 }} gl={{ antialias: true, alpha: false }}>
          <Suspense fallback={null}><Scene /></Suspense>
        </Canvas>
      </div>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content section-shell">
        <p className="hero-kicker">Specialty coffee · Muscat, Oman</p>
        <h1>Born to be<br /><em>remembered.</em></h1>
        <p className="hero-intro">A bold coffee ritual shaped by Omani warmth, desert calm, and a taste for the unexpected.</p>
        <div className="hero-actions">
          <Link className="dark-button" href="/products">Discover the menu</Link>
          <Link className="round-link" href="#story" aria-label="Scroll to our story"><ArrowDown size={20} /></Link>
        </div>
      </div>
      <div className="hero-side-note">Scroll to enter the ritual</div>
    </section>
  );
}
