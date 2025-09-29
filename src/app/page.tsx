"use client";
import React, { useEffect, useRef, useState } from "react";
import Services from "@/components/Services";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { scale: 1 },
      {
        scale: 0.7,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, [loading]);

  return (
     <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div>
          {/* Hero Section Start */}
          <section className="relative w-full min-h-screen flex items-center text-center bg-gradient-to-b from-black/90 to-[#0099ff]/50 p-2 md:p-8 hero-section">
            <main
              ref={heroRef}
              className="flex flex-col gap-6 px-2 md:px-15 w-full"
            >
              <motion.h1
                className="text-[35px] md:text-[80px] font-bold text-white leading-[110%]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="whitespace-nowrap">From Idea to Impact.</span> <br />
                We{" "}
                <motion.span
                  className="
                    bg-gradient-to-r from-[#0099ff] via-[#00cc99] to-[#0099ff]
                    bg-[length:200%_200%]
                    bg-clip-text text-transparent
                  "
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  Hustle
                </motion.span>{" "}
                It All !
              </motion.h1>

              {/* Animated Paragraph */}
              <motion.p
                className="text-[15px] md:text-[20px] text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                We’re a team of designers, developers, and digital creators
                turning your ideas into powerful digital products.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="inline-block rounded-full p-[2px] bg-[length:200%_200%] 
                    bg-gradient-to-r from-[#0099ff] via-[#00cc99] to-[#0099ff]"
                >
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full font-semibold 
                      text-white text-md md:text-lg
                      bg-transparent
                      hover:shadow-xl
                      shadow-lg shadow-[#00cc99]/30 transition-all"
                  >
                    Let&apos;s Hustle Together
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </main>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-b from-transparent to-[#000] pointer-events-none" />
          </section>
          {/* Hero section end */}

          {/* Services Section start */}
          <section ref={servicesRef}>
            <Services />
          </section>
        </div>
      )}
    </>
  );
}
