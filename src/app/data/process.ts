export interface ProcessStepType {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepType[] = [
  {
    number: "01",
    title: "Discovery and Strategy",
    description:
      "We start by learning about your business, your audience and your goals. This provides a foundation on which we can build a strategy that works for your business, rather than forcing your business into a standard template.",
  },
  {
    number: "02",
    title: "Creative Planning",
    description:
      "Strategy needs creativity to get off the ground. We blend content branding with design and marketing, to create a clear and connected roadmap for your digital presence.",
  },
  {
    number: "03",
    title: "Execution & Launch",
    description:
      "This is where ideas come to life. We do it all, from design and development to launches of campaigns. We are focused on producing work that is on strategy and fit for purpose.",
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description:
      "Launch isn’t the finish line. We look at what is working, what needs work, we test new ideas and refine our approach to allow businesses to build on their progress and create opportunities for future growth.",
  },
];