// "use client";

// import { motion } from "framer-motion";
// import {
//   Award,
//   Clock,
//   Eye,
//   Heart,
//   Shield,
//   Target,
//   Users,
//   Zap,
// } from "lucide-react";
// import Image from "next/image";
// import CTA from "../components/webDev/CTA";

// const stats = [
//   { value: "10+", label: "Projects Delivered" },
//   { value: "98%", label: "Client Retention" },
//   { value: "5+", label: "Years Experience" },
//   { value: "15+", label: "Happy Clients" },
// ];

// const values = [
//   {
//     icon: Target,
//     title: "Results-Driven",
//     desc: "Every strategy is built around measurable outcomes that directly impact your bottom line.",
//   },
//   {
//     icon: Heart,
//     title: "Client-First",
//     desc: "Your success is our success. We treat every project as if it were our own business.",
//   },
//   {
//     icon: Zap,
//     title: "Innovation",
//     desc: "We stay ahead of trends, leveraging cutting-edge tools and techniques for maximum impact.",
//   },
//   {
//     icon: Shield,
//     title: "Transparency",
//     desc: "No hidden fees, no jargon. Clear communication and honest reporting at every step.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     desc: "We work as an extension of your team, aligning with your vision and goals seamlessly.",
//   },
//   {
//     icon: Clock,
//     title: "Commitment",
//     desc: "Deadlines matter. We deliver on time, every time, without compromising quality.",
//   },
// ];
// const AboutClient = () => {
//   return (
//     <>
//       <h1 className="sr-only absolute">About us</h1>

//       {/* Hero Section */}

//       <section className="relative min-h-[70vh] flex items-center overflow-hidden">
//         <div className="about-hero-img absolute inset-0">
//           <img
//             src="/images/about-team.jpg"
//             alt="Hustlers Tech team at work"
//             className="w-full h-full object-cover"
//             width={1000}
//             height={720}
//           />

//           <div className="absolute inset-0 bg-black/70" />
//         </div>
//         <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <span className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
//               About us
//             </span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
//             style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//           >
//             We Don't Just Market. <br />
//             <span className="bg-gradient-to-r from-primary to-[hsl(195,67%,60%)] bg-clip-text text-transparent">
//               We Hustle.
//             </span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             A passionate team of strategists, designers, and developers obsessed
//             with helping businesses dominate the digital landscape.
//           </motion.p>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="relative z-10 -mt-12">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#11161d99] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl shadow-black/20"
//           >
//             {stats.map((s, i) => (
//               <motion.div
//                 key={s.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.1,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 whileHover={{ y: -5 }}
//                 className="text-center relative group"
//               >
//                 <div
//                   className="text-3xl md:text-5xl font-bold text-primary tracking-tighter transition-colors duration-300 group-hover:text-white"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   {s.value}
//                 </div>

//                 <div className="text-[10px] md:text-xs text-muted-foreground mt-2 uppercase tracking-[0.2em] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
//                   {s.label}
//                 </div>

//                 <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <h2
//               className="text-3xl md:text-4xl font-bold mb-6"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Our <span className="text-primary">Story</span>
//             </h2>
//             <p className="text-muted-foreground leading-relaxed mb-4">
//               Hustlers Tech started with a simple belief: every business, no
//               matter the size, deserves world-class digital marketing. Founded
//               in 2025, we began as a small team of passionate marketers
//               frustrated by the cookie-cutter approaches dominating the
//               industry.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-4">
//               Today, we've grown into a full-service digital agency delivering
//               exceptional results across web development, SEO, social media,
//               PPC, content marketing, and graphic design. Our secret? We treat
//               every client's business like our own.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               We don't believe in vanity metrics. We believe in revenue, growth,
//               and long-term partnerships built on trust and transparency.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             <Image
//               src={"/images/about-office.jpg"}
//               alt="Hustlers Tech office"
//               className="rounded-2xl border border-border shadow-2xl"
//               loading="lazy"
//               width={1280}
//               height={720}
//             />
//             <div className="absolute -bottom-6 -left-6 bg-primary/10 border border-primary/30 rounded-xl p-5 backdrop-blur-md">
//               <Award className="w-8 h-8 text-primary mb-2" />
//               <div className="text-sm font-semibold text-foreground">
//                 Top-Rated Agency
//               </div>
//               <div className="text-xs text-muted-foreground">
//                 Trusted by 10+ brands
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission and Vision */}
//       <section className="py-20 px-6 bg-secondary/30">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-[#11161d99] backdrop-blur-md border border-white/10 rounded-2xl p-8"
//           >
//             <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
//               <Target className="w-7 h-7 text-primary" />
//             </div>
//             <h3
//               className="text-2xl font-bold mb-3"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Our Mission
//             </h3>
//             <p className="text-muted-foreground leading-relaxed">
//               To empower businesses with data-driven digital strategies that
//               deliver measurable growth, foster authentic connections, and
//               create lasting competitive advantages in an ever-evolving digital
//               world.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.15 }}
//             className="bg-[#11161d99] backdrop-blur-md border border-white/10 rounded-2xl p-8"
//           >
//             <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
//               <Eye className="w-7 h-7 text-primary" />
//             </div>
//             <h3
//               className="text-2xl font-bold mb-3"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Our Vision
//             </h3>
//             <p className="text-muted-foreground leading-relaxed">
//               To become the most trusted digital partner for ambitious brands
//               worldwide — known for relentless innovation, transparent
//               partnerships, and results that speak louder than promises.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-24 px-6 overflow-hidden bg-black">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2
//               className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               What We <span className="text-primary">Stand For</span>
//             </h2>
//             <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
//               The principles that guide every decision, every campaign, and
//               every client relationship.
//             </p>
//           </motion.div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {values.map((v, i) => (
//               <motion.div
//                 key={v.title}
//                 // Entry Animation
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 // Hover Interaction (No Tilt, just smooth lift and scale)
//                 whileHover={{ y: -8 }}
//                 className="group relative bg-[#0f1115] border border-white/5 rounded-[2rem] p-8 transition-all duration-500"
//               >
//                 {/* 1. Subtle Radial Background Glow on Hover */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(37,150,190,0.15),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* 2. Top-Right Accent Light */}
//                 <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />

