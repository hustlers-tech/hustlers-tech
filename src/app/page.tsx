"use client";

import AboutSection from "./components/about/AboutSection";
import LeadBreaker from "./components/cta/LeadBreaker";
import Hero from "./components/Hero";
import ProcessSection from "./components/process/ProcessSection";
import ServicesSection from "./components/services/ServicesSection";

export default function Home() {
  return(
    <>
    <Hero/>
    <AboutSection/>
    <ServicesSection/>
    <ProcessSection/>
    <LeadBreaker/>
    </>

  );
}
