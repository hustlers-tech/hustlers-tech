"use client";

import { motion, Variants } from "framer-motion";
import ProcessStep from "./ProcessStep";
import { processSteps } from "@/app/data/process";

const fadeUpVariants:Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-16 md:py-24 overflow-hidden bg-background">
      {/* Optimized Background Word */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
        <span className="text-[70px] sm:text-[120px] md:text-[200px] font-bold text-white/[0.03] select-none tracking-widest">
          PROCESS
        </span>
      </div>

      {/* GPU Accelerated Glow Accent */}
      <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
        <div className="w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/10 blur-[70px] md:blur-[100px] rounded-full transform-gpu" />
      </div>

      {/* Heading Container */}
      <div className="relative z-10 text-center px-4 mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:px-5 md:py-2 mb-4">
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide uppercase">
            Our Process
          </span>
        </div>

        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white px-2"
        >
          Hustle Growth{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Engine
          </span>
        </motion.h2>
      </div>

      {/* Steps List */}
      <div className="relative z-10 container mx-auto px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number ?? index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}