//                 {/* Icon Container */}
//                 <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
//                   <v.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
//                 </div>

//                 {/* Text Content */}
//                 <h4 className="relative z-10 text-xl font-bold mb-3 text-white tracking-tight">
//                   {v.title}
//                 </h4>
//                 <p className="relative z-10 text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
//                   {v.desc}
//                 </p>

//                 {/* 3. Subtle Border "Beam" on Hover */}
//                 <div className="absolute inset-0 rounded-[2rem] border border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />

//                 {/* 4. Bottom Corner Spark */}
//                 <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-primary/40"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <CTA
//         title="Ready to Grow?"
//         description="Let's build something extraordinary together. Your next chapter of growth starts with a conversation."
//         buttonText="Let's Talk"
//       />
//     </>
//   );
// };

// export default AboutClient;

// "use client";

// import { motion } from "framer-motion";
// import {
//   Target,
//   Heart,
//   Zap,
//   Shield,
//   Users,
//   Clock,
//   Compass,
//   Sparkles,
//   Rocket,
//   TrendingUp,
//   Eye,
//   CheckCircle2,
//   Cpu,
//   Layers,
//   Activity,
//   ArrowRight,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import CTA from "../components/webDev/CTA";

// // Exact numbers & labels from your provided text
// const stats = [
//   { value: "10+", label: "Projects Delivered" },
//   { value: "98%", label: "Client Retention" },
//   { value: "5+", label: "Years Experience" },
//   { value: "15+", label: "Happy Clients" },
// ];

// // Exact 01-04 Approach from your provided text
// const processSteps = [
//   {
//     num: "01",
//     title: "Discovery and Strategy",
//     p1: "We start by learning about your business, your audience and your goals.",
//     p2: "This provides a foundation on which we can build a strategy that works for your business, rather than forcing your business into a standard template.",
//     icon: Compass,
//   },
//   {
//     num: "02",
//     title: "Creative Planning",
//     p1: "Strategy needs creativity to get off the ground.",
//     p2: "We blend content branding with design and marketing, to create a clear and connected roadmap for your digital presence.",
//     icon: Sparkles,
//   },
//   {
//     num: "03",
//     title: "Execution and Launch",
//     p1: "This is where ideas come to life.",
//     p2: "We do it all, from design and development to launches of campaigns. We are focused on producing work that is on strategy and fit for purpose.",
//     icon: Rocket,
//   },
//   {
//     num: "04",
//     title: "Optimisation and Scale",
//     p1: "Launch isn’t the finish line.",
//     p2: "We look at what is working, what needs work, we test new ideas and refine our approach to allow businesses to build on their progress and create opportunities for future growth.",
//     icon: TrendingUp,
//   },
// ];

