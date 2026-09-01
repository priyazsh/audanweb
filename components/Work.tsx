"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Zap, Target } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

function CaseStudyVisual({ brand, index }: { brand: string; index: number }) {
  if (index === 0) {
    // SECUREINTENT visual - Developer dashboard launch simulation
    return (
      <div className="w-full h-full bg-fg text-bg rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group-hover:border-accent/40 transition-colors border border-transparent">
        {/* Background glow */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top mock terminal header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">
            launch_metrics.log
          </span>
        </div>

        {/* Mock content */}
        <div className="space-y-4 font-mono text-xs z-10">
          <div className="flex items-center justify-between text-white/60">
            <span>[HN_FRONT_PAGE]</span>
            <span className="text-accent font-bold">POSITION #3</span>
          </div>
          <div className="flex items-center justify-between text-white/60">
            <span>[DEV_TWITTER_REACH]</span>
            <span className="text-white">1.4M IMPRESSIONS</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-accent h-full"
            />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/40 pt-2">
            <TrendingUp size={14} className="text-accent" />
            <span>Viral spike detected across 14 technical subreddits</span>
          </div>
        </div>

        {/* Brand overlay tag */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between z-10">
          <span className="text-xs font-bold text-white tracking-widest uppercase">{brand}</span>
          <span className="text-[10px] text-accent font-bold tracking-widest uppercase">72 Hours Drop</span>
        </div>
      </div>
    );
  }

  // MOTIONKIT visual - Creator network drop graph
  return (
    <div className="w-full h-full bg-surface rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border border-border group-hover:border-fg/30 transition-colors">
      {/* Top header */}
      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
        <span className="text-[10px] font-mono text-muted tracking-wider uppercase">
          creator_drop_network.map
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-bold text-fg tracking-widest uppercase">12 Nodes Sync</span>
        </div>
      </div>

      {/* Nodes grid representation */}
      <div className="grid grid-cols-3 gap-3 my-4 z-10">
        {[1, 2, 3, 4, 5, 6].map((node) => (
          <motion.div
            key={node}
            whileHover={{ scale: 1.05 }}
            className="p-3 bg-bg rounded-xl border border-border flex flex-col items-center justify-center text-center gap-1"
          >
            <Zap size={14} className={node % 2 === 0 ? "text-accent" : "text-fg"} />
            <span className="text-[9px] font-bold text-muted">CREATOR {node}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-border flex items-center justify-between z-10">
        <span className="text-xs font-bold text-fg tracking-widest uppercase">{brand}</span>
        <span className="text-[10px] text-muted font-bold tracking-widest uppercase">Design & Dev Audience</span>
      </div>
    </div>
  );
}

export default function Work() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="work" className="bg-bg py-32 md:py-48 border-t border-border">
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
            Selected Campaigns
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-black tracking-[-0.03em] leading-[0.9] text-fg"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}
          >
            Work that got
            <br />
            people talking.
          </motion.h2>
        </motion.div>

        {/* Case Studies List */}
        <div className="space-y-32 md:space-y-44">
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.id}
              initial={prefersReduced ? false : { opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group`}
            >
              {/* Text Side */}
              <div
                className={`lg:col-span-6 space-y-8 ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black tracking-widest text-fg border border-fg px-2.5 py-1 rounded">
                    {project.id}
                  </span>
                  <span className="text-xs font-bold text-muted tracking-widest uppercase">
                    {project.type}
                  </span>
                </div>

                <h3
                  className="font-black tracking-[-0.02em] text-fg group-hover:text-fg/80 transition-colors"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {project.brand}
                </h3>

                <p className="text-muted text-base md:text-lg font-light leading-relaxed max-w-xl">
                  {project.story}
                </p>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                  {project.results.map((res) => (
                    <div key={res.label}>
                      <p className="font-black text-xl md:text-2xl text-fg tracking-tight">
                        {res.value}
                      </p>
                      <p className="text-muted text-[10px] font-semibold tracking-wider uppercase mt-1">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View Campaign CTA */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-fg group-hover:text-accent transition-colors duration-300"
                  >
                    View campaign breakdown
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Visual Side */}
              <div
                className={`lg:col-span-6 h-[340px] md:h-[420px] ${
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <CaseStudyVisual brand={project.brand} index={i} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
