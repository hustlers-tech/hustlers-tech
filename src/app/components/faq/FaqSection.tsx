"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most premium websites take between 2–6 weeks depending on complexity, integrations, and features required."
  },
  {
    q: "Do you create custom designs or use templates?",
    a: "Everything we design is fully custom. Your brand gets a unique digital experience tailored to your goals."
  },
  {
    q: "Will my website be SEO optimized?",
    a: "Yes. Every project follows modern SEO standards including performance optimization, semantic markup, and technical SEO structure."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer maintenance, performance optimization, and growth support after launch."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in transforming outdated websites into modern high-converting digital experiences."
  }
]

export default function FaqSection() {

  const [active,setActive] = useState<number | null>(null)
  const router = useRouter();

  return (
    <>
 {/* Heading */}
        <div className="relative text-center overflow-hidden" id="faq">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
            <span className="text-sm font-medium text-primary tracking-wide">
              FAQ's
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-4xl md:text-6xl font-bold tracking-tight px-2 pb-10"
          >
            <span>
              Questions before{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                we build
              </span>
            </span>
          </motion.h2>
<section className="relative py-10 px-6 overflow-hidden">

{/* glow background */}


<div className="absolute inset-0 flex justify-center pointer-events-none">
<div className="w-[700px] h-[700px] bg-primary/10 blur-[150px] rounded-full"/>
</div>

<div className="max-w-5xl mx-auto relative z-10">


{/* faq list */}

<div className="space-y-6">

{faqs.map((faq,i)=>{

const open = active === i

return(

<motion.div
key={i}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
viewport={{once:true}}
className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
>

{/* hover glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">

<div className="absolute -inset-px bg-gradient-to-r from-primary/30 via-blue-500/20 to-primary/30 blur-xl"/>

</div>

<button
onClick={()=>setActive(open?null:i)}
className="relative w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
>

<h3 className="text-lg md:text-xl font-semibold text-white">
{faq.q}
</h3>

<motion.div
animate={{rotate: open ? 45 : 0}}
transition={{duration:0.3}}
className="text-primary"
>
<Plus size={24}/>
</motion.div>

</button>


<AnimatePresence>

{open && (

<motion.div
initial={{height:0,opacity:0}}
animate={{height:"auto",opacity:1}}
exit={{height:0,opacity:0}}
transition={{duration:0.4}}
>

<p className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-left">
{faq.a}
</p>

</motion.div>

)}

</AnimatePresence>
</motion.div>

)

})}

</div>

</div>

<button onClick={()=>router.push("/faq")} className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer mt-10">
            View All
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
</section>
        </div>
    
    </>


  )
}