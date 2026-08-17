"use client";

import { ArrowRight, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Optimized Background effects (lightweight blur) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/10 blur-[60px] md:blur-[100px] transform-gpu" />
        <div className="absolute bottom-10 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-primary-dark/10 blur-[50px] md:blur-[80px] transform-gpu" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:px-5 md:py-2 mb-8 md:mb-10"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide uppercase">
            Your Digital Growth Partners
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] md:leading-[0.95] tracking-tight text-white"
        >
          We <span className="text-primary">Hustle.</span>{" "}
          <span className="relative inline-block">
            You Scale.
            <svg
              className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[10px] md:h-[14px]"
              viewBox="0 0 200 14"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M5 10 Q100 0 195 10"
                fill="transparent"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          With innovative digital strategies, we help startups become
          powerhouses and brands become movements. Let's do battle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading font-semibold text-white transition-all duration-200 hover:bg-[#1e7e9e] hover:shadow-[0_0_25px_rgba(37,150,190,0.4)] active:scale-95 w-full sm:w-auto"
          >
            Start Your Growth
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 font-heading font-semibold text-white transition-all duration-200 hover:border-primary/50 hover:bg-white/5 active:scale-95 w-full sm:w-auto"
          >
            View Our Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}