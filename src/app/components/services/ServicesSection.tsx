"use client";

import ServiceBlock from "./ServiceBlock";
import { services } from "@/app/data/services";
import {motion} from "framer-motion"

export default function ServicesSection() {
  return (
    <>
     <div className="relative text-center py-10 overflow-hidden" id="services">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5"
        >
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            What we do
          </span>
        </div>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-4xl md:text-6xl font-bold tracking-tight px-2"
      >
        <span>
          Services That Drive <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Growth</span> 
        </span>
      </motion.h2>

    </div>
    <div className="bg-background text-foreground">
       
      {services.map((service, index) => (
        <ServiceBlock
          key={service.number}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
    </>
  );
}