// // Exact values from your provided text
// const values = [
//   {
//     icon: Target,
//     title: "Results-Driven",
//     p1: "We build strategies based on measurable results.",
//     p2: "Every campaign, design, and digital solution needs to have a clear purpose.",
//   },
//   {
//     icon: Heart,
//     title: "Client-First",
//     p1: "We care about your business.",
//     p2: "We take on every project as if it were our own business and are focused on learning what success means for you.",
//   },
//   {
//     icon: Zap,
//     title: "Innovation",
//     p1: "Technology moves quickly.",
//     p2: "We keep learning, trying new ideas and looking for better tools and techniques to help our clients stay ready for what’s next.",
//   },
//   {
//     icon: Shield,
//     title: "Transparency",
//     p1: "Honest communication is the basis of good partnerships.",
//     p2: "We believe in clear conversations, straight forward reporting and keeping our clients informed through the process.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     p1: "We work with our clients to become an extension of their team.",
//     p2: "Your ideas, feedback and goals continue to play a large part in the process.",
//   },
//   {
//     icon: Clock,
//     title: "Commitment",
//     p1: "Ideas are nothing without action.",
//     p2: "We meet deadlines, we follow our quality guidelines and we strive to provide work that meets the expectations we set together.",
//   },
// ];

// // Exact differentiators from your provided text
// const reasons = [
//   {
//     title: "One team, multiple capabilities.",
//     desc: "We've got in-house expertise in strategy, design, development, content, SEO, social media and paid marketing.",
//   },
//   {
//     title: "Solutions built around you.",
//     desc: "We don't believe in forcing every business to follow the same strategy. We build solutions to match your objectives and requirements.",
//   },
//   {
//     title: "Fast without compromising quality.",
//     desc: "Businesses need momentum and we know that. Our goal is to have efficient turnaround times, with quality at the core of everything we do.",
//   },
//   {
//     title: "Built to grow with you.",
//     desc: "Your needs will change as your business grows. We’re trying to be supportive of that evolution.",
//   },
//   {
//     title: "A collaborative partnership.",
//     desc: "We want to be in the game, not on the sidelines. We want to know about your business and work with you to grow in a meaningful way.",
//   },
// ];

// export default function AboutClient() {
//   return (
//     <main className="relative min-h-screen bg-[#020408] text-white selection:bg-[#2596be]/30 overflow-x-hidden">
      
//       {/* BACKGROUND GRAPHICS & TECH AMBIENCE */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2596be]/12 rounded-full blur-[150px] transform-gpu" />
//         <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] transform-gpu" />
//         <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-[#2596be]/10 rounded-full blur-[140px] transform-gpu" />
        
//         {/* Subtle Tech Grid */}
//         <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

//         {/* Diagonal Beams */}
//         <div className="absolute top-1/4 -left-20 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#2596be]/25 to-transparent rotate-45" />
//         <div className="absolute top-2/3 -right-20 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -rotate-45" />
//       </div>

//       <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center">
//   <div className="max-w-4xl mx-auto">
//     {/* Badge - Fast entry without artificial delay */}
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//       className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2596be]/30 bg-[#2596be]/10 text-[#2596be] text-xs font-mono uppercase tracking-[0.2em] mb-6"
//     >
//       <span className="relative flex h-2 w-2">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2596be] opacity-75" />
//         <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2596be]" />
//       </span>
//       About Hustlers Tech
//     </motion.div>

//     {/* Main Title - Immediate Paint */}
//     <motion.h1
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.45, ease: "easeOut" }}
//       className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 text-white"
//     >
//       We Don’t Just Market. <br />
//       <span className="bg-gradient-to-r from-white via-cyan-200 to-[#2596be] bg-clip-text text-transparent">
//         We Hustle.
//       </span>
//     </motion.h1>

//     {/* Primary Punchline */}
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.4, delay: 0.1 }}
//       className="text-lg sm:text-2xl text-cyan-400/90 font-medium max-w-2xl mx-auto mb-10 tracking-wide font-mono"
//     >
//       Digital growth is more than just being online.
//     </motion.p>

//     {/* Editorial Typographic Narrative (Cards removed, zero lag, high readability) */}
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.45, delay: 0.15 }}
//       className="relative max-w-3xl mx-auto text-left border-l-2 border-[#2596be]/40 pl-6 sm:pl-8 space-y-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed"
//     >
//       <p>
//         At Hustlers Tech, we create right strategy, think creatively backed by latest technology with disciplined execution to help businesses build more powerful digital brands and get closer to their growth goals.
//       </p>
      
//       <p className="text-zinc-400">
//         We’re a team of strategists, designers, developers and digital marketers that believe good digital work should do more than just make you look good. <span className="text-white font-normal">It must have a measurable impact on businesses.</span>
//       </p>

//       <p className="text-zinc-400">
//         Whether you’re building a new brand or looking to take an existing one further, we bring the clarity, creativity and execution to move ahead.
//       </p>
//     </motion.div>
//   </div>
// </section>
      

