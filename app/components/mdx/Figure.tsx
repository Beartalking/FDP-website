import Image from "next/image";

interface FigureProps {
  src: string;
  // Passed as string attributes from the ported MDX (width="1600"); coerced
  // to numbers here. next/image accepts numeric strings, but coercing keeps
  // it explicit.
  width: string | number;
  height: string | number;
  alt?: string;
  caption?: string;
  // String attribute from MDX ("true") — see the next-mdx-remote note in
  // mdxComponents. Marks the above-the-fold lead image for eager LCP loading.
  priority?: boolean | string;
}

// In-article image. Dimensions come from the porter (sharp metadata), so
// next/image optimises with no layout shift. Styled to match the site's
// soft-shadow image treatment from the design system.
export default function Figure({ src, width, height, alt = "", caption, priority }: FigureProps) {
  const isPriority = priority === true || priority === "true";
  return (
    <figure className="my-8">
      <Image
        src={src}
        width={Number(width)}
        height={Number(height)}
        alt={alt}
        priority={isPriority}
        sizes="(max-width: 768px) 100vw, 720px"
        style={{ width: "100%", height: "auto" }}
        className="rounded-xl border border-gray-100 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]"
      />
      {caption ? (
        <figcaption className="mt-2 text-[13px] leading-5 text-gray-500 text-center italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
