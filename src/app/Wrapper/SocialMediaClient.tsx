"use client"

import {motion} from "framer-motion"
import { ArrowRight, Share2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Platforms from "../components/social/Platforms"
import SocialServices from "../components/social/SocialServices"
import OurProcess from "../components/webDev/OurProcess"
import WhyUs from "../components/social/WhyUs"
import FaqSection from "../components/faq/FaqSection"
import CTA from "../components/webDev/CTA"

const processSteps = [
  {
    step: "01",
    title: "Audit & Research",
    description:
      "We analyze your current presence, competitors, and audience behavior. the foundation of effective social media marketing services.",
  },
  {
    step: "02",
    title: "Strategy & Calendar",
    description:
      "Custom strategy with a clear content roadmap, built by experts from a top social media marketing agency in India.",
  },
  {
    step: "03",
    title: "Create & Publish",
    description:
      "High-quality content creation and consistent publishing across platforms to maximize reach and engagement.",
  },
  {
    step: "04",
    title: "Analyze & Optimize",
    description:
      "We track, test, and improve, ensuring your investment in social media marketing delivers consistent growth.",
  },
];

export const socialFaqs = [
  {
    q: "What platforms do you manage?",
    a: "We manage all major platforms including Instagram, Facebook, LinkedIn, and more as part of our social media marketing services."
  },
  {
    q: "Do you create content for our social media?",
    a: " Yes, we handle everything; from ideation to execution, as a full-service social media marketing agency."
  },
  {
    q: "How long does it take to see results?",
    a: "Typically, brands start seeing engagement growth within 4–8 weeks using our professional social media marketing services"
  },
  {
    q: "Will you handle posting and scheduling?",
    a: "Absolutely. We manage end-to-end execution, making us a preferred social media marketing agency near me for many businesses."
  },
  {
    q: "How do you measure success?",
    a: "We track engagement, reach, conversions, and ROI, ensuring your social media digital marketing efforts drive real results."
  }
];


const SocialMediaClient = () => {
    const router = useRouter()

  return (
    <section className="bg-black text-white overflow-hidden">
        <h1 className="sr-only absolute">Social Media Marketing Agency</h1>
        {/* Hero section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/social/social-hero.jpg"
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
                <Share2 className="w-4 h-4" />
                Social Media Marketing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Build Brands That{" "} <br />
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Go Viral
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
            Turn attention into impact with powerful social media marketing that builds communities, drives engagement, and converts audiences into loyal customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer" onClick={()=>{router.push("/contact")}}>
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      <Platforms/>
      <SocialServices/>
      <OurProcess
        badge="How it works"
        title="Our Social"
        highlight="Process"
        steps={processSteps}
        description="A structured system followed by leading social media marketing agencies in Delhi to turn content into measurable growth."
      />
      <WhyUs/>
      <FaqSection faqs={socialFaqs} showViewAll={false} highlight="You Grow on Social"/>
       <CTA
        title="Ready to Go Viral?"
        description="Work with a results-driven social media marketing agency in Delhi NCR and turn your social presence into a powerful growth engine."
        buttonText="Book Your Free Strategy Call"
/>
    </section>
  )
}

export default SocialMediaClient