//       {/* 2. STATS & NUMBERS SECTION */}
//       <section className="relative z-10 px-6 mb-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="relative rounded-3xl border border-white/10 bg-[#070b12]/90 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            
//             <div className="absolute top-0 right-0 w-64 h-64 bg-[#2596be]/10 rounded-full blur-3xl pointer-events-none" />

//             <div className="text-center mb-10">
//               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
//                 Our Numbers Tell Part of the Story
//               </h2>
//             </div>

//             {/* Grid Counters */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
//               {stats.map((s, i) => (
//                 <div key={i} className="text-center group">
//                   <div className="text-4xl sm:text-6xl font-black text-[#2596be] tracking-tight group-hover:text-cyan-300 transition-colors">
//                     {s.value}
//                   </div>
//                   <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono mt-2 font-semibold">
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Explanatory Narrative */}
//             <div className="pt-8 text-center max-w-3xl mx-auto space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
//               <p className="text-white font-medium text-lg">
//                 Numbers are only one part of what we do.
//               </p>
//               <p>
//                 There is a business behind every project that trusted us with their digital presence. Every client you keep is a relationship you’ve built on communication, collaboration, and results.
//               </p>
//               <p className="text-[#2596be] font-semibold">
//                 That is what we value most.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. HOW HUSTLERS TECH STARTED WITH MR. HUX STRATEGIST ASSET */}
//       <section className="relative z-10 py-16 px-6">
//         <div className="max-w-6xl mx-auto space-y-20">
          
//           {/* Part A: Origin with Mr. Hux Analytics/Strategy Character */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* Left Content */}
//             <div className="lg:col-span-7 space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
//               <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
//                 Origins
//               </span>
//               <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
//                 How Hustlers Tech Started
//               </h2>
//               <p className="text-white font-medium text-base sm:text-lg">
//                 Hustlers Tech began with a simple idea.
//               </p>
//               <p>
//                 Digital marketing should be available to all businesses, big or small.
//               </p>
//               <p>
//                 We began in 2025 as a small group of passionate marketers seeking new methods; too many companies got generic plans without considering their goals, audiences and issues.
//               </p>
//               <p>
//                 We meant to make that different.
//               </p>
//               <p>
//                 Because of this, Hustlers Tech was built around a more useful approach. First, we listen. We know how the business works. Our job is to find the chance.
//               </p>
//               <p>
//                 We can now do graphic design, SEO, social media marketing, pay-per-click (PPC), content marketing, and building websites.
//               </p>
//               <p className="text-white font-medium">
//                 It's about getting the right services to work together to fix the right issue.
//               </p>
//             </div>

//             {/* Right Column: Strategic Mr. Hux Holographic Stage */}
//             <div className="lg:col-span-5 relative flex items-center justify-center select-none mt-6 lg:mt-0">
//               {/* Cyan Ambient Backlight */}
//               <div className="absolute w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-[#2596be]/20 blur-[90px] pointer-events-none" />

//               {/* Floating Mr. Hux Strategic Asset */}
//               <motion.div
//                 animate={{ y: [-6, 6, -6] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                 className="relative w-[300px] sm:w-[380px] h-[400px] sm:h-[480px] z-10"
//               >
//                 <Image
//                   src="/mr-hux-about.png"
//                   alt="Mr. Hux - Growth & Strategy Architect"
//                   fill
//                   loading="lazy"
//                   sizes="(max-width: 768px) 300px, 380px"
//                   className="object-contain object-center drop-shadow-[0_25px_45px_rgba(37,150,190,0.35)]"
//                 />
//               </motion.div>

