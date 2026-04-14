"use client";

import { motion } from "framer-motion";
import { Palette, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Tools from "../components/graphic/Tools";
import GraphicServices from "../components/graphic/GraphicServices";
import OurProcess from "../components/webDev/OurProcess";
import WhyUs from "../components/graphic/WhyUs";
import CTA from "../components/webDev/CTA";
import FaqSection from "../components/faq/FaqSection";

const processSteps = [
  {
    step: "01",
    title: "Brief & Research",
    description:
      "We understand your brand, audience, and competition, the foundation of effective graphic design services near me and global.",
  },
  {
    step: "02",
    title: "Concept & Sketch",
    description:
      "Multiple creative directions explored through mood boards and concepts, just like a best graphic designing agency would approach.",
  },
  {
    step: "03",
    title: "Design & Refine",
    description:
      "High-fidelity designs with collaborative feedback loops to ensure every detail aligns with your vision.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description:
      "Final files, brand guidelines, and ongoing support, what you expect from a reliable graphic design agency in Delhi.",
  },
];

export const graphicFaqs = [
  {
    q: "What graphic design services do you offer?",
    a: "We provide complete graphic design services, including branding, UI/UX, social creatives, and print design. ",
  },
  {
    q: "Can you design graphics that match our brand identity?",
    a: "Yes, we specialize in creating consistent visuals as a full-service graphic design agency in India.",
  },
  {
    q: "How long does it take to deliver designs?",
    a: "Most projects are delivered within 5–10 days depending on scope, standard for top graphic design companies near you.",
  },
  {
    q: "Do you provide revisions?",
    a: "Yes, we offer multiple revisions to ensure satisfaction, a core part of our graphic design services in Delhi.",
  },
  {
    q: "Will I receive the source files?",
    a: "Absolutely. You get all final files and formats, just like you would expect from a professional graphic design company in Delhi.",
  },
];

const GraphicClient = () => {
  const router = useRouter();

  return (
    <section className="bg-black text-white overflow-hidden">
        <h1 className="sr-only absolute">Graphic Design Agency</h1>
      {/* Hero section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/graphic/graphic-design-hero.jpg"
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
                <Palette className="w-4 h-4" />
                Graphic Design
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Design That{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Speaks Volumes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              Bring your brand to life with impactful graphic design services that don’t just look good, they communicate, connect, and convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      <Tools />
      <GraphicServices />
      <OurProcess
        badge="How it works"
        title="Our Creative"
        highlight="Process"
        steps={processSteps}
        description="A structured workflow followed by top graphic design agencies in India to ensure quality, consistency, and creativity."
      />
      <WhyUs />
      <FaqSection faqs={graphicFaqs} showViewAll={false} highlight="You Invest in Design" />
      <CTA
        title="Ready for Design That Stands Out?"
        description="Work with a creative-first graphic design agency in Delhi and build visuals that leave a lasting impression."
        buttonText="Book Your Free Design Consultation"
      />
    </section>
  );
};

export default GraphicClient;
