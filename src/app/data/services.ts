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
    image: "/services/web-dev-hero.jpg",
    ctaLink: "/web-development"
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    description:
      "Strategic optimization that boosts your search visibility, drives qualified traffic, and builds long-term organic authority.",
    image: "/services/seo/seo-hero.jpg",
    ctaLink: "/search-engine-optimization"
  },
  {
    number: "03",
    title: "Performance Marketing (Paid Ads)",
    description:
      "Data-driven advertising campaigns across Google and social platforms designed to maximize ROI and scale revenue.",
    image: "/services/ppc/ppc-hero.jpg",
    ctaLink: "/paid-ads"
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Content-driven strategies that grow communities, increase engagement, and turn followers into loyal brand advocates.",
    image: "/services/social/social-hero.jpg",
    ctaLink: "/social-media"
  },
  {
    number: "06",
    title: "Graphic & Visual Design",
    description:
      "Impactful graphics, brand creatives, ad designs, and marketing visuals crafted to capture attention and communicate your message powerfully.",
    image: "/services/graphic/graphic-design-hero.jpg",
    ctaLink: "/graphic-design"
  },
];