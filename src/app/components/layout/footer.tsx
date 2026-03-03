"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Soft Radial Glow */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <div className="w-[700px] h-[700px] bg-primary/10 blur-[180px] rounded-full -translate-y-1/3" />
      </div>

      {/* Noise Texture */}
      <div className="noise-overlay" />

      <div className="relative z-10 container mx-auto px-6 md:px-20 pt-32 pb-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand */}
          <div>
            <Image src={"/HustlersTech_logo.png"} alt="logo" height={50} width={200}/>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
              A refined digital growth partner combining strategy, creativity,
              and performance to build powerful modern brands.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <SocialIcon href="#" icon={<Instagram size={18} />} />
              <SocialIcon href="#" icon={<Linkedin size={18} />} />
              <SocialIcon href="#" icon={<Twitter size={18} />} />
              <SocialIcon href="#" icon={<Mail size={18} />} />
            </div>
          </div>

          {/* Company */}
          <div>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks
              links={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ]}
            />
          </div>

          {/* Services */}
          <div>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks
              links={[
                { name: "Brand Strategy", href: "#" },
                { name: "Web Development", href: "#" },
                { name: "Performance Marketing", href: "#" },
                { name: "Creative Design", href: "#" },
              ]}
            />
          </div>

          {/* Contact */}
          <div>
            <FooterTitle>Contact</FooterTitle>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>info@hustlerstech.com</li>
              <li>+91 9354040527</li>
              <li>Delhi, India</li>
            </ul>

            <button className="mt-8 px-7 py-3 border border-white/20 rounded-full text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300">
              Start a Project →
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} HustlersTech. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ===== Reusable Components ===== */

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500">
      {children}
    </h4>
  );
}

function FooterLinks({
  links,
}: {
  links: { name: string; href: string }[];
}) {
  return (
    <ul className="mt-6 space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-primary transition-colors duration-300"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {icon}
      </motion.div>
    </a>
  );
}