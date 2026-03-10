"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About Us", id: "about" },
    { name: "Process", id: "process" },
    { name: "FAQs", id: "faqs" },
    { name: "Blog", id: "blogs" },
  ];

  const services = [
    { name: "Web Development", link: "/web-development" },
    {
      name: "Search Engine Optimization (SEO)",
      link: "/search-engine-optimization",
    },
    { name: "Social Media ", link: "/social-media" },
    { name: "Paid Ads (PPC)", link: "/paid-ads" },
    { name: "Graphic Design", link: "/graphic-design" },
    { name: "Content Marketing", link: "" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 100;

    const elementPosition = element.getBoundingClientRect().top;

    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={
        isDesktop
          ? {
              width: scrolled ? "60%" : "80%",
              y: scrolled ? 20 : 0,
              borderRadius: scrolled ? "20px" : "0px",
            }
          : {
              width: "100%",
              y: 0,
              borderRadius: "0px",
            }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#0b0f14]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(37,150,190,0.15)] px-6 py-3"
            : "bg-transparent px-5 py-6"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/HustlersTech_logo.png"
            alt="HustlersTech Logo"
            width={200}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}

        <div className="hidden md:flex items-center gap-8 relative">
          {/* SERVICES DROPDOWN */}

          <div
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="relative"
          >
            <button className="flex items-center gap-1 text-white/70 hover:text-white transition cursor-pointer">
              Services
              <KeyboardArrowDownIcon fontSize="small" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-7 left-0 w-64 bg-[#111827] border border-white/10 rounded-xl shadow-xl backdrop-blur-xl overflow-hidden"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.link}
                      className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OTHER LINKS */}

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.id)}
              className="relative group text-white/70 hover:text-white transition cursor-pointer"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2596be] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* CTA */}

          <motion.button
            onClick={() => router.push("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-xl bg-[#2596be] text-white shadow-[0_0_20px_rgba(37,150,190,0.5)] hover:shadow-[0_0_30px_rgba(37,150,190,0.7)] transition-all duration-300"
          >
            Let’s Talk
          </motion.button>
        </div>

        {/* Mobile Toggle */}

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <MenuIcon className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-[#111827] border border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-col gap-5 p-6"
            >
              {/* Services Mobile */}

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-left text-white/70"
              >
                Services
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="flex flex-col ml-4 gap-3"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.link}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="text-white/60 text-sm"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    handleScrollTo(link.id);
                    setMobileOpen(false);
                  }}
                  className="text-white/70 text-left"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => {
                  router.push("/contact");
                  setMobileOpen(false);
                }}
                className="bg-[#2596be] py-3 rounded-xl shadow-[0_0_20px_rgba(37,150,190,0.4)]"
              >
                Let’s Talk
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
