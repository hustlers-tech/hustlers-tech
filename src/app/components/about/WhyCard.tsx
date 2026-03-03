"use client";

import { motion } from "framer-motion";

export default function WhyCard({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group border border-primary/20 rounded-2xl p-8 bg-black/40 backdrop-blur-xl hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,0,0.3)]"
    >
      <span className="text-primary text-xl font-bold">⚡</span>

      <p className="mt-4 text-gray-300 group-hover:text-white text-xl transition-colors">
        {text}
      </p>
    </motion.div>
  );
}