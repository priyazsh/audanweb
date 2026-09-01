"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center pt-[60px] overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #C8C4BC 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center min-h-[calc(100vh-60px)]">
          {/* Left: text content */}
          <motion.div
            variants={stagger}
            initial={prefersReduced ? false : "hidden"}
            animate="visible"
            className="max-w-2xl"
          >
            {/* Label badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-muted border border-border rounded-full px-3.5 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                Internet-Native Growth Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-black tracking-[-0.035em] leading-[0.9] text-fg mb-8"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7.5rem)" }}
            >
              Make every
              <br />
              marketing
              <br />
              <em className="not-italic text-accent">dollar count.</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-muted font-light leading-relaxed mb-12 max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
            >
              Get your product in front of people who actually care about it.
              Authentic promotion, meaningful attention, and distribution that
              doesn&apos;t feel like noise.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:hello@audanweb.xyz"
                id="hero-cta-primary"
                className="group inline-flex items-center gap-2.5 bg-fg text-bg text-sm font-bold rounded-full px-7 py-4 hover:bg-accent hover:text-fg transition-all duration-300"
              >
                Start a campaign
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </a>
              <a
                href="#work"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-2 text-muted hover:text-fg text-sm font-medium transition-colors duration-200"
              >
                See our work
                <ChevronDown size={15} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: hero visual */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted"
        >
          <ChevronDown size={16} />
        </motion.div>
        <span className="text-muted text-[9px] font-semibold tracking-[0.2em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
