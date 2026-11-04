import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "../../../lib/mdx";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Blogs & Insights | Hustlers Tech",
  description: "Insights on full-stack development, technical SEO, and scalable digital growth.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen bg-[#020408] text-white pt-32 pb-24 px-6 relative selection:bg-[#2596be]/30">
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 md:px-5 md:py-2">
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide uppercase">
            Blogs
          </span>
        </div>
          <h2
          className="relative text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4 text-white"
        >
          The Hustlers{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Journal
          </span>
        </h2>
          {/* <p className="text-zinc-400 text-sm sm:text-base font-light">
            Actionable strategies on modern web engineering, technical SEO, and digital brand execution.
          </p> */}
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-[#070b12]/90 hover:border-[#2596be]/50 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              <div className="relative w-full h-50 bg-[#0b1018] overflow-hidden">
                <Image
                  src={post.coverImage || ""}
                  alt={post.title}
                  fill
                  className="object-fill group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2596be]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2596be]" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h2>

                  <p className="text-zinc-400 text-xs sm:text-sm font-light line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#2596be] group-hover:text-cyan-300 font-semibold pt-2">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}