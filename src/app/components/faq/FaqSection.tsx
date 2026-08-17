"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

export interface FAQItem {
  id?: string | number;
  q: string;
  a: string;
}

interface Props {
  faqs: FAQItem[];
  title?: string;
  highlight?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function FaqSection({
  faqs,
  title = "Questions before",
  highlight = "we build",
  showViewAll = true,
  viewAllHref = "/faq",
}: Props) {
  const [active, setActive] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <section aria-labelledby="faq-heading" className="relative py-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex justify-center pointer-events-none -z-10"
      >
        <div className="w-[700px] h-[700px] bg-primary/10 blur-[150px] rounded-full will-change-transform" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-12" id="faqs">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            FAQ
          </span>
        </div>

        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-6xl font-bold tracking-tight px-2"
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </motion.h2>
      </div>

      {/* Accordion Container */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = active === i;
          const contentId = `faq-answer-${faq.id ?? i}`;
          const triggerId = `faq-question-${faq.id ?? i}`;

          return (
            <motion.div
              key={faq.id ?? faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.08, 0.4), duration: 0.4 }}
              viewport={{ once: true, margin: "-30px" }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:border-white/20 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10" 
              />

              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleAccordion(i)}
                className="relative w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
              >
                <span className="text-lg md:text-xl font-semibold text-white">
                  {faq.q}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-primary shrink-0"
                  aria-hidden="true"
                >
                  <Plus size={22} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeOut" },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.25, ease: "easeInOut" },
                        opacity: { duration: 0.15 }
                      }
                    }}
                  >
                    <p className="px-6 md:px-7 pb-6 text-gray-400 leading-relaxed text-left text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation CTA */}
      {showViewAll && (
        <div className="flex justify-center mt-12">
          <Link
            href={viewAllHref}
            className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            View All
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </section>
  );
}