"use client"
import {motion} from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import Features from "../components/seo/Features"
import OurProcess from "../components/webDev/OurProcess"
import WhyChoose from "../components/seo/WhyChoose"
import FaqSection from "../components/faq/FaqSection"
import CTA from "../components/webDev/CTA"

const seoProcess = [
  {
    step: "01",
    title: "SEO Audit",
    description: "Comprehensive analysis of your site's technical health, content gaps, and competitive landscape.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom SEO roadmap built around your goals, target keywords, and market opportunity.",
  },
  {
    step: "03",
    title: "Execution",
    description: "On-page optimization, content creation, link building, and technical fixes — all working in sync.",
  },
  {
    step: "04",
    title: "Monitor & Scale",
    description: "Ongoing tracking, A/B testing, and iterative improvements to compound your organic growth.",
  },
];

const seoFaqs = [
  {
    q: "Which technologies do you use?",
    a: "We build with Next.js, React, Tailwind and modern scalable stacks.",
  },
  {
    q: "Is the website mobile optimized?",
    a: "Yes, every website is fully responsive.",
  },
  {
    q: "Is the website mobile optimized?",
    a: "Yes, every website is fully responsive.",
  },
  {
    q: "Is the website mobile optimized?",
    a: "Yes, every website is fully responsive.",
  },
  {
    q: "Is the website mobile optimized?",
    a: "Yes, every website is fully responsive.",
  },
];

const Seo = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
          {/* Hero section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/seo/seo-hero.jpg"
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
                <Search className="w-4 h-4" />
                SEO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Dominate Search &{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Own Page One
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              Data-driven SEO strategies that put your brand in front of the right audience — turning organic search into your most powerful growth channel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer">
                Get Free SEO Audits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      <Features/>
      <OurProcess
        badge="How it works"
        title="Our SEO"
        highlight="Process"
        steps={seoProcess}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae in inventore fugit dolorem iure, quasi ut ab facere debitis cupiditate."
      />
      <WhyChoose/>
      <FaqSection faqs={seoFaqs} showViewAll={false} />
      <CTA
        title="Ready to Rank #1?"
        description="Get a free, no-obligation SEO audit and discover exactly how much organic traffic you're leaving on the table."
        buttonText="Claim Your Free Audit"
/>
    </section>
  )
}

export default Seo
