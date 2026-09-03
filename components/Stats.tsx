"use client";

import gsap from "gsap";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section id="stats" className="py-24 md:py-32 scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-ink">Results</span>
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Reach that actually
            <br className="hidden md:block" />
            <span className="text-gray-400"> shows up on the timeline.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-200 text-center"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -8,
                  scale: 1.02,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <div className="font-heading text-4xl md:text-5xl font-semibold text-ink mb-3 tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
