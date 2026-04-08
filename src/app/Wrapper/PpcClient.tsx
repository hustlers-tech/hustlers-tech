"use client"

import { ArrowRight, Megaphone } from 'lucide-react'
import {motion} from "framer-motion"
import { useRouter } from 'next/navigation'
import PpcServices from '../components/ppc/PpcServices'
import OurProcess from '../components/webDev/OurProcess'
import WhyUs from '../components/ppc/WhyUs'
import FaqSection from '../components/faq/FaqSection'
import CTA from '../components/webDev/CTA'

export const ppcFaqs = [
  {
    q: "What is PPC advertising?",
    a: "PPC (Pay-Per-Click) is a digital advertising model where you pay only when someone clicks on your ad."
  },
  {
    q: "Which platforms do you run PPC campaigns on?",
    a: "We run campaigns on Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and other relevant platforms."
  },
  {
    q: "How quickly can PPC generate results?",
    a: "PPC campaigns can start generating traffic and leads within a few days after launch."
  },
  {
    q: "Do you manage and optimize campaigns regularly?",
    a: "Yes, we continuously monitor, test, and optimize campaigns to improve performance and reduce costs."
  },
  {
    q: "How do you measure PPC success?",
    a: "We track metrics like clicks, conversions, cost per lead, and return on ad spend (ROAS)."
  }
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Deep-dive into your business goals, competitors, and market to identify the highest-ROI opportunities." },
  { step: "02", title: "Campaign Build", description: "Strategic account structure, audience segmentation, ad creative, and landing page development." },
  { step: "03", title: "Launch & Test", description: "Controlled launch with A/B testing on creatives, audiences, and bidding to find winning combinations." },
  { step: "04", title: "Scale & Optimize", description: "Continuous optimization, budget scaling on winners, and new channel expansion for compounding growth." },
];

const PpcClient = () => {
  const router = useRouter()
  return (
    <section className="bg-black text-white overflow-hidden">
        <h1 className='sr-only absolute'>PPC Marketing Agency</h1>
        {/* Hero section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/ppc/ppc-hero.jpg"
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
                <Megaphone className="w-4 h-4" />
                PPC & Paid Ads
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Turn Ad Spend Into{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Predictable Revenue
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
            Performance-driven paid advertising that delivers measurable ROI. We manage every click, conversion, and dollar so you can focus on scaling your business.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer" onClick={()=>{router.push("/contact")}}>
                Get Free PPC Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      <PpcServices/>
      <OurProcess
        badge="How it works"
        title="Our PPC"
        highlight="Framework"
        steps={processSteps}
        description="A battle-tested process that turns ad budgets into scalable, profitable growth channels."
      />
      <WhyUs/>
      <FaqSection faqs={ppcFaqs} showViewAll={false} />
      <CTA
        title="Ready to Scale Your Ad Revenue?"
        description="Get a free PPC audit and discover how much revenue you're leaving on the table with underperforming campaigns."
        buttonText="Claim your Free Audit"
/>
    </section>
  )
}

export default PpcClient
