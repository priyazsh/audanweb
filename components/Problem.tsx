"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";

const usualSteps = ["Pay", "Post", "Hope"];
const audanSteps = ["Strategy", "Right Audience", "Distribution", "Attention"];

export default function Problem() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-fg text-white py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Headline */}
        <motion.div
          variants={stagger}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 md:mb-32"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-black tracking-[-0.03em] leading-[0.9] max-w-3xl"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
          >
            Attention is expensive.
            <br />
            <span className="text-white/30">Wasting it is worse.</span>
          </motion.h2>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* The usual way */}
          <motion.div
            variants={staggerSlow}
            initial={prefersReduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase mb-8"
            >
              The usual way
            </motion.p>

            <div className="flex items-center gap-0">
              {usualSteps.map((step, i) => (
                <motion.div key={step} variants={fadeUp} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-white/10 flex items-center justify-center">
                      <span className="text-white/30 text-xs font-semibold text-center leading-tight px-1">
                        {step}
                      </span>
                    </div>
                  </div>
                  {i < usualSteps.length - 1 && (
                    <div className="flex items-center mx-2">
                      <div className="w-4 md:w-8 border-t border-dashed border-white/15" />
                      <span className="text-red-500/60 text-xs mx-1">✕</span>
                      <div className="w-4 md:w-8 border-t border-dashed border-white/15" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-white/25 text-sm font-light leading-relaxed mt-8 max-w-xs">
              Generic placements, wrong audiences, no feedback loop. Money spent with nothing to show for it.
            </motion.p>
          </motion.div>

          {/* The AudanWeb way */}
          <motion.div
            variants={staggerSlow}
            initial={prefersReduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8"
            >
              The AudanWeb way
            </motion.p>

            <div className="space-y-3">
              {audanSteps.map((step, i) => (
                <motion.div key={step} variants={fadeUp} className="flex items-center gap-4">
                  <div className={`flex items-center gap-4 flex-1 rounded-xl border px-4 py-3.5 transition-colors ${
                    i === audanSteps.length - 1
                      ? "border-accent/40 bg-accent/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}>
                    <span
                      className={`text-[10px] font-black tracking-wider min-w-[20px] ${
                        i === audanSteps.length - 1 ? "text-accent" : "text-white/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        i === audanSteps.length - 1 ? "text-accent" : "text-white/70"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {i < audanSteps.length - 1 && (
                    <div className="w-px h-3 bg-white/15 ml-5" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-white/40 text-sm font-light leading-relaxed mt-8 max-w-xs">
              Intentional, strategic, and connected from first touchpoint to measurable outcome.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
