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
      "We create modern websites that look stunning while also producing results. Every detail from user-friendly layouts to quick loading speeds has been meticulously considered to engage audiences, drive conversions, and support business expansion.",
    image: "/services/web-dev-hero.jpg",
    ctaLink: "/web-development"
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO process encompasses keyword research, on-page improvements, technical optimization and quality content production to increase search engine visibility for our client websites and drive sustained traffic, better rankings and long-term business expansion.",
    image: "/services/seo/seo-hero.jpg",
    ctaLink: "/search-engine-optimization"
  },
  {
    number: "03",
    title: "Performance Marketing (Paid Ads)",
    description:
      "We create smart ads that produce real results - from Google Ads and social media campaigns, we focus on driving leads, sales, and traffic for you and growing your business with every campaign tracked.",
    image: "/services/ppc/ppc-hero.jpg",
    ctaLink: "/paid-ads"
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "From creating posts to running ads, we help you stay active online by expanding your reach and building stronger relationships with your audience.",
    image: "/services/social/social-hero.jpg",
    ctaLink: "/social-media"
  },
  {
    number: "06",
    title: "Graphic & Visual Design",
    description:
      "Everything from social media graphics and logos, to marketing materials and website development is designed to look professional, attract attention, and leave a strong impactful impression with your target audience.",
    image: "/services/graphic/graphic-design-hero.jpg",
    ctaLink: "/graphic-design"
  },
];