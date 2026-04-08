"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Eye,
  Heart,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import CTA from "../components/webDev/CTA";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Happy Clients" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every strategy is built around measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "Your success is our success. We treat every project as if it were our own business.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We stay ahead of trends, leveraging cutting-edge tools and techniques for maximum impact.",
  },
  {
    icon: Shield,
    title: "Transparency",
    desc: "No hidden fees, no jargon. Clear communication and honest reporting at every step.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work as an extension of your team, aligning with your vision and goals seamlessly.",
  },
  {
    icon: Clock,
    title: "Commitment",
    desc: "Deadlines matter. We deliver on time, every time, without compromising quality.",
  },
];
const AboutClient = () => {
  return (
    <>
      <h1 className="sr-only absolute">About us</h1>

      {/* Hero Section */}

      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="about-hero-img absolute inset-0">
          <img
            src="/images/about-team.jpg"
            alt="Hustlers Tech team at work"
            className="w-full h-full object-cover"
            width={1000}
            height={720}
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              About us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We Don't Just Market. <br />
            <span className="bg-gradient-to-r from-primary to-[hsl(195,67%,60%)] bg-clip-text text-transparent">
              We Hustle.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A passionate team of strategists, designers, and developers obsessed
            with helping businesses dominate the digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#11161d99] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl shadow-black/20"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -5 }}
                className="text-center relative group"
              >
                <div
                  className="text-3xl md:text-5xl font-bold text-primary tracking-tighter transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </div>

                <div className="text-[10px] md:text-xs text-muted-foreground mt-2 uppercase tracking-[0.2em] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                  {s.label}
                </div>

                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hustlers Tech started with a simple belief: every business, no
              matter the size, deserves world-class digital marketing. Founded
              in 2025, we began as a small team of passionate marketers
              frustrated by the cookie-cutter approaches dominating the
              industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, we've grown into a full-service digital agency delivering
              exceptional results across web development, SEO, social media,
              PPC, content marketing, and graphic design. Our secret? We treat
              every client's business like our own.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't believe in vanity metrics. We believe in revenue, growth,
              and long-term partnerships built on trust and transparency.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Image
              src={"/images/about-office.jpg"}
              alt="Hustlers Tech office"
              className="rounded-2xl border border-border shadow-2xl"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary/10 border border-primary/30 rounded-xl p-5 backdrop-blur-md">
              <Award className="w-8 h-8 text-primary mb-2" />
              <div className="text-sm font-semibold text-foreground">
                Top-Rated Agency
              </div>
              <div className="text-xs text-muted-foreground">
                Trusted by 10+ brands
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#11161d99] backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with data-driven digital strategies that
              deliver measurable growth, foster authentic connections, and
              create lasting competitive advantages in an ever-evolving digital
              world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#11161d99] backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the most trusted digital partner for ambitious brands
              worldwide — known for relentless innovation, transparent
              partnerships, and results that speak louder than promises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 overflow-hidden bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What We <span className="text-primary">Stand For</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
              The principles that guide every decision, every campaign, and
              every client relationship.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                // Entry Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                // Hover Interaction (No Tilt, just smooth lift and scale)
                whileHover={{ y: -8 }}
                className="group relative bg-[#0f1115] border border-white/5 rounded-[2rem] p-8 transition-all duration-500"
              >
                {/* 1. Subtle Radial Background Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(37,150,190,0.15),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 2. Top-Right Accent Light */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />

                {/* Icon Container */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                  <v.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Text Content */}
                <h4 className="relative z-10 text-xl font-bold mb-3 text-white tracking-tight">
                  {v.title}
                </h4>
                <p className="relative z-10 text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                  {v.desc}
                </p>

                {/* 3. Subtle Border "Beam" on Hover */}
                <div className="absolute inset-0 rounded-[2rem] border border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />

                {/* 4. Bottom Corner Spark */}
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-primary/40"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Grow?"
        description="Let's build something extraordinary together. Your next chapter of growth starts with a conversation."
        buttonText="Let's Talk"
      />
    </>
  );
};

export default AboutClient;
