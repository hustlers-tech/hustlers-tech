"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Layers, ShieldCheck, Zap } from "lucide-react";

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

  const HIGHLIGHTS = [
    {
      icon: Cpu,
      title: "One Team, Multiple Capabilities",
      desc: "In-house mastery across engineering, SEO search dominance, PPC, and brand strategy.",
    },
    {
      icon: Layers,
      title: "Solutions Built Around You",
      desc: "No forced templates. Custom architecture engineered to match your exact growth goals.",
    },
    {
      icon: Zap,
      title: "Fast Without Compromising Quality",
      desc: "Efficient turnaround times with high engineering standards at the core of every sprint.",
    },
    {
      icon: ShieldCheck,
      title: "True Collaborative Partnership",
      desc: "We stay in the game, not on the sidelines—working as a natural extension of your team.",
    },
  ];
  return (
    <>
      {/* Heading */}
      <div
        className="relative text-center overflow-hidden pt-16 pb-8"
        id="about"
      >
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
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none overflow-hidden">
          <span className="text-[70px] sm:text-[120px] md:text-[200px] font-extrabold text-white/[0.03] select-none tracking-widest">
            HUSTLERS
          </span>
        </div>

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
              At Hustlers Tech, we create right strategy, think creatively backed by latest technology with disciplined execution to help businesses build more powerful digital brands and get closer to their growth goals.
            </p>
            <p>
              We’re a team of strategists, designers, developers and digital marketers that believe good digital work should do more than just make you look good. It must have a measurable impact on businesses.
            </p>
            <p>
              Whether you’re building a new brand or looking to take an existing one further, we bring the clarity, creativity and execution to move ahead.
            </p>
          </motion.div>

          {/* Why Work With Us */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {" "}
            {HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#070b12]/90 p-6 hover:border-[#2596be]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {" "}
                <div>
                  {" "}
                  <div className="w-10 h-10 rounded-xl bg-[#2596be]/10 border border-[#2596be]/20 flex items-center justify-center mb-5 text-[#2596be]">
                    {" "}
                    <item.icon className="w-5 h-5" />{" "}
                  </div>{" "}
                  <h3 className="text-base font-bold text-white mb-2">
                    {" "}
                    {item.title}{" "}
                  </h3>{" "}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {" "}
                    {item.desc}{" "}
                  </p>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </div>
        </div>
      </section>
    </>
  );
}