//               {/* Live Badge Attached to Hux */}
//               <div className="absolute -bottom-2 right-2 sm:right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-cyan-400/30 bg-[#070b12]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
//                 </span>
//                 <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
//                   Data-Driven Strategy
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Part B: More Than a Digital Agency */}
//           <div className="rounded-3xl border border-[#2596be]/20 bg-gradient-to-br from-[#070c14] to-[#03060a] p-8 sm:p-12 relative overflow-hidden">
//             <div className="max-w-3xl space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
//               <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
//                 Partnership
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
//                 More Than a Digital Agency
//               </h2>
//               <p className="text-white font-medium text-lg">
//                 We view ourselves as a digital growth partner. That’s a distinction that matters.
//               </p>
//               <p>
//                 A business doesn’t need another agency simply churning out reports or ticking boxes. It needs a team that understands what it is trying to achieve, and knows how different digital channels can work together.
//               </p>
//               <p>
//                 That’s how we approach every project.
//               </p>
//               <p>
//                 Our work combines strategy, creativity, technology, and performance. We build business-focused websites. Content is made to interest the right people, with SEO and paid campaigns, you can get more opportunities and be seen.
//               </p>
//               <div className="pt-2 border-l-2 border-[#2596be] pl-4 text-white">
//                 <p className="font-semibold text-base">But most of all, we keep asking the same question.</p>
//                 <p className="italic text-[#2596be] text-lg font-bold">Is this helping the business move forward?</p>
//                 <p className="text-zinc-400 text-xs mt-1">If the answer is no, we rethink it.</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 4. OUR APPROACH TO DIGITAL GROWTH (01 - 04) */}
//       <section className="relative z-10 py-24 px-6 bg-[#030509]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
//               Process
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
//               Our Approach to Digital Growth
//             </h2>
//             <p className="text-zinc-400 text-sm sm:text-base mt-3">
//               Great results come from a process that connects each part of the work, we think.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {processSteps.map((s) => (
//               <div
//                 key={s.num}
//                 className="group relative rounded-2xl border border-white/10 bg-[#070a10] p-6 hover:border-[#2596be]/50 transition-all duration-300 flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-3xl font-black text-[#2596be]/40 font-mono group-hover:text-[#2596be] transition-colors">
//                       {s.num}
//                     </span>
//                     <s.icon className="w-5 h-5 text-zinc-500 group-hover:text-[#2596be] transition-colors" />
//                   </div>
//                   <h3 className="text-lg font-bold text-white mb-3">
//                     {s.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-2">
//                     {s.p1}
//                   </p>
//                   <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
//                     {s.p2}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. WHAT WE STAND FOR (VALUES) */}
//       <section className="relative z-10 py-24 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center max-w-xl mx-auto mb-16">
//             <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
//               Core Foundation
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
//               What We Stand For
//             </h2>
//             <p className="text-zinc-400 text-xs sm:text-sm mt-3">
//               Our values guide how we work and treat our clients.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {values.map((v) => (
//               <div
//                 key={v.title}
//                 className="rounded-2xl border border-white/5 bg-[#06090e] p-7 hover:border-[#2596be]/40 hover:-translate-y-1.5 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#2596be]">
//                   <v.icon className="w-6 h-6" />
//                 </div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   {v.title}
//                 </h4>
//                 <p className="text-xs sm:text-sm text-zinc-300 font-medium mb-1.5">
//                   {v.p1}
//                 </p>
//                 <p className="text-xs text-zinc-500 leading-relaxed font-light">
//                   {v.p2}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. WHY BUSINESSES CHOOSE HUSTLERS TECH */}
//       <section className="relative z-10 py-24 px-6 bg-[#030509]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
//               The Difference
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
//               Why Businesses Choose Hustlers Tech
//             </h2>
//             <p className="text-zinc-400 text-xs sm:text-sm mt-2">
//               There are plenty of digital agencies out there to choose from.
//             </p>
//             <p className="text-white text-sm font-semibold mt-1">
//               We believe that the difference is the way in which we work.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {reasons.map((r, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl border border-white/5 bg-[#070b12] p-7 hover:border-white/15 transition-all"
//               >
//                 <div className="h-1.5 w-7 bg-[#2596be] rounded-full mb-5" />
//                 <h4 className="text-base sm:text-lg font-bold text-white mb-2">
//                   {r.title}
//                 </h4>
//                 <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
//                   {r.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 7. MISSION & VISION */}
//       <section className="relative z-10 py-20 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
//           {/* Mission */}
//           <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10 backdrop-blur-xl">
//             <div className="w-12 h-12 rounded-xl bg-[#2596be]/10 border border-[#2596be]/30 flex items-center justify-center mb-6">
//               <Target className="w-6 h-6 text-[#2596be]" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-3">
//               Our Mission
//             </h3>
//             <div className="space-y-3 text-zinc-400 text-sm leading-relaxed font-light">
//               <p>
//                 Our mission is to enable businesses with data driven digital strategies that drive measurable growth, foster authentic connections and create sustainable competitive advantages.
//               </p>
//               <p>
//                 Our work is about helping businesses make smarter digital decisions and build smarter relationships with their audiences.
//               </p>
//               <p>
//                 It’s because sustainable development isn’t about jumping on every single trend.
//               </p>
//               <p className="text-white font-medium">
//                 It's about knowing what matters, doing it well, and getting better.
//               </p>
//             </div>
//           </div>

