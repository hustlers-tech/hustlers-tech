import {Search, TrendingUp, FileText, Link2, BarChart3, Target } from "lucide-react";
import {motion} from "framer-motion"

const features = [
  { icon: Search, title: "Keyword Research", description: "Deep-dive keyword analysis to uncover high-intent, low-competition terms that drive qualified organic traffic." },
  { icon: FileText, title: "On-Page SEO", description: "Optimized meta tags, headings, schema markup, and content structure for maximum search engine visibility." },
  { icon: Link2, title: "Link Building", description: "Strategic outreach and white-hat backlink acquisition from authoritative, relevant domains." },
  { icon: TrendingUp, title: "Technical SEO", description: "Site speed optimization, crawlability fixes, Core Web Vitals, and structured data implementation." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Transparent monthly reports with actionable insights, ranking progress, and ROI tracking." },
  { icon: Target, title: "Local SEO", description: "Google Business Profile optimization, local citations, and geo-targeted strategies for regional dominance." },
];


const Features = () => {
  return (
      <section className="py-24 lg:py-32 relative z-10">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full blur-[10px]" style={{ background: "hsl(195 67% 44% / 0.06)" }} />
        <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full blur-[10px]" style={{ background: "hsl(195 67% 44% / 0.04)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            Our SEO Services
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
            A Full-Spectrum SEO {""}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Arsenal
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div key={feature.title} className="seo-feature-card group relative rounded-2xl bg-card/30 backdrop-blur-md p-8 transition-all duration-500 hover:border-primary/40 hover:bg-card/60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/40 group-hover:from-primary/20 group-hover:to-transparent transition-all duration-700 rounded-2xl" />
                <div className="absolute top-4 right-4 text-7xl font-heading font-bold text-primary/[0.08] group-hover:text-primary/[0.1] transition-all duration-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/40">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features
