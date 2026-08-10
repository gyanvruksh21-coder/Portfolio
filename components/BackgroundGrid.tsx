"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {/* Top Left Indigo Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-indigo-600/25 rounded-full blur-[130px]"
      />

      {/* Center Right Royal Violet Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-24 w-[34rem] h-[34rem] bg-violet-600/20 rounded-full blur-[150px]"
      />

      {/* Bottom Left Cyber Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-24 left-1/3 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-[140px]"
      />

      {/* Center Background Subtle Emerald Accent */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-2/3 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px]"
      />
    </div>
  );
}
