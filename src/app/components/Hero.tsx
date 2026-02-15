"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import { Torus } from "@react-three/drei";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { motion } from "framer-motion";
import * as THREE from "three";

function AnimatedTorus({ progress }: { progress: number }) {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame(({ mouse }) => {
  if (!ref.current) return;

  ref.current.rotation.x +=
    (mouse.y * 0.6 - ref.current.rotation.x) * 0.08;
  ref.current.rotation.y +=
    (mouse.x * 0.6 - ref.current.rotation.y) * 0.08;

  const scale = 3 + progress * 12;
  ref.current.scale.setScalar(scale);

  if (ref.current.material instanceof THREE.MeshStandardMaterial) {
    ref.current.material.opacity = 1 - progress;
  }
});


  return (
    <Torus args={[1.5, 0.4, 32, 200]} ref={ref}>
      <meshStandardMaterial
        color="#2596be"
        roughness={0.2}
        metalness={0.7}
        transparent
        opacity={1}
      />
    </Torus>
  );
}

export default function Hero() {
  const { width } = useWindowSize();
  const [progress, setProgress] = useState(0);
  const headline = "We Hustle. You Scale.".split(" ");

  // Scroll-based progress (Reversible)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      const value = Math.min(scrollY / heroHeight, 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO WRAPPER (200vh for scroll animation) */}
      <section className="relative w-full h-[200vh] bg-[#0b0f14]">

        {/* Sticky Container */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {width >= 768 && (
            <Canvas
              className="absolute inset-0 z-0 pointer-events-auto"
  camera={{ position: [0, 0, 15], fov: 60 }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} />
              <Suspense fallback={null}>
                <AnimatedTorus progress={progress} />
              </Suspense>
            </Canvas>
          )}

          {/* Hero Content */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10 transition-all duration-300 pointer-events-none"
            style={{
              opacity: 1 - progress,
              transform: `scale(${1 - progress * 0.2})`,
            }}
          >
            <motion.h1 className="text-5xl md:text-6xl font-bold text-white flex flex-wrap gap-3 justify-center">
  {headline.map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.3,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {word}
    </motion.span>
  ))}
</motion.h1>


            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Premium IT, Marketing & Branding Solutions engineered for modern growth-driven businesses.
            </p>
          </div>

          {/* Inner Content */}
          <div
            className="absolute inset-0 flex justify-center items-center z-20 transition-all duration-500"
            style={{
              opacity: progress,
              transform: `scale(${0.7 + progress * 0.4})`,
            }}
          >
            <div className="text-white text-5xl font-bold pt-20 text-center">
              Growth isn't accidental. <br /> It's architected.
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
