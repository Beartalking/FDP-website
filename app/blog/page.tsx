import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { getAllPosts } from "../lib/blog";

export const metadata: Metadata = {
  title: "Writing — Bear Liu",
  description:
    "Product teardowns and pro insights on the design decisions behind real products, by Bear Liu, Fractional Product Designer.",
  openGraph: {
    title: "Writing — Bear Liu",
    description:
      "Product teardowns and pro insights on the design decisions behind real products.",
    url: "https://bearliu.com/blog",
    type: "website",
  },
};

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

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <header className="w-full">
        <Nav />
      </header>

      <main id="main-content" className="w-full">
        {/* Page header */}
        <section className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 pt-12 lg:pt-16 pb-8">
          <h1 className="inline-block bg-accent-yellow-light rounded-xl text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
            Writing
          </h1>
          <p className="mt-5 max-w-[640px] text-[16px] md:text-[17px] leading-[1.6] tracking-[-0.4px] text-gray-700">
            Product teardowns and pro insights — close reads of real products,
            and the design decisions behind why they work or don&apos;t.
          </p>
        </section>

        {/* Post list */}
        <section className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 pb-16">
          <ScrollReveal className="w-full" stagger>
            <div className="reveal-stagger flex flex-col gap-6">
              {posts.map((post, i) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="stagger-item group flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#e5e5ea] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#c0c0c4]"
                  style={{ "--stagger-index": i } as React.CSSProperties}
                >
                  {post.cover ? (
                    <div className="relative w-full sm:w-[240px] aspect-[16/10] shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-100">
                      <Image
                        src={post.cover}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-2 py-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {post.product ? (
                        <span className="rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
                          {post.product}
                        </span>
                      ) : null}
                      {post.teardownNumber != null ? (
                        <span className="text-[12px] font-medium uppercase tracking-[0.7px] text-gray-500">
                          Teardown #{post.teardownNumber}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="text-[20px] md:text-[22px] font-semibold leading-[1.25] tracking-[-1px] text-gray-900">
                      {post.title}
                    </h2>
                    <p className="text-[14px] md:text-[15px] leading-[1.55] tracking-[-0.3px] text-gray-700 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-1 text-[12px] text-gray-400">
                      {formatDate(post.date)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {posts.length === 0 ? (
            <p className="text-[16px] text-gray-500">No posts yet.</p>
          ) : null}
        </section>
      </main>

      <Footer />
    </div>
  );
}
