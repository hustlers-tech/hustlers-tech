export interface ProcessStepType {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepType[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We deeply understand your brand, audience, and goals to build a strategic foundation for growth.",
  },
  {
    number: "02",
    title: "Creative Planning",
    description:
      "We craft a data-backed roadmap combining branding, content, and performance marketing.",
  },
  {
    number: "03",
    title: "Execution & Launch",
    description:
      "Our team executes with precision — from design and development to paid campaigns.",
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description:
      "Continuous analysis, A/B testing, and refinement to maximize ROI and scale results.",
  },
];