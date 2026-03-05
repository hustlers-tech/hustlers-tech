"use client"

import { Zap } from "lucide-react"
import LeadForm from "../components/leadForm/LeadForm"
import { motion, Variants } from "framer-motion"

export default function Contact(){

  const container : Variants = {
    hidden:{ opacity:0 },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2
      }
    }
  }

  const item : Variants= {
    hidden:{ opacity:0, y:40 },
    show:{
      opacity:1,
      y:0,
      transition:{ duration:0.6, ease:"easeOut" }
    }
  }

  const formAnim : Variants = {
    hidden:{ opacity:0, x:80, scale:0.95 },
    show:{
      opacity:1,
      x:0,
      scale:1,
      transition:{ duration:0.7, ease:"easeOut" }
    }
  }

  return(

    <section className="relative min-h-screen flex items-center px-4 pt-30 pb-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f1a] to-black"/>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center"
      >

        {/* LEFT CONTENT */}

        <motion.div
          variants={item}
          className="flex-1 text-center lg:text-left"
        >

          <motion.div
            initial={{scale:0.8,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5}}
            className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-sm text-primary mb-6"
          >
            <Zap size={16}/>
            Ready to Dominate Digital?
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6"
          >

            <span className="text-white">LET'S BUILD</span>

            <br/>

            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              YOUR EMPIRE
            </span>

          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0"
          >

            We turn bold brands into market leaders. Get a free strategy
            session with <span className="text-primary font-semibold">
            Hustlers Tech
            </span>.

          </motion.p>

        </motion.div>

        {/* FORM */}

        <motion.div
          variants={formAnim}
          className="w-full lg:w-[480px]"
        >
          <LeadForm/>
        </motion.div>

      </motion.div>

    </section>

  )
}