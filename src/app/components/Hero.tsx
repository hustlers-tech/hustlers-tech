// "use client";

// import { ArrowRight, Zap } from "lucide-react";
// import { motion, Variants } from "framer-motion";
// import Link from "next/link";

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-0">
//       {/* Optimized Background effects (lightweight blur) */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/10 blur-[60px] md:blur-[100px] transform-gpu" />
//         <div className="absolute bottom-10 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-primary-dark/10 blur-[50px] md:blur-[80px] transform-gpu" />
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
//       >
//         {/* Badge */}
//         <motion.div
//           variants={itemVariants}
//           className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:px-5 md:py-2 mb-8 md:mb-10"
//         >
//           <Zap className="w-4 h-4 text-primary" />
//           <span className="text-xs md:text-sm font-medium text-primary tracking-wide uppercase">
//             Your Digital Growth Partners
//           </span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           variants={itemVariants}
//           className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] md:leading-[0.95] tracking-tight text-white"
//         >
//           We <span className="text-primary">Hustle.</span>{" "}
//           <span className="relative inline-block">
//             You Scale.
//             <svg
//               className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[10px] md:h-[14px]"
//               viewBox="0 0 200 14"
//               preserveAspectRatio="none"
//             >
//               <motion.path
//                 d="M5 10 Q100 0 195 10"
//                 fill="transparent"
//                 stroke="#06b6d4"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 1.2,
//                   ease: "easeInOut",
//                   delay: 0.3,
//                 }}
//               />
//             </svg>
//           </span>
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           variants={itemVariants}
//           className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
//         >
//           With innovative digital strategies, we help startups become
//           powerhouses and brands become movements. Let's do battle.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4"
//         >
//           <Link
//             href="/contact"
//             className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading font-semibold text-white transition-all duration-200 hover:bg-[#1e7e9e] hover:shadow-[0_0_25px_rgba(37,150,190,0.4)] active:scale-95 w-full sm:w-auto"
//           >
//             Start Your Growth
//             <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
//           </Link>

//           <Link
//             href="#services"
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 font-heading font-semibold text-white transition-all duration-200 hover:border-primary/50 hover:bg-white/5 active:scale-95 w-full sm:w-auto"
//           >
//             View Our Services
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { motion, Variants, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const huxQuotes = [
  "Still waiting for your website to load? ⚡",
  "Doing manual busywork? Let me automate that.",
  "Your website shouldn't just exist—it should convert.",
  "Stop burning ad budget on slow funnels.",
];

function ComicHuxBubble() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const quote = huxQuotes[quoteIdx];
    let currentIdx = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIdx < quote.length) {
        setDisplayedText(quote.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 35);

    const nextTimeout = setTimeout(() => {
      setQuoteIdx((prev) => (prev + 1) % huxQuotes.length);
    }, 5500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(nextTimeout);
    };
  }, [quoteIdx]);

  return (
    <div className="absolute top-[10%] sm:top-[8%] md:top-[14%] left-[62%] sm:left-[62%] md:left-[64%] z-40 pointer-events-none w-[180px] sm:w-[280px] md:w-[330px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={quoteIdx}
          initial={{ scale: 0.85, opacity: 0, x: -8 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 350, damping: 24 },
          }}
          exit={{ scale: 0.85, opacity: 0, transition: { duration: 0.2 } }}
          style={{ transformOrigin: "left center" }}
          className="relative px-4 py-3 rounded-2xl border border-cyan-400/40 bg-[#090e17]/95 backdrop-blur-xl shadow-[0_12px_35px_rgba(6,182,212,0.25)] select-none text-left"
        >
          {/* Header Tag */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Mr. Hux
            </span>
          </div>

          {/* Typing Text */}
          <p className="text-xs sm:text-sm font-medium text-white tracking-wide leading-snug font-sans min-h-[34px]">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-1.5 h-3.5 ml-1 bg-cyan-400 animate-pulse align-middle" />
            )}
          </p>

          {/* Clean Vector Arrow Pointing Directly Left (Towards Character) */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3.5 h-4 overflow-hidden">
            <svg
              className="w-full h-full text-[#090e17] drop-shadow-[-1px_0_0_rgba(6,182,212,0.4)]"
              viewBox="0 0 10 14"
              fill="currentColor"
            >
              <polygon points="10,0 0,7 10,14" />
            </svg>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set(clientX / innerWidth - 0.5);
    y.set(clientY / innerHeight - 0.5);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#07090e] pt-24 md:pt-28 pb-16"
      style={{ perspective: 1200 }}
    >
      {/* Background Ambience Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[650px] rounded-full bg-primary/15 blur-[80px] md:blur-[130px] transform-gpu" />
        <div className="absolute bottom-10 left-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-cyan-500/10 blur-[60px] md:blur-[100px] transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(37,150,190,0.2)]"
        >
          <Zap className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide uppercase">
            Your Digital Growth Partners
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] md:leading-[0.95] tracking-tight text-white"
        >
          We <span className="text-primary">Hustle.</span>{" "}
          <span className="relative inline-block">
            You Scale.
            <svg
              className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[10px] md:h-[14px]"
              viewBox="0 0 200 14"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M5 10 Q100 0 195 10"
                fill="transparent"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          With innovative digital strategies, we help startups become
          powerhouses and brands become movements. Let's do battle.
        </motion.p>

        {/* CENTERPIECE: Mascot Stage */}
        <motion.div
          variants={itemVariants}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative mt-12 md:mt-16 w-full max-w-[500px] md:max-w-[650px] flex items-center justify-start md:justify-center"
        >
          {/* Outlined Watermark */}
          <div
            style={{
              WebkitTextStroke: "1.5px rgba(37, 150, 190, 0.35)",
              color: "transparent",
            }}
            className="absolute top-20 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 md:-translate-y-1/2 font-black text-[95px] sm:text-[150px] md:text-[210px] tracking-tight select-none pointer-events-none whitespace-nowrap z-0 drop-shadow-[0_0_40px_rgba(37,150,190,0.2)]"
          >
            MR. HUX
          </div>

          <div className="absolute w-64 sm:w-88 md:w-96 h-64 sm:h-88 md:h-96 rounded-full bg-gradient-to-tr from-primary/30 via-cyan-400/20 to-transparent blur-[90px] pointer-events-none" />

          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(50px)" }}
            className="relative flex flex-col items-center z-10"
          >
            <ComicHuxBubble />

            {/* Mascot Image */}
            <div className="relative w-[300px] sm:w-[400px] md:w-[460px] h-[340px] sm:h-[440px] md:h-[490px]">
              <Image
                src="/hux-4.png"
                alt="Mr. Hux"
                fill
                priority
                sizes="(max-width: 768px) 300px, 460px"
                className="object-contain md:object-contain object-bottom drop-shadow-[0_20px_40px_rgba(37,150,190,0.35)]"
              />
            </div>
          </motion.div>

          {/* Soft Ground Glow */}
          <div className="absolute -bottom-1 w-3/4 h-10 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent blur-md rounded-full pointer-events-none" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading font-semibold text-white transition-all duration-200 hover:bg-[#1e7e9e] hover:shadow-[0_0_25px_rgba(37,150,190,0.4)] active:scale-95 w-full sm:w-auto"
          >
            Partner with Mr. Hux
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 font-heading font-semibold text-white transition-all duration-200 hover:border-primary/50 hover:bg-white/5 active:scale-95 w-full sm:w-auto"
          >
            View Our Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}