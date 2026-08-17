"use client";

import { motion } from "framer-motion";
import { Service } from "@/app/data/services";
import Link from "next/link";
import Image from "next/image";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceBlock({ service, index }: Props) {
  return (
    <motion.div
      className="sticky top-28 md:top-32 mx-4 md:mx-10 mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative bg-[#0b0f18] border border-white/5 rounded-3xl p-8 md:p-14 grid lg:grid-cols-2 gap-8 md:gap-12 items-center shadow-2xl overflow-hidden min-h-[380px] md:min-h-[460px]">
        {/* Optimized Background Image with fill */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover rounded-3xl"
            loading="lazy"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75 rounded-3xl" />
        </div>

        {/* Big Background Number */}
        <span className="absolute -top-10 md:-top-16 left-2 md:left-6 text-[120px] md:text-[200px] font-extrabold text-white/[0.04] select-none pointer-events-none tracking-tight">
          {service.number}
        </span>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <h3 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            {service.title}
          </h3>

          <p className="mt-4 md:mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            {service.description}
          </p>

          <Link
            href={service.ctaLink || "#"}
            className="inline-block mt-6 md:mt-8 px-7 py-3.5 bg-primary hover:bg-[#1e7e9e] text-white font-semibold text-sm rounded-xl transition duration-200 shadow-[0_0_20px_rgba(37,150,190,0.3)] active:scale-95"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}