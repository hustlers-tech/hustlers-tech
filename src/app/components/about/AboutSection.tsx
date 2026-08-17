"use client";

import { motion, Variants } from "framer-motion";
import WhyCard from "./WhyCard";

const WHY_POINTS = [
  "Multi-skilled In-house Team",
  "Startup-Friendly Pricing",
  "Fast Turnarounds, High Quality",
  "Custom Solutions, Not Templates",
  "Scalable Tech Stack",
  "Young, Passionate, Collaborative Team",
];

const fadeUpVariants:Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function AboutSection() {
  return (
    <>
      {/* Heading */}
      <div className="relative text-center overflow-hidden pt-16 pb-8" id="about">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:px-5 md:py-2 mb-4">
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide uppercase">
            About Us
          </span>
        </div>

        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4 text-white"
        >
          Meet the{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Hustlers
          </span>
        </motion.h2>
      </div>

      <section className="relative py-12 md:py-16 overflow-hidden bg-background">
        {/* Background Word */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
          <span className="text-[70px] sm:text-[120px] md:text-[200px] font-extrabold text-white/[0.03] select-none tracking-widest">
            HUSTLERS
          </span>
        </div>

        {/* Optimized Glow Accent (GPU Accelerated) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/10 blur-[70px] md:blur-[100px] rounded-full pointer-events-none transform-gpu" />

        <div className="relative z-10 container mx-auto px-6 md:px-16">
          {/* About Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center text-gray-400 text-base md:text-lg leading-relaxed space-y-5"
          >
            <p>
              Hustlers Tech stands apart as more than just another digital team - we combine creativity with strategy to help brands stand out and expand faster.
            </p>
            <p>
              From developing high-performing websites and branding initiatives to data-driven marketing initiatives, our focus lies on what moves the needle.
            </p>
            <p>
              No matter the stage you're starting from or where your ambitions take you, we provide the clarity, speed, and execution needed to turn ambitions into real growth.
            </p>
          </motion.div>

          {/* Why Work With Us */}
          <div className="mt-20 md:mt-24">
            <motion.h3
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-white"
            >
              Why Work With Us
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {WHY_POINTS.map((point, index) => (
                <WhyCard key={point} text={point} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}