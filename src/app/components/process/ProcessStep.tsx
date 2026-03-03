"use client";

import { motion } from "framer-motion";
import { ProcessStepType } from "@/app/data/process";

interface Props {
  step: ProcessStepType;
  index: number;
}

export default function ProcessStep({ step, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex gap-8 group"
    >
      {/* Vertical Line */}
      <div className="relative flex flex-col items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-lg">
          {step.number}
        </div>

        <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/40 to-transparent mt-4" />
      </div>

      {/* Content */}
      <div className="pb-16">
        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
          {step.title}
        </h3>

        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}