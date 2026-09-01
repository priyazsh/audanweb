"use client";

import { useEffect } from "react";
import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { promoTweets } from "@/lib/data";

const trendingItem = {
  url: "https://x.com/i/trending/2094634824212631980?s=20",
  headline: "Monid Hits 4M Transactions and Raises $2.1M Pre-Seed After Bold Team Bet",
  meta: "15 hours ago · Other · 788 posts",
  tag: "Trending on X",
  summary: "Campaign resulted in Monid trending on X timeline with over 788 posts and massive organic reach.",
};

export default function Work() {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const loadTweets = () => {
      if (typeof window !== "undefined" && (window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load();
      }
    };

    loadTweets();
    const timer = setInterval(loadTweets, 400);
    const timeout = setTimeout(() => clearInterval(timer), 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="work" className="bg-surface/50 py-16 md:py-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2">
              Proof of Work
            </p>
            <h2
              className="font-black tracking-[-0.035em] leading-[0.95] text-fg"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Campaigns &amp; Live Reach
            </h2>
          </motion.div>

          <motion.p
            className="text-muted text-xs leading-relaxed max-w-[240px] font-light md:text-right"
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Real paid promos &amp; trending placement on X.
          </motion.p>
        </div>

        {/* Minimal 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">

          {/* Tweet Cards - Pure Tweet Embed only */}
          {promoTweets.map((tweet, i) => (
            <motion.div
              key={tweet.id}
              className="w-full flex justify-center items-center min-h-[300px]"
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="w-full flex justify-center">
                <blockquote
                  className="twitter-tweet"
                  data-theme="light"
                  data-dnt="true"
                  data-align="center"
                  data-conversation="none"
                >
                  <a href={tweet.url}>View post by @{tweet.handle} on X</a>
                </blockquote>
              </div>
            </motion.div>
          ))}

          {/* Trending Card - Kept as requested */}
          <motion.a
            href={trendingItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl border border-fg/[0.07] p-4 flex flex-col justify-between hover:border-accent/30 transition-all duration-250 shadow-sm hover:shadow-md text-left self-stretch min-h-[300px]"
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-fg/70 bg-fg/5 px-2.5 py-1 rounded-full border border-fg/10">
                  {trendingItem.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent group-hover:underline">
                  View news on X <ArrowUpRight size={12} />
                </span>
              </div>

              {/* Minimal Trending News Box */}
              <div className="bg-fg text-white rounded-lg p-3.5 mb-3 border border-fg/10 group-hover:border-accent/40 transition-colors">
                <p className="text-[10px] text-white/50 font-medium mb-1.5">
                  {trendingItem.meta}
                </p>
                <h3 className="text-xs font-semibold text-white leading-snug tracking-tight">
                  {trendingItem.headline}
                </h3>
              </div>

              <p className="text-fg/80 text-xs font-light leading-relaxed">
                {trendingItem.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-fg/[0.05] flex items-center justify-between text-[11px] text-muted">
              <span>Trending topic on X</span>
              <span className="text-accent font-medium">788+ posts</span>
            </div>
          </motion.a>

        </div>
      </div>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).twttr?.widgets) {
            (window as any).twttr.widgets.load();
          }
        }}
      />
    </section>
  );
}
