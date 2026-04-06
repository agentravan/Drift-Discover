"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, Cloud, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function ProceduralMountains() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(100, 100, 64, 64);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        // Simple procedural height
        const y = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 2 + Math.sin(x * 0.05) * 5;
        pos.setY(i, y > 0 ? y : 0); // clamp to 0 to simulate ocean level below
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
        // Move mountains towards the camera to simulate flying
        meshRef.current.position.z = (state.clock.elapsedTime * 5) % 20;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -10, -30]}>
      <meshStandardMaterial color="#0A0A0A" wireframe={true} emissive="#4f46e5" emissiveIntensity={0.2} transparent opacity={0.6} />
    </mesh>
  );
}

function SimpleAirplane() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, -10]}>
      {/* Fuselage */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 4, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[6, 1, 0.1]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      {/* Tail */}
      <mesh position={[0, 0.8, -1.8]}>
        <boxGeometry args={[0.1, 1.5, 1]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark-900 flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 5, 5], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ProceduralMountains />
          <SimpleAirplane />
          {/* Fog to hide edge of mountains */}
          <fog attach="fog" args={["#0A0A0A", 10, 50]} />
        </Canvas>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-medium tracking-wide mb-6 inline-block uppercase backdrop-blur-md">
            Premium Travel Experiences
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
            Travel Together,<br />
            <span className="text-gradient">Experience More.</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter mb-10 max-w-2xl mx-auto">
            Curated group trips, exclusive corporate tours, and fully customized travel packages from Delhi NCR to the world's most breathtaking destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#destinations" 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_40px_rgba(79,70,229,0.8)] text-lg w-full sm:w-auto"
            >
              Explore Trips
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all border border-white/20 backdrop-blur-md text-lg w-full sm:w-auto"
            >
              Plan My Trip
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
