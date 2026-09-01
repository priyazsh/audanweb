"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Creator Placement",
    body: "We identify creators who already speak to your exact audience, not just big follower counts. Your product lands where it actually matters.",
  },
  {
    n: "02",
    title: "Campaign Strategy",
    body: "Timing, messaging, and platform fit are all mapped before a single post goes live. No spray-and-pray.",
  },
  {
    n: "03",
    title: "Distribution & Analysis",
    body: "After every campaign you get a transparent breakdown of impressions, engagement, what worked, and what to do next.",
  },
];

export default function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-10"
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          What we do
        </motion.p>

        <div className="flex flex-col divide-y divide-fg/[0.06]">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              className="group grid grid-cols-1 md:grid-cols-[56px_1fr_1.6fr] gap-4 md:gap-8 py-7 md:py-9 items-start"
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <span className="font-black text-[10px] tracking-[0.1em] text-accent/40 group-hover:text-accent transition-colors duration-300 pt-0.5">
                {s.n}
              </span>
              <h3 className="font-black tracking-[-0.02em] text-fg text-lg leading-tight">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
