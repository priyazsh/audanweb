"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";
import { fadeUp, stagger } from "@/lib/motion";

export default function Stats() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="stats" className="bg-surface py-32 md:py-48 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={stagger}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 md:mb-32"
        >
          <motion.p
            variants={fadeUp}
            className="text-muted text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
          >
            Track Record
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-black tracking-[-0.03em] leading-[0.9] text-fg"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}
          >
            Attention, by
            <br />
            the numbers.
          </motion.h2>
        </motion.div>

        {/* Stats Grid - Oversized Typography without Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={prefersReduced ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-4 border-l-2 border-fg/10 pl-6 md:pl-8"
            >
              <div className="text-fg leading-none font-black" style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted font-bold text-xs md:text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
