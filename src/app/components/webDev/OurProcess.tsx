import {motion} from "framer-motion"
import { ArrowRight } from "lucide-react";

const processSteps = [
  { step: "01", title: "Discovery", description: "We dive deep into your goals, audience, and competitors to build a solid strategy." },
  { step: "02", title: "Design", description: "Wireframes and high-fidelity mockups crafted for maximum user engagement." },
  { step: "03", title: "Development", description: "Clean, scalable code built with modern frameworks and best practices." },
  { step: "04", title: "Launch & Support", description: "Seamless deployment, rigorous QA, and ongoing maintenance to keep you ahead." },
];


const OurProcess = () => {
  return (
     <section className="py-10 lg:py-5 relative z-10 max-w-7xl mx-auto">
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full blur-[200px]" style={{ background: "hsl(195 67% 20% )" }} />
        <div className="relative text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            Workflow
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-6xl font-bold tracking-tight px-2 pb-5"
        >
          <span>
            Our {""}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Process
            </span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-md tracking-tight px-4 pb-10"
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae in inventore fugit dolorem iure, quasi ut ab facere debitis cupiditate.
          </span>
        </motion.p>
      </div>

<div className="container mx-auto py-5 px-6 relative z-10">

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">

    {processSteps.map((item, i) => (

      <div key={item.step} className="relative flex items-center">

        {/* CARD */}
        <div
          className="process-step relative w-full rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md p-8 text-center group hover:border-primary/30 transition-all duration-500"
        >
          <span className="font-heading text-6xl font-bold bg-gradient-to-b from-primary/20 to-transparent bg-clip-text text-transparent">
            {item.step}
          </span>

          <h3 className="mt-3 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* ARROW */}
        {i < processSteps.length - 1 && (
          <div className="hidden lg:flex absolute -right-8 items-center justify-center">

            {/* Glow */}
            <div className="absolute w-12 h-12 bg-primary/20 blur-xl rounded-full" />

            <ArrowRight
              size={32}
              className="relative text-primary/80"
            />

          </div>
        )}

      </div>

    ))}

  </div>

</div>
      </section>
  )
}

export default OurProcess
