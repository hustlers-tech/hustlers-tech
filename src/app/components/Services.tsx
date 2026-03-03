import { Search, Share2, MousePointerClick, PenTool, BarChart3, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description: "Dominate search rankings and drive qualified traffic that converts into revenue.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build thriving communities and turn followers into loyal brand advocates.",
  },
  {
    icon: MousePointerClick,
    title: "PPC & Paid Ads",
    description: "High-impact campaigns that maximize every dollar and deliver measurable ROI.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description: "Compelling stories and visuals that capture attention and spark engagement.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decisions powered by deep analysis and real-time performance tracking.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized campaigns that nurture leads and drive repeat conversions.",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 "
        >
          <span className="text-sm font-medium text-primary tracking-wide uppercase">
            What we do
          </span>
        </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Services That{" "}
            <span className="text-primary">Drive Results</span>
          </h2>
          {/* <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
            We don't just market — we engineer growth systems built to scale your brand relentlessly.
          </p> */}
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
