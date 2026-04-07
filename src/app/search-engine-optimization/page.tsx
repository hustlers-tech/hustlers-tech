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
    description: "We begin with a deep analysis of your website, identifying gaps and opportunities, a key part of our SEO services.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom roadmap built around your goals, whether you need small business SEO services or advanced ecommerce SEO services.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Our team implements everything; content, technical fixes, and backlinks, delivering full-scale SEO services India.",
  },
  {
    step: "04",
    title: "Monitor & Scale",
    description: "Continuous optimization, tracking, and improvements to ensure long-term growth with the best SEO services.",
  },
];

const seoFaqs = [
  {
    q: "What SEO services do you offer?",
    a: " We provide complete SEO services, including technical SEO, content optimization, link building, and local SEO services.",
  },
  {
    q: "Do you offer SEO services in Delhi?",
    a: "Yes, we specialize in SEO services in Delhi, helping local businesses rank higher and attract quality leads.",
  },
  {
    q: "Are your SEO services affordable?",
    a: "We offer affordable local SEO services and customized packages depending on your business size and goals.",
  },
  {
    q: "Do you provide ecommerce SEO services?",
    a: "Absolutely. We deliver some of the best ecommerce SEO services in India, focused on increasing traffic and conversions.",
  },
  {
    q: "Can I find SEO services near me for support?",
    a: "Yes, if you’re searching for SEO services near me, our Delhi-based team ensures quick support and personalized consultation.",
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
              Drive consistent growth with professional SEO services designed to put your brand exactly where it matters, on top of search results.
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
        description="Our structured approach ensures consistent growth, making us one of the best SEO services in Delhi for scalable results."
      />
      <WhyChoose/>
      <FaqSection faqs={seoFaqs} title="Questions Before You" highlight="Invest in SEO" showViewAll={false} />
      <CTA
        title="Ready to Rank #1?"
        description="Partner with a performance-driven SEO services company India and unlock the true potential of organic growth."
        buttonText="Claim Your Free Audit"
/>
    </section>
  )
}

export default Seo
