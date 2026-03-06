import Image from "next/image"

const techStack = [
  { name: "Next.js", logo: "/services/nextdotjs.svg" },
  { name: "React", logo: "/services/react.svg" },
  { name: "Node.js", logo: "/services/nodedotjs.svg" },
  { name: "Typescript", logo: "/services/typescript.svg" },
  { name: "Tailwind", logo: "/services/tailwindcss.svg" },
  { name: "Bootstrap", logo: "/services/bootstrap.svg" },
  { name: "Framer", logo: "/services/framer.svg" },
  { name: "HTML", logo: "/services/html5.svg" },
  { name: "CSS", logo: "/services/css.svg" },  
  { name: "javascript", logo: "/services/javascript.svg" },  
]

export default function TechStack() {

  const stack = [...techStack, ...techStack]
  return (

<section className="relative bg-card/30 backdrop-blur-sm overflow-hidden">

  {/* edge fade */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
  <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/>

  <div className="container mx-auto px-6 py-8 flex items-center gap-8">

    <span className="text-md font-medium text-muted-foreground uppercase tracking-widest whitespace-nowrap">
      Built with
    </span>

    <div className="h-6 w-px bg-border"/>

    <div className="relative flex-1 overflow-hidden">

      <div className="flex gap-16 items-center animate-tech-scroll w-max">

        {stack.map((tech, i) => (

          <div
            key={i}
            className="flex items-center opacity-70 hover:opacity-100 transition  brightness-0 invert"
          >

            <Image
              src={tech.logo}
              alt={tech.name}
              width={80}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition"
            />

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

  )
}