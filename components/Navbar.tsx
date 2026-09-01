"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[60px] flex items-center justify-between">
          {/* Wordmark with Brand Icon */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-fg font-black text-xs tracking-[0.2em] uppercase select-none hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/favicon/apple-touch-icon.png"
              alt="AudanWeb Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span>AUDANWEB</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted hover:text-fg text-sm font-medium transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:hello@audanweb.xyz"
              id="nav-cta"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-fg border border-fg/30 rounded-full px-5 py-2.5 hover:bg-fg hover:text-bg hover:border-fg transition-all duration-300"
            >
              Let&apos;s work
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-fg p-1 rounded-md"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-border px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-fg text-xl font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@audanweb.xyz"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-fg font-bold text-sm mt-2"
            >
              Let&apos;s work <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
