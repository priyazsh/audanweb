"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

export default function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] bg-fg text-bg py-32 md:py-48 flex items-center justify-center overflow-hidden"
    >
      {/* Background Animated Lines/Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          variants={stagger}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
        >
          {/* Label */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-accent border border-accent/30 rounded-full px-4 py-2">
              Get Started
            </span>
          </motion.div>

          {/* Huge Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-black tracking-[-0.035em] leading-[0.9] text-white"
            style={{ fontSize: "clamp(3rem, 7.5vw, 7.5rem)" }}
          >
            Your product
            <br />
            deserves <span className="text-accent">attention.</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-lg md:text-2xl font-light max-w-xl mx-auto"
          >
            Let&apos;s make sure it gets the right kind.
          </motion.p>

          {/* Action CTA */}
          <motion.div variants={fadeUp} className="pt-6">
            <a
              href="mailto:hello@audanweb.xyz"
              id="final-cta-btn"
              className="group inline-flex items-center gap-4 bg-accent text-fg font-black text-lg md:text-xl rounded-full px-10 py-6 hover:bg-white transition-all duration-300 shadow-2xl hover:scale-[1.02]"
            >
              Start a campaign
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
