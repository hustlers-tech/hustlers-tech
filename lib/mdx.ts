import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_PATH = path.join(process.cwd(), "content/blogs");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  author?: string;
  readTime?: string;
  canonicalUrl?: string;
}

export function getAllBlogs(): BlogPostMeta[] {
  if (!fs.existsSync(BLOGS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_PATH);

  const posts = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(BLOGS_PATH, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "/mr-hux-about.png",
        author: data.author || "Hustlers Tech",
        readTime: data.readTime || "3 min read",
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string) {
  const mdxPath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const mdPath = path.join(BLOGS_PATH, `${slug}.md`);

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      author: data.author,
      readTime: data.readTime,
    } as BlogPostMeta,
    content,
  };
}