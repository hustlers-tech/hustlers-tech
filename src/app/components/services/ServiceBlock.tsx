"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Service } from "@/app/data/services";
import { useRouter } from "next/navigation";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceBlock({ service, index }: Props) {

  const ref = useRef(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress,[0,1],["0%","15%"]);

  return (

    <motion.div
      ref={ref}
      className="sticky top-30 mx-5 md:mx-10"
      initial={{opacity:0, y:120}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      viewport={{once:true}}
    >

      <div className="relative bg-[#0b0f18] border border-white/5 rounded-3xl p-10 md:p-14 grid lg:grid-cols-2 gap-12 items-center shadow-2xl h-auto md:h-150">

       <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover hidden md:block rounded-3xl"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/70 hidden md:block rounded-3xl" />
        {/* BIG BACKGROUND NUMBER */}

        <span className="absolute -top-15 left-0 text-[200px] font-bold text-white/5 select-none pointer-events-none">
          {service.number}
        </span>

        {/* TEXT */}

        <div className="relative z-10">

          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            {service.title}
          </h3>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            {service.description}
          </p>

          <button onClick={()=>router.push(`${service.ctaLink}`)} className="mt-8 px-7 py-3 bg-primary text-primary-foreground rounded-xl hover:scale-105 transition cursor-pointer">
            Read More
          </button>

        </div>

        {/* IMAGE */}

        {/* <motion.div
          style={{y}}
          className="overflow-hidden rounded-2xl hidden md:flex border"
        >

          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-[300px] object-cover"
            whileHover={{scale:1.05}}
            transition={{duration:0.4}}
          />

        </motion.div> */}

      </div>

    </motion.div>

  );
}