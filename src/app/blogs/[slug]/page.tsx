// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { getBlogBySlug, getAllBlogs } from "../../../../lib/mdx";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// export async function generateStaticParams() {
//   const blogs = getAllBlogs();
//   return blogs.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: PageProps) {
//   const { slug } = await params;
//   const post = getBlogBySlug(slug);
//   if (!post) return {};

//   return {
//     title: `${post.meta.title} | Hustlers Tech`,
//     description: post.meta.excerpt,
//   };
// }

// export default async function SingleBlogPage({ params }: PageProps) {
//   const { slug } = await params;
//   const post = getBlogBySlug(slug);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <article className="min-h-screen bg-[#020408] text-white pt-32 pb-24 px-6 relative selection:bg-[#2596be]/30">
//       <div className="max-w-3xl mx-auto relative z-10">
        
//         {/* Back Link */}
//         <Link
//           href="/blogs"
//           className="inline-flex items-center gap-2 text-xs font-mono text-[#2596be] hover:text-cyan-300 mb-8 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" /> Back to all articles
//         </Link>

//         {/* Post Meta Header */}
//         <header className="mb-10 pb-8 border-b border-white/10">
//           <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
//             {post.meta.title}
//           </h1>

//           <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
//             <span className="flex items-center gap-2">
//               <Calendar className="w-4 h-4 text-[#2596be]" /> {post.meta.date}
//             </span>
//             <span className="flex items-center gap-2">
//               <Clock className="w-4 h-4 text-[#2596be]" /> {post.meta.readTime}
//             </span>
//             <span className="flex items-center gap-2">
//               <User className="w-4 h-4 text-[#2596be]" /> {post.meta.author}
//             </span>
//           </div>
//         </header>

//         {/* MDX Body with Custom Dark Styling */}
//         <div className="prose prose-invert max-w-none 
//           prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
//           prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
//           prose-h3:text-xl prose-h3:mt-6 prose-h3:text-cyan-300
//           prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:font-light prose-p:text-base
//           prose-ul:text-zinc-300 prose-li:my-1
//           prose-blockquote:border-l-[#2596be] prose-blockquote:bg-[#070b12] prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:text-zinc-200 prose-blockquote:italic
//           prose-strong:text-white prose-strong:font-semibold"
//         >
//           <MDXRemote source={post.content} />
//         </div>

//         {/* Bottom CTA Box */}
//         <div className="mt-16 rounded-2xl border border-[#2596be]/30 bg-[#070b12] p-8 text-center">
//           <h3 className="text-xl font-bold mb-2">Want to build something similar for your brand?</h3>
//           <p className="text-zinc-400 text-sm mb-6 font-light">
//             We engineer high-performance web platforms and digital strategies that convert.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2596be] hover:bg-[#1e7e9e] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,150,190,0.3)]"
//           >
//             Let's Talk
//           </Link>
//         </div>

//       </div>
//     </article>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, getAllBlogs } from "../../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock, User, ArrowUpRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.meta.title} | Hustlers Tech`,
    description: post.meta.excerpt,
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl sm:text-3xl font-extrabold text-white mt-14 mb-6 pt-6 border-t border-white/10 tracking-tight flex items-center gap-2"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg sm:text-xl font-bold text-cyan-300 mt-8 mb-3 tracking-tight"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-zinc-300 text-base sm:text-[17px] leading-[1.8] font-light mb-6"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-3 my-6 pl-2 list-none" {...props} />
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="text-zinc-300 text-sm sm:text-base leading-relaxed flex items-start gap-3"
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#2596be] mt-2.5 shrink-0" />
      <span>{children}</span>
    </li>
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 space-y-3 my-6 text-zinc-300 font-light" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 rounded-2xl border-l-4 border-[#2596be] bg-[#070c14] px-6 py-5 text-zinc-200 italic shadow-lg shadow-black/40"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-[#2596be] hover:text-cyan-300 underline underline-offset-4 decoration-[#2596be]/40 hover:decoration-cyan-300 font-medium transition-colors inline-flex items-center gap-0.5"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2596be] hover:text-cyan-300 underline underline-offset-4 decoration-[#2596be]/40 hover:decoration-cyan-300 font-medium transition-colors inline-flex items-center gap-0.5"
        {...props}
      >
        {children}
        <ArrowUpRight className="w-3.5 h-3.5 inline-block opacity-75" />
      </a>
    );
  },
  hr: () => <hr className="my-10 border-white/10" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-semibold" {...props} />
  ),
};

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#020408] text-white pt-32 pb-24 px-6 relative selection:bg-[#2596be]/30">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,150,190,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2596be] hover:text-cyan-300 mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to all articles
        </Link>

        <header className="mb-12 pb-8 border-b border-white/10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] mb-6 text-white">
            {post.meta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#2596be]" /> {post.meta.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#2596be]" /> {post.meta.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#2596be]" /> {post.meta.author}
            </span>
          </div>
        </header>

        {post.meta.coverImage && (
          <div className="relative w-full h-64 sm:h-120 rounded-2xl overflow-hidden mb-12 border border-white/10 bg-[#070b12]">
            <Image
              src={post.meta.coverImage}
              alt={post.meta.title}
              fill
              priority
              className="object-fit object-center"
            />
          </div>
        )}

        <div className="text-zinc-300">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-20 rounded-3xl border border-[#2596be]/30 bg-[#05080e] p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#2596be]/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">
            Ready to Hustle Towards Real Growth?
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Hustlers Tech combines custom technology, SEO, and focused digital strategy to build experiences that rank and convert.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#2596be] px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-[#1e7e9e] hover:shadow-[0_0_25px_rgba(37,150,190,0.4)] active:scale-95 text-sm"
          >
            Let's Talk
          </Link>
        </div>

      </div>
    </article>
  );
}