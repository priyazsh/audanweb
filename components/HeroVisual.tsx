"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, AtSign, MessageSquare, Mail } from "lucide-react";

const SIZE = 440;
const CENTER = SIZE / 2; // 220
const CARD_W = 176;
const CARD_H = 92;
const NODE_SIZE = 64; // px (w-16 h-16)
const NODE_HALF = NODE_SIZE / 2; // 32

// Card edge coordinates
const cardTop = CENTER - CARD_H / 2;       // 174
const cardBottom = CENTER + CARD_H / 2;    // 266
const cardLeft = CENTER - CARD_W / 2;      // 132
const cardRight = CENTER + CARD_W / 2;     // 308

// Node center coordinates (absolute in px)
const nodeCenters = {
  top:    { cx: CENTER, cy: NODE_HALF },           // 220, 32
  right:  { cx: SIZE - NODE_HALF, cy: CENTER },    // 408, 220
  bottom: { cx: CENTER, cy: SIZE - NODE_HALF },    // 220, 408
  left:   { cx: NODE_HALF, cy: CENTER },           // 32, 220
};

// SVG line paths from card edge → node near-edge
const lines = [
  { id: "top",    d: `M ${CENTER} ${cardTop}    L ${CENTER} ${nodeCenters.top.cy + NODE_HALF + 4}` },
  { id: "right",  d: `M ${cardRight} ${CENTER}  L ${nodeCenters.right.cx - NODE_HALF - 4} ${CENTER}` },
  { id: "bottom", d: `M ${CENTER} ${cardBottom} L ${CENTER} ${nodeCenters.bottom.cy - NODE_HALF - 4}` },
  { id: "left",   d: `M ${cardLeft} ${CENTER}   L ${nodeCenters.left.cx + NODE_HALF + 4} ${CENTER}` },
];

const nodes = [
  {
    id: "creator",
    label: "CREATOR",
    Icon: Users,
    posClass: "top-0 left-1/2 -translate-x-1/2",
    float: { y: [0, -7, 0] },
    delay: 0,
  },
  {
    id: "x",
    label: "X",
    Icon: AtSign,
    posClass: "right-0 top-1/2 -translate-y-1/2",
    float: { x: [0, 7, 0] },
    delay: 0.6,
  },
  {
    id: "community",
    label: "COMMUNITY",
    Icon: MessageSquare,
    posClass: "bottom-0 left-1/2 -translate-x-1/2",
    float: { y: [0, 7, 0] },
    delay: 1.2,
  },
  {
    id: "newsletter",
    label: "NEWSLETTER",
    Icon: Mail,
    posClass: "left-0 top-1/2 -translate-y-1/2",
    float: { x: [0, -7, 0] },
    delay: 1.8,
  },
];

export default function HeroVisual() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="relative select-none"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* SVG: connection lines */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background faint grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#D6D3CC" opacity="0.5" />
          </pattern>
        </defs>
        <rect width={SIZE} height={SIZE} fill="url(#grid)" />

        {/* Connection lines */}
        {lines.map((line, i) => (
          <motion.path
            key={line.id}
            d={line.d}
            stroke="#C5C1BA"
            strokeWidth="1"
            fill="none"
            initial={prefersReduced ? {} : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.9 + i * 0.12,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Accent endpoint pulses */}
        {!prefersReduced &&
          [
            { cx: CENTER, cy: nodeCenters.top.cy + NODE_HALF + 6 },
            { cx: nodeCenters.right.cx - NODE_HALF - 6, cy: CENTER },
            { cx: CENTER, cy: nodeCenters.bottom.cy - NODE_HALF - 6 },
            { cx: nodeCenters.left.cx + NODE_HALF + 6, cy: CENTER },
          ].map((pt, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={pt.cx}
              cy={pt.cy}
              r="3"
              fill="#C3FF00"
              animate={{ opacity: [0.3, 1, 0.3], r: [2, 4, 2] }}
              transition={{
                duration: 2.2,
                delay: 1.6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </svg>

      {/* Central product card */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10"
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={prefersReduced ? {} : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div
          animate={prefersReduced ? {} : { scale: [1, 1.016, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-fg rounded-2xl shadow-2xl"
          style={{ width: CARD_W, padding: "20px 22px" }}
        >
          <div className="flex items-center gap-1.5 mb-3">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span
              className="text-accent font-bold uppercase tracking-widest"
              style={{ fontSize: "8px" }}
            >
              Live Campaign
            </span>
          </div>

          <p className="text-white font-semibold text-sm leading-tight mb-3">
            Your Product
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-1 mb-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`h-[3px] flex-1 rounded-full ${
                  i < 3 ? "bg-accent" : "bg-white/10"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
            ))}
          </div>

          <p className="text-white/30 font-medium" style={{ fontSize: "8px" }}>
            60% to target
          </p>
        </motion.div>
      </motion.div>

      {/* Distribution nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className={`absolute z-10 flex flex-col items-center gap-1 ${node.posClass}`}
          initial={prefersReduced ? {} : { opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + i * 0.1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.div
            animate={prefersReduced ? {} : node.float}
            transition={{
              duration: 3.2 + i * 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: node.delay,
            }}
            className="flex flex-col items-center gap-1"
          >
            <div
              className="bg-surface border border-border rounded-2xl flex items-center justify-center shadow-sm"
              style={{ width: NODE_SIZE, height: NODE_SIZE }}
            >
              <node.Icon size={18} color="#0F0F0E" strokeWidth={1.5} />
            </div>
            <span
              className="text-muted font-semibold tracking-widest"
              style={{ fontSize: "7px" }}
            >
              {node.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
