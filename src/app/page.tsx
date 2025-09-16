'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className=" relative
        w-full min-h-screen 
        flex items-center
        bg-gradient-to-b 
        from-black/90 
        to-[#0099ff]/50
        p-2 md:p-8
      "
    >
      <main className="flex flex-col gap-6 px-2 md:px-15 w-full">
        <motion.h1
          className="text-[50px] md:text-[100px] font-bold text-white leading-[110%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          From Idea to Impact.{" "}
          <br />
          We Hustle It All !
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-[15px] md:text-[20px] text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
         We’re a team of designers, developers, and digital creators turning your ideas into powerful digital products.
        </motion.p>

         {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="/get-started"
            className="
              inline-block px-4 md:px-8 py-3 rounded-full font-semibold 
              text-white text-md md:text-lg
              bg-gradient-to-r from-[#0099ff] to-[#00cc99] 
              hover:from-[#00cc99] hover:to-[#0099ff] 
              shadow-lg shadow-[#00cc99]/30 
              transition-all
            "
          >
            Let’s Hustle Together
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
