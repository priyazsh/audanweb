"use client";

import { useEffect } from "react";
import Script from "next/script";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { promoTweets } from "@/lib/data";

const trendingItem = {
  url: "https://x.com/i/trending/2094634824212631980?s=20",
  headline:
    "Monid Hits 4M Transactions and Raises $2.1M Pre-Seed After Bold Team Bet",
  meta: "15 hours ago · Other · 788 posts",
  tag: "Trending on X",
  summary:
    "Campaign resulted in Monid trending on X timeline with over 788 posts and massive organic reach.",
};

export default function Work() {
  useEffect(() => {
    const loadTweets = () => {
      const twttr = (window as Window & { twttr?: { widgets: { load: () => void } } }).twttr;
      if (twttr?.widgets) {
        twttr.widgets.load();
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
    <section id="work" className="py-24 md:py-32 bg-gray-50/50 border-y border-gray-200 scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-ink">Our Work</span>
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Campaigns & Live Reach
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real paid promos and trending placement on X.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {promoTweets.map((tweet) => (
            <div
              key={tweet.id}
              className="bg-white rounded-[2.5rem] p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -8,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-4 px-2">
                <span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1">
                  {tweet.type}
                </span>
                <a
                  href={tweet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-ink"
                >
                  Live Preview
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="w-full flex justify-center min-h-[280px] overflow-hidden rounded-2xl">
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
            </div>
          ))}

          <a
            href={trendingItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between min-h-[300px]"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-2.5 py-1">
                  {trendingItem.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 group-hover:text-ink">
                  View on X
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="bg-[#0F0F11] text-white rounded-2xl p-5 mb-5 border border-gray-800">
                <p className="text-[10px] text-gray-400 font-medium mb-2 uppercase tracking-wider">
                  {trendingItem.meta}
                </p>
                <h3 className="text-sm font-semibold text-white leading-snug tracking-tight">
                  {trendingItem.headline}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                {trendingItem.summary}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Trending topic on X</span>
              <span className="font-semibold text-ink">788+ posts</span>
            </div>
          </a>
        </div>
      </div>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          const twttr = (window as Window & { twttr?: { widgets: { load: () => void } } }).twttr;
          if (twttr?.widgets) {
            twttr.widgets.load();
          }
        }}
      />
    </section>
  );
}
