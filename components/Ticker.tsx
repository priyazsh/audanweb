"use client";

import gsap from "gsap";

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
  return (
    <section className="border-y border-gray-200 py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-gray-500">
          700K+ impressions delivered for internet-native products
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {[...items, ...items].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-200 cursor-default"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    y: -4,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="font-semibold text-xl tracking-tight text-ink">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
