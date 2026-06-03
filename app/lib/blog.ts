import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  product: string;
  teardownNumber: number | null;
  excerpt: string;
  cover: string;
  tags: string[];
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPost(slug: string): { meta: PostMeta; content: string } {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    title: data.title ?? slug,
    slug: data.slug ?? slug,
    date: data.date ?? "",
    product: data.product ?? "",
    teardownNumber:
      typeof data.teardownNumber === "number" ? data.teardownNumber : null,
    excerpt: data.excerpt ?? "",
    cover: data.cover ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
  return { meta, content };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => readPost(slug).meta)
    .sort((a, b) => {
      // Newest publish date first; within the same date, latest teardown first.
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return (b.teardownNumber ?? 0) - (a.teardownNumber ?? 0);
    });
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  return readPost(slug);
}
