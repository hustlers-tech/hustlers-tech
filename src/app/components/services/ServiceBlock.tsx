"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Service } from "@/app/data/services";

interface Props {
  service: Service;
  reverse?: boolean;
}

export default function ServiceBlock({ service, reverse }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:h-[80vh] md:flex md:items-center overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div
        className={`container mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-20 items-center relative z-10 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="absolute -top-24 -left-6 text-[180px] font-bold text-white/5 select-none">
            {service.number}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {service.title}
          </h2>

          <p className="mt-6 text-muted-foreground max-w-lg text-lg">
            {service.description}
          </p>

          <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:scale-105 transition">
            Explore Service
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="hidden md:block"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={service.image}
            alt={service.title}
            className="rounded-2xl shadow-2xl w-300 h-100"
            whileHover={{ rotate: 1.5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
