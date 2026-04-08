"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type CTAProps = {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

const CTA = ({
  title,
  description,
  buttonText = "Get Started",
  buttonLink = "/contact",
}: CTAProps) => {
  const router = useRouter();

  return (
    <div className="py-20 relative">

      {/* glow background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          {title}
        </h2>

        {description && (
          <p className="text-gray-400 mt-6 text-lg">
            {description}
          </p>
        )}

        <button
          onClick={() => router.push(buttonLink)}
          className="mt-10 px-12 py-5 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition cursor-pointer flex gap-2 items-center justify-center mx-auto"
        >
          {buttonText} <span><ArrowRight size={20}/></span>
        </button>

      </div>
    </div>
  );
};

export default CTA;