import { Metadata } from "next";
import SeoClient from "../Wrapper/SeoClient";

export const metadata: Metadata = {
  title: "SEO Services | SEO Agency in Delhi - HustlersTech",
  description: "Improve your rankings with HustlersTech, a trusted SEO agency in Delhi. Get expert on-page, off-page, and technical SEO services to grow traffic and leads.",
};

const SEOPage = () => {
  return (
    <SeoClient/>
  )
}

export default SEOPage
