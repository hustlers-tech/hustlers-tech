import { Palette, Layers, PenTool, Image, Type, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Complete brand systems — logos, color palettes, typography, and guidelines that make your brand unforgettable.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Intuitive, pixel-perfect interface designs for web and mobile that delight users and drive conversions.",
  },
  {
    icon: PenTool,
    title: "Illustration",
    description:
      "Custom illustrations, icons, and infographics that bring your brand story to life with unique visual flair.",
  },
  {
    icon: Image,
    title: "Print Design",
    description:
      "Brochures, packaging, business cards, and large-format prints crafted for maximum real-world impact.",
  },
  {
    icon: Type,
    title: "Typography",
    description:
      "Custom lettering and typographic systems that give your brand a distinctive, ownable voice.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Animated logos, social media content, and explainer visuals that capture attention instantly.",
  },
];

const GraphicServices = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="relative text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-5">
          <span className="text-sm font-medium text-primary tracking-wide">
            Our Design Services
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
            Creative{" "}
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
            Every visual touchpoint crafted with precision — from pixels to
            print, we make brands look extraordinary.
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
  );
};

export default GraphicServices;
