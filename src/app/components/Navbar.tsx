"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - navbarOffset;

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
              width: scrolled ? "50%" : "80%",
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
        <div className="hidden md:flex items-center gap-8">
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
            onClick={()=>router.push("/contact")}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111827] border border-white/10 backdrop-blur-xl p-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-white/70 hover:text-white transition text-left"
                >
                  {link.name}
                </button>
              ))}

              <button className="bg-[#2596be] py-3 rounded-xl shadow-[0_0_20px_rgba(37,150,190,0.4)]" onClick={()=>router.push("/contact")}>
                Let’s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}