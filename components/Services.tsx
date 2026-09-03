"use client";

import gsap from "gsap";
import { Users, Megaphone, BarChart3, CheckCircle } from "lucide-react";
import { useModal } from "@/lib/useModal";

export default function Services() {
  const { open } = useModal();

  return (
    <section id="services" className="py-24 md:py-32 scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-ink">Our Services</span>
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Anything you need.
            <br className="hidden md:block" />
            <span className="text-gray-400">Done for you.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Creator placement, campaign strategy, and post-campaign analysis —
            without the agency bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-3xl p-2 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <div className="h-64 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-52 rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="flex -space-x-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-teal-200 border-2 border-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-28 bg-gray-100 rounded" />
                    <div className="h-2 w-20 bg-gray-100 rounded" />
                    <div className="inline-flex items-center gap-1 text-[10px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                      Niche fit
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Creator Placement
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We identify creators who already speak to your exact audience,
                not just big follower counts. Your product lands where it
                actually matters.
              </p>
            </div>
          </div>

          <div
            className="bg-white rounded-3xl p-2 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <div className="h-64 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-52 rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    Campaign brief
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Timing", value: "Launch week" },
                      { label: "Message", value: "Authentic" },
                      { label: "Platform", value: "X / Twitter" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                          <CheckCircle className="w-3 h-3" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-[9px] uppercase tracking-wider text-gray-400">
                            {row.label}
                          </div>
                          <div className="text-xs font-semibold text-ink leading-tight">
                            {row.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-[10px] font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Strategy locked in
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Campaign Strategy
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Timing, messaging, and platform fit are all mapped before a
                single post goes live. No spray-and-pray.
              </p>
            </div>
          </div>

          <div
            className="bg-white rounded-3xl p-2 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <div className="h-64 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 mb-6 flex items-center justify-center">
              <div className="w-48 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 transform scale-95 group-hover:scale-100 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                      Impressions
                    </div>
                    <div className="text-xl font-bold text-ink">100K+</div>
                  </div>
                  <div className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    Live
                  </div>
                </div>
                <div className="flex items-end gap-1 h-12">
                  <div className="flex-1 bg-gray-100 rounded-t h-1/3"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-2/3"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-1/2"></div>
                  <div className="flex-1 bg-brand rounded-t h-full"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-3/4"></div>
                </div>
              </div>
              <div className="absolute w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Distribution & Analysis
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                After every campaign you get a transparent breakdown of
                impressions, engagement, what worked, and what to do next.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <button
            onClick={open}
            className="bg-brand text-white px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all shadow-lg inline-flex items-center gap-2"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -4,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Book Strategy Call
          </button>
          <a
            href="#work"
            className="bg-white text-ink border border-gray-200 px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all"
          >
            See work
          </a>
        </div>
      </div>
    </section>
  );
}
