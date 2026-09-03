"use client";

import gsap from "gsap";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useModal } from "@/lib/useModal";

const faqs = [
  {
    question: "How do you pick creators?",
    answer:
      "We identify creators who already speak to your exact audience — not just big follower counts. Placement is based on niche fit, content quality, and the people who actually care about products like yours.",
  },
  {
    question: "How fast can a campaign launch?",
    answer:
      "Timing, messaging, and platform fit are mapped before a single post goes live. Once strategy is locked, we handle creator outreach, drafts, approvals, and publishing so you are not chasing deliverables.",
  },
  {
    question: "What do I get after a campaign?",
    answer:
      "A transparent breakdown of impressions, engagement, what worked, and what to do next. No vanity metrics without context — you see where the reach actually landed.",
  },
  {
    question: "Do you only work on X / Twitter?",
    answer:
      "X is where we currently ship most placements for internet products, SaaS, and tech. If your audience lives there, that is where we put the product.",
  },
  {
    question: "What if I am not sure a campaign is right yet?",
    answer:
      "Drop us a message and we will get back within 24 hours. Tell us what you are building, who the audience is, and we will tell you honestly whether a campaign is a fit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { open } = useModal();

  return (
    <section id="faq" className="py-24 md:py-32 scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Got Questions? We&apos;ve
            <br className="hidden md:block" /> Got Answers
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            Simple explanations for your most important questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  x: 5,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  x: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <span className="text-lg md:text-xl font-medium text-ink pr-8">
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0 ${
                    openIndex === index
                      ? "bg-brand text-white"
                      : "bg-gray-100 text-ink group-hover:bg-gray-200"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-ink font-medium mb-6 text-lg">
            Still not sure?
          </p>
          <button
            type="button"
            onClick={open}
            className="inline-block bg-brand text-white px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all shadow-lg"
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
            Start a campaign
          </button>
        </div>
      </div>
    </section>
  );
}
