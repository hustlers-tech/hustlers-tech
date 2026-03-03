export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "High-converting, visually stunning websites built to elevate credibility, enhance user experience, and drive measurable growth.",
    image: "/images/webService.png",
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    description:
      "Strategic optimization that boosts your search visibility, drives qualified traffic, and builds long-term organic authority.",
    image: "/images/seoService.png",
  },
  {
    number: "03",
    title: "Performance Marketing (Paid Ads)",
    description:
      "Data-driven advertising campaigns across Google and social platforms designed to maximize ROI and scale revenue.",
    image: "/images/ppcService.png",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Content-driven strategies that grow communities, increase engagement, and turn followers into loyal brand advocates.",
    image: "/images/socialmedia.jpg",
  },
  {
    number: "05",
    title: "Brand Strategy & Identity",
    description:
      "We define your brand’s positioning, voice, and visual identity to create a strong, memorable presence that stands out in the market.",
    image: "/images/brandingService.png",
  },
  {
    number: "06",
    title: "Graphic & Visual Design",
    description:
      "Impactful graphics, brand creatives, ad designs, and marketing visuals crafted to capture attention and communicate your message powerfully.",
    image: "/images/graphicdesign.jpg",
  },
];