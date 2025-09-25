import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesGrid from "./ServicesGrid";
import { FaArrowRight } from "react-icons/fa";

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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="w-full mt-0 py-0 md:py-5 flex flex-col items-center text-center"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-white text-xl md:text-4xl font-bold"
        >
          Not sure where to start ?
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mt-2 leading-[120%]"
        >
          Let&apos;s talk about your goals and build a custom solution just for
          you.
        </motion.p>

        <motion.a
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          href="/get-started"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 flex px-5 py-2 rounded-full font-semibold 
                  text-white 
                  bg-gradient-to-r from-[#0099ff] to-[#00cc99] 
                  hover:from-[#00cc99] hover:to-[#0099ff] 
                  shadow-lg shadow-[#00cc99]/30 
                  transition-all items-center gap-2"
        >
          Let&apos;s Hustle Together{" "}
          <span>
            <FaArrowRight />
          </span>
        </motion.a>
      </motion.section>
    </motion.main>
  );
};

export default Services;
