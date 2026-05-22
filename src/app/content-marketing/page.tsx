import { Metadata } from "next";
import ContentClient from "../Wrapper/ContentClient";

export const metadata: Metadata = {
  title: "Content Writing Services | Content Strategy - HustlersTech",
  description: "Boost your brand with expert content writing and strategy from HustlersTech. Engaging, SEO-driven content that drives traffic, leads, and growth.",
  alternates: {
    canonical: "https://www.hustlerstech.com/content-marketing",
  },
};

const GraphicPage = () => {
  return (
    <ContentClient/>
  )
}

export default GraphicPage
