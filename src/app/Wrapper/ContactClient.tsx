// "use client";

// import { Zap, CheckCircle2, MessageSquare, Trophy, Globe } from "lucide-react";
// import LeadForm from "../components/leadForm/LeadForm";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// export default function ContactClient() {
//   // Mouse tracking for the "Left Content" glow
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   };

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen flex items-center px-4 pt-32 pb-20 overflow-hidden bg-[#020408] text-white selection:bg-[#2596be]/30"
//     >
//       {/* 1. DYNAMIC BACKGROUND LAYER */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.07)_0%,transparent_70%)]" />
//         {/* Animated Moving Blob */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//             x: [0, 50, 0],
//             y: [0, 30, 0]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2596be]/10 rounded-full blur-[120px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center w-full">

//         {/* LEFT CONTENT AREA */}
//         <div className="flex-1 text-center lg:text-left">
//           {/* Badge with pulse */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2596be]/20 bg-[#2596be]/5 text-[#2596be] text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2596be] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2596be]"></span>
//             </span>
//             Direct Access to Founders
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-8"
//           >
//             TRANSFORMING <br />
//             <span className="relative inline-block">
//               VISIONARIES
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none"><path d="M3 9C118.5 3 239.5 3 355 9" stroke="#2596be" strokeWidth="5" strokeLinecap="round"/></svg>
//             </span>
//             <br />
//             INTO LEADERS.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12"
//           >
//             Don't just launch a website. Launch a <span className="text-white">Revenue Machine</span>.
//             Join the elite circle of brands scaling with Hustlers Tech.
//           </motion.p>

//           {/* ICON GRID (Value Props) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="grid grid-cols-3 gap-2 md:gap-6 max-w-full md:max-w-md mx-auto lg:mx-0"
//           >

//             <div className="flex items-center gap-1 md:gap-3 text-sm text-zinc-400">
//               <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#2596be]"><Globe size={18} /></div>
//               Global Scale
//             </div>
//             <div className="flex items-center gap-1 md:gap-3 text-sm text-zinc-400">
//               <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#2596be]"><CheckCircle2 size={18} /></div>
//               Proven ROI
//             </div>
//             <div className="flex items-center gap-1 md:gap-3 text-sm text-zinc-400">
//               <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#2596be]"><MessageSquare size={18} /></div>
//               24/7 Support
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE (The Form Container) */}
//         <div className="w-full lg:w-[500px] relative group">
//           {/* Neon Border Glow */}
//           <div className="absolute -inset-[2px] bg-gradient-to-tr from-[#2596be] to-blue-900 rounded-[2.5rem] opacity-20 blur-md group-hover:opacity-40 transition duration-700" />

//           <div className="relative bg-[#05070a] border border-white/10 rounded-[2.5rem] p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)]">

//             <LeadForm />

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { CheckCircle2, MessageSquare, Globe, ShieldCheck } from "lucide-react";
import LeadForm from "../components/leadForm/LeadForm";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

export default function ContactClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center px-4 pt-36 pb-20 overflow-hidden bg-[#020408] text-white selection:bg-[#2596be]/30"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.07)_0%,transparent_70%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2596be]/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center w-full">
        {/* LEFT CONTENT AREA */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2596be]/20 bg-[#2596be]/5 text-[#2596be] text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2596be] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2596be]"></span>
            </span>
            Direct Access to Founders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-8"
          >
            TRANSFORMING <br />
            <span className="relative inline-block">
              VISIONARIES
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 358 12"
                fill="none"
              >
                <path
                  d="M3 9C118.5 3 239.5 3 355 9"
                  stroke="#2596be"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            INTO LEADERS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12"
          >
            Don't just launch a website. Launch a{" "}
            <span className="text-white">Revenue Machine</span>. Join the elite
            circle of brands scaling with Hustlers Tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-2 md:gap-6 max-w-full md:max-w-md mx-auto lg:mx-0"
          >
            <div className="flex items-center gap-1 md:gap-3 text-sm text-zinc-400">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#2596be]">
                <Globe size={18} />
              </div>
              Global Scale
            </div>
            <div className="flex items-center gap-1 md:gap-3 text-sm text-zinc-400">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#2596be]">
                <CheckCircle2 size={18} />
              </div>
              Proven ROI
            </div>
            <div className="flex items-center gap-1 md:gap-3 text-sm text-zinc-400">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#2596be]">
                <MessageSquare size={18} />
              </div>
              24/7 Support
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-[500px] relative group mt-18 lg:mt-0">
          <motion.div
            initial={{ y: 70, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.35,
            }}
            className="absolute -top-[120px] sm:-top-[140px] left-1/2 -translate-x-1/2 md:-translate-x-1/1 z-20 w-[240px] sm:w-[290px] pointer-events-none select-none"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-[135px] sm:h-[160px]"
            >
              <Image
                src="/hux-leaning.png"
                alt="Mr. Hux Leaning"
                fill
                priority
                sizes="(max-width: 768px) 240px, 290px"
                className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(37,150,190,0.35)]"
              />
            </motion.div>
          </motion.div>

          <div className="absolute -inset-[2px] bg-gradient-to-tr from-[#2596be] to-blue-900 rounded-[2.5rem] opacity-20 blur-md group-hover:opacity-40 transition duration-700 pointer-events-none" />

          <div className="relative bg-[#05070a] border border-white/10 rounded-[1rem] p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10">
            <LeadForm />
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2596be]" />
            <span>Encrypted • 100% Privacy Protected</span>
          </div>
        </div>
      </div>
    </section>
  );
}