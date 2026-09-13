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
      "Your website is the first real point of contact people have with your brand. We build modern, easy to use websites that attract visitors, support conversions and give you a solid base for business growth. We care about things like intuitive layout, performance and usability.",
    image: "/services/web-dev-hero.jpg",
    ctaLink: "/web-development",
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    description:
      "Being online isn’t enough if your audience can’t find you. Our SEO strategy is based on keyword research, on-page optimisation, technical SEO and quality content. We work to increase search visibility, attract relevant traffic and generate long-term growth.",
    image: "/services/seo/seo-hero.jpg",
    ctaLink: "/search-engine-optimization",
  },
  {
    number: "03",
    title: "Performance Marketing (Paid Ads)",
    description:
      "Paid advertising must be more than clicks. We set up and manage campaigns on channels including Google and social media. We are focused on measuring performance and on the opportunities that are going to drive relevant traffic, leads and sales.",
    image: "/services/ppc/ppc-hero.jpg",
    ctaLink: "/paid-ads",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Social media gives brands the chance to remain in touch with their audiences. We help businesses with strategic content, creative communications and paid campaigns to build a stronger social presence. The point is not simply to keep moving. It is to build meaningful connections and expand our reach.",
    image: "/services/social/social-hero.jpg",
    ctaLink: "/social-media",
  },
  {
    number: "05",
    title: "Content Marketing",
    description:
      "Good content can educate, build authority, attract visitors and help conversion. We create strategic content that is built around the audience and the business goal. We merge creativity and data to create more meaningful content.",
    image: "/services/content/content-marketing-hero.jpg",
    ctaLink: "/content-marketing",
  },
  {
    number: "06",
    title: "Image and graphics design",
    description:
      "Great visuals can change brand perception. We create professional social media graphics, logos and marketing materials to help businesses communicate and leave a lasting impression.",
    image: "/services/graphic/graphic-design-hero.jpg",
    ctaLink: "/graphic-design",
  },
];
