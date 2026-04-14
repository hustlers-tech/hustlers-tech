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
    a: "PPC (Pay-Per-Click) is a model where you pay for each click on your ad. Our PPC services ensure those clicks convert into real business results."
  },
  {
    q: "Which platforms do you run PPC campaigns on?",
    a: "We manage campaigns across Google Ads, Facebook Ads, Instagram, and more as part of our PPC agency services."
  },
  {
    q: "How quickly can PPC generate results?",
    a: "Unlike SEO, PPC ads can start driving traffic and leads almost immediately after launch."
  },
  {
    q: "Do you manage and optimize campaigns regularly?",
    a: "Yes, we continuously optimize campaigns, a standard practice for any best PPC agency delivering consistent ROI."
  },
  {
    q: "How do you measure PPC success?",
    a: "We track conversions, cost per acquisition, and ROAS, ensuring your investment in Google Ads PPC is profitable."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, and competition to identify high-impact opportunities, the foundation of effective PPC services in India.",
  },
  {
    step: "02",
    title: "Campaign Build",
    description:
      "From account structure to creatives, we build campaigns aligned with your goals,  just like a best PPC agency should.",
  },
  {
    step: "03",
    title: "Launch & Test",
    description:
      "We test multiple variables across Google Ads PPC and other platforms to find winning combinations quickly.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    description:
      "Once we find what works, we scale aggressively while optimizing continuously, a key trait of the best PPC services.",
  },
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
            Drive real growth with performance-focused PPC services that turn every click into measurable business results.

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
        description="A proven system followed by top PPC services in Delhi to ensure consistent, scalable growth."
      />
      <WhyUs/>
      <FaqSection faqs={ppcFaqs} showViewAll={false} highlight='You Invest in PPC'/>
      <CTA
        title="Ready to Scale Your Ad Revenue?"
        description="Partner with a results-driven PPC services company India and unlock the true potential of paid advertising."
        buttonText="Claim Your Free PPC Audit"
/>
    </section>
  )
}

export default PpcClient
