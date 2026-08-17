"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Process", id: "process" },
  { name: "FAQs", id: "faqs" },
  { name: "Blog", id: "blogs" },
];

const SERVICES = [
  { name: "Web Development", link: "/web-development" },
  { name: "Search Engine Optimization (SEO)", link: "/search-engine-optimization" },
  { name: "Social Media", link: "/social-media" },
  { name: "Paid Ads (PPC)", link: "/paid-ads" },
  { name: "Graphic Design", link: "/graphic-design" },
  { name: "Content Marketing", link: "/content-marketing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 40;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: scrolled ? 12 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full ${
        scrolled ? "md:w-[65%]" : "md:w-[85%]"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0f14]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(37,150,190,0.15)] px-6 py-3 rounded-none md:rounded-2xl"
            : "bg-transparent px-6 py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/HustlersTech_logo.png"
            alt="HustlersTech Logo"
            width={170}
            height={34}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {/* Services Dropdown */}
          <div
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="relative py-2"
          >
            <button className="flex items-center gap-1.5 text-white/70 hover:text-white transition">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-60 bg-[#111827]/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-xl py-2"
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.name}
                      href={service.link}
                      className="block px-4 py-2.5 text-xs text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="text-white/70 hover:text-white transition">
            About Us
          </Link>

          {isHomepage &&
            NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id)}
                className="relative text-white/70 hover:text-white transition group py-1"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#2596be] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}

          <Link
            href="/contact"
            className="relative px-5 py-2 rounded-xl bg-[#2596be] hover:bg-[#1e7e9e] text-white font-semibold shadow-[0_0_20px_rgba(37,150,190,0.3)] transition active:scale-95"
          >
            Let's Talk
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b0f14]/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-white/80 font-medium py-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="flex flex-col pl-3 mt-2 gap-2.5 overflow-hidden border-l border-white/10"
                    >
                      {SERVICES.map((s) => (
                        <Link
                          key={s.name}
                          href={s.link}
                          onClick={() => setMobileOpen(false)}
                          className="text-white/60 text-sm hover:text-white"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-white/80 font-medium py-1"
              >
                About Us
              </Link>

              {isHomepage &&
                NAV_LINKS.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleScrollTo(link.id)}
                    className="text-white/80 font-medium text-left py-1"
                  >
                    {link.name}
                  </button>
                ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center bg-[#2596be] hover:bg-[#1e7e9e] text-white font-semibold py-2.5 rounded-xl shadow-[0_0_20px_rgba(37,150,190,0.3)] mt-2"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}