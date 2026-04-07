"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ArrowRight,
} from "lucide-react";
import TechStack from "../components/webDev/TechStack";
import Capabilities from "../components/webDev/Capabilities";
import OurProcess from "../components/webDev/OurProcess";
import WhyChoose from "../components/webDev/WhyChoose";
import FaqSection from "../components/faq/FaqSection";
import CTA from "../components/webDev/CTA";

const webDevFaqs = [
  {
    q: "Which technologies do you use?",
    a: "We use modern frameworks and tools to deliver scalable solutions as a top website development agency in India.",
  },
  {
    q: "Do you provide mobile-optimized websites?",
    a: "Yes, every project includes responsive website design to ensure seamless performance across all devices.",
  },
  {
    q: "What is the website development cost in India?",
    a: "The website development cost in India depends on features, design, and complexity. We offer flexible pricing tailored to your needs.",
  },
  {
    q: "Can I find a website developer near me for support?",
    a: "Absolutely. If you're searching for a website developer near me in Delhi, our team is always available for quick support and consultation.",
  },
];

const webDevProcess = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "We begin by understanding your business goals, audience, and technical needs.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Our team focuses on modern website design that is intuitive, responsive, and conversion-driven.",
  },
  {
    step: "03",
    title: "Development",
    description: "As a trusted website development company in India, we build fast, scalable, and SEO-friendly websites.",
  },
  {
    step: "04",
    title: "Deployment & Optimization",
    description: "We launch your website with full testing, speed optimization, and performance tracking, because great website development services in India don’t stop at delivery.",
  },
];


export default function WebDevelopment() {
  return (
    <section className="bg-black text-white overflow-hidden">
      {/* Hero section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/web-dev-hero.jpg"
            alt="Web development workspace with multiple screens"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        </div>

        <div className="relative z-10 flex justify-center text-center mx-auto px-6 pt-16 lg:pt-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                <Code2 className="w-4 h-4" />
                Web Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Your Growth Starts{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                With a Better Website
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              From high-converting landing pages to full-scale websites, our web development services focus on performance, user experience, and growth, helping your business stand out and rank higher.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      <TechStack />
      <Capabilities />
      <OurProcess
        badge="Workflow"
        title="Our"
        highlight="Process"
        steps={webDevProcess}
        description="As a leading website development company in Delhi, our process is built to deliver performance, scalability, and seamless user experience."
      />
      <WhyChoose />
      <FaqSection faqs={webDevFaqs} showViewAll={false} />
      <CTA
        title="Ready to Build Something Exceptional?"
        description="Turn your ideas into a powerful digital experience with expert website development services."
        buttonText="Get Your Free Consultation Now"
/>
    </section>
  );
}
