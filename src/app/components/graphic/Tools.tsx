import Image from "next/image"

const platform = [
  { name: "Illustrator", logo: "/services/graphic/illustrator.png" },
  { name: "Indesign", logo: "/services/graphic/indesign.svg" },
  { name: "Canva Pro", logo: "/services/graphic/Canva_Logo.svg" },
  { name: "Photoshop", logo: "/services/graphic/photoshop.svg" },
  { name: "Figma", logo: "/services/graphic/figma.png" }, 
]

export default function Tools() {

  const stack = [...platform, ...platform, ...platform, ...platform]
  return (

<section className="relative bg-card/30 backdrop-blur-sm overflow-hidden">

  {/* edge fade */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
  <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/>

  <div className="container mx-auto px-6 py-8 flex items-center gap-8">

    <span className="text-md font-medium text-muted-foreground uppercase tracking-widest whitespace-nowrap">
      Tools
    </span>

    <div className="h-6 w-px bg-border"/>

    <div className="relative flex-1 overflow-hidden">

      <div className="flex gap-16 items-center animate-tech-scroll w-max">

        {stack.map((tech, i) => (

          <div
            key={i}
            className="flex items-center"
          >

            <Image
              src={tech.logo}
              alt={tech.name}
              width={80}
              height={40}
              className="object-contain transition"
            />

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

  )
}