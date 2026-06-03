interface ReportMetaProps {
  author?: string;
  audience?: string;
  method?: string;
}

// The teardown report's provenance block (Author / For / Method), rendered as
// a clean labelled list instead of the source's run-together blockquote. The
// Thesis line is intentionally omitted — it already appears as the post excerpt.
export default function ReportMeta({ author, audience, method }: ReportMetaProps) {
  const rows: Array<{ label: string; value?: string }> = [
    { label: "Author", value: author },
    { label: "For", value: audience },
    { label: "Method", value: method },
  ].filter((r) => r.value);

  if (rows.length === 0) return null;

  return (
    <div className="my-8 rounded-xl border-l-[3px] border-accent-yellow-light bg-gray-100/60 pl-5 pr-5 py-5">
      <dl className="flex flex-col gap-3.5">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
            <dt className="shrink-0 sm:w-[68px] sm:pt-[3px] text-[11px] font-semibold uppercase tracking-[0.7px] text-gray-500">
              {r.label}
            </dt>
            <dd className="flex-1 text-[15px] leading-[1.55] tracking-[-0.3px] text-gray-700">
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
