"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useModal } from "@/lib/useModal";

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { open } = useModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-40 md:pt-48 px-4 md:px-6 max-w-[1440px] mx-auto overflow-hidden">
      <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
        <div ref={badgeRef} className="inline-flex items-center justify-center mb-10">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-ink">
              Now taking campaigns
            </span>
          </div>
        </div>

        <h1 ref={headlineRef} className="hero-framer-text mb-8 max-w-4xl mx-auto">
          Make every dollar count.
        </h1>

        <p
          ref={subheadlineRef}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Get your product in front of people who actually care. Authentic
          creator promotions, zero noise. Made for internet products.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button
            onClick={open}
            id="hero-cta-primary"
            className="bg-brand text-white px-8 py-4 rounded-full text-base hover:bg-brand-dark transition-all shadow-xl shadow-gray-200/50 min-w-[200px] inline-block text-center"
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
            onMouseDown={(e) => {
              gsap.to(e.currentTarget, {
                scale: 0.98,
                duration: 0.1,
              });
            }}
            onMouseUp={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                duration: 0.1,
              });
            }}
          >
            Start a campaign
          </button>
          <a
            href="#work"
            id="hero-cta-secondary"
            className="text-gray-600 font-medium hover:text-ink transition-colors"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                x: 5,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                x: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            See work
          </a>
        </div>
      </div>
    </section>
  );
}
