import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.main
      className="h-screen px-10 py-5"
      initial={{ opacity: 0, scale: 0.6, y: 50 }}
whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <p className="font-semibold text-[#0099ff] text-[10px] md:text-[20px] px-1">
          Our services
        </p>
        <h2 className="text-[30px] md:text-[70px] max-w-3xl font-bold text-white leading-[100%]">
          Everything You Need To Go Online
        </h2>
      </div>
    </motion.main>
  );
};

export default Services;
