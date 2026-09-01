"use client";

import { motion, useReducedMotion } from "framer-motion";

const problems = [
  "Hours wasted finding creators who don't fit your brand",
  "No visibility on content quality before it goes live",
  "Views that never convert because placement is wrong",
  "Zero clarity on what actually worked after a campaign",
  "Chasing creators for deliverables on your own time",
];

const solutions = [
  "We handpick creators already speaking to your exact audience",
  "Every draft reviewed and approved before publishing",
  "Strategic placements built for reach that actually converts",
  "Transparent post-campaign analysis delivered at close",
  "We handle payments, timelines, and creator relationships entirely",
];

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="bg-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-black/35 font-semibold mb-4">
            What AudanWeb does
          </p>
          <h2
            className="font-light leading-snug max-w-3xl text-fg"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.5rem)" }}
          >
            We handle everything founders struggle with,
            so you can focus on building.
          </h2>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-black/8">
          {/* Without AudanWeb */}
          <motion.div
            className="bg-[#0B132B] text-white p-8 sm:p-12 md:p-14 flex flex-col"
            initial={prefersReduced ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/35 font-semibold mb-10">
              Without AudanWeb
            </p>
            <ul className="flex flex-col gap-0 flex-1">
              {problems.map((item, i) => (
                <motion.li
                  key={i}
                  className="py-5 text-sm sm:text-base text-white/55 font-light leading-relaxed border-b border-white/[0.07] last:border-0"
                  initial={prefersReduced ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With AudanWeb */}
          <motion.div
            className="bg-neutral-50 p-8 sm:p-12 md:p-14 flex flex-col"
            initial={prefersReduced ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-black/35 font-semibold mb-10">
              With AudanWeb
            </p>
            <ul className="flex flex-col gap-0 flex-1">
              {solutions.map((item, i) => (
                <motion.li
                  key={i}
                  className="py-5 text-sm sm:text-base text-black font-medium leading-relaxed border-b border-black/[0.07] last:border-0"
                  initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
