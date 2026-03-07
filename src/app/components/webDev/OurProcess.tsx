"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type OurProcessProps = {
  steps: ProcessStep[];
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
};

const OurProcess = ({
  steps,
  badge = "Workflow",
  title = "Our",
  highlight = "Process",
  description,
}: OurProcessProps) => {
  return (
    <section className="py-10 lg:py-5 relative z-10 max-w-7xl mx-auto">

      {/* background glow */}
      <div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full blur-[200px]"
        style={{ background: "hsl(195 67% 20%)" }}
      />

      {/* heading */}
      <div className="relative text-center overflow-hidden">

        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            {badge}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-6xl font-bold tracking-tight px-2 pb-5"
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-md tracking-tight px-4 pb-10"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* cards */}
      <div className="container mx-auto py-5 px-6 relative z-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">

          {steps.map((item, i) => (

            <div key={item.step} className="relative flex items-center">

              <div className="process-step relative w-full rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md p-8 text-center group hover:border-primary/30 transition-all duration-500">

                <span className="font-heading text-6xl font-bold bg-gradient-to-b from-primary/20 to-transparent bg-clip-text text-transparent">
                  {item.step}
                </span>

                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

              {/* arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-8 items-center justify-center">

                  <div className="absolute w-12 h-12 bg-primary/20 blur-xl rounded-full" />

                  <ArrowRight
                    size={32}
                    className="relative text-primary/80"
                  />

                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurProcess;