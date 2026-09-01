"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonial } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

export default function Testimonial() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="bg-bg py-32 md:py-48 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="text-muted text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Client Perspective
          </motion.p>

          {/* Large Quote */}
          <motion.blockquote
            variants={fadeUp}
            className="font-medium tracking-tight text-fg leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.8rem)" }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </motion.blockquote>

          {/* Author info */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-muted font-bold text-xs tracking-widest uppercase">
              {testimonial.author}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
