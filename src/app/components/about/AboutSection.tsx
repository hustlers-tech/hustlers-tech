"use client";

import { motion } from "framer-motion";
import WhyCard from "./WhyCard";

const whyPoints = [
  "Multi-skilled In-house Team",
  "Startup-Friendly Pricing",
  "Fast Turnarounds, High Quality",
  "Custom Solutions, Not Templates",
  "Scalable Tech Stack",
  "Young, Passionate, Collaborative Team",
];

export default function AboutSection() {
  return (
    <>
    {/* Heading */}
        <div className="relative text-center overflow-hidden py-10" id="about">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              About Us
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
              Meet the{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Hustlers
              </span>
            </span>
          </motion.h2>
        </div>
    <section className="relative py-10 overflow-hidden bg-background">
      
      {/* Background Word */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="text-[80px] md:text-[240px] font-extrabold text-white/5 select-none">
          HUSTLERS
        </span>
      </div>

      {/* Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[200px] rounded-full" />

      <div className="relative z-10 container mx-auto px-6 md:px-20">

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6"
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
        <div className="mt-28">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Work With Us
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPoints.map((point, index) => (
              <WhyCard key={index} text={point} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}