"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useModal } from "@/lib/useModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { open } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-fg/[0.06] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 select-none group">
          <div className={`w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
            <Image
              src="/favicon/apple-touch-icon.png"
              alt="AudanWeb"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-black text-[15px] tracking-tight text-fg select-none">
            AudanWeb<span className="text-accent">.</span>
          </span>
        </Link>

        <button
          onClick={open}
          id="nav-cta-btn"
          className="group inline-flex items-center gap-2 bg-fg text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-accent transition-colors duration-250 shadow-sm"
        >
          Start a campaign
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </motion.header>
  );
}
