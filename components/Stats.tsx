"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="stats" className="bg-white border-y border-fg/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-3 divide-x divide-fg/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center px-4 py-4"
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span
                className="font-black tracking-[-0.04em] leading-none text-fg mb-1.5"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