//           {/* Vision */}
//           <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10 backdrop-blur-xl">
//             <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-6">
//               <Eye className="w-6 h-6 text-cyan-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-3">
//               Our Vision
//             </h3>
//             <div className="space-y-3 text-zinc-400 text-sm leading-relaxed font-light">
//               <p>
//                 We want to be the trusted global digital partner for ambitious brands.
//               </p>
//               <p>
//                 We want to be known for relentless innovation, transparent partnerships, creative thinking and results that speak louder than promises at Hustlers Tech.
//               </p>
//               <p>
//                 As technology, platforms and customer behaviour evolve, we will continue to learn and adapt with them.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 8. CLOSING CTA SECTION */}
//       <section className="relative z-10 py-24 px-6 text-center border-t border-white/10">
//         <div className="max-w-4xl mx-auto space-y-6">
//           <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
//             Ready to Hustle Towards Your Next Stage of Growth?
//           </h2>
          
//           <div className="space-y-2 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
//             <p>Your business is unique. Your goals, challenges, audience and opportunities are different.</p>
//             <p className="text-white font-medium">Your digital strategy should be no different.</p>
//             <p>
//               At Hustlers Tech we combine strategy, creativity, technology and performance to help businesses build better digital experiences and create meaningful growth.
//             </p>
//             {/* <p className="text-zinc-500 text-xs sm:text-sm pt-2">
//               New website? Better search visibility? Engaging content? Better social media? Paid campaigns? A digital growth strategy? Whatever your needs may be; we're ready to partner with you.
//             </p> */}
//           </div>

//           <div className="pt-4">
//             <p className="text-xl sm:text-2xl font-bold text-white">You bring the ambition.</p>
//             <p className="text-xl sm:text-2xl font-bold text-[#2596be]">We bring the hustle.</p>
//           </div>

//           <div className="pt-6">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2596be] px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-[#1e7e9e] hover:shadow-[0_0_30px_rgba(37,150,190,0.5)] active:scale-95"
//             >
//               Let's Talk <ArrowRight width={18} height={18}/>
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }

"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Zap,
  Shield,
  Users,
  Clock,
  Compass,
  Sparkles,
  Rocket,
  TrendingUp,
  Eye,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Exact numbers & labels from your provided text
const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Happy Clients" },
];

// Exact 01-04 Approach from your provided text
const processSteps = [
  {
    num: "01",
    title: "Discovery and Strategy",
    p1: "We start by learning about your business, your audience and your goals.",
    p2: "This provides a foundation on which we can build a strategy that works for your business, rather than forcing your business into a standard template.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Creative Planning",
    p1: "Strategy needs creativity to get off the ground.",
    p2: "We blend content branding with design and marketing, to create a clear and connected roadmap for your digital presence.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Execution and Launch",
    p1: "This is where ideas come to life.",
    p2: "We do it all, from design and development to launches of campaigns. We are focused on producing work that is on strategy and fit for purpose.",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Optimisation and Scale",
    p1: "Launch isn’t the finish line.",
    p2: "We look at what is working, what needs work, we test new ideas and refine our approach to allow businesses to build on their progress and create opportunities for future growth.",
    icon: TrendingUp,
  },
];

// Exact values from your provided text
const values = [
  {
    icon: Target,
    title: "Results-Driven",
    p1: "We build strategies based on measurable results.",
    p2: "Every campaign, design, and digital solution needs to have a clear purpose.",
  },
  {
    icon: Heart,
    title: "Client-First",
    p1: "We care about your business.",
    p2: "We take on every project as if it were our own business and are focused on learning what success means for you.",
  },
  {
    icon: Zap,
    title: "Innovation",
    p1: "Technology moves quickly.",
    p2: "We keep learning, trying new ideas and looking for better tools and techniques to help our clients stay ready for what’s next.",
  },
  {
    icon: Shield,
    title: "Transparency",
    p1: "Honest communication is the basis of good partnerships.",
    p2: "We believe in clear conversations, straight forward reporting and keeping our clients informed through the process.",
  },
  {
    icon: Users,
    title: "Collaboration",
    p1: "We work with our clients to become an extension of their team.",
    p2: "Your ideas, feedback and goals continue to play a large part in the process.",
  },
  {
    icon: Clock,
    title: "Commitment",
    p1: "Ideas are nothing without action.",
    p2: "We meet deadlines, we follow our quality guidelines and we strive to provide work that meets the expectations we set together.",
  },
];

// Exact differentiators from your provided text
const reasons = [
  {
    title: "One team, multiple capabilities.",
    desc: "We've got in-house expertise in strategy, design, development, content, SEO, social media and paid marketing.",
  },
  {
    title: "Solutions built around you.",
    desc: "We don't believe in forcing every business to follow the same strategy. We build solutions to match your objectives and requirements.",
  },
  {
    title: "Fast without compromising quality.",
    desc: "Businesses need momentum and we know that. Our goal is to have efficient turnaround times, with quality at the core of everything we do.",
  },
  {
    title: "Built to grow with you.",
    desc: "Your needs will change as your business grows. We’re trying to be supportive of that evolution.",
  },
  {
    title: "A collaborative partnership.",
    desc: "We want to be in the game, not on the sidelines. We want to know about your business and work with you to grow in a meaningful way.",
  },
];

