"use client";

import ProcessStep from "./ProcessStep";
import { processSteps } from "@/app/data/process";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <>
        {/* Heading */}
        <div className="relative text-center overflow-hidden py-10" id="process">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Our Process
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-4xl md:text-6xl font-bold tracking-tight px-2"
          >
            <span>
              Hustle Growth{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Engine
              </span>
            </span>
          </motion.h2>
        </div>
    <section className="relative py-10 overflow-hidden bg-background">
      {/* Background Word */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="text-[90px] md:text-[220px] font-bold text-white/5 select-none">
          PROCESS
        </span>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20">
        

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
    
    </>
  );
}
