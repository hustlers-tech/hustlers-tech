import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesGrid from "./ServicesGrid";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the Services section upward and fade in
      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // when bottom of viewport hits top of section
            end: "top 50%", // until mid viewport
            scrub: true, // smooth scrubbing
          },
        }
      );

      // Fade out the hero section above (optional)
      const hero = document.querySelector(".hero-section"); // add class to your hero wrapper
      if (hero) {
        gsap.to(hero, {
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.main
      ref={sectionRef}
      className="h-fit px-5 md:px-10 py-5 bg-[#000]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <p className="font-semibold text-[#0099ff] text-[15px] md:text-[20px] uppercase">
          Our services
        </p>
        <h2 className="text-[30px] md:text-[50px] max-w-3xl font-bold text-white leading-[100%]">
          Solutions To Launch Your Vision
        </h2>
      </motion.div>

      <ServicesGrid />
    </motion.main>
  );
};

export default Services;
