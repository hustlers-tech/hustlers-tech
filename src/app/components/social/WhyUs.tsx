import { CheckCircle2 } from 'lucide-react'
import {motion} from "framer-motion"

const WhyUs = () => {
  return (
     <section className="py-10 lg:py-25 px-7 bg-card/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="why-us-content">
              <div className="relative overflow-hidden">
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            Why Us
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-6xl font-bold tracking-tight"
        >
          <span>
            Why Hustlers Tech {""}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              for Social?
            </span>
          </span>
        </motion.h2>
      </div>

              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                We go beyond posting, we create ecosystems that perform. That’s why brands trust us as their go-to social media marketing agency.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "50M+ impressions generated across campaigns",
                  "340% average increase in engagement within 3 months",
                  "Recognized among top social media marketing companies in India",
                  "Full-service execution, content, design, video, ads",
                  "Dedicated strategist for every brand",
                  "Weekly insights and transparent reporting ",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground/90 group-hover:text-foreground transition-colors">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="why-us-image relative rounded-2xl overflow-hidden  group">
              <img src={"/services/social/social-team.jpg"} alt="Hustlers Tech development team" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "radial-gradient(circle at 50% 50%, hsl(195 67% 44% / 0.1), transparent 60%)" }} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyUs
