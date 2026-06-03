import type { MDXComponents } from "mdx/types";
import Figure from "./Figure";
import ReportMeta from "./ReportMeta";

// Maps markdown/MDX elements to design-system-styled components for the
// long-form reading layout. Calm, readable typography — the richer in-article
// visual kit (charts, callouts) lands later from Claude Design.
export const mdxComponents: MDXComponents = {
  Figure,
  ReportMeta,
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-[24px] md:text-[28px] font-semibold leading-[1.25] tracking-[-0.6px] text-gray-900 scroll-mt-24"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-1px] text-gray-900"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 mb-2 text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-5 text-[16px] md:text-[17px] leading-[1.7] tracking-[-0.3px] text-gray-700"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-gray-900" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  a: (props) => (
    <a
      className="text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-accent-yellow transition-colors"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-[3px] border-accent-yellow-light bg-gray-100/60 rounded-r-lg pl-5 pr-4 py-3 text-[15px] leading-[1.6] tracking-[-0.3px] text-gray-700 [&_p]:my-1.5 [&_strong]:text-gray-900"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="my-5 pl-5 list-disc marker:text-gray-400 flex flex-col gap-2 text-[16px] md:text-[17px] leading-[1.7] tracking-[-0.3px] text-gray-700" {...props} />
  ),
  ol: (props) => (
    <ol className="my-5 pl-5 list-decimal marker:text-gray-400 flex flex-col gap-2 text-[16px] md:text-[17px] leading-[1.7] tracking-[-0.3px] text-gray-700" {...props} />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  hr: () => <hr className="my-10 border-t border-gray-100" />,
};
