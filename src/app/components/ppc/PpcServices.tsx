import { Megaphone, Target, DollarSign, BarChart3, Zap, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Target,
    title: "Audience Targeting",
    description:
      "We identify and reach the right audience using data-backed strategies — a core strength of our PPC marketing agency approach.",
  },
  {
    icon: DollarSign,
    title: "Bid Optimization",
    description:
      "Using advanced automation and insights, we optimize bids to deliver better results with lower costs, a standard across the best PPC services in India.",
  },
  {
    icon: Megaphone,
    title: "Ad Creative",
    description:
      "High-performing creatives and compelling copy built for conversions, ensuring your PPC ads stand out in competitive markets.",
  },
  {
    icon: BarChart3,
    title: "ROAS Tracking",
    description:
      "Complete tracking and reporting systems that help you understand performance, a key feature of our Google Ads management services.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description:
      "We design conversion-driven pages that turn traffic into revenue, making us a results-focused PPC service agency.",
  },
  {
    icon: Eye,
    title: "Retargeting",
    description:
      "Smart remarketing campaigns that bring back lost users and increase conversions, a must-have for any serious PPC agency.",
  },
];

const PpcServices = () => {
  return (
     <section className="py-24 lg:py-32 relative">
        <div className="relative text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            Our PPC Services
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
            Full-Funnel Paid {" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Advertising
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
            From awareness to conversions, our PPC agency services are designed to capture demand and convert it efficiently across every stage of the funnel.
          </span>
        </motion.p>
      </div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/50 rounded-full blur-[120px]" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl  backdrop-blur-sm p-8 transition-all duration-500 bg-primary/20 hover:border-primary hover:bg-card/80 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PpcServices
