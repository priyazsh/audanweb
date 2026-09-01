"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { steps } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

export default function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-surface py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 md:mb-28"
        >
          <motion.p
            variants={fadeUp}
            className="text-muted text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
          >
            Process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-black tracking-[-0.03em] leading-[0.9] text-fg"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}
          >
            How we get
            <br />
            you noticed.
          </motion.h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} total={steps.length} prefersReduced={!!prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  total,
  prefersReduced,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
  prefersReduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? false : { opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative p-8 md:p-10 border-border ${
        index < total - 1
          ? "border-b md:border-b-0 md:border-r"
          : ""
      } border`}
    >
      {/* Step number */}
      <div className="flex items-start justify-between mb-8">
        <span
          className="font-black tracking-[-0.04em] text-border leading-none"
          style={{ fontSize: "4rem" }}
        >
          {step.number}
        </span>

        {/* Connector line (desktop only) */}
        {index < total - 1 && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.12, ease: "easeOut" }}
            className="hidden lg:block absolute right-0 top-1/2 w-px h-8 bg-border -translate-y-1/2"
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      {/* Active indicator */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "2rem" } : {}}
        transition={{ duration: 0.4, delay: 0.2 + index * 0.12 }}
        className="h-px bg-accent mb-6 origin-left"
      />

      {/* Title */}
      <h3 className="text-fg font-bold text-lg leading-snug mb-3 tracking-[-0.01em]">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm font-light leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}
