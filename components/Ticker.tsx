"use client";

const items = [
  "700K+ total impressions",
  "5+ campaigns shipped",
  "100K avg impressions",
  "X / Twitter placements",
  "Tech & SaaS products",
  "Niche creator network",
  "Authentic promotions only",
  "Zero filler reach",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-accent py-3 overflow-hidden select-none">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0">
            <span className="text-white text-[12px] font-semibold tracking-wide whitespace-nowrap px-6">
              {item}
            </span>
            <span className="text-white/30 text-base leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
