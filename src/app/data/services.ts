export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  ctaLink: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "High-converting, visually stunning websites built to elevate credibility, enhance user experience, and drive measurable growth.",
    image: "/images/website_bg.webp",
    ctaLink: "/web-development"
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    description:
      "Strategic optimization that boosts your search visibility, drives qualified traffic, and builds long-term organic authority.",
    image: "/images/seo_bg.webp",
    ctaLink: "/search-engine-optimization"
  },
  {
    number: "03",
    title: "Performance Marketing (Paid Ads)",
    description:
      "Data-driven advertising campaigns across Google and social platforms designed to maximize ROI and scale revenue.",
    image: "/images/ppc_bg.webp",
    ctaLink: ""
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Content-driven strategies that grow communities, increase engagement, and turn followers into loyal brand advocates.",
    image: "/images/sm_bg.webp",
    ctaLink: "/social-media"
  },
  {
    number: "05",
    title: "Brand Strategy & Identity",
    description:
      "We define your brand’s positioning, voice, and visual identity to create a strong, memorable presence that stands out in the market.",
    image: "/images/brandidentity_bg.webp",
    ctaLink: ""
  },
//   {
//     number: "06",
//     title: "Graphic & Visual Design",
//     description:
//       "Impactful graphics, brand creatives, ad designs, and marketing visuals crafted to capture attention and communicate your message powerfully.",
//     image: "/images/graphicService.webp",
//   },
];