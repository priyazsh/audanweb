"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useModal } from "@/lib/useModal";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const { open } = useModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        ref={navRef}
        className="pointer-events-auto flex items-center justify-between gap-8 p-2 pl-2 bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-50 min-w-[320px] md:min-w-[400px] max-w-2xl w-full mx-auto"
      >
        <a href="/" className="flex items-center gap-3 pl-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
            <Image
              src="/favicon/apple-touch-icon.png"
              alt="AudanWeb"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-heading font-semibold text-ink text-sm md:text-base tracking-tight">
            AudanWeb
          </span>
        </a>

        <div className="flex items-center gap-6 pr-2">
          <a
            href="#work"
            className="text-sm font-medium text-gray-600 hover:text-ink transition-colors hidden sm:block"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -2,
                duration: 0.2,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.2,
                ease: "power2.out",
              });
            }}
          >
            Work
          </a>
          <button
            onClick={open}
            id="nav-cta-btn"
            className="bg-brand text-white px-5 py-2.5 rounded-full text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand/10"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -2,
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
        </div>
      </nav>
    </div>
  );
}
