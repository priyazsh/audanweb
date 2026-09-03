"use client";

import gsap from "gsap";
import { X, Check } from "lucide-react";

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
  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50/50 border-y border-gray-200 bg-grid scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-ink">What AudanWeb does</span>
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Everything founders struggle with.
            <br className="hidden md:block" />
            <span className="text-gray-400">Handled for you.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We handle everything founders struggle with, so you can focus on building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <span className="text-sm font-semibold text-gray-500">Without AudanWeb</span>
            </div>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm md:text-base text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-brand shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand text-white mb-8">
              <span className="text-sm font-semibold">With AudanWeb</span>
            </div>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm md:text-base text-ink font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
