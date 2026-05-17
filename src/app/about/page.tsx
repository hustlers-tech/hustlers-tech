import { Metadata } from "next";
import AboutClient from "../Wrapper/AboutClient"

export const metadata: Metadata = {
  title: "About us | Hustlers Tech",
  description: "Learn about Hustlers Tech, a digital partner that helps businesses grow with smart ideas, simple solutions, and a strong online presence.",
  robots: {
    index: false,
    follow: false,
  },
};

const AboutPage = () => {
  return (
    <AboutClient/>
  )
}

export default AboutPage