function AboutClient() {
  return (
    <main className="relative min-h-screen bg-[#020408] text-white selection:bg-[#2596be]/30 overflow-x-hidden">
      
      {/* 
        OPTIMIZED BACKGROUND ENGINE:
        Exact same visual look using hardware-accelerated radial-gradients 
        instead of browser-lagging CPU filter blurs.
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none [contain:paint]">
        {/* Top Center Ambient Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.18)_0%,transparent_70%)] will-change-transform" />
        
        {/* Mid-Left Ambient Glow */}
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14)_0%,transparent_70%)] will-change-transform" />
        
        {/* Bottom-Right Ambient Glow */}
        <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.14)_0%,transparent_70%)] will-change-transform" />
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

        {/* Diagonal Cyber Beams */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#2596be]/25 to-transparent rotate-45 transform-gpu" />
        <div className="absolute top-2/3 -right-20 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -rotate-45 transform-gpu" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-28 pb-14 md:pt-40 md:pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2596be]/30 bg-[#2596be]/10 text-[#2596be] text-xs font-mono uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2596be] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2596be]" />
            </span>
            About Hustlers Tech
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-white">
            We Don’t Just Market. <br />
            <span className="bg-gradient-to-r from-white via-[#2596be] to-[#2596be] bg-clip-text text-transparent">
              We Hustle.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-cyan-400/90 font-medium max-w-4xl mx-auto mb-10 tracking-wide font-mono">
            Digital growth is more than just being online.
          </p>

          <div className="relative max-w-3xl mx-auto text-left border-l-2 border-[#2596be]/40 pl-5 sm:pl-8 space-y-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
            <p>
              At Hustlers Tech, we create right strategy, think creatively backed by latest technology with disciplined execution to help businesses build more powerful digital brands and get closer to their growth goals.
            </p>
            
            <p className="text-zinc-400">
              We’re a team of strategists, designers, developers and digital marketers that believe good digital work should do more than just make you look good. <span className="text-white font-normal">It must have a measurable impact on businesses.</span>
            </p>

            <p className="text-zinc-400">
              Whether you’re building a new brand or looking to take an existing one further, we bring the clarity, creativity and execution to move ahead.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS & NUMBERS SECTION */}
      <section className="relative z-10 px-4 sm:px-6 mb-20 md:mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-[#070b12]/95 md:backdrop-blur-xl p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                Our Numbers Tell Part of the Story
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="text-3xl sm:text-6xl font-black text-[#2596be] tracking-tight group-hover:text-cyan-300 transition-colors">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400 font-mono mt-2 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 text-center max-w-3xl mx-auto space-y-2.5 text-zinc-300 text-xs sm:text-base leading-relaxed">
              <p className="text-white font-medium text-sm sm:text-lg">
                Numbers are only one part of what we do.
              </p>
              <p>
                There is a business behind every project that trusted us with their digital presence. Every client you keep is a relationship you’ve built on communication, collaboration, and results.
              </p>
              <p className="text-[#2596be] font-semibold">
                That is what we value most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW HUSTLERS TECH STARTED WITH MR. HUX STRATEGIST ASSET */}
      <section className="relative z-10 py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
                Origins
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                How Hustlers Tech Started
              </h2>
              <p className="text-white font-medium text-base sm:text-lg">
                Hustlers Tech began with a simple idea.
              </p>
              <p>
                Digital marketing should be available to all businesses, big or small.
              </p>
              <p>
                We began in 2025 as a small group of passionate marketers seeking new methods; too many companies got generic plans without considering their goals, audiences and issues.
              </p>
              <p>
                We meant to make that different.
              </p>
              <p>
                Because of this, Hustlers Tech was built around a more useful approach. First, we listen. We know how the business works. Our job is to find the chance.
              </p>
              <p>
                We can now do graphic design, SEO, social media marketing, pay-per-click (PPC), content marketing, and building websites.
              </p>
              <p className="text-white font-medium">
                It's about getting the right services to work together to fix the right issue.
              </p>
            </div>

            {/* Optimized Mascot Placement */}
            <div className="lg:col-span-5 relative flex items-center justify-center select-none mt-4 lg:mt-0">
              <div className="absolute w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.25)_0%,transparent_70%)] pointer-events-none" />

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[280px] sm:w-[380px] h-[360px] sm:h-[480px] z-10"
              >
                <Image
                  src="/mr-hux-about.png"
                  alt="Mr. Hux - Growth & Strategy Architect"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                  className="object-contain object-center drop-shadow-[0_15px_30px_rgba(37,150,190,0.35)]"
                />
              </motion.div>

              <div className="absolute -bottom-2 right-2 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border border-cyan-400/30 bg-[#070b12] shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
                  Data-Driven Strategy
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border border-[#2596be]/20 bg-gradient-to-br from-[#070c14] to-[#03060a] p-6 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
                Partnership
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                More Than a Digital Agency
              </h2>
              <p className="text-white font-medium text-base sm:text-lg">
                We view ourselves as a digital growth partner. That’s a distinction that matters.
              </p>
              <p>
                A business doesn’t need another agency simply churning out reports or ticking boxes. It needs a team that understands what it is trying to achieve, and knows how different digital channels can work together.
              </p>
              <p>
                That’s how we approach every project.
              </p>
              <p>
                Our work combines strategy, creativity, technology, and performance. We build business-focused websites. Content is made to interest the right people, with SEO and paid campaigns, you can get more opportunities and be seen.
              </p>
              <div className="pt-2 border-l-2 border-[#2596be] pl-4 text-white">
                <p className="font-semibold text-sm sm:text-base">But most of all, we keep asking the same question.</p>
                <p className="italic text-[#2596be] text-base sm:text-lg font-bold">Is this helping the business move forward?</p>
                <p className="text-zinc-400 text-xs mt-1">If the answer is no, we rethink it.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

       {/* 7. MISSION & VISION */}
      <section className="relative z-10 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-[#05080e] p-6 sm:p-10">
            <div className="w-10 h-10 rounded-xl bg-[#2596be]/10 border border-[#2596be]/30 flex items-center justify-center mb-5">
              <Target className="w-5 h-5 text-[#2596be]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Our Mission
            </h3>
            <div className="space-y-3 text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              <p>
                Our mission is to enable businesses with data driven digital strategies that drive measurable growth, foster authentic connections and create sustainable competitive advantages.
              </p>
              <p>
                Our work is about helping businesses make smarter digital decisions and build smarter relationships with their audiences.
              </p>
              <p>
                It’s because sustainable development isn’t about jumping on every single trend.
              </p>
              <p className="text-white font-medium">
                It's about knowing what matters, doing it well, and getting better.
              </p>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-[#05080e] p-6 sm:p-10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-5">
              <Eye className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Our Vision
            </h3>
            <div className="space-y-3 text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              <p>
                We want to be the trusted global digital partner for ambitious brands.
              </p>
              <p>
                We want to be known for relentless innovation, transparent partnerships, creative thinking and results that speak louder than promises at Hustlers Tech.
              </p>
              <p>
                As technology, platforms and customer behaviour evolve, we will continue to learn and adapt with them.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH TO DIGITAL GROWTH (01 - 04) */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-[#030509]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
              Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              Our Approach to Digital Growth
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3">
              Great results come from a process that connects each part of the work, we think.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {processSteps.map((s) => (
              <div
                key={s.num}
                className="group relative rounded-2xl border border-white/10 bg-[#070a10] p-6 hover:border-[#2596be]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-[#2596be]/40 font-mono group-hover:text-[#2596be] transition-colors">
                      {s.num}
                    </span>
                    <s.icon className="w-5 h-5 text-zinc-500 group-hover:text-[#2596be] transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-2">
                    {s.p1}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
                    {s.p2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE STAND FOR (VALUES) */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2596be]">
              Core Foundation
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3">
              Our values guide how we work and treat our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/5 bg-[#06090e] p-6 sm:p-7 hover:border-[#2596be]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#2596be]">
                  <v.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium mb-1.5">
                  {v.p1}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  {v.p2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING SECTION */}
      <section className="relative z-10 py-16 md:py-24 px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Hustle Towards Your Next Stage of Growth?
          </h2>
          
          <div className="space-y-2 text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light">
            <p>Your business is unique. Your goals, challenges, audience and opportunities are different.</p>
            <p className="text-white font-medium">Your digital strategy should be no different.</p>
            <p>
              At Hustlers Tech we combine strategy, creativity, technology and performance to help businesses build better digital experiences and create meaningful growth.
            </p>
          </div>

          <div className="pt-2">
            <p className="text-lg sm:text-xl font-bold text-white">You bring the ambition.</p>
            <p className="text-lg sm:text-xl font-bold text-[#2596be]">We bring the hustle.</p>
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2596be] px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#1e7e9e]"
            >
              Let's Talk <ArrowRight width={18} height={18}/>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default memo(AboutClient);