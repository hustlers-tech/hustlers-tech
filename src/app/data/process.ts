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
      "To develop an effective plan for growth, we start by understanding your business, your audience and what goals you wish to pursue.",
  },
  {
    number: "02",
    title: "Creative Planning",
    description:
      "Next, we take an integrated approach to creative planning: branding, content, and marketing--ensuring all parts fit seamlessly together in the right manner.",
  },
  {
    number: "03",
    title: "Execution & Launch",
    description:
      "Our experts make everything come alive, from design and development through campaign launches. They make sure everything runs seamlessly.",
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description:
      "Our focus on optimization & scaling involves improving what is working, testing new ideas, and helping your business expand faster over time.",
  },
];