"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
    fixed w-full top-0 z-50 
    bg-transparent
    backdrop-blur-lg
  "
    >
      <div className="w-full mx-auto px-4 py-2 sm:px-6 lg:px-30">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/HustlersTech_logo.png"
                alt="HustlersTech"
                width={200}
                height={50}
                className="h-10 md:h-15 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["About us", "Our Services", "Why choose us", "Blogs"].map(
              (item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * idx }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="
          relative text-white font-medium transition-colors group
        "
                  >
                    {item}
                    <span
                      className="
    absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 
    bg-[#00cc99] 
    transition-all duration-300 ease-out 
    group-hover:w-full
  "
                    />
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/get-started"
              className="
                  hidden md:flex px-5 py-2 rounded-full font-semibold 
                  text-white 
                  bg-gradient-to-r from-[#0099ff] to-[#00cc99] 
                  hover:from-[#00cc99] hover:to-[#0099ff] 
                  shadow-lg shadow-[#00cc99]/30 
                  transition-all
                "
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="
            md:hidden 
            bg-gradient-to-r from-[#0099ff]/80 to-[#00cc99]/80 
            backdrop-blur-md 
            border-t border-white/20
          "
        >
          <div className="flex flex-col space-y-2 px-4 py-3">
            {["About us", "Our Services", "Why choose us", "Blogs"].map(
              (item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white font-medium hover:text-gray-200 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
