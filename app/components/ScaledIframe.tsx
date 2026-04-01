"use client";

import { useEffect, useRef } from "react";

interface ScaledIframeProps {
  src: string;
  title: string;
  width?: number;
  height?: number;
  selected?: boolean;
  label: string;
}

export default function ScaledIframe({
  src,
  title,
  width = 390,
  height = 844,
  selected = false,
  label,
}: ScaledIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const containerWidth = container.offsetWidth;
      const scale = containerWidth / width;
      container.style.setProperty("--iframe-scale", String(scale));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={containerRef}
        className={`relative w-full rounded-2xl overflow-hidden bg-white ${
          selected
            ? "border-2 border-accent-yellow"
            : "border border-gray-200"
        }`}
        style={{
          paddingBottom: `${(height / width) * 100}%`,
        }}
      >
        <iframe
          src={src}
          title={title}
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: "scale(var(--iframe-scale, 0.5))",
            border: "none",
          }}
        />
        {selected && (
          <div className="absolute top-3 right-3 rounded-md bg-accent-yellow px-2 py-0.5 text-[10px] font-bold text-[#1c190d] uppercase shadow-sm z-10">
            Selected
          </div>
        )}
      </div>
      <span
        className={`text-[12px] text-center ${
          selected ? "text-gray-900 font-semibold" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
