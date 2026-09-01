"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Rocket, Users, Globe } from "lucide-react";
import { services } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

const icons = [Rocket, Users, Globe];

// Subtle SVG pattern for each panel
function ServiceDecor({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-20">
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx="50" cy="50" r={15 + i * 14} stroke="#C3FF00" strokeWidth="0.8" />
        ))}
        <circle cx="50" cy="50" r="4" fill="#C3FF00" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-20">
        {[
          { cx: 20, cy: 40 },
          { cx: 60, cy: 20 },
          { cx: 60, cy: 60 },
          { cx: 100, cy: 40 },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.cx} cy={pt.cy} r="6" stroke="#C3FF00" strokeWidth="0.8" />
            {i < 3 && (
              <line
                x1={pt.cx}
                y1={pt.cy}
                x2={i === 0 ? 60 : i === 1 ? 100 : 100}
                y2={i === 0 ? 40 : i === 1 ? 40 : 40}
                stroke="#C3FF00"
                strokeWidth="0.5"
              />
            )}
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-20">
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="10"
          y1={20 + i * 16}
          x2="90"
          y2={20 + i * 16}
          stroke="#C3FF00"
          strokeWidth={i === 4 ? "1.5" : "0.6"}
          strokeDasharray={i < 4 ? "4 4" : "0"}
        />
      ))}
    </svg>
  );
}

export default function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-bg py-32 md:py-48" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
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
            What We Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-black tracking-[-0.03em] leading-[0.9] text-fg"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}
          >
            Built for products
            <br />
            worth discovering.
          </motion.h2>
        </motion.div>

        {/* Service panels */}
        <div className="space-y-0">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.number}
                initial={prefersReduced ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group"
              >
                <div className="border-t border-border py-12 md:py-16 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-16 items-start cursor-default transition-colors duration-300">
                  {/* Number */}
                  <span
                    className="font-black tracking-[-0.04em] text-border group-hover:text-accent transition-colors duration-300 leading-none select-none"
                    style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}
                  >
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <Icon
                          size={15}
                          className="text-muted group-hover:text-fg transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3
                        className="font-bold tracking-[-0.02em] text-fg group-hover:text-fg transition-colors"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted font-light leading-relaxed max-w-xl text-base md:text-lg">
                      {service.description}
                    </p>
                    <p className="text-border text-xs font-semibold tracking-widest uppercase group-hover:text-muted transition-colors duration-300">
                      {service.detail}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ServiceDecor index={i} />
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* Final border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
