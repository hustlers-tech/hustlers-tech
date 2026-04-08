"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Search } from "lucide-react";
import Features from "../components/seo/Features";
import OurProcess from "../components/webDev/OurProcess";
import FaqSection from "../components/faq/FaqSection";
import CTA from "../components/webDev/CTA";
import OurFeatures from "../components/content/OurFeatures";
import WhyChoose from "../components/content/WhyUs";

const processSteps = [
  {
    step: "01",
    title: "Audit & Research",
    description:
      "Comprehensive content audit, competitor analysis, and audience research to identify content gaps and opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Editorial calendar, topic clustering, keyword mapping, and content briefs aligned with your business objectives.",
  },
  {
    step: "03",
    title: "Create & Optimize",
    description:
      "Expert writers produce high-quality, SEO-optimized content reviewed by editors and subject matter experts.",
  },
  {
    step: "04",
    title: "Distribute & Measure",
    description:
      "Multi-channel distribution, performance tracking, and continuous optimization based on real engagement data.",
  },
];

const contentFaqs = [
  {
    q: "What is content marketing and how does it work?",
    a: "Content marketing is a strategy focused on creating and distributing valuable, relevant content to attract and engage a target audience, ultimately driving profitable customer actions.",
  },
  {
    q: "Why is content marketing important for businesses?",
    a: "Content marketing helps build brand awareness, improve SEO rankings, generate leads, and establish authority in your industry.",
  },
  {
    q: "What types of content do you create?",
    a: "We create a wide range of content including blog posts, website copy, social media content, email newsletters, case studies, and more.",
  },
  {
    q: "How does content marketing improve SEO?",
    a: "High-quality content helps target relevant keywords, increases website traffic, earns backlinks, and improves search engine rankings over time.",
  },
  {
    q: "Do you offer content marketing services in Delhi?",
    a: "Yes, we provide content marketing services in Delhi, helping local businesses grow their online presence and attract quality leads.",
  },
  {
    q: "How often should I publish content?",
    a: "The ideal publishing frequency depends on your goals, but consistency is key. Most businesses benefit from posting at least 1–4 times per week.",
  },
  {
    q: "Can content marketing generate leads?",
    a: "Yes, effective content marketing attracts potential customers, nurtures them through the buyer journey, and converts them into leads.",
  },
  {
    q: "Do you create SEO-optimized content?",
    a: "Absolutely. All our content is optimized with relevant keywords, proper structure, and best SEO practices to improve visibility.",
  },
  {
    q: "How long does it take to see results from content marketing?",
    a: "Content marketing is a long-term strategy. You can start seeing initial results in a few months, with significant growth over time.",
  },
  {
    q: "Can you help with content strategy as well?",
    a: "Yes, we not only create content but also develop a comprehensive content strategy aligned with your business goals and target audience.",
  },
];

const ContentClient = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
        <h1 className="sr-only absolute">Content Strategy</h1>
      {/* Hero section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/content/content-marketing-hero.jpg"
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
                <FileText className="w-4 h-4" />
                Content Marketing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Content That{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Drives Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              Strategic content marketing that builds authority, attracts
              organic traffic, and converts readers into loyal customers — all
              backed by data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer">
                Get Free Content Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-heading font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>
      <OurFeatures />
      <OurProcess
        badge="How it works"
        title="Our Content"
        highlight="Process"
        steps={processSteps}
        description="A proven methodology that turns content into a predictable, scalable growth engine for your business."
      />

      <WhyChoose />

      <FaqSection
        faqs={contentFaqs}
        title="Questions Before You"
        highlight="Invest in Content"
        showViewAll={false}
      />
      <CTA
        title="Ready to Own Your Narrative?"
        description="Get a free content audit and discover exactly where your biggest content opportunities are hiding."
        buttonText="Claim Your Free Audit"
      />
    </section>
  );
};

export default ContentClient;
