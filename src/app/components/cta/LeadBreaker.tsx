"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LuxuryLeadBreaker() {
  const router = useRouter();

  return (
    <section className="relative py-40 bg-neutral-700 text-neutral-900 overflow-hidden" id="contact">

      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-300 to-white" />

      {/* Soft Light Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full" />
      </div>

      {/* Subtle Noise (optional for texture) */}
      <div className="noise-overlay opacity-[0.03]" />

      <div className="relative z-10 container mx-auto px-6 md:px-20 text-center">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-sm text-neutral-500"
        >
          Let’s Build Something Exceptional
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl md:text-6xl font-semibold leading-tight"
        >
          Ready to Elevate Your Brand?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Partner with a team that blends strategy, design, and technology
          into refined digital experiences built to scale.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={() => router.push("/contact")}
          className="mt-12 px-10 py-4 border border-neutral-300 rounded-full text-lg tracking-wide hover:border-primary hover:text-primary transition-all duration-300 bg-white shadow-sm cursor-pointer"
        >
          Start a Conversation →
        </motion.button>

      </div>
    </section>
  );
}