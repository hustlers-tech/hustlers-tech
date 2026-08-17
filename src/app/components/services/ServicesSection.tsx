"use client";

import { motion } from "framer-motion";
import ServiceBlock from "./ServiceBlock";
import { services } from "@/app/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-background text-foreground py-16 md:py-24">
      {/* Header Container */}
      <div className="container mx-auto px-4 text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-4"
        >
          <span className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase">
            What we do
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto"
        >
          Services That Drive{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Growth
          </span>
        </motion.h2>
      </div>

      {/* Services List */}
      <div className="mx-auto px-4">
        {services.map((service, i) => (
          <ServiceBlock
            key={service.number ?? i}
            service={service}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}