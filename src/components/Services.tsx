import React from "react";
import { motion } from "framer-motion";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <motion.main
      className="h-screen px-5 md:px-10 py-5"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <p className="font-semibold text-[#0099ff] text-[15px] md:text-[20px] uppercase">
          Our services
        </p>
        <h2 className="text-[30px] md:text-[50px] max-w-3xl font-bold text-white leading-[100%]">
          Solutions To Launch Your Vision
        </h2>
      </div>

      <ServicesGrid />
    </motion.main>
  );
};

export default Services;
