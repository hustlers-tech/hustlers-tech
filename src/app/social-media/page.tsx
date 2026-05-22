import { Metadata } from "next";
import SocialMediaClient from "../Wrapper/SocialMediaClient";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Delhi - HustlersTech",
  description: "Grow your brand with HustlersTech, a top social media marketing agency. We create engaging content, run ads, and boost reach, traffic, and conversions fast.",
  alternates: {
    canonical: "https://www.hustlerstech.com/social-media",
  },
};

const SocialPage = () => {
  return (
    <SocialMediaClient/>
  )
}

export default SocialPage
