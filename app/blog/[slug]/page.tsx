import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { mdxComponents } from "../../components/mdx/mdxComponents";
import { getPostBySlug, getPostSlugs } from "../../lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }
  const { meta } = post;
  return {
    title: `${meta.title} — Bear Liu`,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      url: `https://bearliu.com/blog/${meta.slug}`,
      type: "article",
      images: meta.cover ? [{ url: meta.cover }] : undefined,
    },
  };
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content: source } = post;

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      // Force MDX format so JSX expression attributes (e.g. width={1600})
      // are parsed; without this the content is treated as plain markdown
      // and expression attributes are silently dropped.
      mdxOptions: { format: "mdx", remarkPlugins: [remarkGfm] },
    },
  });

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <header className="w-full">
        <Nav />
      </header>

      <main id="main-content" className="w-full">
        <article className="w-full max-w-[720px] mx-auto px-5 md:px-8 py-12 lg:py-16">
          {/* Post header */}
          <div className="mb-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              All writing
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {meta.product ? (
                <span className="rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
                  {meta.product}
                </span>
              ) : null}
              {meta.teardownNumber != null ? (
                <span className="text-[12px] font-medium uppercase tracking-[0.7px] text-gray-500">
                  Teardown #{meta.teardownNumber}
                </span>
              ) : null}
              <span className="text-[12px] text-gray-400">·</span>
              <span className="text-[12px] text-gray-500">{formatDate(meta.date)}</span>
            </div>

            <h1 className="mt-4 text-[32px] md:text-[40px] font-semibold leading-[1.1] tracking-[-1.4px] text-gray-900">
              {meta.title}
            </h1>
            {meta.excerpt ? (
              <p className="mt-4 text-[17px] md:text-[18px] leading-[1.6] tracking-[-0.4px] text-gray-500">
                {meta.excerpt}
              </p>
            ) : null}
          </div>

          {/* Body */}
          <div>{content}</div>
        </article>

        <div className="w-full max-w-[720px] mx-auto px-5 md:px-8">
          <hr className="border-t border-gray-100" />
          <a
            href="/blog"
            className="my-10 inline-flex items-center gap-1.5 text-[14px] font-semibold text-gray-900 hover:text-accent-yellow transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all writing
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
