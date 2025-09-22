import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaShoppingCart,
  FaServer,
  FaVideo,
  FaFileAlt,
  FaSearch,
  FaShareAlt,
  FaBullhorn,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import { IconType } from "react-icons";

type ServiceItem = {
  name: string;
  icon: IconType;
  link: string;
  desc: string;
};

type Category = {
  title: string;
  items: ServiceItem[];
};

const categories: Category[] = [
  {
    title: "Development",
    items: [
      {
        name: "Web Development",
        icon: FaCode,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "App Development",
        icon: FaMobileAlt,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "E-commerce Development",
        icon: FaShoppingCart,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "API Integration & Backend Support",
        icon: FaServer,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
    ],
  },
  {
    title: "Creative & Content",
    items: [
      {
        name: "UI/UX Design",
        icon: FaPaintBrush,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "Graphic Designing",
        icon: FaPaintBrush,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "Video Editing",
        icon: FaVideo,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "Content Writing",
        icon: FaFileAlt,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      {
        name: "SEO (Search Engine Optimization)",
        icon: FaSearch,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "Social Media Marketing",
        icon: FaShareAlt,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "Performance Marketing",
        icon: FaBullhorn,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
      {
        name: "Analytics & Dashboard Setup",
        icon: FaChartLine,
        link: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt reprehenderit cumque suscipit odit voluptatem dolorem magni numquam possimus.",
      },
    ],
  },
];

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="py-16 px-0 md:px-8 max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-3 md:gap-6">
        {categories.map((category, index) => (
          <button
            key={category.title}
            onClick={() => setActiveTab(index)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-full font-semibold md:font-bold transition hover:scale-105 leading-[120%] ${
              activeTab === index
                ? "bg-gradient-to-r from-[#99ccff] via-[#99ffcc] to-[#99ccff] text-black shadow-lg cursor-pointer"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Services */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ul className="grid md:grid-cols-2 gap-4">
            {categories[activeTab].items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.name}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.03, y: -4, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
  whileTap={{ scale: 0.97 }}
                >
                  <div
                   className="
      flex flex-col gap-3 p-4
      shadow-xl 
      border border-transparent 
      [border-image:linear-gradient(to_right,#0099ff,#00cc99,#0099ff)_1] 
      hover:bg-gradient-to-r hover:from-[#0099ff] hover:via-[#00cc99] hover:to-[#0099ff] 
      transition group
    "
                  >
                    <span className="flex items-center gap-3 text-2xl font-bold">
                      <Icon className="text-blue-600 group-hover:text-white" />
                      <span className="bg-gradient-to-r from-[#00cc99] to-[#0099ff] bg-clip-text text-transparent group-hover:text-white">
                        {item.name}
                      </span>
                    </span>
                    <p className="text-blue-600 text-[12px] md:text-[15px] text-gray-500 group-hover:text-white">
                      {item.desc}
                    </p>
                    <a href={item.link} className="w-fit">
                      <button className="text-blue-600 flex items-center gap-1 group-hover:bg-white rounded-lg px-2 py-1 w-fit cursor-pointer">
                        Let&apos;s Start
                        <span>
                          <FaArrowRight />
                        </span>
                      </button>
                    </a>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
