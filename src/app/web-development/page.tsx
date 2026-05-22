import WebDevClient from "../Wrapper/WebDevClient"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design and Development Services - HustlersTech",
  description: "Get professional website design and development services with HustlersTech. We create fast, responsive, SEO-friendly websites that drive traffic.",
  alternates: {
    canonical: "https://www.hustlerstech.com/web-development",
  },
};

const WebDevPage = () => {
  return (
    <WebDevClient/>
  )
}

export default WebDevPage
