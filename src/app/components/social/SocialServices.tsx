import { Share2, Users, Heart, Video, MessageCircle, Megaphone} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Share2,
    title: "Content Creation",
    description:
      "Scroll-stopping visuals, reels, and carousels designed to stand out. Our social media marketing services ensure your brand voice is consistent and memorable.",
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "We build genuine relationships through conversations, making us one of the most reliable social media marketing companies for long-term engagement.",
  },
  {
    icon: Heart,
    title: "Influencer Partnerships",
    description:
      "Collaborate with creators who align with your brand, a key strategy used by top social media marketing agencies in India.",
  },
  {
    icon: Video,
    title: "Video & Reels",
    description:
      "Short-form content built for reach and virality, helping your brand grow faster through smart social media marketing strategies.",
  },
  {
    icon: Megaphone,
    title: "Paid Social Ads",
    description:
      "Targeted campaigns that drive real ROI, a must-have for businesses looking for scalable social media marketing near me solutions.",
  },
  {
    icon: MessageCircle,
    title: "Social Listening",
    description:
      "Stay ahead of trends and understand your audience better with insights powered by advanced social media digital marketing tools.",
  },
];


const SocialServices = () => {
  return (
     <section className="py-24 lg:py-32 relative">
        <div className="relative text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            Our Services
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
            Social Media{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Powerhouse
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
            As a performance-driven social media marketing company in India, we offer end-to-end solutions designed to grow your brand across platforms.
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

export default SocialServices
