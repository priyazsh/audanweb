"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/lib/useModal";

export default function FinalCTA() {
  const prefersReduced = useReducedMotion();
  const { open } = useModal();

  return (
    <section
      id="contact"
      className="relative bg-fg text-white overflow-hidden py-24 md:py-36"
    >
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-black text-white/[0.03] tracking-[-0.06em] leading-none"
          style={{ fontSize: "clamp(16rem, 35vw, 48rem)" }}
        >
          AW
        </span>
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-accent/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12"
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-6">
              Let&apos;s work together
            </p>
            <h2
              className="font-black tracking-[-0.04em] leading-[0.88] text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              Your product
              <br />
              deserves
              <br />
              <span className="text-accent">attention.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:max-w-[280px] lg:pb-2">
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <button
              onClick={open}
              id="final-cta-btn"
              className="group inline-flex items-center gap-2.5 bg-accent text-white font-bold text-sm rounded-full px-6 py-3 hover:bg-white hover:text-fg transition-colors duration-200 shadow-xl shadow-accent/20 w-fit"
            >
              Start a campaign
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <a
              href="https://x.com/audenweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/25 hover:text-white text-xs font-medium transition-colors duration-200 w-fit"
            >
              <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @audenweb on X
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
