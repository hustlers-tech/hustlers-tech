"use client";
import { ArrowRight, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-dark/8 blur-[120px]" />
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
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-10"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            Your Digital Growth Partners
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          We <span className="text-primary">Hustle.</span>{" "}
          <span className="relative inline-block">
            You Scale.
            <motion.svg
              className="absolute -bottom-4 left-0 w-full h-[14px]"
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
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
                style={{ pathLength: 0 }}
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Hustlers Tech crafts bold digital strategies that turn startups into
          empires and brands into movements. Ready to dominate?
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105">
            Start Your Growth
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:scale-105">
            View Our Services
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
