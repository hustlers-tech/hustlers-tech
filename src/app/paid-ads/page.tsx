import { Metadata } from "next";
import PpcClient from "../Wrapper/PpcClient";

export const metadata: Metadata = {
  title: "Paid Ads | PPC Marketing Agency - HustlersTech",
  description: "Drive instant results with HustlersTech, a leading PPC marketing agency. Expert Google Ads & social campaigns to boost traffic, leads, and ROI fast.",
  alternates: {
    canonical: "https://www.hustlerstech.com/paid-ads",
  },
};

const PpcPage = () => {
  return (
    <PpcClient/>
  )
}

export default PpcPage
