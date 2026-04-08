
import { Metadata } from "next";
import AboutSection from "./components/about/AboutSection";
import LeadBreaker from "./components/cta/LeadBreaker";
import FaqSection from "./components/faq/FaqSection";
import Hero from "./components/Hero";
import ProcessSection from "./components/process/ProcessSection";
import ServicesSection from "./components/services/ServicesSection";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delhi - HustlersTech",
  description: "Boost your brand with HustlersTech, a leading digital marketing agency in Delhi. Expert SEO, social media, and PPC services to grow your business online fast.",
};

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most premium websites take between 2–6 weeks depending on complexity, integrations, and features required.",
  },
  {
    q: "Do you create custom designs or use templates?",
    a: "Everything we design is fully custom. Your brand gets a unique digital experience tailored to your goals.",
  },
  {
    q: "Will my website be SEO optimized?",
    a: "Yes. Every project follows modern SEO standards including performance optimization, semantic markup, and technical SEO structure.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer maintenance, performance optimization, and growth support after launch.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in transforming outdated websites into modern high-converting digital experiences.",
  },
];

export default function Home() {
  return(
    <>
    <h1 className="visually-hidden">Digital Marketing Agency</h1>
    <Hero/>
    <AboutSection/>
    <ServicesSection/>
    <ProcessSection/>
    <FaqSection faqs={faqs}/>
    <LeadBreaker/>
    </>

  );
}
