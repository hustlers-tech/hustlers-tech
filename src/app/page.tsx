'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
         {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}   // Start from small and invisible
          animate={{ opacity: 1, scale: 1 }}      // Final state: visible and normal size
          transition={{ duration: 1, ease: "easeOut" }}  // Duration of the logo animation
        >
          <Image src="/HustlersTech_logo.png" alt="HustlersTech Logo" width={300} height={200} />
        </motion.div>
        {/* Animated Heading */}
        <motion.h1
          className="text-[80px] text-center w-full font-bold mt-6 px-5"
          initial={{ opacity: 0, y: -50 }}  // Start with hidden and slightly above
          animate={{ opacity: 1, y: 0 }}    // Final state: visible and in place
          transition={{ duration: 1, delay: 0.5 }} // Slight delay to allow logo animation
        >
          Welcome to <span className="text-red-400">HustlersTech.com</span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-center w-full text-[40px] text-green-300"
          initial={{ opacity: 0, y: 50 }}  // Start with hidden and below
          animate={{ opacity: 1, y: 0 }}    // Final state: visible and in place
          transition={{ duration: 1, delay: 1 }} // Slight delay after heading animation
        >
          Launching Soon
        </motion.p>
       </main>
    </div>
  );
}
