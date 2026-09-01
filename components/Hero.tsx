"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/lib/useModal";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const { open } = useModal();

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center pt-20 pb-10 overflow-hidden bg-white">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(26,97,254,0.10) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
        {/* Badge */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent border border-accent/20 bg-accent/5 rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot flex-shrink-0" />
            Now taking campaigns
          </span>
        </motion.div>

        {/* Headline + right column */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-black tracking-[-0.04em] leading-[0.88] text-fg"
            style={{ fontSize: "clamp(3.2rem, 8vw, 8rem)" }}
          >
            Make every
            <br />
            <span className="text-accent">dollar</span>
            <br />
            count.
          </motion.h1>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:max-w-[280px] flex flex-col gap-6 lg:pb-2"
          >
            <p className="text-muted text-sm leading-relaxed">
              Get your product in front of people who actually care. Authentic
              creator promotions, zero noise. Made for internet products.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={open}
                id="hero-cta-primary"
                className="group inline-flex items-center gap-2 bg-accent text-white text-sm font-bold rounded-full px-6 py-3 hover:bg-fg transition-colors duration-200 shadow-lg shadow-accent/20"
              >
                Start a campaign
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <a href="#work" id="hero-cta-secondary" className="text-muted hover:text-fg text-sm transition-colors duration-200">
                See work ↓
              </a>
            </div>

            <p className="text-[10px] text-muted/50 uppercase tracking-widest font-medium">
              700K+ impressions delivered
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-16 border-t border-fg/8"
        />
      </div>
    </section>
  );
}
