"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQItem[];
  title?: string;
  highlight?: string;
  showViewAll?: boolean;
}

export default function FaqSection({
  faqs,
  title = "Questions before",
  highlight = "we build",
  showViewAll = true,
}: Props) {
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  return (
    <>
      {/* Heading */}
      <div className="relative text-center overflow-hidden mt-10" id="faq">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            FAQ's
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-6xl font-bold tracking-tight px-2 pb-10"
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </motion.h2>
      </div>

      <section className="relative py-10 px-6 overflow-hidden">
        {/* glow bg */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-primary/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="space-y-6">
            {faqs.map((faq, i) => {
              const open = active === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/30 via-blue-500/20 to-primary/30 blur-xl" />
                  </div>

                  <button
                    onClick={() => setActive(open ? null : i)}
                    className="relative w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {faq.q}
                    </h3>

                    <motion.div
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary"
                    >
                      <Plus size={24} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-left">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Optional button */}
        {showViewAll && (
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/faq")}
              className="group relative flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer mt-10"
            >
              View All
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </section>
    </>
  );
}