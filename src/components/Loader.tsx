"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  // rotating slogans
  const slogans = [
    "Turning ideas into impact…",
    "Let's hustle together…",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slogans.length),
      1500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      // initial state
      initial={{ scale: 0.9, opacity: 1 }}
      // zoom in fast
      animate={{ scale: 1.2, opacity: 1 }}
      // on exit zoom out & fade
      exit={{ scale: 3, opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
    >
      {/* three brand color squares */}
      <div className="flex space-x-3">
        {["#0099ff", "#00cc99", "#0099ff"].map((color, i) => (
          <motion.div
            key={i}
            className="w-5 h-5 md:w-7 md:h-7 rounded-[4px]"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* rotating slogan */}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="mt-6 text-white font-semibold text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {slogans[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
