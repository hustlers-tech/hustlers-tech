import { Metadata } from "next";
import GraphicClient from "../Wrapper/GraphicClient";

export const metadata: Metadata = {
  title: "Graphic Design | Graphic Design Agency - HustlersTech",
  description: "Enhance your brand with HustlersTech, a creative graphic design agency. Get stunning visuals, logos, and marketing designs that captivate and convert.",
};

const GraphicPage = () => {
  return (
    <GraphicClient/>
  )
}

export default GraphicPage
