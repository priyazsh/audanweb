"use client";

import gsap from "gsap";
import { useModal } from "@/lib/useModal";

export default function FinalCTA() {
  const { open } = useModal();

  return (
    <section id="contact" className="py-32 px-6 text-center scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="hero-framer-text mb-8">
          Your product deserves attention.
        </h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Drop us a message and we&apos;ll get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={open}
            id="final-cta-btn"
            className="bg-brand text-white px-8 py-4 rounded-full text-base hover:bg-brand-dark transition-all shadow-xl inline-block"
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
            Start a campaign
          </button>
          <a
            href="https://x.com/audanweb"
            target="_blank"
            rel="noopener noreferrer"
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
            @audanweb on X
          </a>
        </div>
      </div>
    </section>
  );
}
